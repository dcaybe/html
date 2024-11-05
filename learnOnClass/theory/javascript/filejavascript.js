// //alert('hello world')
// //  <!-- khai bao bien : Var name = value -->
// var myFirstVariable = "hello world";    
// // alert(myFirstVariable);
// // //const
// const pi=3.14;
// // alert(pi);
// //phep cong 
// var soA=10;
// var soB=5;
// var Kqua=0;
// Kquacong = soA +soB;
// //document.write(Kquacong);
// //phep tru
// Kquatru= soA-soB;
// //document.write(Kquatru);
// //phep nhan
// Kquanhan= soA*soB;
// //document.write("Kết quả nhân là" +Kquanhan);
// //phep chia
// Kquachia= soA/soB;
// //document.write("Kết quả chia là" +Kquachia);
// //IMCREMENT
// Kquacong=++soA;
// //DECREMENT
// // != muốn so sánh 2 biến khác kiểu cần !==
// Kquatru=--soA;
// sosanh= soA >soB;
// //document.write("Kết quả so sanh là" +sosanh +"<br>");
// // &&
// // ||
// // ! phủ định 
// var bien = undefined;// chưa được khai báo 
// var check = ! bien;
// //document.write(check);
// // kiểu dữ liệu string
// var ten = "doan van hung"
// //document.write("tên tôi là"+ ten);
// //number
// var tuoi = 20;
// //đổi dữ liệu vd : +parseInt()
// var year = "2024";
// var namSinh = 0;
// namSinh = parseInt(year)-tuoi;// chuyen year tu string sang int
// //document.write(namSinh)
// // nối chuỗi 
// //document.write("2004"+21);
// //độ dài biến
// //document.write("độ dài tên là:"+ten.length); // đếm cả space
// // thay thế kí tự trong chuỗii
// var ten= ten.replace("van","cong");
// //document.write("tên tôi là"+ ten +"<br>");
// //document.write("vị trí chữ 'hung' trong tên"+ten.search("hung"));
// ten=ten.toLowerCase();// chỉnh viet thuong
// ten=ten.toUpperCase();// chỉnh viet hoa
// //document.write(ten);
// //doi tuong object
// var  thongTinSinhVien={
//     hoVaTen:"doan van hung",
//     gioiTinh:"nam",
//     diaChi:diaChi,
//     }
// // co the khai bao ben ngoai
// diaChi={
//     thanhPho:"ha noi",
//     quanHuyen:"bac tu liem",
//     phuongXa:"duc thang",

// }
// //lenh goi
// var Kqua = "xin chao ten toi la:"+thongTinSinhVien.hoVaTen+ "toi nam nay"+thongTinSinhVien.tuoi+"toi dang o"+thongTinSinhVien.diaChi.thanhPho;
// //kiem tra kieu du lieu trong string
// //document.write("<br>");
// var Kqua_kieudulieu=typeof(thongTinSinhVien.hoVaTen);
// //document.write("kiểu dữ liệu của tên là"+ketQua);
// //cat chuoi
// var myString = "hello world";
// var ketQua = myString.slice(0,5);//lấy gtri tu vị trí 0 đến 5   
// //thay the toan bo ki tu 
// var ketQua = myString.replaceall("hello","xin chao");
// //tim kiem ki tu trong chuoi
// //==imcludes
// //indexOf : tim kiem vi tri dau tien cua ki tu trong chuoi
// //tach mang 
// myString.split(' ');// tach chuoi theo dau cach =>> ["hello","world"]
// myString.split('o');// tach chuoi theo ki tu =>> ["hell"," w","rld"]

// var tuoi=20;
// var ketQua = `toi nam nay ${tuoi} tuoi`;// dung dau `` de noi chuoi
// //kiem tra chuoi co bat dau bang chuoi nao do hay khong
// myString.startsWith("hello"); // true

// // ep kieu 
// var number = "10";
// number= Number(number)+1;
// // parseInt() : chuyen chuoi sang so nguyen
// // parseFloat() : chuyen chuoi sang so thuc
// // parseInt("10.5") => 10
// // parseFloat("10.5") => 10.5

// //lay n ki tu sau dau thap phan
// var Pi = 3.14159265359;
// Pi.toFixed(2);// 3.14

