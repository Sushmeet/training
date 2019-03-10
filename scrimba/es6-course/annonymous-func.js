const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];


const squareList = (arr) => {
    const squaredIntegers = arr.filter(x => x > 0 && Number.isInteger(x)).map(x => x *x)
    return squaredIntegers;
  };
  
  const squaredIntegers = squareList(realNumberArray);

  console.log('Original array', realNumberArray);
  console.log('squared Integers', squaredIntegers);