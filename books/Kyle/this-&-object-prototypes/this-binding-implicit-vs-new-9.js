function foo(a) {
  return this.a = a
}

const obj1  = {
  foo
};

const obj2 = {};

obj1.foo(2); // call site is obj1
console.log('obj1', obj1.a);

const obj3 = new foo(4); 
const obj4 =  new obj1.foo(9);
console.log('obj3', obj3.a); // a is 4
console.log('obj1',  obj1.a ); // 2
console.log('obj4', obj4.a); // a is 9

obj1.foo.call( obj2, 3 );
console.log( 'obj2', obj2.a ); // 3
