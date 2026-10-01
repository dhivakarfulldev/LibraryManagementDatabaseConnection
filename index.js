import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import libraryRouter from "./routers/library.router.js"
import ConnectDB from "./database/dbConfig.js"

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/api/library" , libraryRouter);
ConnectDB();
app.listen(process.env.PORT , (req , res) => {
   console.log(`Server is Running on PORT ${process.env.PORT} `);
   
})


