import mongoose from "mongoose";

const borrowRecordschema = mongoose.Schema({
    bookId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Book",
      required:true
    },
    memberId:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Member",
       required:true
    },
    borrowDate:{
        type:Date,
        required:true
    },
    returnDate:{
       type:Date,
       required:true
    },
    status:{
      type:String,
      enum:["borrowed" , "returned"],
      default:"borrowed"
    }
},{
    timestamps:true
})

const BorrowRecord = mongoose.model("BorrowRecord" , borrowRecordschema);

export default BorrowRecord