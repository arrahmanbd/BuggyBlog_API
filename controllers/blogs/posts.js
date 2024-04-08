const Post = require('../../models/post_model');

// Function to create a new post
exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const author = req.user.userId; 
        // Extract the user ID from the decoded token
        const newPost = new Post({
            title,
            content,
            author
        });

        await newPost.save();

        res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ message: 'Failed to create post. Please try again later.' });
    }
};

// Function to get all posts
exports.getAllPosts = async (req, res) => {
// Pagination parameters
const PAGE_SIZE = 10;
const pageNumber = req.query.page || 1;
// Default to page 1 if not specified
// Calculate the number of documents to skip
const skip = (pageNumber - 1) * PAGE_SIZE;
const numberOfResults = await Post.find(req.findFilter).countDocuments().exec()
const totalPages = Math.ceil(numberOfResults / PAGE_SIZE)
    try {
        const posts = await Post.find().populate('author', 'name')
        .skip(skip)
        .limit(PAGE_SIZE); 
        // Populate author field with name from User model
        res.status(200).json({ total : totalPages, posts:posts });
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ message: 'Failed to fetch posts. Please try again later.' });
    }
};

// Function to get a single post by ID
exports.getPostById = async (req, res) => {
    try {
        const postId = req.params.postId;
        const post = await Post.findById(postId).populate('author', 'name');
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({ post });
    } catch (error) {
        console.error('Error fetching post:', error);
        res.status(500).json({ message: 'Failed to fetch post. Please try again later.' });
    }
};

// Function to update a post by ID
exports.updatePostById = async (req, res) => {
    try {
        const postId = req.params.postId;
        const { title, content } = req.body;
        const updatedPost = await Post.findOneAndUpdate({ _id: postId, author: req.user.userId }, { title, content }, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found or unauthorized' });
        }
        res.status(200).json({ message: 'Post updated successfully', post: updatedPost });
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).json({ message: 'Failed to update post. Please try again later.' });
    }
};

// Function to delete a post by ID
exports.deletePostById = async (req, res) => {
    try {
        const postId = req.params.postId;
        const deletedPost = await Post.findOneAndDelete({ _id: postId, author: req.user.userId });
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found or unauthorized' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ message: 'Failed to delete post. Please try again later.' });
    }
};
