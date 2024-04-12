import React from 'react'
import ReactDOM from 'react-dom/client'
import AboutMe from './Components/AboutMe/index'
import './styles/global.css'
import Skills from './Components/Skills/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AboutMe />
    <Skills />
  </React.StrictMode>,
)
