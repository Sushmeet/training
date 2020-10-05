import React from 'react';

const getSeason = (lat, month) => {
  const isNorthernHemisphere = lat > 0;
  const isMonthBetweenAprilAndAugust = month > 2 && month < 9;

  if (isMonthBetweenAprilAndAugust) {
    return isNorthernHemisphere ? 'summer' : 'winter';
  } else {
    return isNorthernHemisphere ? 'winter' : 'summer';
  }
};

const SeasonsDisplay = ({ lat }) => {
  const currentMonth = new Date().getMonth();
  const season = getSeason(lat, currentMonth);
  const seasonText = (season === 'winter' ? 'Brrrr it\'s chilly' : 'It\'s summer yay')
  return (
    <div>
      <h1>{seasonText}</h1>
    </div>
  );
};

export default SeasonsDisplay;
