import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
import StarRating from './StarRating'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarRating/>
  </StrictMode>,
)
