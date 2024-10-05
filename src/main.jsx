import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Always from './Always.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Always />
  </StrictMode>,
)
