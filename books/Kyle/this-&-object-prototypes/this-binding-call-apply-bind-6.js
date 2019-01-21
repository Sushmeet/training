// independent print method.
function print(a, c, d) {
  console.log(this.a, a, c, d);
}

const obj = {
  a: 5
};

print.call(obj, 6, 7, 9);// send parameters only
print.apply(obj, [6, 7, 9]); // send parameters as an array
const foo = print.bind(obj,6, 7, 9); // send parameters only

foo(); // this is where u call the bind function.
