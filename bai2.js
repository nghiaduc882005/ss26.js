let arr = [3, 6, 9, 12, 15];

let userInput = prompt('Nhập giá trị cần tìm trong mảng:');

let index = arr.indexOf(parseInt(userInput));

if (index !== -1) {
  console.log(`Phần tử ${userInput} được tìm thấy tại vị trí ${index}`);
} else {
  console.log('Phần tử không tồn tại');
}
