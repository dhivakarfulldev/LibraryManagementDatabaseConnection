import mongoose from "mongoose";

const memberschema = mongoose.Schema({
    name:{
    type:String,
    required:true,
    trim:true
    },
    email:{
      type:String,
      required:true,
      trim:true,
      unique:true
    },
    phone:{
      type:String,
      required:true,
      trim:true,
      unique:true
    }
    
},
{
    timestamps:true
})

const Member = mongoose.model("Member" , memberschema);

export default Member;