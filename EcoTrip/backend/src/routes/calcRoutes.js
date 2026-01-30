import express from 'express';
import { db } from '../db/database.js';

const router = express.Router();

const FACTORS = {
  car: 0.21,
  bus: 0.05,
  plane: 0.15
};

router.post('/calculate', (req, res) => {
  const { transport, distance, passengers } = req.body;

  if (!FACTORS[transport] || distance <= 0 || passengers <= 0) {
    return res.status(400).json({ error: 'Dados inválidos' });
  }

  const co2 = (distance * FACTORS[transport]) / passengers;

  db.run(
    `INSERT INTO trips (transport, distance, passengers, co2, created_at)
     VALUES (?, ?, ?, ?, datetime('now'))`,
    [transport, distance, passengers, co2]
  );

  let impact = 'baixo';
  if (co2 > 50) impact = 'alto';
  else if (co2 > 20) impact = 'medio';

  res.json({ co2, impact, suggestion: 'Prefira transporte coletivo sempre que possível.' });
});

export default router;