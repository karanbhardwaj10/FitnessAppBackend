import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age:Number,
  occupation: String,
  gender: String,
  inquiryMessage: String,
});

export const inquiryModelSchema = mongoose.model("InquiryData", inquirySchema); // Create and export a Mongoose model