// //khoi tao ngay cu the
// var date = new Date();
// //lay ngay thang nam
// var day = new Date('2021-10-10');
// //lay ngay hien tai
// var day = new Date('2021-10-10').getDay();
// //lay ngay hien tai
// var sosanh = new Date('2021-10-10') > new Date('2021-10-11');




// // array
// var arr = ["1","2","3","4","5"];
// var ketqua = arr.indexOf("3");// tim kiem vi tri cua phan tu
// // document.write(ketqua);
// var ketqua = arr.lastIndexOf("3");// tim kiem vi tri cua phan tu cuoi cung
// var ketqua= arr.isArray(arr);// kiem tra xem co phai la mang hay khong
// // thay doi gia tri trong mang
// arr[0]="6";
// // nối mảng
// var a=[1,2,3];
// var b=[4,5,6];
// var c=a.concat(b); // có thể nối nhiều mảng a=b.canca(c,d) =>> noi b c d
// // thay the dau "," bang dau khac (se bien mang thanh string)
// var ketqua = arr.join("-");
// //lay gia tri cuoi cung cua mang va xoa no
// var ketqua = arr.pop();
// // đẩy 1 phần tử vào cuối mảng
// arr.push("6");
// // đảo lại mảng
// var ketqua = arr.reverse();
// // xóa phần tử đầu tiên
// var ketqua = arr.shift();
// // thêm phần tử đầu mảng
// var ketqua = arr.unshift("0");


// var thgian;
// var time = new Date().getHours();
// if (time>1 && time<=6){
//    thgian = "đêm";
// }
//     else if(time>6 && time<=12){
//         thgian = "sáng";
//     }
//     else if(time>12 && time<=18){
//         thgian = "chiều";
//     }
//     else{
//         thgian = "tối";
//     }
// document.write(thgian);

// var khoa = 70;
// var ketQua = "Sinh viên năm ";

// if(khoa < 66){
//     ketQua = "Đã tốt nghiệp";
// }
// else if(khoa == 66){
//     ketQua = ketQua + "4";
// }
// else if(khoa == 67){
//     ketQua = ketQua + "3";
// }
// else if(khoa == 68){
//     ketQua = ketQua + "2";
// } 
// else if(khoa == 69){
//     ketQua = ketQua + "1";
// } 
// else {
//     ketQua = "Không có khoá học này";
// }
// document.write(ketQua);
// var diachi={
//     thon:"my loc",
//     xa:"cao duc"
// }
// var info={
//     name:"hung",
//     age:20,
//     id:2221050508,
//     hobby:"code",
//     diachi:diachi}

// document.write(info.diachi.xa);
    // var namNhapHoc = 2025;
    // if(namNhapHoc< 1966)
    //     document.write("Nhà trường chưa thành lập");
    //     else if(namNhapHoc>=1966 && namNhapHoc<=2018)
    //      document.write("Đã tốt nghiệp");
    //         else if(namNhapHoc>2018 && namNhapHoc<=2024)
    //             document.write("Đang theo học");
    //                 else document.write("Khóa học sắp diễn ra");

// var so=20;
// if (so%2==0)
//     document.write(so+" :là số chẵn")
//         else document.write(so+" :là sỗ lẻ")
// var soA,soB,soC,max;
// soA=1;
// soB=2;
// soC=3;
// soA>soB?max=soA:max=soB;
// soC>max?document.write(soC+"là số lớn nhất"):document.write(max+"là số lớn nhất")
// var score=100;
// if(score<2) document.write("điểm F");
//     else if(score>=2 &&score<4)document.write("điểm E");
//     else if(score>=4 &&score<5)document.write("điểm D");
//     else if(score>=5 &&score<6)document.write("điểm C");
//     else if(score>=6 &&score<8)document.write("điểm B");
//     else if(score>=8 &&score<=10)document.write("điểm A");
//         else document.write("vượt khung");
// debugger
// var day=new Date().getDay();

// switch (day){
//     case 0 : document.write("CN");
//         break;
//     case 1 : document.write("T2");
//         break;
//     case 2 : document.write("T3");
//         break;
//     case 3 : document.write("T4");
//         break;
//     case 4 : document.write("T5");
//         break;
//     case 5 : document.write("T6");
//         break;
//     case 6 : document.write("T7");
//         break;
//     default  : document.write("KHONG TON TAI");
//         break;
// }

