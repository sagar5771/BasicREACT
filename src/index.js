//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date();
const hours = currentTime.getHours();
var greeting = "Good morning";
var textStyle = { color: "red" };
if (hours >= 12 && hours < 18) {
  greeting = "Good afternoon";
  textStyle = { color: "green" };
}
if (hours >= 18 && hours <= 24) {
  greeting = "Good evening";
  textStyle = { color: "blue" };
}
ReactDOM.render(
  <div>
    <h1 className="heading" style={textStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
