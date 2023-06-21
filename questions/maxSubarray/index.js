/** Maximum Subarray
  *  
  * Given an integer array `nums`, find the subarray which has the 
  * largest sum and return the sum. 
  * 
  * @examples
  * maxSubArray([5, 4, -1, 7, 8]) = 23
  * maxSubArray([-2, 1, -3, 4, -1, 2, -5, 0]) = 5
  * maxSubArray([2, 4, 3, -1, -4, -9]) = 9
  */


// How to find every subarray inside of an array:
// For second loop need <= because the second argument for slice is exclusive
/*
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j <= nums.length; j++) {
    console.log(nums.slice(i, j))
  }
}*/


// O(n^3) time (not fast) | O(n) space
/*const maxSubArray = (nums) => {
  let maxSum = nums[0]

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      const subarray = nums.slice(i, j)
      const sum = subarray.reduce((acc, curr) => acc + curr)

      if (sum > maxSum) {
        maxSum = sum
      }
    }
  }

  return maxSum
}*/


// O(n^2) time | O(1) space
/*const maxSubArray = (nums) => {
  let maxSum = nums[0]

  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]

      if (sum > maxSum) {
        maxSum = sum
      }
    }
  }

  return maxSum
}*/


// MOST OPTIMAL - 0(n) time | O(1) space
const maxSubArray = (nums) => {
  let maxSum = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) {
      sum = 0;
    }

    sum += nums[i];

    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum;
};



//DO NOT EDIT BELOW THIS LINE
module.exports = maxSubArray;

