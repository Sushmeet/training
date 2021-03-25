/*
fibonacci sequence
0, 1, 1, 2, 3, 5, 8, 13, 21
*/

const fibb = (n) => {
  if (n <= 2) return 1;
  else {
    return fibb(n - 1) + fibb(n - 2);
  }
};

const value = fibb(7)

console.log(value)

/*
fibb (5) ------2

fibb(4) + fibb(3) = 3 + 2 = 5 

fibb(4) = fibb(3) + fibb(2) = 2 + 1 = 3


fibb (3) = fibb(2) + fibb(1) = 1 + 1 = 2




*/