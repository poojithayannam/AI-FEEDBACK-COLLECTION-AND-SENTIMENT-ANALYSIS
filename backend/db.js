// backend/db.js
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./feedback.db");

db.run(`
CREATE TABLE IF NOT EXISTS feedback (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  text TEXT,
  sentiment TEXT,
  score INTEGER
)
`);

module.exports = db;