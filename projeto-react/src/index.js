import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
  </BrowserRouter>
  </React.StrictMode>
);

