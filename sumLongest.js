
// //find pair with given sum
// const findPairEqualToSum = (array, sum) => {
//   let hashMap = {},
//     results = [];

//   for (let i = 0; i < array.length; i++) {
//     if (hashMap[array[i]]) {
//       results.push([hashMap[array[i]], array[i]]);
//     } else {
//       hashMap[sum - array[i]] = array[i];
//     }
//   }
//   return results;
// };
// console.log('findPairEqualToSum', findPairEqualToSum([1, 2, 3, 4, 5, 6, -1], 0));

// //Find longest common in 2 strings
// const findLongestCommonStr = (str1, str2) => {
//   if (!str1 || !str2) return false;
//   let result = "";
//   for (let i = 0; i < str1.length - 1; i++) {
//     let n = 0;
//     let temp = "";
//     while (n < str2.length) {
//       if (str1[n + i] === str2[n]) {
//         temp += str2[n];
//       }
//       n++;
//     }
//     if (temp.length > result.length) result = temp;
//   }
//   return result;
// };

// console.log('findLongestCommonStr', findLongestCommonStr("tes1t", "test"));

// find all combinations hav total elemt === total
function combine(len, start, input, n, listResult, result, total) {
  if(len === 0) {
    const temp = result.reduce((total, item) => total + item, 0)
    if (temp === total) {
      listResult.push([...result])
    }
    return;
  }

  for (let i = start; i <= input.length - len; i++) {
    result[n - len] = input[i];
    combine(len-1, i+1, input, n, listResult, result, total);
  }
}
 
function allCombine(input) {
  const listResult = []
  for (let i = 1; i <= input.length; i++) {
    const result = [];
    combine(i, 0, input, i, listResult, result, 12)
  }

  console.log(listResult)
}


