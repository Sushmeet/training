import { twoSum, twoSumOptimized } from "./twoSumProblem2";

describe("twosum", () => {
  test("should find indices for target sum 9", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  test("should find indices when numbers appear later in array", () => {
    const nums = [5, 3, 4, 7];
    const target = 11;
    expect(twoSum(nums, target)).toEqual([2, 3]);
    expect(twoSumOptimized(nums, target)).toEqual([2, 3]);
  });

  test("should handle array with multiple valid solutions", () => {
    const nums = [2, 2, 3, 4];
    const target = 4;
    expect(twoSum(nums, target)).toEqual([0, 1]); // Returns first valid solution
    expect(twoSumOptimized(nums, target)).toEqual([0, 1]); // Returns first valid solution
  });

  test("should work with zero as target", () => {
    const nums = [0, 2, -2, 4];
    const target = 0;
    expect(twoSum(nums, target)).toEqual([1, 2]);
    expect(twoSumOptimized(nums, target)).toEqual([1, 2]);
  });
  test("should have atleast two numbers otherwise error is thrown", () => {
    const nums = [1];
    const target = 0;
    // expect(twoSumOptimized(nums, target)).toThrow(new Error("Array much contain at least two numbers"));
    expect(() => twoSumOptimized(nums, target)).toThrow("Array much contain at least two numbers")
  });
});
