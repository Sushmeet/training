const numbers = {
  *[Symbol.iterator]() {
    for (let i = 0; i <= 100; i++) {
      yield i;
    }
  },
};


// should print 0 to 100  step counting by 1
for (const num of numbers) {
  console.log(num);
}

// should pring 6...30 step counting by 4

// Hint
//[...numbers[Symbol.iterator](??)]
