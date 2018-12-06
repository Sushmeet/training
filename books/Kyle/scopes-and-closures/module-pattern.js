function CoolModule(something = 'some') {
    let arr = [1, 2, 3];
    let publicApi = {};

    function doSomething() {
        return something;
    }

    function doAnother() {
        return arr.join(' ');
    }

    publicApi = {
        doAnother,
        doSomething,
    }
     return publicApi;
};

let foo = CoolModule('banana');
let res1 = foo.doAnother();
let res2 = foo.doSomething();

console.log(res1);
console.log(res2);