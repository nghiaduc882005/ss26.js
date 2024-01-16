function timSoNhoNhatChuaXuatHien(arr) {
    let n = arr.length;
    let check = new Array(n + 2).fill(false);
  
    for (let i = 0; i < n; i++) {
      if (arr[i] > 0 && arr[i] <= n) {
        check[arr[i]] = true;
      }
    }
  
    for (let i = 1; i <= n + 1; i++) {
      if (!check[i]) {
        return i;
      }
    }
  
    return n + 1;
  }
  
  let mang1 = [1, 2, 5, 7];
  let mang2 = [10, 5, 7];
  
  console.log(timSoNhoNhatChuaXuatHien(mang1)); // In ra 3
  console.log(timSoNhoNhatChuaXuatHien(mang2)); // In ra 1
  