const express = require('express');
const getAllUsers = require('../controllers/users/get_user');
const { loginUser, signupUser } = require('../controllers/users/auth');

// Create a router instance
const router = express.Router();

// Route for fetching all users
router.get('/', getAllUsers);

// Route for user login
router.post("/login", loginUser);

// Route for user signup
router.post("/signup", signupUser);

// Export the router
module.exports = router;
