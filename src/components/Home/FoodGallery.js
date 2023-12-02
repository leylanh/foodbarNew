import React from "react";
import "./FoodGallery.css";
export default function FoodGallery(){
    return(
        <>
        <div className="row">
                <div>
                    <div className="main_title position_relative">
                        <h1 className="menuText">Food Gallery</h1>
                        <div className="foodCircle foodCircle1">
                            <div className="foodCircle foodCircle2">
                                <div className="cake">
                                    <img src={require("./cake.webp")} />
                                </div>
                                <div className="burger">
                                    <img src={require("./burger.webp")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>
        <div className="pics">
        <img src={require("./salmon.webp")} alt="" className="bigger" />
        <img src={require("./lemonPie.webp")} alt="" />
        <img src={require("./cinnamon.webp")} alt="" />
        <img src={require("./coffee.webp")} alt="" />
        <img src={require("./egg.webp")} alt="" />
        <img src={require("./coconut.webp")} alt="" />
        <img src={require("./pudding.webp")} alt="" className="bigger" />
      </div>
        </>
        
    )
}