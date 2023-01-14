import React from "react";
import { useParams } from "react-router-dom";

export const CityDetails = ({ cities }) => {
  const { cityName } = useParams();
  const city = cities.filter((city) => {
    return city.cityName === cityName;
  });

  return (
    <div className="city-details-container">
      <img className="detail-image" src={city[0].imageUrl} alt="city" />
      <h3>{city[0].cityName.toUpperCase()}</h3>
      <p>{city[0].description}</p>
    </div>
  );
};
