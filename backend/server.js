// backend/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");
const analyze = require("./sentiment");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/feedback", (req, res) => {
  const { name, text } = req.body;
  const result = analyze(text);

  db.run(
    "INSERT INTO feedback (name, text, sentiment, score) VALUES (?, ?, ?, ?)",
    [name, text, result.sentiment, result.score],
    function (err) {
      if (err) return res.status(500).send(err);
      res.send(result);
    }
  );
});

app.get("/feedback", (req, res) => {
  db.all("SELECT * FROM feedback", [], (err, rows) => {
    if (err) return res.status(500).send(err);
    res.send(rows);
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));