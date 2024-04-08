// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/jwt');
const postController = require('../controllers/blogs/posts');

// Route to create a new post
router.post('/create', authenticateJWT, postController.createPost);

// Route to get all posts
router.get('/posts', postController.getAllPosts);

// Route to get a single post by ID
router.get('/:postId', postController.getPostById);

// Route to update a post by ID
router.put('/:postId', authenticateJWT, postController.updatePostById);

// Route to delete a post by ID
router.delete('/:postId', authenticateJWT, postController.deletePostById);

module.exports = router;
