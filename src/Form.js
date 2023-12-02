import React from "react";
import "./Form.css";
export default function App(){

    return (
      <form className="forma">
        <label>
          <input placeholder="Enter your name" className="select" />
        </label>
        <label>
          <input placeholder="Enter email adress" className="select" />
        </label>
        <label>
          <input placeholder="Phone number" className="select" />
        </label>
        <label>
          <input placeholder="Select data & time" className="select" />
        </label>
        <label>
          <select placeholder="Select event" className="select">
            <option value="event">Select event</option>
            <option value="Dhaka">Select event Dhaka</option>
            <option value="Dilli">Select event Dilli</option>
            <option value="Newyork">Select event New York</option>
            <option value="Islamabad">Select event Islamabad</option>
          </select>
        </label>
        <button className="reservation-button">Make Reservation</button>
      </form>
    );
  }
