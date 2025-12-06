/*
 * 🎓 REACT LESSON 1: The Entry Point
 * 
 * This is where React starts! It does two things:
 * 1. Finds the <div id="root"> in index.html
 * 2. Renders your App component inside it
 * 
 * Think of it as the "ignition key" that starts your React app.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// This line finds the div with id="root" and tells React to render there
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

