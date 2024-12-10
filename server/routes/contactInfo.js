const express = require("express");
const router = express.Router();
const ContactInfo = require("../models/Contactinfo");

// POST route for handling contact form submissions
router.post("/contact", async (req, res) => {
  try {
    // Destructure and validate incoming data
    const { name, userEmail, body } = req.body;

    if (!name || !userEmail || !body) {
      return res.status(400).send("All fields are required.");
    }

    // Create a new contact entry
    const newContact = new ContactInfo({
      name,
      userEmail,
      body,
    });

    // Save the contact entry to the database
    await newContact.save();
    console.log(newContact);
    // Send a success response
    res
      .status(201)
      .send(
        "Your contact information has been submitted successfully. We will get back to you soon!"
      );
  } catch (error) {
    console.error("Error saving contact information:", error);

    res
      .status(500)
      .send(
        "An error occurred while saving your contact information. Please try again later."
      );
  }
});

module.exports = router;
