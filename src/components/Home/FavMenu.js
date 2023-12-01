import React, { Component } from "react";
import "./FavMenu.css";
export default class FavMenu extends Component {
    render() {
        return (
            <div className="row">
                <div>
                    <div className="main_title position_relative">
                        <h1 className="menuText">Our Favourite Menu</h1>
                        <div className="favMenuCircle favMenuCircle1">
                            <div className="favMenuCircle favMenuCircle2">
                                <div className="cake">
                                    <img src={require("./cake.webp")} />
                                </div>
                                <div className="burger">
                                    <img src={require("./burger.webp")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="menuList">

                    <div className="foodMenu">
                        <h4>Wonton with french fries</h4>
                        <p>Wonthon/Potato/Fries/Sauce</p>
                        <h4>Roasted Red Potatoes with Rosemary

                        </h4>
                        <p>Wonthon/Potato/Fries/Sauce</p>
                        <h4>Bacon-Wrapped Shrimp with Garlic </h4>
                        <p>Wonthon/Potato/Fries/Sauce</p>
                        <h4>Apple Smoked Chicken with White Sauce</h4>
                        <p>Wonthon/Potato/Fries/Sauce</p>
                        <h4>Imported Oysters Grill (5 Pieces)</h4>
                        <p>Wonthon/Potato/Fries/Sauce</p>
                        <h4>Apple Smoked Chicken with White Sauce</h4>
                        <p>Wonthon/Potato/Fries/Sauce</p>
                    </div>
                    <div className="prices">
                       
                      
                        
                        <div>
                            <span className="line">---------------------------</span>
                            <span>$5.00</span>

                        </div>
                        <div>
                            <span className="line">---------------------------</span>
                            <span>$5.00</span>

                        </div>
                        <div>
                            <span className="line">---------------------------</span>
                            <span>$5.00</span>

                        </div>
                        <div>
                            <span className="line">---------------------------</span>
                            <span>$5.00</span>

                        </div>
                        <div>
                            <span className="line">---------------------------</span>
                            <span>$5.00</span>

                        </div>
                        <div>
                            <span className="line">---------------------------</span>
                            <span>$5.00</span>

                        </div>
                        
                    </div>
                </div></div>

        );
    }
}