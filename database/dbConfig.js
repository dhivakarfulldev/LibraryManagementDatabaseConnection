import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ConnectDB = async () => {
 const connection = await  mongoose.connect(process.env.DataBaseURL);
 console.log("DB Connected");
 return connection
 
}

export default ConnectDB;