const mongoose = require("mongoose");
const connectDB = require("../configs/db");
const systemSchema = mongoose.Schema({
  name: String,
  dob: String,
  address: String,
  email: {
    type: String,
    required: [true, "email is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    // Put the match array right inside the field definition
    match: [
      /^0\d{10}$/,
      "Please enter a valid 11-digit phone number starting with 0",
    ],
  },
  state: String,
  lga: String,
});
const Students = new mongoose.model("studentData", systemSchema);

module.exports = Students;
