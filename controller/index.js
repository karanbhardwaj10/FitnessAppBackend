import { inquiryModelSchema } from "../db/index.js";

// Use Postman to Test
export const userSignup= async (req, res) => {
  console.log("31", req.body);
  const { firstName, lastName,age, occupation, gender,  inquiryMessage } = req.body;
  try {
    const newInquiry = new inquiryModelSchema({
      firstName,
      lastName,
      age,
      occupation,
      gender,
      inquiryMessage,
    });
    await newInquiry.save();
    res.status(201).json(newInquiry);
  } catch (error) {
    console.error("Error saving inquiry:", error);
    res.status(500).json({ error: "Error saving inquiry" });
  }
};
