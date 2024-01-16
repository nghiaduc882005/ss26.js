function timSoLuongHinhVuong(chieuDai, chieuRong) {
    let minCanh = Math.min(chieuDai, chieuRong);
    let maxSoHinhVuong = Math.floor(chieuDai / minCanh) * Math.floor(chieuRong / minCanh);
    return `Số hình vuông tối thiểu có thể cắt được là: ${maxSoHinhVuong}, với kích thước mỗi hình vuông là: ${minCanh}`;
}

let chieuDai = prompt("Nhập chiều dài của hình chữ nhật: ");
let chieuRong = prompt("Nhập chiều rộng của hình chữ nhật: ");

console.log(timSoLuongHinhVuong(parseInt(chieuDai), parseInt(chieuRong)));
