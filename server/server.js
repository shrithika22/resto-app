// server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("Server is alive ✅");
});

// Chat route
app.post('/api/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;

    const chatResponse = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant for a restaurant website.' },
        { role: 'user', content: userMessage },
      ],
    });

    res.json({ reply: chatResponse.choices[0].message.content.trim() });
  } catch (error) {
    console.error('❌ Error from OpenAI:', error);
    res.status(500).json({ error: 'Something went wrong. Try again later.' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});

