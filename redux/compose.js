const { compose } = require("redux");

const makeLouder = (string) => string.toUpperCase();
const makeRepeat = (string) => string.repeat(3);
const makeBold = (string) => string.bold();

const result1 = compose(makeLouder, makeRepeat, makeBold); // HELLO => HELLOHELLOHELLO => <b> HELLOHELLOHELLO </b>
// <b>hello</b> => <b>hello</b><b>hello</b><b>hello</b> => <B>HELLO</B><B>HELLO</B><B>HELLO</B>

console.log("result1---", result1("hello"));

const result2 = compose(makeRepeat, makeBold, makeLouder);
//left to write and the right most function determines how many arguments u pass.
// HELLO => <b>HELLO</b> =><b>HELLO</b><b>HELLO</b><b>HELLO</b>

console.log("result2---", result2("hello"));

const result3 = compose(makeBold, makeLouder, makeRepeat);
// hellohellohello ==> HELLOHELLOHELLO ==> <b>HELLOHELLOHELLO</b>
console.log("result3---", result3("hello"));
