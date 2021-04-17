const nums = [6, 2, 6, 6, 8, 8, 9, 9, 3];

const uniqueNums = nums.filter((x, i, a) => a.indexOf(x) == i)

console.log(uniqueNums);