import express, { Application } from "express";
import cors from "cors";

import { env } from "./config/env";
import { connectDB } from "./config/db";
import userRoutes from "./routes/user.routes";

const app: Application = express();

// MongoDB
connectDB();

// Middleware
app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/users", userRoutes);

// Health check
app.get("/health", (_req, res) => {
  res.status(200).send("🚀 Server is running");
});

// Start server
app.listen(env.PORT, () => {
  console.log(`🚀 Server running on port ${env.PORT}`);
});
