const suspectNames = ['Mr Green', 'mrs Peacock', 'Prof Plum'];
const weapons = ['Revolver', 'Knife'];
const rooms = ['Billiard Room', 'Kitchen'];


const createEmptyArray = (length, value) => {
    return Array(length).fill(value);
}


const createObjectsWithGivenValues = (array) => {
    const obj = {};
    const emptyTracker = createEmptyArray(4,0);

    array.forEach((elm) => {
        obj[elm] = emptyTracker;
    })
    return obj;
}

const result = createObjectsWithGivenValues(suspectNames)
console.log('----', result);


// const result2 = createObjectsWithGivenValues(result);
// console.log('----', result2);


// const result3 = createObjectsWithGivenValues(result2);
// console.log('----', result3);