import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WeatherProvider from './context/WeatherContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WeatherProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WeatherProvider>
);

reportWebVitals();
