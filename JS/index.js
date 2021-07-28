var string = localStorage.getItem("NameUser") + 'listsp';
var listSP=[];
if (localStorage.getItem(string)!=null){
    listSP=JSON.parse(localStorage.getItem(string))
}
function addSP(tenSP,giaSP,soLuong){
    var status=0;
    for (i in listSP){
        if (tenSP==listSP[i].TenSP){
            status=1;
            listSP[i].SoLuongSP=y.toString();
            console.log(listSP[i].SoLuongSP);
            var y=Number(listSP[i].SoLuongSP);
            y++     
        }
    }
    if (status==0){
        var sp={
            "TenSP":tenSP,
            "GiaSP":giaSP,
            "SoLuongSP":soLuong
        };
        listSP.push(sp);
    }
    localStorage.setItem(string,JSON.stringify(listSP));
    alert("Thêm giỏ hàng thành công")
}

function changeTable(){
    
    var tongTien=0;
    var count=0;
    var thanhtienSP = 0;
    var table = document.getElementById("tableGH");
    for (i in listSP){
        var row = table.insertRow(-1);
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3=row.insertCell(2);
        var cell4=row.insertCell(3);
        var cell4=row.insertCell(4);
        cell1.innerText=listSP[i].TenSP;
        cell2.innerText=listSP[i].GiaSP;
        cell3.innerText=listSP[i].SoLuongSP;
        thanhtienSP = Number.parseInt(listSP[i].SoLuongSP)*Number.parseInt(listSP[i].GiaSP);
        cell4.innerText=listSP[i].thanhtienSP;
        cell5.innerHTML='<button style="width:30px" onclick="xoa('+count+')" >x</button>';
        tongTien+=Number.parseInt(listSP[i].SoLuongSP)*Number.parseInt(listSP[i].GiaSP);
        count++;
    }
    document.getElementById("tongTien").innerHTML=tongTien; 
}



function xoa(i){
    var tr= document.getElementsByClassName("deleteSP")[i].parentElement.parentElement;
    tr.remove();
    listSP.splice(i,1);
    localStorage.setItem(string,JSON.stringify(listSP));
    window.location="GioHang.html"
}
window.onload = function() {
    var NUT = document.getElementsByClassName('delete');
    for (var i = 0; i < NUT.length; i++) {
        NUT[i].addEventListener("click", function() {
        var tr = this.parentElement.parentElement;
        tr.remove();
        });
    }
};

function xacNhan(){
    var ten = document.getElementById("tenKH");
    var sdt = document.getElementById("sdtGH");
    var diachi = document.getElementById("diachiGH");

    if (ten.value.length == 0 || sdt.value.length == 0 || diachi.value.length ==0){
        alert("Bạn phải nhập đủ thông tin giao hàng! ");
    }
    else{
        alert("Đặt hàng thành công!")
        goGioHang();
    }
}

function goGioHang(){
    location.href='GioHang.html';
}



