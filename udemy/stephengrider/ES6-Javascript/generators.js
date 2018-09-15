function* shopping() {
    // stuff on the sidewalk

    // walking down the sidewalk

    // go into the store with cash
   const stuffFromStore =  yield 'cash';

   const cleanChlothes = yield 'laundry'

    // walking back home.
    return stuffFromStore;
}

// stuff in the store.
const gen = shopping();

console.log(gen);
console.log(gen.next(groceries));
console.log(gen.next(chlothes));