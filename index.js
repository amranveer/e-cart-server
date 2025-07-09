import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors"
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.js"
import productRoutes from "./routes/productRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true // ✅ allow cookies
}));

app.get("/", (req,res) => {
    res.send("Hello sdfsdfsd!")
})

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes )
app.use("/api/cart",cartRoutes )

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is Running on ${PORT}`)
})