// var Array=["Hùng"];

// var number=[2,3,6,9,13,27];
// var number1 = [];
// var evennumber = [];
// var oddnumber = [];

// for(var i=0;i<6;i++){
//     if(number[i]%2==0)
//         {number1[i]=number[i]*2;evennumber[i]=number1[i]}
//         else{ number1[i]=number[i]*3;oddnumber[i]=number1[i]

// }
// }
// // document.write(number1);


// document.write(evennumber+"<br>");
// document.write(oddnumber);
// var A =[false,false,false,false,false,false,false,false,false,true,true,true,true,true,true,true]
// var quamon=0,tachmon=0;
// for (let index = 0; index <A.length; index++) {
//    if(A[index]==false )quamon=quamon+1;
//    if(A[index]==true)tachmon++;
    
    
// }
// document.write("qua:"+quamon+"tach"+tachmon)




// startWith (..): xem chuỗi bắt đầu bằng (..) hay không
// var dem=0;
// var stt=0;

// var ten = ["Nguyễn Thị Diệu An","Phạm Văn An ","Đỗ Việt Anh ","Lê Công Thái Anh ","Nguyễn Bùi Quang Anh ","Nguyễn Lê Minh Anh ","Phạm Quốc Bảo ","Hoàng Thị Tân Bình ","Nguyễn Đức Chính ","Bùi Văn Công ","Vũ Thành Công ","Nguyễn Minh Cường ","Phạm Quốc Cường ","Trần Mạnh Cường ","Phạm Thu Dung ","Trần Mạnh Dũng ","Lê Hoàng Dương ","Nguyễn Đình Dương ","Trần Ngọc Đại ","Trần Mạnh Đạt ","Đào Bá Đức ","Đặng Văn Đức ","Trần Vĩnh Giáp ","Đặng Cao Hậu ","Nguyễn Trung Hiếu ","Trần Mỹ Hoa ","Lê Văn Hồ ","Nguyễn Thế Hơn ","Đoàn Văn Hùng ","Nguyễn Thị Huyền ","Nguyễn Văn Kiên ","Bùi Thế Linh ","Hồ Văn Luân ","Dương Đức Mạnh ","Đậu Bá Mạnh ","Đặng Văn Minh ","Nguyễn Quang Minh ","Vũ Đức Minh ","Tô Hoàng Nam ","Vũ Thị Kim Ngân © ","Nguyễn Khả Nguyên ","Đinh Duy Nhất ","Trần Thị Yến Nhi ","Bùi Đức Nhương ","Mai Văn Phong ","Phạm Duy Phong ","Trần Duy Phong ","Nguyễn Huy Phúc ","Nguyễn Như Quỳnh ","Hoàng Minh Thành ","Bùi Trung Thông ","Bùi Việt Tiến ","Nguyễn Đình Trọng ","Phạm Xuân Trường ","Nguyễn Anh Tú ","Hoàng Công Tuấn ","Đỗ Mạnh Tường ","Nguyễn Thái Vinh ","Nguyễn Thế Vinh ","Nguyễn Đình Vượng ","Nguyễn Hà Vy "];
// for (let index = 0; index < ten.length; index++) {
//     if(ten[index].startsWith("Nguyễn")){
//         // dem++;
//         // mayaehonguyen.push(ten[index]);
//         // document.write(stt+ten[index]+"<br>");
//         // stt++;
//         ten.pop(ten[index]);
//         }
// }
//  document.write(ten);

// var danhSach = [
//     {
//         Ten: "Nguyễn Thị Diệu An",
//         monHoc: {
//             java: {
//                 diemA: 10,
//                 diemB: 6,
//                 diemC: 7,
//                 diemChu: ""
//             },
//             dotNet: {
//                 diemA: 6,
//                 diemB: 5,
//                 diemC: 7,
//                 diemChu: ""
//             },
//         },
//     },
//     {
//         Ten: "Phạm Văn An",
//         monHoc: {
//             java: {
//                 diemA: 5,
//                 diemB: 4,
//                 diemC: 3,
//                 diemChu: ""
//             },
//             dotNet: {
//                 diemA: 6,
//                 diemB: 7,
//                 diemC: 8,
//                 diemChu: ""
//             },
//         },

