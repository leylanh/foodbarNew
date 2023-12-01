
import React, { useState,useEffect} from 'react';
import { Link,Routes,Route } from 'react-router-dom';
import './Header.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/about' element={<About />}/>
  <Route path='/menu' element={<Menu />}/>
</Routes>
const [isBlinking, setIsBlinking] = useState(false);
useEffect(() => {
  const blinkInterval = setInterval(() => {
    setIsBlinking((prevIsBlinking) => !prevIsBlinking);
  }, 300);

  return () => clearInterval(blinkInterval);
}, [])
  return (
    
    <>
    <div className='header'>
       <div className='header_text'>
        <div>
            <img src="https://preview.colorlib.com/theme/foodbar/img/logo-2.png.webp" alt="" className='bakery' />
            
        </div>
       </div>
        
      <div className='menu'>
      <Link to="/" className="menu-link" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" className="menu-link" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/menu" className="menu-link" onClick={toggleMenu}>
          Menu
        </Link>
      </div>
    <div className={`burger-menu ${menuOpen ? 'open' : ''}`}>
      <button className="burger-button" onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </button>
      <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
      
        <Link to="/" className="menu-link" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" className="menu-link" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/menu" className="menu-link" onClick={toggleMenu}>
          Menu
        </Link>
      </div>
    </div>
    </div>
   
    </>
    
  );
};

export default Header;