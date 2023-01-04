import React from "react";

export const CityCard = ({ city }) => {
  return (
    <div className="city-card">
      <img className="city-image" src={city.imageUrl} alt="city" />
      <h3>{city.cityName.toUpperCase()}</h3>
      <p>{city.description}</p>
      <a href={`/citydetails/${city.cityName}`}>
        <button>See Details</button>
      </a>
    </div>
  );
};
