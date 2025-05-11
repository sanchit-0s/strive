import express from 'express';
import { detectIntent } from '../intentRouter.js';

const router = express.Router();

router.post('/voice-command', async (req, res) => {
  const { text } = req.body;
  const intent = await detectIntent(text);
  res.json({ intent });
});

export default router;
