/**
 * Given an array of integers, return indices of the two numbers
 * such that they add up to a specific target.
 * @param {array} nums the array of numbers
 * @param {number} target the target sum
 * @return {array} the two numbers in the array that add up to the target sum
 */

export const twoSum = (nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

export const twoSumOptimized = (nums: number[], target: number): number[] => {

  // Input validation
  if (nums.length < 2) {
    throw new Error('Array much contain at least two numbers')
  }


  const numMap = new Map<number, number>();
  let complement = 0;

  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i];
    }
    numMap.set(nums[i], i);
  }
  
  // If no solution is found, throw an error
  throw new Error('No two numbers found that add up to the target')
};

const nums = [2, 7, 11, 15];
const target = 9;
twoSumOptimized(nums, target);
