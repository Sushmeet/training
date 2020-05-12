
const sampleObj = {
    a: 1
};
const arrObj = [
    sampleObj,
    {
        b: 2
    },
    {
        c: 3
    }
]

console.log('obj--inArray--', arrObj.includes(sampleObj))


