"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const env_1 = require("./config/env");
const db_1 = require("./config/db");
const app = (0, express_1.default)();
// Mongodb
(0, db_1.connectDB)();
// Middleware
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express_1.default.json());
// Routes
app.use("/api/users", user_routes_1.default);
app.get("/health", (req, res) => {
    res.send("🚀 Server is running");
});
// Start server
app.listen(env_1.env.PORT, () => {
    console.log(`Server running`);
});
