/* 
When we talk about recursion in Comp Sci we are talkign about a function that calls itself
over and over again until it reaches the base case.

This technique is especially adept at some problems because of its ability 
to maintain state at different levels of recursion
This does take up space in memory as you keep storing the state.


While recursion can make the code very simple for some problems, 
it inherently carries a potentially large footprint with it as every time you 
call the function, it adds another call to the stack. Some problems therefore are better 
solved in a slightly-more-complicated-but-more-effecient way of iteration (loops) instead of recursion.

If u don't have a base case defined or if the recursions doesn't stop than
you will cause a stack overflow.



*/

const basicRecursion = (max, current) => {
  if (current > max) return;
  console.log("current---", current);
  basicRecursion(max, current + 1);
};

const result = basicRecursion(5, 1);
console.log("result---", result === undefined);
/*
call stack for this is 
5, 6 STOP cut this out and return back with what ever value u want here 
5, 5
5, 4
5, 3
5, 2
5, 1
*/
