import React from "react";

export const Input = () => {
  return (
    <div className="input-container">
      <input placeholder="Enter Name here" type="text" />
      <button className="all-button">All</button>
      <button className="male-button">Boys</button>
      <button className="female-button">Girls</button>
    </div>
  );
};
