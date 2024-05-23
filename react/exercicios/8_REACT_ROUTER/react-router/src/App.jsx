
import './App.css'

// 1
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <>
      <div className='App'>
       <h1>React router</h1>
       <Link to={<About/>}>OI</Link>
       <BrowserRouter>
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
