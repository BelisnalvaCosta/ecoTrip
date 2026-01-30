import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database('./ecotrip.db');

db.run(`
CREATE TABLE IF NOT EXISTS trips (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  transport TEXT,
  distance REAL,
  passengers INTEGER,
  co2 REAL,
  created_at TEXT
)
`);