//     },
//     {
//         Ten: "Nguyễn Lê Minh Anh",
//         monHoc: {
//             java: {
//                 diemA: 6,
//                 diemB: 7,
//                 diemC: 8,
//                 diemChu: ""
//             },
//             dotNet: {
//                 diemA: 5,
//                 diemB: 4,
//                 diemC: 3,
//                 diemChu: ""
//             },
//         },

//     }
// ];

// var diemSoJava,diemSoDotNet;
// for(var i=0;i<danhSach.length;i++){
//     if(danhSach[i].Ten.startsWith("Nguyễn"))
//        {
//         diemSoJava=0.1*danhSach[i].monHoc.java.diemC+0.3*danhSach[i].monHoc.java.diemB+0.6*danhSach[i].monHoc.java.diemA;
//         diemSoDotNet=0.1*danhSach[i].monHoc.dotNet.diemC+0.3*danhSach[i].monHoc.dotNet.diemB+0.6*danhSach[i].monHoc.dotNet.diemA;
//         console.log(diemSoDotNet , diemSoJava);
//         if(diemSoJava<4)
//             danhSach[i].monHoc.java.diemChu="F";
//         else if(diemSoJava>=4 && diemSoJava<=4.7)
//              danhSach[i].monHoc.java.diemChu="D";
//         else if(diemSoJava>=4.8 && diemSoJava<=5.4)
//              danhSach[i].monHoc.java.diemChu="D+";
//         else if(diemSoJava>=5.5 && diemSoJava<=6.2)
//              danhSach[i].monHoc.java.diemChu="C";
//         else if(diemSoJava>=6.3 && diemSoJava<=6.9)
//              danhSach[i].monHoc.java.diemChu="C+";
//         else if(diemSoJava>= 7.0 && diemSoJava<=7.7)
//              danhSach[i].monHoc.java.diemChu="B";
//         else if(diemSoJava>=7.8 && diemSoJava<=8.4)
//              danhSach[i].monHoc.java.diemChu="B+";
//         else if(diemSoJava>=8.5 && diemSoJava<=8.9)
//              danhSach[i].monHoc.java.diemChu="A";
//         else if (diemSoJava>=9 && diemSoJava<=10)
//              danhSach[i].monHoc.java.diemChu="A+";

//              if(diemSoDotNet<4)
//                 danhSach[i].monHoc.dotNet.diemChu="F";
//             else if(diemSoDotNet>=4 && diemSoDotNet<=4.7)
//                  danhSach[i].monHoc.dotNet.diemChu="D";
//             else if(diemSoDotNet>=4.8 && diemSoDotNet<=5.4)
//                  danhSach[i].monHoc.dotNet.diemChu="D+";
//             else if(diemSoDotNet>=5.5 && diemSoDotNet<=6.2)
//                  danhSach[i].monHoc.dotNet.diemChu="C";
//             else if(diemSoDotNet>=6.3 && diemSoDotNet<=6.9)
//                  danhSach[i].monHoc.dotNet.diemChu="C+";
//             else if(diemSoDotNet>= 7.0 && diemSoDotNet<=7.7)
//                  danhSach[i].monHoc.dotNet.diemChu="B";
//             else if(diemSoDotNet>=7.8 && diemSoDotNet<=8.4)
//                  danhSach[i].monHoc.dotNet.diemChu="B+";
//             else if(diemSoDotNet>=8.5 && diemSoDotNet<=8.9)
//                  danhSach[i].monHoc.dotNet.diemChu="A";
//             else if(diemSoDotNet>=9 && diemSoDotNet<=10)
//                  danhSach[i].monHoc.dotNet.diemChu="A+";


//          document.write("Tên:"+danhSach[i].Ten + "<br>" + "Điểm chữ java:" +danhSach[i].monHoc.java.diemChu + "<br>" + "Điểm chữ dotNet:" + danhSach[i].monHoc.dotNet.diemChu + "<br>" );

//        }
// }

// var data=prompt('Hay nhap thong tin'); //nhap ki tu bang thanh thong bao



// function check ( data){
//     if(isNaN(data))
//         document.write(' Nội dung vừa nhập là chữ');
//         else  document.write(' Nội dung vừa nhập là số ');
// }

// check(data);










