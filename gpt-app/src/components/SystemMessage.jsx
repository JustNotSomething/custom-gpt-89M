import React from 'react';
import '../styles/Message.css';

export default function SystemMessage({ text }) {
  return (
    <div className="message system-message">
      <div className="message-bubble">{text}</div>
    </div>
  );
}
