import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_URL } = process.env;

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB Connection Error ", error);
  }
};
