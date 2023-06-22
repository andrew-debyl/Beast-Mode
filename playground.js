const nums = [1, 2, 3, 4]

const leftProduct = [];
const rightProduct = [];
const arr = [];

leftProduct[0] = 1;
rightProduct[nums.length - 1] = 1;

for (let i = 1; i < nums.length; i++) {
  leftProduct[i] = nums[i - 1] * leftProduct[i - 1];
}

for (let i = nums.length - 2; i >= 0; i--) {
  rightProduct[i] = nums[i + 1] * rightProduct[i + 1];
}

for (let i = 0; i < nums.length; i++) {
  arr[i] = leftProduct[i] * rightProduct[i];
}

console.log(leftProduct, rightProduct, arr)