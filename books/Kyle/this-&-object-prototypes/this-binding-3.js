function foo() {
    console.log(`The value of a is ${this.a}`);
}
const a = "oops, global";


const obj1 = {
    a: 7,
    foo
}

const wowza = obj1.foo; 

wowza() // will give undefined, implicit binding is lost.
wowza.call(obj1); // a is 7 hard binding.
