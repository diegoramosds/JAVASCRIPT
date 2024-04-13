import React from 'react'
import ReactDOM from 'react-dom/client'
import AboutMe from './Components/AboutMe'
import './styles/global.css'
import Skills from './Components/Skills'
import Header  from './Components/Header'

import { BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <AboutMe />
      <Skills />
    </BrowserRouter>
  </React.StrictMode>,
)
