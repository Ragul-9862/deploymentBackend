"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const user_model_1 = require("../models/user.model");
// GET users from MongoDB
const getUsers = async (req, res) => {
    try {
        const users = await user_model_1.User.find();
        console.log(users);
        res.status(200).json({
            success: true,
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch users",
        });
    }
};
exports.getUsers = getUsers;
// CREATE user in MongoDB
const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await user_model_1.User.create({ name, email });
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
exports.createUser = createUser;
