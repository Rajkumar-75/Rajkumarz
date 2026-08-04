import { Router } from 'express';

const router = Router();

// GET /api/projects — once a Project model exists, replace this stub with a
// mongoose query so src/data/projects.js can be swapped for a fetch() call.
router.get('/', async (req, res) => {
  res.json({ message: 'Connect a Project model + MongoDB collection here.' });
});

export default router;
