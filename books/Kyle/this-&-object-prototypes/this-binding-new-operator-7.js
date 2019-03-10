function foo(a) {
    this.a = a;
}

const obj = new foo(3);

console.log(obj);//foo { a: 3 }
console.log(obj.a);//3

