const express = require("express");
const { body, validationResult } = require("express-validator");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

const messages = [];

// POST contact message
router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("message").isLength({ min: 10 }).withMessage("Message must be at least 10 characters"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const msg = {
      id: uuidv4(),
      ...req.body,
      sentAt: new Date().toISOString(),
    };

    messages.push(msg);

    res.status(201).json({
      success: true,
      message: "Message received! We will get back to you soon.",
    });
  }
);

module.exports = router;
