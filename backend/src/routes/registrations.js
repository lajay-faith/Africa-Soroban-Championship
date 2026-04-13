const express = require("express");
const { body, validationResult } = require("express-validator");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

// In-memory store (replace with DB in production)
const registrations = [];

// GET all registrations
router.get("/", (req, res) => {
  res.json({ success: true, count: registrations.length, data: registrations });
});

// POST new registration
router.post(
  "/",
  [
    body("fullName").notEmpty().withMessage("Full name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("country").notEmpty().withMessage("Country is required"),
    body("type")
      .isIn(["student", "school", "teacher"])
      .withMessage("Type must be student, school, or teacher"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const registration = {
      id: uuidv4(),
      ...req.body,
      registeredAt: new Date().toISOString(),
      status: "pending",
    };

    registrations.push(registration);

    res.status(201).json({
      success: true,
      message: "Registration successful! We will contact you shortly.",
      data: registration,
    });
  }
);

// GET single registration
router.get("/:id", (req, res) => {
  const reg = registrations.find((r) => r.id === req.params.id);
  if (!reg) return res.status(404).json({ success: false, error: "Registration not found" });
  res.json({ success: true, data: reg });
});

module.exports = router;
