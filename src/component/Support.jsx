import React, { useState } from "react";
import { MdOutlineSupportAgent } from "react-icons/md";
import "../css/support.css";

const Support = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleSupport = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      setMessages([...messages, event.target.value]);
      event.target.value = ""; 
    }
  };

  return (
    <div className="support-container">
    
      <button className="support-button" onClick={toggleSupport}>
        <MdOutlineSupportAgent/>
      </button>

     
      {isOpen && (
        <div className="support-box">
          <div className="support-header">
            <h3>Support</h3>
            <button className="close-btn" onClick={toggleSupport}>✖</button>
          </div>
          <div className="support-messages">
            {messages.length === 0 ? (
              <p className="placeholder-text">Type your message below...</p>
            ) : (
              messages.map((msg, index) => <p key={index} className="chat-message">{msg}</p>)
            )}
          </div>
          <input
            type="text"
            className="support-input"
            placeholder="Type a message..."
            onKeyDown={handleSendMessage}
          />
        </div>
      )}
    </div>
  );
};

export default Support;
