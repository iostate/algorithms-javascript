const findTwoSum = function (nums, target) {
  let indexes = [];
  for (let i = 0; i < nums.length; i++) {
    const numToFind = target - nums[i];
    for (let ii = i + 1; ii < nums.length; ii++) {
      console.log(`${nums[i]} + ${nums[ii]}`);
      console.log(nums[i] + nums[ii]);
      console.log(numToFind + '\n');
      if (numToFind == nums[ii]) {
        return indexes;
      }
    }
  }
  return null;
};
let test1 = [1, 3, 7, 14, 2];
let test2 = [1, 3, 14, 11, 14];
const result = findTwoSum(test1, 11);
const result2 = findTwoSum(test2, 13);
console.log(result);
console.log(result2);
