import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* it enables the browser routing capability in app component */}
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>,
)
