# AI Chatbot Assistant

A AI chatbot web application that uses Google's Gemini API to provide AI-powered chat in real-time via a clean, responsive chat interface.

---

## Project Overview

This project is a web-based chatbot assistant allowing users to interact with an AI model using Google's Gemini API. The app features a modern chat UI built with vanilla HTML, CSS, and JavaScript, and a Node.js backend API to process user messages.

---

## 🛠️ Setup Instructions

### Prerequisites:

- Node.js (v16 or higher)
- NPM (Node Package Manager)
- Gemini API key (from Google Cloud Console or AI Studio)

### Steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/SAJUHARAN/ai-chatbot-assistant.git
   cd ai-chatbot-assistant
   ```

### Install dependencies:

npm install

### backend server:

cd backend
node server.js

### API Endpoint Documentation

Sends a user message to the backend, which relays it to the Gemini API and returns the AI response

### Assumptions & Limitations

Currently supports only Google Gemini API (no fallback to OpenAI or other APIs).

No user authentication or rate limiting implemented.

The chatbot requires an active internet connection to call the Gemini API.
