import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './header.jsx'
import Courses from './course.jsx'
import Footer from './footer.jsx'
import App11 from './places.jsx'
import Certificates from './certi.jsx'
import Team from './team.jsx'
import StatsSection from './about.jsx'
import LOGIN from './login.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
   

  </StrictMode>,
)
