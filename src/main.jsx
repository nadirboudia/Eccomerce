import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import ReactDOM from 'react-dom/client'
import CardProvider from './components/context/cardcontext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CardProvider>
    <App />
  </CardProvider>
    
    
    </BrowserRouter>
  </StrictMode>,
)
