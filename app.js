//For secrect token
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
//database
const database = require("./database/db");
//user routes
const router = require("./routes/user_route");
//blogroute
const blogRoutes = require('./routes/blog_route');
// Initialize Express
const app = express();
// Middleware
// Parse JSON objects on Express
// app.use(bodyParser.json());   //[body parser is not required]
// app.js (or the entry point of your application)
// Set up CORS middleware
app.use(cors({ 
    origin: 'http://localhost:3000', // Allow requests only from http://localhost
    preflightContinue: true // Continue processing requests even if there are errors during the preflight request
}));
app.use(express.json());
app.use('/api/v1/',router);
app.use("/api/v1/blog/",blogRoutes);

// Connect to the database
database()
    .then(() => {
        console.log('Database connected successfully.');
        // Start the server
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server started @ http://localhost:${port}/api/v1/`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to the database:', err);
        process.exit(1); // Exit the process with a failure code
    });
