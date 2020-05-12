// We usually think of a map as returning the same 
// number of elements from an array.

// But with flat map we can remove elemets or add elements to an array.

// flat map lets you add or remove 
// 
const arr = [1, 2, 3, 4, 5, 6]

const arrMap = arr.flatMap((v) => {
    if (v % 2 === 0) {
        return [v, v * 2];
    }
    else {
        return [];
    }
})

console.log(arrMap);
// [ 2, 4, 4, 8, 6, 12 ]