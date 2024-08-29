import { StrictMode } from 'react'
import './Application/index.css'
import { createRoot } from 'react-dom/client'
import { Home } from './Application/Pages/Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
