const express = require("express");
const router = express.Router();

const competitions = [
  {
    id: 1,
    level: "school",
    title: "School Championship",
    description: "Students compete within their school.",
    ageGroups: [
      { name: "Junior Sprouts", ages: "5–7" },
      { name: "Rising Stars", ages: "8–10" },
      { name: "Champions", ages: "11–12" },
      { name: "Elite", ages: "13–14" },
    ],
    status: "open",
  },
  {
    id: 2,
    level: "regional",
    title: "Regional Championship",
    description: "School champions compete at the regional level.",
    status: "upcoming",
  },
  {
    id: 3,
    level: "national",
    title: "National Championship",
    description: "Regional winners represent their areas at the national finals.",
    status: "upcoming",
  },
  {
    id: 4,
    level: "continental",
    title: "Africa Grand Finale",
    description: "National champions from across Africa compete at the Grand Finale.",
    status: "upcoming",
  },
];

// GET all competition levels
router.get("/", (req, res) => {
  res.json({ success: true, data: competitions });
});

// GET single competition level
router.get("/:level", (req, res) => {
  const comp = competitions.find((c) => c.level === req.params.level);
  if (!comp) return res.status(404).json({ success: false, error: "Competition level not found" });
  res.json({ success: true, data: comp });
});

module.exports = router;
