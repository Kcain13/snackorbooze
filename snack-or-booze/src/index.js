import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the import change
import App from './App';
import './index.css'; // If you have global styles

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your application
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
