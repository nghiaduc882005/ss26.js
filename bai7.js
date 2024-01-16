function findSubarrayWithSum(arr, targetSum) {
    for (let i = 0; i < arr.length; i++) {
      let currentSum = arr[i];
      for (let j = i + 1; j < arr.length; j++) {
        if (currentSum === targetSum) {
          return arr.slice(i, j);
        }
        if (currentSum > targetSum || j === arr.length) {
          break;
        }
        currentSum += arr[j];
      }
    }
    return "Không có mảng con thỏa mãn";
  }
  
  let array = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];
  let target = 14;
  let result = findSubarrayWithSum(array, target);
  console.log(result);
  