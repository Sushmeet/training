function createFunction() {
    function multiplyBy2 (num) {
        return num * 2;
    }

    return multiplyBy2;
}

// generatedFun now has the value of createFun which is multiply by 2
const generatedFunc = createFunction(); 
const result = generatedFunc(3); // this is running multiplyBy2()

console.log('result---', result);