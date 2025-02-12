/**
 * Given an array of integers, return indices of the two numbers
 * such that they add up to a specific target.
 * @param {array} nums the array of numbers
 * @param {number} target the target sum
 * @return {array} the two numbers in the array that add up to the target sum
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(` i is ${nums[i]} and k is ${nums[j]}`);
      // lets check if we add the 2 numbers if it equals target
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
};

const twoSum2 = (nums, targetSum) => {
  const twoSumOptimized = (nums, target) => {
    const mapOfStuff = new Map();

    // write a for loop, to go through the arr
    for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];

      if (mapOfStuff.has(complement)) {
        return [mapOfStuff.get(complement), i];
      }
      mapOfStuff.set(nums[i], i);
    }
  };
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
console.log(twoSumOptimized(nums, target));
