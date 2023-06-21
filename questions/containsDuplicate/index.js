/** Contains Duplicate **
 *
 * Given an array of integers, return true if any integer appears
 * at least twice in the array, otherwise return false.
 *
 * @example
 * containsDuplicate([1, 2, 3, 4]) -> false
 * containsDuplicate([1, 2, 2, 5]) -> true
 * containsDuplicate([1, 2, 9, 5, 9]) -> true
 *
 */

//BRUTE FORCE SOLUTION
/*const containsDuplicate = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
    }
    return false
}*/

//SORTING SOLUTION
/*
const containsDuplicate = (nums) => {
  sortedArr = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      return true;
    }
  }
  return false;
};*/

//TOP TECH SOLUTION
// (can also use map)
const containsDuplicate = (nums) => {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }
  return false;
};

module.exports = containsDuplicate;
