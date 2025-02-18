import { mergeSortedOptimized } from "./mergeSortedArray";

describe("mergeSimple", () => {
  test("merges two sorted arrays", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [2, 5, 6];
    // mergeSimple(nums1, 3, nums2, 3);
    mergeSortedOptimized(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  test("merges with an empty second array", () => {
    const nums1 = [1];
    const nums2: number[] = [];
    // mergeSimple(nums1, 1, nums2, 0);
    mergeSortedOptimized(nums1, 1, nums2, 0);
    expect(nums1).toEqual([1]);
  });

  test("merges with an empty first array", () => {
    const nums1 = [0];
    const nums2 = [1];
    // mergeSimple(nums1, 0, nums2, 1);
    mergeSortedOptimized(nums1, 0, nums2, 1);
    expect(nums1).toEqual([1]);
  });

  test("merges when both arrays are empty", () => {
    const nums1: number[] = [];
    const nums2: number[] = [];
    // mergeSimple(nums1, 0, nums2, 0);
    mergeSortedOptimized(nums1, 0, nums2, 0);
    expect(nums1).toEqual([]);
  });

  test("merges with duplicates", () => {
    const nums1 = [1, 2, 2, 0, 0, 0];
    const nums2 = [2, 3, 4];
    // mergeSimple(nums1, 3, nums2, 3);
    mergeSortedOptimized(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 2, 2, 3, 4]);
  });
});
