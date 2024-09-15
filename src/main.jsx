import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import "./tailwindcss.css"

createRoot(document.getElementById('root')).render(
 <Router>
        <App /> 
    
</Router>


)

