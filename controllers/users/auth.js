const express = require("express");
const bcrypt = require("bcrypt");
const validator = require('validator');
const jwt = require("jsonwebtoken");
const UserModel = require("../../models/user_model.js")


//extension 
// Validate email address
const validateEmail = (email) => {
    if (!validator.isEmail(email)) {
        throw new Error('Invalid email address');
    }
};

// Validate password
const validatePassword = (password) => {
    // Password must be at least 6 characters long
    if (password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
    }
};
// Hash password securely
const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error('Failed to hash password');
    }
};

// Sign up a new user
exports.signupUser = async (req, res) => {
    try {
         // Validate email and password
        validateEmail(email);
        validatePassword(password);

        const { name, email, password } = req.body;

        // Check if user with email already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        // Hash password securely
        const encrypt = await hashPassword(password);

        // Create new user
        const newUser = new UserModel({
            name,
            email,
            password: encrypt
        });

        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error signing up:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Log in an existing user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Compare password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Create and send JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
