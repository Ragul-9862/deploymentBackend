import express, { Application } from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes";

import { connectDB } from "./config/db";
const PORT  = process.env.PORT

const app: Application = express();

// Mongodb
connectDB();

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

app.get("/health", (req, res) => {
  res.send("🚀 Server is running");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running ${PORT}`);
});
