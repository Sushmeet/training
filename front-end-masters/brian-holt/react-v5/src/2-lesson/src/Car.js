import React from 'react';

const Car = ({ name, model }) => {
  return (
    <div>
      <h1>what a nice car {name}</h1>
      <p>This model is {model} </p>
    </div>
  );
};

export default Car;
