import React from 'react';
import '../styles/Message.css';

export default function UserMessage({ text }) {
  return (
    <div className="message user-message">
      <div className="message-bubble">{text}</div>
    </div>
  );
}
