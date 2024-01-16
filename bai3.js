let mangSoNguyen = [1, 3, 5, 3, 7, 9, 3];

let soCanTim = prompt("Nhập vào số nguyên cần tìm: ");
soCanTim = parseInt(soCanTim); 

let soLanXuatHien = 0;
for (let i = 0; i < mangSoNguyen.length; i++) {
  if (mangSoNguyen[i] === soCanTim) {
    soLanXuatHien++;
  }
}

console.log(`Số ${soCanTim} xuất hiện ${soLanXuatHien} lần trong mảng.`);
