import React, { useState } from "react";
import "../chatBot.css";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you at Little Lemon?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const botMessage = { sender: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong." },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="chatbot-container">
      {open && (
        <div className="chat-window">
          <div className="chat-header">Little Lemon Assistant</div>
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              placeholder="Ask a question..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        💬
      </button>
    </div>
  );
}

export default ChatBot;
