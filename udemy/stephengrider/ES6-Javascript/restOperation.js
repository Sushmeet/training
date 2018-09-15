// rest operation
// rest operator is used to gather the variables.

const sum = (...number) => {
console.log('Rest Operator ', number);
}
sum(1,2,3,4);
sum(9,8,3,4,5,3,2,4,5,5,3);

// spread operator

const arr1 = [1,2,4];
const arr2 = [4,5,6];

console.log('Spread Array', [...arr1,...arr2])



// ---------------- Rest and Spread Operator together
    const MathLibrary = {
        calculateProduct(...rest) {
            return this.multiply(...rest);
        },
        multiply( a , b, c) {
            return a * b * c;
        }
    }


const product = MathLibrary.calculateProduct(5,6,2);

console.log('product', product);