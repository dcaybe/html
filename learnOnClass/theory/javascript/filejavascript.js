//alert('hello world')
//  <!-- khai bao bien : Var name = value -->
var myFirstVariable = "hello world";    
// alert(myFirstVariable);
// //const
const pi=3.14;
// alert(pi);
//phep cong 
var soA=10;
var soB=5;
var Kqua=0;
Kquacong = soA +soB;
document.write(Kquacong);
//phep tru
Kquatru= soA-soB;
document.write(Kquatru);
//phep nhan
Kquanhan= soA*soB;
document.write("Kết quả nhân là" +Kquanhan);
//phep chia
Kquachia= soA/soB;
document.write("Kết quả chia là" +Kquachia);
//IMCREMENT
Kquacong=++soA;
//DECREMENT
// != muốn so sánh 2 biến khác kiểu cần !==
Kquatru=--soA;
sosanh= soA >soB;
document.write("Kết quả so sanh là" +sosanh +"<br>");
// &&
// ||
// ! phủ định 
var bien = undefined;// chưa được khai báo 
var check = ! bien;
document.write(check);
// kiểu dữ liệu string
var ten = "doan van hung"
document.write("tên tôi là"+ ten);
//number
var tuoi = 20;
//đổi dữ liệu vd : +parseInt()
var year = "2024";
var namSinh = 0;
namSinh = parseInt(year)-tuoi;// chuyen year tu string sang int
document.write(namSinh)
// nối chuỗi 
document.write("2004"+21);
//độ dài biến
document.write("độ dài tên là:"+ten.length); // đếm cả space
// thay thế kí tự trong chuỗii
var ten= ten.replace("van","cong");
document.write("tên tôi là"+ ten +"<br>");
document.write("vị trí chữ 'hung' trong tên"+ten.search("hung"));
ten=ten.toLowerCase();// chỉnh viet thuong
ten=ten.toUpperCase();// chỉnh viet hoa
document.write(ten);
  




