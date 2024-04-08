// models/post.js
const mongoose = require('mongoose');

// Define the post schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming you have a User model
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the Post model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
