const express = require("express");
const cors = require("cors");
require("dotenv").config();

const registrationRoutes = require("./routes/registrations");
const partnerRoutes = require("./routes/partners");
const competitionRoutes = require("./routes/competitions");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/registrations", registrationRoutes);
app.use("/api/partners", partnerRoutes);
app.use("/api/competitions", competitionRoutes);
app.use("/api/contact", contactRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "ASC API is running", timestamp: new Date() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`ASC Backend running on http://localhost:${PORT}`);
});
