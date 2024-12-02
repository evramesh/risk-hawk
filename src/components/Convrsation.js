import React from "react";

const Conversation = () => {
  return (
    <div className="conversation">
      <h3>Conversation</h3>
      <div className="message">
        <strong>Rachel Adams</strong> - Received by WhatsApp
        <p>Lorem ipsum dolor sit amet...</p>
      </div>
      <div className="message">
        <strong>You</strong> - Sent by WhatsApp
        <p>Lorem ipsum dolor sit amet...</p>
      </div>
      <textarea placeholder="Type a message..."></textarea>
      <button>Send</button>
    </div>
  );
};

export default Conversation;
