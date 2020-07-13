/*
esoteric -- intended for or likely to be understood by only a small
number of people with a specialized knowledge or interest.
- Closure is the most esoteric of JS concepts.
- Enable powerful pro-level functions like `once` and `memoize`
- Many JS design patterns including the module pattern use closure.
*/
/*
Function with memories.
When our functions get called, we create a live store of data (local memory/variable environment/state) for that function's context.
But what if our functions could hold on to live data between executions.
This would let our function definitions have an associated cache/persistent memory
But it all starts with us returning a function from the invocation of another function.

*/