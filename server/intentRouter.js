import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

function fallbackMap(text) {
  const lower = text.toLowerCase();
  if (lower.includes('profile')) return 'open_profile';
  if (lower.includes('home')) return 'go_home';
  if (lower.includes('logout') || lower.includes('log out')) return 'logout';
  return 'unknown';
}

export async function detectIntent(text) {
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/transformersbook/distilbert-base-uncased-intent-classifier',
      { inputs: text },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
        },
      }
    );

    const intent = response.data[0][0].label;

    if (intent === 'other' || !intent) {
      return fallbackMap(text);
    }

    return intent;
  } catch (err) {
    console.error('Hugging Face Error:', err);
    return fallbackMap(text); // fallback on error too
  }
}
