import React from "react";
import "./TopDishes.css"
import Sandwiches from "./Sandwiches";
export default function TopDishes(){
    return(
        <>
      <div className="row">
        <div>
          <div className="main_title position_relative">
            <h1 className="menuText">Our Top Rotated Dishes</h1>
           
            <div className="circle circle1">
              <div className="circle circle2">
                <div className="cakeDishes">
                  <img src={require("./cake.webp")} alt="" />
                </div>
                <div className="burgerDishes">
                  <img src={require("./burger.webp")} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <Sandwiches/>
    </>
    );

    }
    