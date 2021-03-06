/* 
1)
Implement the function chooseMovieSnacks so that it returns the statement
'My favorite movie snacks are <snack1> and <snack2>'. 
<snack1> and <snack2> value will depend on the parameter that are passed as arguments.
Ex: 
const snacks = ['peanuts', 'popcorn', 'hot dogs', 'candy', 'ice cream'];
const favorites = chooseMovieSnacks(snacks, 1, 3);
// favorites should read 'My favorite movies snacks are popcorn and candy.';
*/
const chooseMovieSnacks = (arr, index1, index2) => {
    // YOUR CODE HERE
  };
  
  /* 
  2)
  Given a daily menu object, implement the function 'getLunch' so that it returns 
  the menu item that is for lunch
  *** EXAMPLE ***
  const mondayMenu = {
    breakfast: 'eggs',
    lunch: 'sandwich',
    dinner: 'stir-fry'
  };
  const result = getLunch(mondayMenu) // result should equal 'sandwich'
  */
  
  const getLunch = (menu) => {
    // YOUR CODE HERE
  };
  
  /*
  Given a daily menu object, implement the function function 'getMeal' so that it returns
  the value of inputted meal.
  *** EXAMPLE ***
  const mondayMenu = {
    breakfast: 'eggs',
    lunch: 'sandwich',
    dinner: 'stir-fry'
  };
  const result = getMeal(mondayMenu, 'dinner') // result should equal 'sandwich'
  */
  
  const getMeal = (menu, meal) => {
    // YOUR CODE HERE
  };
  
  /*
  3)
  Given an array of menu objects, return an array of the menu objects where the dinner
  property has a lowSugar equal to true.
  *** EXAMPLE ***
  const mondayMenu = {
    breakfast: 'eggs',
    lunch: 'sandwich',
    dinner: {
      item: 'stir-fry',
      lowSugar: false
    }
  };
  const tuesMenu = {
    breakfast: 'waffles',
    lunch: 'sandwich', 
    dinner: {
      item: 'pork chops',
      lowSugar: true
    }
  }
  const menuArr = [mondayMenu, tuesdayMenu];
  const result = getLowSugarMenu(menuArr) 
  // result should be an array contain only the tuesMenu object 
  */
  const getLowSugarMenu = (menuArr) => {
    // YOUR CODE HERE
  };
  
  /*
  4)
  Implement the function copyMenu below that passes all the menus and menu items
  by value. Changes to the new menu should not affect the old menu.
  */
  const copyMenu = (menuArr) => {
    // YOUR CODE HERE
  };