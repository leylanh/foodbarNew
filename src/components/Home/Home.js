import React from "react";
import "./Home.css";
import Header from "../../Header";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "../About/About";
import Menu from "../Menu/Menu";
import TopDishes from "./TopDishes";
import FavMenu from "./FavMenu";
import FoodGallery from "./FoodGallery";
import ReactSimplyCarouselExample from "../../Carousel";
import Form from "../../Form";
import Footer from "../../Footer";

export default function Home() {
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
       
        <h1>Delicious cupcakes</h1>
        <p>
          inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially
          in the </p>
          <a class="main_btn" href="#">check our menu</a>
        </div>
        <div className="round round1">
        <div className={`photo-container ${isBlinking ? 'blinking' : ''}`}>
            <img src="https://preview.colorlib.com/theme/foodbar/img/banner/shape3.png.webp"alt='' className='food_icon burger_icon'/>
          </div>
          </div>
        <div className="round round2">
        <div className={`photo-container ${isBlinking ? 'blinking' : ''}`}>
            <img src='https://preview.colorlib.com/theme/foodbar/img/banner/shape2.png.webp' className='food_icon tost_icon'/>
          </div>
          <div className={`photo-container ${isBlinking ? 'blinking' : ''}`}>
             <img src='https://preview.colorlib.com/theme/foodbar/img/banner/shape4.png.webp' className='food_icon cake_icon'/>
          </div>
           
    
        </div>
        <div className="round round3">
        <div className={`photo-container ${isBlinking ? 'blinking' : ''}`}>
             <img  src='https://preview.colorlib.com/theme/foodbar/img/banner/shape5.png.webp'   className='food_icon pizza_icon'></img>
          </div>
         
        </div>
        <img src='https://preview.colorlib.com/theme/foodbar/img/banner/home-banner.png.webp' className='cupcakeBig'></img>
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
   <TopDishes />
   <FavMenu/>
   <FoodGallery/>
   <ReactSimplyCarouselExample/>
   <Form />
   <Footer/>
    </>
    
        
    )
}
