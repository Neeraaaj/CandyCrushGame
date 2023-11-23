import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './login.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './signup.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/app" element={<App />} />
      <Route path='/signup' element={<Signup /> } />
    </Routes>
  </Router>
)
