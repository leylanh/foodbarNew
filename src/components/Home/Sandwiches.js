import React, { Component } from "react";
import "./Sandwiches.css";
import SandwichItem from "./SandwichItem";
export default class Sandwiches extends Component {
  state = {
    sandwichesBlock: [
      {
        photo: require("./sandwich.webp"),
        title: "Bread Fruit Cheese Sandwich",
        info: "Bread/Potato/Cheese",
        amount: 5.59
      },
      {
        photo: require("./kruassan.webp"),
        title: "Beef Cutlet With Spring Onion",
        info: "Beef/Onion",
        amount: 7.1
      },
      {
        photo: require("./potato.webp"),
        title: "Meat With Sauce & Vegetables",
        info: "Meat/Vegetables",
        amount: 9.99
      }
    ]
  };
  render() {
    let { sandwichesBlock } = this.state;
    return (
      <div className="sandwiches-container">
        {sandwichesBlock
          ? sandwichesBlock?.map((item, index) => {
              return <SandwichItem key={index} item={item} />;
            })
          : "Loading.."}
      </div>
    );
  }
}
