/** Two Sum **
 *
 * Find two numbers in the given array that add up to `target`
 * and return the indices of those two numbers in the array
 *
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([3, 2, 4], 6) -> [1, 2]
 *
 */

// JUNIOR LEVEL SOLUTION (ABSOLUTE BRUTE FORCE)
/*const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            return [i, j]
        }
    }
  }
};*/

// MID LEVEL SOLUTION
// To remove last iteration (dont need), just minus the nums.length by 1
// To make sure you dont go backwards and double check combinations you have already checked: do j = i + 1 in the second for loop
/*const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};*/

//TOP TECH SOLUTION
// Create an empty 'map' (map number we are looking for to current index)
// Then loop over each element in the array once
// At each element, we are subtracting the number of the element we are on by the target and storing it in difference
// So for the first iteration of the example up top it would be 1 - 13 = 12 (at index 0)
// So we store 12:0 in the map variable
// Then we do this for the second and third until the map variable looks like:
/* 
    map = [
        12 : 0
        11 : 1
        9 : 2
    ]
*/
// Each time we run the loop we check if the number we are on is equal to any of the numbers in map because if it was then that means those two numbers would add up to the target
// So when we run the loop the 4th time for 9, we see that there is a 9 in the map variable (the third iteration when 13 - 4 = 9)
// So we know that two numbers add up to the target (4, 9) and we saved the index of the first number (9:2 so 2) and the second index is the iteration we are on now (i)
const twoSum = (nums, target) => {
  const mapDifferenceToIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (mapDifferenceToIndex.has(nums[i])) {
        return [mapDifferenceToIndex.get(nums[i]), i]
    }

    const difference = target - nums[i]
    mapDifferenceToIndex.set(difference, i)
  }
};

module.exports = twoSum;
