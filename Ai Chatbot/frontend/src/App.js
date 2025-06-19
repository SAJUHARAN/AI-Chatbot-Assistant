import React, { useState } from "react";
import axios from "axios";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });
      const botMessage = { type: "bot", text: response.data.message };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = { type: "bot", text: "Oops! Something went wrong." };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setInput("");
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
