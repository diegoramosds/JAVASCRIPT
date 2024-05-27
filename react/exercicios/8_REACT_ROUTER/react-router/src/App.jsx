
import './App.css'

// 1
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Products from './pages/Products';
import Info from './pages/Info';
import Page404 from './pages/Page404';


function App() {
  return (
    <>
      <div className='App'>
       <h1>React router</h1>
       <BrowserRouter>
       {/* 2- links com react router */}
        <NavBar/>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              {/* 6/ nested route */}
              <Route path='/products/:id/info' element={<Info />} />
              {/*4- rota dinamica */}
              <Route path='/products/:id' element={<Products />} />
              {/* 7- */}
              <Route path='*' element={<Page404 />} />

          </Routes>
       </BrowserRouter>
      </div>
    </>
  );
}

export default App
