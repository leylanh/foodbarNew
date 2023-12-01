import React, { Component } from "react";
import "./SandwichItem.css";
export default class SandwichItem extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="sandwich">
        <img className="img1" src={item?.photo} alt="" />
        <h4>{item?.title}</h4>
        <p className="caption">{item?.info}</p>
        <h5>${item?.amount}</h5>
      </div>
    );
  }
}
