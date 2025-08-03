const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const PORT = 5000;

app.use(cors());

// Load static data from JSON file
const rawData = fs.readFileSync("data.json");
const db = JSON.parse(rawData);

// Routes
app.get("/api/user", (req, res) => {
  res.json(db.user);
});

app.get("/api/leaderboard", (req, res) => {
  res.json(db.leaderboard);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running with JSON data at http://localhost:${PORT}`);
});
