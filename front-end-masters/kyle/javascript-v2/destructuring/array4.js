// array destructure values into an object
const sushi = () => {
    return [1, 2, 3, 4, 5, 6]
};

const obj = {};

[
    obj.a,
    obj.b,
    ...obj.c
] = sushi();


console.log(obj)