import mongoose from "mongoose";

// const MONGO_URI = "mongodb://localhost:27018/deployment";
const MONGO_URI =
  "mongodb://admin:%40sachinabs@localhost:27018/admin";


export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};
