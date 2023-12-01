import React from "react";
import "./About.css";
import { useState, useEffect } from "react";
import ReactSimplyCarouselExample from "../../Carousel";
import Footer from "../../Footer";
import Header from "../../Header";
export default function About() {
  const [isBlinking, setIsBlinking] = useState(false);
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prevIsBlinking) => !prevIsBlinking);
    }, 300);

    return () => clearInterval(blinkInterval);
  }, [])
  return (
    <>
    <Header />
      <div class="banner_inner ">
        <div class="container">
          <div class="banner_content">
            <h1>About Us</h1>
            <div class="page_link">
              <a href="index.html">Home</a>
              <p> → </p>
              <a href="menu.html">Menu</a>
            </div>
          </div>
        </div>
        <div className={`photoIcon ${isBlinking ? 'blinking' : ''}`}>
          <img src="https://preview.colorlib.com/theme/foodbar/img/banner/shape3.png.webp" alt="" className="shape shape1" />
          <img src="https://preview.colorlib.com/theme/foodbar/img/banner/shape7.png.webp" alt="" className="shape shape2" />
          <img src="https://preview.colorlib.com/theme/foodbar/img/banner/shape4.png.webp" alt="" className="shape shape3" />
          <img src="https://preview.colorlib.com/theme/foodbar/img/banner/shape1.png.webp" alt="" className="shape shape4" />
          <img src="https://preview.colorlib.com/theme/foodbar/img/banner/shape2.png.webp" alt="" className="shape shape5" />
          <img src="https://preview.colorlib.com/theme/foodbar/img/banner/shape5.png.webp" alt="" className="shape shape6" />
          <img src="https://preview.colorlib.com/theme/foodbar/img/banner/shape6.png.webp" alt="" className="shape shape7" />
        </div>

      </div>
      <div className="story">
        <div className="left_story">
          <h2>About Our Story</h2>
          <p>Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip consequat.</p>
          <a  href="#">View Full Menu</a>
           </div>

        <div className="right_story">
          <img src="https://preview.colorlib.com/theme/foodbar/img/story/story-1.jpg.webp" alt="" />
        </div>
      </div>
      <ReactSimplyCarouselExample />
      <Footer/>
    </>
  )
}