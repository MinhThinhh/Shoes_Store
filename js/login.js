const accounts = [{
    userName: 'LuongTanThanh',
    password: 'Thanh@321'
}]

$(document).ready(function(){
    var userName = $("#myUser");
    var password = $("#myPassword");
    var login = $("#myLogin");

    function handleLogin() {
        var isCredentialsValid = false;
        for (var i = 0; i < accounts.length; i++) {
            if (accounts[i].userName === userName.val() && accounts[i].password === password.val()) {
                isCredentialsValid = true;
                break;
            }
        }
        if(isCredentialsValid) {
            alert("Đăng nhập thành công");
            window.location.href = "./index.html";
        }else {
            alert("Tên đăng nhập hoặc mật khẩu không đúng");
        }
    } 
    login.click(handleLogin);
});
