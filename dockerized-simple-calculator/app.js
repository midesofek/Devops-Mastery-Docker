const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
// Enable CORS for all routes
app.use(cors());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Serve the calculator HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;
