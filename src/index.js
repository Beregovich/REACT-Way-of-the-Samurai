import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, name: "Vasya", message: "I'am Vasya, Hi!" },
  { id: 2, name: "Petya", message: "I'am Petya, Hi!" },
  { id: 3, name: "Kolya", message: "I'am Kolya, Hi!" },
]

let dialogs = [
  { id: 1, name: "Vasya" },
  { id: 2, name: "Petya" },
  { id: 3, name: "Kolya" },
  { id: 4, name: "Serezha" },
]

let messages = [
  { id: 1, message: "First" },
  { id: 2, message: "Second" },
  { id: 3, message: "Third" },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
