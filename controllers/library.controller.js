import Book from "../models/book.schema.js";
import Member from "../models/member.schema.js";
import BorrowRecord from "../models/borrowRecord.schema.js";

export const addbook = async (req, res) => {
  try {
    const { title, author, category, totalCopies } = req.body;

    const newBook = await Book.create({
      title,
      author,
      category,
      totalCopies,
      availableCopies: totalCopies,
    });
    res.status(201).json({
      success: true,
      message: "Book  added Successfully",
      book: newBook,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const registerMember = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const newMember = await Member.create({
      name,
      email,
      phone,
    });
    res.status(201).json({
      success: true,
      message: "Member successfully created",
      Member: newMember,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const borrowBook = async (req, res) => {
  try {
    const { bookId } = req.params;

    const { memberId, borrowDate, returnDate } = req.body;

    const book = await Book.findOne({
      _id: bookId,
    });

    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }

    const member = await Member.findOne({
      _id: memberId,
    });

    if (!member) {
      return res
        .status(404)
        .json({ success: false, message: "Member not found" });
    }

    if (book.availableCopies <= 0) {
      return res
        .status(400)
        .json({ success: false, message: "No Copies available for borrowing" });
    }

    book.availableCopies -= 1;
    await book.save();

    const borrowrecord = await BorrowRecord.create({
      bookId,
      memberId,
      borrowDate,
      returnDate,
    });

    res.status(201).json({
      success: true,
      message: "Book has been Borrowed successfully",
      borrowRecord: borrowrecord,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const returnBook = async (req, res) => {
  try {
    const { borrowId } = req.params;

    const record = await BorrowRecord.findOne({
      _id: borrowId,
    });

    if (!record) {
      return res
        .status(404)
        .json({ success: false, message: "BorrowRecord not found" });
    }

    if (record.status === "returned") {
      return res
        .status(400)
        .json({ success: false, message: "Book already returned" });
    }

    const book = await Book.findOne({
      _id: record.bookId,
    });

    if (book) {
      book.availableCopies += 1;
      await book.save();
    }

    record.status = "returned";
    await record.save();

    res.status(200).json({
      success: true,
      message: "Book has been Successfully returned",
      record: record,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllbooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ total: books.length, books: books });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getAllmembers = async (req, res) => {
  try {
    const members = await Member.find();
    console.log(members);
    res.status(200).json({ total: members.length, members: members });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getAllborrowRecords = async (req, res) => {
  try {
    const records = await BorrowRecord.aggregate([
      {
        $lookup: {
          from: "books",
          localField: "bookId",
          foreignField: "_id",
          as: "book",
        },
      },
      {
        $lookup: {
          from: "members",
          localField: "memberId",
          foreignField: "_id",
          as: "Member",
        },
      },
      {
        $unwind: "$book",
      },
      {
        $unwind: "$Member",
      },
      {
        $project: {
          _id: 0,
          borrowId: "$_id",
          bookTitle: "$book.title",
          memberName: "$Member.name",
          borrowDate: {
            $dateToString: {
              format: "%d-%m-%Y",
              date: "$borrowDate",
            },
          },
          returnDate: {
            $dateToString: {
              format: "%d-%m-%Y",
              date: "$returnDate",
            },
          },
          returnStatus: "$status",
        },
      },
    ]);

    res.status(200).json({ total: records.length, borrowRecords: records });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
