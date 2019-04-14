const LOCAL_FORECAST = {
  today: {
    min: 72,
    max: 83
  },
  tomorrow: {
    min: 73.3,
    max: 84.6
  }
};

function getMaxofTmrw(forecast) {
    const { tomorrow : { max } } = forecast;
    return max;
}

console.log('getMaxofTmrw', getMaxofTmrw(LOCAL_FORECAST));