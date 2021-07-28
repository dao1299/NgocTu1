//ẩn cart hàng -> ẩn bằng thuộc tính style luôn cũng đc display:none:>
//document.getElementById("showcart").style.display = "none";

// if  (localStorage.getItem(giohang)==null)
//     {
//         console.log("1")
//         var giohang = new Array();

//     }
// else
// {
//    listSP=JSON.parse(localStorage.getItem(string))
// } 
var slick1
var giohang=new Array();
if (localStorage.getItem("giohang")!=null){
    giohang=JSON.parse(localStorage.getItem("giohang"))
}           
function themvaogiohang(x){
    console.log(x)
    var sp = x.parentElement.children;
    var hinh = sp[0].children[0].src;
    var tensp = sp[1].innerText;
    var gia = parseInt(sp[2].children[0].innerText);
    var soluong = parseInt(sp[3].value);
    var sp = new Array(hinh, tensp, gia, soluong);

    //kiem tra giỏ hàng
    var kiemtra =0; //biến kiểm tra
    for(let i = 0; i < giohang.length; i++){
        if(giohang[i][1] == tensp){
            kiemtra = 1;
            soluong += parseInt(giohang[i][3]);
            giohang[i][3] = soluong;
            alert("Thêm thành công "+soluong+" sản phẩm "+tensp+" vào giỏ hàng!");
            break;
        }
    }
    if(kiemtra == 0 ){
       //nếu kta =0 => đẩy sp vào giohang
        giohang.push(sp); 
        alert("Thêm thành công "+soluong+" sản phẩm "+tensp+" vào giỏ hàng!");
    }

    //thông báo
    showcountsp();
    //lưu sp lên localStorage
    //sessionStorage.setItem("giohang", JSON.stringify("giohang"));
    localStorage.setItem("giohang", JSON.stringify(giohang));
}//done thêm


function showmycart(){
    var ttgh = "";
    var tongtien = 0;

    for(let i=0; i<giohang.length; i++){
        var thanhtien = giohang[i][2] * giohang[i][3];
        // var thanhtien = dongia*soluong;
        tongtien += thanhtien;
        ttgh += '<tr>'+
                    '<td>'+(i+1)+'</td>'+
                    '<td><img src="'+giohang[i][0]+'"></td>'+
                    '<td>'+giohang[i][1]+'</td>'+
                    '<td>'+
                        '<span id="donGia">'+giohang[i][2]+'</span>'+
                    '</td>'+
                    //'<td>'+giohang[i][3]+'</td>'+
                    //

                    '<td>'+
                        '<input onchange="updateSL_Gia()"; id="ipSL"; type="number" name="soluong" min=1 max=10 value="'+giohang[i][3]+'">'+
                    '</td>'+
                    
                    '<td>'+
                        '<div id="thanhTien">'+thanhtien+'</div>'+
                    '</td>'+ 

                    '<td>'+
                        '<button class="dlt"; onclick="deleteOne(this)">X</button>'+
                    '</td>'+  
                '</tr>';

        var sl = 0;
        sl = giohang[i][3];
    }
    ttgh += '<tr>'+
                '<td style="border: 0px solid black" colspan="2"><b>Tổng hóa đơn:</b></td>'+
                '<td style="border: 0px solid black" colspan="2"; id="tongTien"><b>'+tongtien+'VND</b></td>'+
                '<td style="border: 0px solid black" colspan="2"></td>'+
                '<td style="border: 0px solid black">'+
                    '<button onclick="deleteAll()"; style=" font-size: 15px; font-weight: bold; color: blueviolet; margin-top: 10px;color: red;">X_all</button>'+
                '</td>'+
            '</tr>';
    document.getElementById("mycart").innerHTML = ttgh;
    document.getElementById("contentTableCart").innerHTML = ttgh;
    showcountsp(sl);
}

function showcountsp(sl){
    var sl =0;
    for(let i = 0; i < giohang.length; i++){
        sl += giohang[i][3];
    }
    document.getElementById("countsp").innerHTML = sl;
    
}

