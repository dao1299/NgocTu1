function check(){
	var td = document.getElementById("oTD-control");
	var sdt = document.getElementById("SDT");

	if(td.value.length == 0){
		alert("Vui lòng nhập thông điệp!");
	}
	else if(sdt.value.length == 0){
		alert("Vui lòng nhập số điện thoại liên hệ!");
	}
	else{
		alert("Gửi thành công! Cảm ơn bạn, chúng tôi sẽ phản hồi sớm nhất có thể!");
		goLienHe();
	}		
}

function goHome(){
	location.href='Index.html';
}
function goLienHe(){
	location.href='LienHe.html';
}
function goLogin(){
	location.href='login.html';
}					