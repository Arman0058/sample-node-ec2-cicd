const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000; // use 4000 internally

app.get("/", (req, res) => {
  res.send("Hello from CI/CD on EC2 🚀 " + new Date().toISOString());
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
