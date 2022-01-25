// let nums = [-2,1,-3,4,-1,2,1,-5,4];
let nums = [-1,0,-2];
// let nums = [-1];

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = 0, max = null;
  nums.forEach((f) => {
    sum += f;
    if (sum < f) sum = f;
    if (max === null) max = sum;
    else max = Math.max(sum, max);
  });
  return max;
};

console.log(maxSubArray(nums));