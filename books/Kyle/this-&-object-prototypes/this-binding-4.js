function foo() {
    console.log(`The value of a is ${this.a}`);
}

const a = "oops, global";

const obj1 = {
    a: 7,
    foo
}

const window = {
    a:3
}

const bar = function() {
   return foo.call(obj1);
}

bar();
setTimeout(bar, 100);

// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden
bar.call( window ); // 7