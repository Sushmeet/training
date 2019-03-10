function foo(l , b , c) {
	console.log( this.a, `a: ${l}, b: ${b}, c:${c}`);
	return this.a + l + b + c;
}

var obj = {
	a: 2
};

var bar = function(a, b, c) {
	return foo.call( obj, a, b ,c);
};

var b = bar(4, 5, 6); // 2 3
// console.log( b ); // 5