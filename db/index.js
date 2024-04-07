const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  occupation: String,
  gender: String,
  inquiryMessage: String,
});

const inquiryModel = mongoose.model("InquiryData", inquirySchema); // Create a Mongoose model

module.exports = inquiryModel; // Export the model
