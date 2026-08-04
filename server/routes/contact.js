import { Router } from 'express';
import ContactMessage from '../models/ContactMessage.js';

const router = Router();

// POST /api/contact — matches src/components/Contact.jsx submit handler
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'name, email and message are required.' });
    }
    const saved = await ContactMessage.create({ name, email, subject, message });
    // TODO: optionally send an email notification here (e.g. via Nodemailer).
    return res.status(201).json({ success: true, id: saved._id });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to save message.' });
  }
});

export default router;
