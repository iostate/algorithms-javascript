const findTwoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const numToFind = target - nums[i];
    for (let ii = i + 1; ii < nums.length; ii++) {
      if (numToFind == nums[ii]) {
        return [i, ii];
      }
    }
  }
  return null;
};
let test1 = [1, 3, 7, 9, 2];
let test2 = [1, 3, 14, 11, 14];
const result = findTwoSum(test1, 11);
const result2 = findTwoSum(test2, 13);
console.log(result);
console.log(result2);
