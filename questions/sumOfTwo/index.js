/** Sum of Two **
 *
 * Given two arrays, 'nums1' and 'nums2', return true if
 * there are two numbers in both arrays which can add up to
 * an integer target. Otherwise, return false.
 *
 * @example
 * sumOfTwo([1, 2, 3], [5, 2], 8) -> true
 * sumOfTwo([0, 12, 8], [3, 1, 4], 2) -> false
 * sumOfTwo([4, 5, 8], [3, 1, 4], 9) -> true
 *
 */


//You can only have unique elements in a set
const sumOfTwo = (nums1, nums2, target) => {
  const diff = new Set()

  for (let i = 0; i < nums1.length; i++) {
    diff.add(target - nums1[i])
  }

  for (let i = 0; i < nums2.length; i++) {
    if (diff.has(nums2[i])) {
      return true
    }
  }

  return false
};

module.exports = sumOfTwo;
