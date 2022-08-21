import './App.css';
// require('./App.css');
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Home } from './pages/Home';
import { Hold } from './pages/Hold';
import { Countdown } from './pages/Countdown';

function App() {
  const [name] = useState('richardegil');
  
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home name={name} />} />
        <Route path="/Hold" element={<Hold />} /> 
        <Route path="/countdown" element={<Countdown />} />
      </Routes>
    </main>
  )
}


export default App;
