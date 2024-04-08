
const mongoose = require("mongoose");

// MongoDB connection URI
const uri = `mongodb+srv://${process.env.DB_ADMIN}@cluster0.f3ry6vi.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
// Connect to MongoDB
const connectToDatabase = () => {
  return mongoose.connect(uri);
};

// Export the function to connect to the database
module.exports = connectToDatabase;
