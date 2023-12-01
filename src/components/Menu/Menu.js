import React from "react";
import "./Menu.css";
import { useState, useEffect } from "react";
import Form from "../../Form";
import Footer from "../../Footer";
import Header from "../../Header";
import FavMenu from "../Home/FavMenu";
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
            <h1>Menu</h1>
            <div class="page_link">
              <a href="index.html">Home</a>
              <p> → </p>
              <a href="menu.html">About</a>
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
      <FavMenu/>
      <Form />
      <Footer/>
      </>)
      }