import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App'
import reportWebVitals from './reportWebVitals'

// Use the createRoot API for React 18
const container = document.getElementById('root')
const root = createRoot(container) 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
