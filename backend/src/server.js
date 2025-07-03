import express from "express";
import cookieParser from "cookie-parser";
import { connectDb } from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const { PORT } = process.env;
const app = express();

app.use(express.json()); //reminder: allows you to parse body data as json
app.use(cookieParser()); //reminder: middleware that allows you to parse the cookie b/w files
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`App is listening on localhost: ${PORT}`);
  connectDb();
});
