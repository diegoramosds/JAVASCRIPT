
import './App.css'

// 1
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
      <div className='App'>
       <h1>React router</h1>
       <BrowserRouter>
        <NavBar/>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
          </Routes>
       </BrowserRouter>
      </div>
    </>
  );
}

export default App
