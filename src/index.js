// src/index.js
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import './index.css'; // If you're using Tailwind or global styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
