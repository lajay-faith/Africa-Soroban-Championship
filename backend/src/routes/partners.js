const express = require("express");
const { body, validationResult } = require("express-validator");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

const partnerInquiries = [];

const tiers = [
  { id: 1, title: "Title Sponsor", investment: "From $50,000", perks: ["Naming rights", "Logo on all materials", "Speaking slot at Grand Finale", "Exclusive media coverage"] },
  { id: 2, title: "Education Partner", investment: "From $20,000", perks: ["Co-branding on training materials", "Access to school network", "Impact reports", "CSR recognition"] },
  { id: 3, title: "Technology Partner", investment: "From $15,000", perks: ["Digital platform integration", "Brand visibility online", "Innovation showcase"] },
  { id: 4, title: "Media Partner", investment: "In-kind / Custom", perks: ["Exclusive broadcast rights", "Content creation access", "Event coverage"] },
];

// GET partnership tiers
router.get("/tiers", (req, res) => {
  res.json({ success: true, data: tiers });
});

// POST partner inquiry
router.post(
  "/inquire",
  [
    body("organizationName").notEmpty().withMessage("Organization name is required"),
    body("contactName").notEmpty().withMessage("Contact name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("tier").notEmpty().withMessage("Partnership tier is required"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const inquiry = {
      id: uuidv4(),
      ...req.body,
      submittedAt: new Date().toISOString(),
      status: "new",
    };

    partnerInquiries.push(inquiry);

    res.status(201).json({
      success: true,
      message: "Thank you! Our partnerships team will reach out within 48 hours.",
      data: inquiry,
    });
  }
);

module.exports = router;
