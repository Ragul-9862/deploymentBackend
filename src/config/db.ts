import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://contactblearners_db_user:sHIS72WewfgYKiLZ@blended.7s09crg.mongodb.net/deployment";
// const MONGO_URI =
//   "mongodb://admin:%40sachinabs@localhost:27018/admin";


export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    // console.log("✅ MongoDB connected");
    console.log(MONGO_URI);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};
