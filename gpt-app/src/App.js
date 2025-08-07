import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Main from './pages/Main';
import SpamClassifier from './pages/SpamClassifier';
import AIClassifier from './pages/AIClassifier';
import EmotionsClassifier from './pages/EmotionsClassifier';
import Summarization from './pages/Summarization';


function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/spam" element={<SpamClassifier />} />
          <Route path="/ai" element={<AIClassifier />} />
          <Route path="/emotions" element={<EmotionsClassifier />} />
          <Route path="/summarize" element={<Summarization />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
