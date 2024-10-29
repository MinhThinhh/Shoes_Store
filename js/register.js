$(document).ready(function(){

    var myUser = $("#myUser");
    var tdUser = $("#tdUser");
    function kiemtraTen(){
        const ten = /^[a-zA-Z0-9]{1,14}$/
        if(myUser.val()==""){
            tdUser.html('(*)')
            return
        }else if(!ten.test(myUser.val())){
           tdUser.html("tên ko có kí tự đặt biệt !")
            return 
        }
        tdUser.html("")
    }
    myUser.blur(kiemtraTen);

    var myEmail = $('#myEmail')
    var tdEmail = $('#tdEmail')
    function kiemtraEmail(){
        const email = /^[a-zA-Z0-9._%+-]+@gmail.com$/
        if(myEmail.val()!="" && !email.test(myEmail.val())){
            tdEmail.html("Email không đúng !")
            return false;
        }else if(myEmail.val()==""){
            tdEmail.html('(*)');
            return false;
        }
        tdEmail.html("")
    }
    myEmail.blur(kiemtraEmail)


    var myPassword = $('#myPassword')
    var tdPassword = $('#tdPassword')
    function kiemtraPassword(){
        const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if(!password.test(myPassword.val())){
            tdPassword.html("Mật khẩu không hợp lệ !")
            return ;
        }else if(myPassword.val()==""){
            tdPassword.html('(*)');
            return ;
        }
        tdPassword.html("")
    }
    myPassword.blur(kiemtraPassword)

    var myConfirm = $('#myConfirm')
    var tdConfirm = $('#tdConfirm')
    function ConfirmPassword(){
        if(myConfirm.val()===""){
            tdConfirm.html('(*)');
            return;
        }else if(myConfirm.val() !== myPassword.val()){
            tdConfirm.html('Mật khẩu không giống !')
            return;
        }
        tdConfirm.html("");
    }
    myConfirm.blur(ConfirmPassword)
})
