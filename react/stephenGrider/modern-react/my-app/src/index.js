// import react libraries
import React from "react";
import ReactDOM from "react-dom";

const name = "Sushi";
const user = {
  firstName: "Sushi",
  lastName: "Sunger"
};
const formatName = user => {
  return user.firstName + " " + user.lastName;
};
const element = (
  <div>
    <h1>
      {name} nick name and full name {formatName(user)}
    </h1>
    <h2>the time is {new Date().toLocaleTimeString()}</h2>
  </div>
);

const App = () => {
  return element
};

// ReactDOM.render(element, document.getElementById("root"));


const tick = () => {
  const element = (
    <div>
      <h1>
        {name} nick name and full name {formatName(user)}
      </h1>
      <h2>the time is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}


setInterval(tick,1000)