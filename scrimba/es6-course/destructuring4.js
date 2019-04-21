const srcArr = [1,2,3,4,5,6,7,8,9];

  const [a,b, ...newArr] =  srcArr;

  console.log('srcArr', srcArr);
  console.log('newArr', newArr);