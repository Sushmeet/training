const arrNumHere = [1, 2, 3, 4, 6, 4, 7];
const targetValueHereAgain = 4;

function twoSum(arr: number[], target: number): number[] {
  const numMap = new Map();
  for (let i: number = 0; i < arr.length; i++) {
    const difference = target - arr[i];
    if (difference === arr[i]) {
      return [numMap.get(difference), i];
    }
    numMap.set(arr[i], i);
  }
  throw new Error("No two sum solution");
}

const resultvalue = twoSum(arrNumHere, targetValueHereAgain);

console.log("result", resultvalue);
