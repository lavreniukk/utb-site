import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './routing/router.jsx';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);