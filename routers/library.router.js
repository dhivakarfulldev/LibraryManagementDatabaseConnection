import express from "express"
import { addbook,  borrowBook,  getAllbooks,  getAllborrowRecords,  getAllmembers,  registerMember, returnBook } from "../controllers/library.controller.js"

const router = express.Router()

router.post("/books" , addbook);
router.post("/members" , registerMember);
router.post("/borrow/:bookId" , borrowBook);
router.put("/return/:borrowId" , returnBook);
router.get("/books" ,getAllbooks );
router.get("/borrows" , getAllborrowRecords);
router.get("/members" , getAllmembers);



export default router;