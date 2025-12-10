// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000; // change if you want

// Serve everything inside the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Optional: fallback to index.html (useful for SPAs)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
