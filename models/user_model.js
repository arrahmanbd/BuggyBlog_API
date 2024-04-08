const mongoose = require("mongoose");

// Define the schema for the user model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    }
});

// Create and export the User model based on the schema
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
