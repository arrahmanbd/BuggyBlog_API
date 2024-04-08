const config= require("../config/config");
const mongoose = require("mongoose");

// MongoDB connection URI
const uri = `mongodb+srv://${config.DATABASE_ADMIN}@cluster0.f3ry6vi.mongodb.net/${config.DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

// Connect to MongoDB
const connectToDatabase = () => {
  console.log(uri)
  return mongoose.connect(uri);
};

// Export the function to connect to the database
module.exports = connectToDatabase;
