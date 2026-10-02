const dotenv = require("dotenv").config();

const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Database Connection Error:", error.message);
  }
};

module.exports = connectDB;
