let obj = {
    cat: 'meow',
    dog: 'woof'
  };

  let dog = 'cat'; // assin the varibale dog a string cat.


  let soundOfDog = obj.dog; // this will look up dog
  let soundOfCat = obj[dog]; // this will evaluate the string in dog which is cat

  console.log('soundOfDog', soundOfDog); // woof
  console.log('soundOfCat', soundOfCat); // meow


  