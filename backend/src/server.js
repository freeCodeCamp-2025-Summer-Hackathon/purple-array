import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";


connectDB();

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server started on PORT: 5001");
})