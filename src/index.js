import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles/App.scss';

const root = createRoot(document.getElementById('root'));
root.render(<App />);