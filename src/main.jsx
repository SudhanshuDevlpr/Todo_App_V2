import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Always from './MainApp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Always />
  </StrictMode>,
)
