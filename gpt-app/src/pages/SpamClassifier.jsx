import '../styles/SpamClassifier.css';
import {Menu, BrainCircuit, Signature, Smile, MailWarning, House  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import React, { useState } from 'react';
import UserMessage from '../components/UserMessage';
import SystemMessage from '../components/SystemMessage';





const systemReplies = [
  "This message appears safe.",
  "No spam indicators found.",
  "Spam probability: Low.",
  "Message classified as not spam.",
  "Clean message detected.",
  "Spam score is minimal.",
];



export default function SpamClassifier() {

  const navigate = useNavigate();
  const [text, setText] = useState('');

  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
  if (!text.trim()) return;

  setMessages(prev => [...prev, { type: 'user', text }]);

  try {
    const res = await fetch('http://localhost:8000/classify-spam', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    const data = await res.json();
    const labelText = data.label === 1 ? "Spam" : "Ham";

    setMessages(prev => [
      ...prev,
      { type: 'system', text: `${labelText} (confidence: ${(data.confidence * 100).toFixed(1)}%)` }
    ]);
  } catch (error) {
    console.error('Error:', error);
    setMessages(prev => [
      ...prev,
      { type: 'system', text: 'Error contacting backend' }
    ]);
  }

  setText('');
};



  return (
    <div className="SpamClassifier">
      <div className="overlay">

        <div className="left-menu">

            <div className="menu-toggle-icon">
                <Menu className="menu-icon" />
            </div>
             <div className="left-menu-item" onClick={() => navigate('/')}>
                <span className="menu-text"><House className="icon_5"/>Home</span>
            </div>
            <div className="left-menu-item" onClick={() => navigate('/spam')}>
                <span className="menu-text"><MailWarning className="icon_1"/>Spam</span>
            </div>
            <div className="left-menu-item" onClick={() => navigate('/ai')}> 
                <span className="menu-text"> <BrainCircuit className="icon_2"/>  AI vs Human</span>
            </div>
            <div className="left-menu-item" onClick={() => navigate('/emotions')}>
                <span className="menu-text"> <Smile className="icon_3" /> Emotion</span>
            </div>
            <div className="left-menu-item" onClick={() => navigate('/summarize')}>
                <span className="menu-text"> <Signature className="icon_4" /> Summarization</span>
            </div>
        </div>
        <h3 className="page-title">Spam Classifier</h3>

        <div className="scrollable-content">
  <div className="messages-container">
    {messages.map((msg, i) =>
      msg.type === 'user'
        ? <UserMessage key={i} text={msg.text} />
        : <SystemMessage key={i} text={msg.text} />
    )}
  </div>

  <div className="input-wrapper">
    <InputField
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
    />
  </div>
</div>

      </div>
    </div>
  );
}
