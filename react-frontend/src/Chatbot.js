import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState(""); // The user's message
  const [chatHistory, setChatHistory] = useState([]); // Store conversation history
  const [loading, setLoading] = useState(false); // Handle loading state

  // Handle the message input change
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle when the user sends a message
  const handleSendMessage = async () => {
    if (message.trim() === "") return; // Do nothing if message is empty

    // Add the user's message to chat history
    setChatHistory([...chatHistory, { sender: "user", text: message }]);

    // Show loading indicator while waiting for response
    setLoading(true);

    try {
      // Send the message to the backend
      const response = await axios.get(`http://127.0.0.1:5000/search?query=${message}`);
      const products = response.data;

      // Add the chatbot's response to the chat history
      setChatHistory([
        ...chatHistory,
        { sender: "user", text: message },
        { sender: "bot", text: formatProductResponse(products) },
      ]);
    } catch (error) {
      setChatHistory([
        ...chatHistory,
        { sender: "user", text: message },
        { sender: "bot", text: "Sorry, no products found or error occurred." },
      ]);
    }

    setMessage(""); // Clear the input field after sending the message
    setLoading(false); // Hide the loading indicator
  };

  // Function to format product list as chatbot response
  const formatProductResponse = (products) => {
    if (products.length === 0) {
      return "No products found.";
    }
    return products
      .map((product) => `${product.name} - $${product.price}`)
      .join("\n");
  };

  return (
    <div className="chatbot-container">
      <h2>Chatbot</h2>
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={message.sender === "user" ? "user-message" : "bot-message"}
          >
            <p>{message.text}</p>
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Ask me about products..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
