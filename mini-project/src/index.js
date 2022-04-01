import React from 'react';
import ReactDOMclient from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


document.getElementById('root')
const root = ReactDOMclient.createRoot(document.getElementById('root'));
root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
