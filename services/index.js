const inquiryModelSchema=require('../db/index.js')
const {
  express,
  cors,
  bodyParser,
  axios,
  mongoose,
  app,
  port,
} = require("../index.js");

// Use Postman to Test 
app.post("/inquiry", async (req, res) => {
  console.log("31", req.body);
  const { firstName, lastName, occupation, gender, inquiryMessage } = req.body;
  try {
    const newInquiry = new inquiryModelSchema({
        firstName,
        lastName,
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
});
// async function getResponse() {
//     try {
//         console.log('hi');
//       const {response} = await axios.post('/inquiry',);
//       console.log("22");
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// getResponse();
