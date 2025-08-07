import React from 'react'
import '../styles/Main.css';
import {BrainCircuit, Signature, Smile, MailWarning } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export default function Main() {

  const navigate = useNavigate();

  return (
    <div className="Main">
      <div className="overlay">
             <h1>Custom GPT-style LLM (89M Parameters)</h1>
             <div className="routes">
                <div className="spam-route route-block" onClick={() => navigate('/spam')}><MailWarning className="icon_1"/> Spam Classifier</div>
                <div className="ai-route route-block" onClick={() => navigate('/ai')}><BrainCircuit className="icon_2"/> AI vs Human Text Classifier</div>
                <div className="emotion-route route-block" onClick={() => navigate('/emotions')}>  <Smile className="icon_3" /> Emotion Classifier</div>
                <div className="summarization-route route-block" onClick={() => navigate('/summarize')}> <Signature className="icon_4" /> Abstract Text Summarization</div>
             </div>
      </div>
    </div>
  );
}
