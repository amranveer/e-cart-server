import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin:"https://e-commerce-tau-one-37.vercel.app",
    credentials:true,
    allowedHeaders: ["Content-Type", "Authorization"],
}))

app.get("/", (req,res) => {
    res.send("Hello sdfsdfsd!")
})

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is Running on ${PORT}`)
})