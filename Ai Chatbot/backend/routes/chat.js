const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: "No message provided" });
  }

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            role: "user",
            parts: [{ text: userMessage }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const aiMessage = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return res.json({ message: aiMessage });

  } catch (error) {
    console.error("Gemini API failed:", error?.response?.data || error.message || error);
    return res.status(500).json({ error: "Gemini API request failed." });
  }
});

module.exports = router;
