function moveElements(arr) {
    let negativeElements = [];
    let positiveElements = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        negativeElements.push(arr[i]);
      } else {
        positiveElements.push(arr[i]);
      }
    }
  
    return negativeElements.concat(positiveElements);
  }
  
  let arr = [3, -5, 2, -8, 7, -1, 9, -4];
  let result = moveElements(arr);
  console.log(result);
  