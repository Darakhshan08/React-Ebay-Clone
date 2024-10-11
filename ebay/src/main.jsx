import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Navbartop from './components/Navbartop.jsx'
import Footer from './components/Footer.jsx'
import TabRow from './components/TabRow.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbartop />
    <Navbar />
    <TabRow />
    <App />
    <Footer />
  </StrictMode>,
)
