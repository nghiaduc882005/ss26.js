let arr = [5, 'hello', true, 3.14, 9, null];

let hasInteger = false; 

for (let i = 0; i < arr.length; i++) {
  if (Number.isInteger(arr[i])) {
    console.log(arr[i]);
    hasInteger = true;
  }
}

if (!hasInteger) {
  console.log("Trong mang khong ton tai so nguyen");
}
