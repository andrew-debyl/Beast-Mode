const nums = [21, 40 , 99, 102, 1102, 18, 20]

let l = 0;
let r = nums.length - 1;

while (l <= r) {
  let mid = Math.floor((l + r) / 2);
console.log(l, mid, r)
  if (mid < r) {
    r = mid;
  } else if (mid > r) {
    l = mid + 1;
  } else {
    return nums[mid];
  }
}
