import mongoose from "mongoose";

const bookschema = mongoose.Schema(
    {
       title:{
        type:String,
        required:true,
        trim:true
       },
       author:{
        type:String,
        required:true,
        trim:true
       },
       category:{
        type:String,
        required:true,
        trim:true
       },
       totalCopies:{
        type:Number,
        required:true,
        min:1
       },
       availableCopies:{
        type:Number,
        required:true,
        min:0
       }
    },
    {
       timestamps:true
    }
);

const Book = mongoose.model("Book" , bookschema);
export default Book;