function showcart(){
    var x = document.getElementById("showcart");
    if(x.style.display == "block"){
        x.style.display = "none";
    }
    else{
        x.style.display = "block";
    }
    showmycart();
}
function showcart2(){
    var x = document.getElementById("contentTableCart");
    showmycart();
}

// function updateOnMyCart(){
//     var tongtien = 0;
//     var ipsl= document.getElementById("ipSL");
//     for(let i=0; i<giohang.length; i++){

//         var gia = parseFloat(donGia.innerText);
//         var ipsl = ipSL.value; // lấy giá trị trong thẻ input
//         tongtien += (price * ipsl);
        
//         var sl = 0;
//         sl = giohang[i][3];
//     }
//     document.getElementsById("tongTien").innerText = tongtien + 'VNĐ';
    

//}
// function updateSL_Gia() {

//     for(let i=0; i<giohang.length; i++){
//     var dgia = document.getElementById("donGia")
//     var dg = parseInt(dgia.innerText);
//     var ipsl = document.getElementById("ipSL");
//     var sl = ipsl.value;
    
//     var thanhtien;
//     var tongtien;

    
//         var sl = ipsl.value;
//         thanhtien = sl * dg;
//         tongtien += thanhtien;
//     }
//     document.getElementById("thanhTien").innerText = thanhtien;
//     document.getElementById("tongTien").innerText = tongtien;

// }

function deleteOne(x) {

    var tr = x.parentElement.parentElement;
    var tensp = tr.children[2].innerText;
    tr.remove();

    //xoa sp trong mang
    for(let i= 0; i < giohang.length; i++){
            
         if(giohang[i][1] == tensp){

            giohang.splice(i, 1);
        }  
    }
    localStorage.setItem("giohang", JSON.stringify(giohang));
    showmycart();
}

function deleteAll() {
    giohang = [];
    localStorage.setItem("giohang", JSON.stringify(giohang));
    showmycart();
} //done

function closeTab(){
    var gh = document.getElementById("showcart");
    gh.style.display = "none";
}
///////////////////////////////////

// function showGH_ThanhToan(){
//     var gh = localStorage.getItem("giohang");
//     var giohang = JSON.parse(gh);


//     var ttgh = "";
//     var tongtien = 0;

//     for(let i=0; i < giohang.length; i++){

//         var thanhtien = giohang[i][2] * giohang[i][3];
//         tongtien += thanhtien;

//         ttgh += '<tr>'+
//                     '<td>'+(i+1)+'</td>'+
//                     '<td><img src="'+giohang[i][0]+'"></td>'+
//                     '<td>'+giohang[i][1]+'</td>'+
//                     '<td>'+giohang[i][2]+'</td>'+
//                     '<td>'+giohang[i][3]+'</td>'+
//                     '<td>'+
//                         '<div>'+thanhtien+'</div>'+
//                     '</td>'+ 
//                 '</tr>';
//     }
//     ttgh += '<tr >'+
//                 '<td style="border: 0px solid black" colspan="2"><b>Tổng hóa đơn:</b></td>'+
//                 '<td style="border: 0px solid black" colspan="2"><b>'+tongtien+'VND</b></td>'+
//             '</tr>';

//     //document.getElementById("mycart1").innerHTML = ttgh;
// }
// showGH_ThanhToan();


function xacNhan() {
    var ten = document.getElementById("tenKH");
    var sdt = document.getElementById("sdtGH");
    var diachi = document.getElementById("diachiGH");

    if (ten.value.length == 0 || sdt.value.length == 0 || diachi.value.length ==0){
        alert("Bạn phải nhập đủ thông tin giao hàng! ");
    }
    // if else (showcountsp() == 0){
    //     alert("Bạn không có sản phẩm nào giao hàng! ");
    //     break;
    // }
    else{
        alert("Đặt hàng thành công!")
        goGioHang();
    }
}
function goGioHang(){
    location.href='GioHang.html';
}

function allertThanhtoan() {
    
} // nếu số sp = 0 -> bạn chưa có sản phẩm nào