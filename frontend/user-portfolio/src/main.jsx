import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'

const rootDiv = document.getElementById('root')
createRoot(rootDiv).render(
  <StrictMode>
    <App />    
  </StrictMode>,
)