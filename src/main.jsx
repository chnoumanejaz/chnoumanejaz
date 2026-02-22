import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ComingSoonPage from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComingSoonPage />
  </StrictMode>,
)
