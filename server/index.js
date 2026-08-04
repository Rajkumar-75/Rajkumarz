// Minimal Express + MongoDB starter matching the frontend's expectations
// (src/config/api.js calls `${VITE_API_URL}/contact`, `/projects`, etc).
// This is NOT wired into the Vite build — run it separately with `npm run server`
// after `npm install express mongoose cors dotenv` inside /server.

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactRoutes from './routes/contact.js';
import projectRoutes from './routes/projects.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/raj-portfolio';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));
