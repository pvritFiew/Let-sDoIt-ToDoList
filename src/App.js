import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [color, setColor] = useState('rgb(255, 0, 0)');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      setColor(randomColor);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1 style={{ color }}>Hello World</h1>
      <p style={{ color }}>This text is changing color dynamically</p>
    </div>
  );
}

export default App;
