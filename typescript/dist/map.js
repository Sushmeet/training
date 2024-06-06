const arrNumHere = [1, 2, 3, 4, 6, 4, 7];
const targetValueHere = 5;
function twoSum(arr, target) {
    const numMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        const difference = target - arr[i];
        console.log("numMap---", numMap);
        if (numMap.has(difference)) {
            return [numMap.get(difference), i];
        }
        numMap.set(arr[i], i);
    }
    throw new Error("No two sum solution");
}
const resultvalue = twoSum(arrNumHere, targetValueHere);
console.log("result", resultvalue);
