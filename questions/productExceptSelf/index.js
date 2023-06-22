/** Product of Array except Self:
 *
 * Write a function that takes in an array of integers 'nums' and
 * returns an array with the product of all integers except the current integer.
 * 
 * Note: You can not use the division operator 
 * 
 * Follow up: Can you do this in constant space? The results array does NOT count to the space.
 *
 * @examples
 * productExceptSelf([1, 2, 3, 4]) -> [24, 12, 8, 6]
 * productExceptSelf([3, 2, 6, 1]) -> [12, 18, 6, 36]
 * productExceptSelf([10, 1, 5, 2]) -> [10, 100, 20, 50]
 */


//Without constant space
/*const productExceptSelf = (nums) => {
    const leftProduct = []
    const rightProduct = []
    const results = []

    leftProduct[0] = 1
    rightProduct[nums.length - 1] = 1

    for (let i = 1; i < nums.length; i++) {
        leftProduct[i] = nums[i-1] * leftProduct[i-1]  
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        rightProduct[i] = nums[i+1] * rightProduct[i+1]
    }

    for (let i = 0; i < nums.length; i++) {
        results[i] = leftProduct[i] * rightProduct[i]
    }

    return results
};*/


//With constant space:
const productExceptSelf = (nums) => {
    const results = []

    results[0] = 1
    let rightProduct = 1

    for (let i = 1; i < nums.length; i++) {
        results[i] = nums[i-1] * results[i-1]  
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        results[i] = results[i] * rightProduct
        rightProduct = rightProduct * nums[i]
    }

    return results
};

module.exports = productExceptSelf;
