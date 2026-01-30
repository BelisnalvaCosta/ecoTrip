import express from 'express';
import cors from 'cors';
import calcRoutes from './routes/calcRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', calcRoutes);

app.listen(3000, () => {
  console.log('EcoTrip API running on port 3000');
});