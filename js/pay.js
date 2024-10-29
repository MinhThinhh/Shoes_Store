$(document).ready(function(){
    $(".check-shop").click(function(){
        $('.check-shop').removeClass('selected');
        $(this).addClass('selected');
        $(this).find('.checkboxShop').prop('checked',true)
    })

    localStorage.getItem("img")
    localStorage.getItem("name")
    var Price= localStorage.getItem("Price");
    var allPrice = Price.replace(/\D/g, "");
    var numberPrice =  parseInt(allPrice);
    console.log(allPrice)

    $('.large-image').attr('src', localStorage.getItem("img"))
    $('.ten').html('Tên: ' + localStorage.getItem("name"))
    $('.gia').html('Giá: ' +localStorage.getItem("Price"))

    const checkboxShop = $("#checkboxShop").val()
    const checkboxHouse = $("#checkboxHouse").val()

    var phi = $('#checkboxHouse').val();
    var allPhi = phi.replace(/\D/g, ""); /*lấy cáu phần tử sau dấu chấm */
    var numberPhi = parseInt(allPhi);


    $('#checkboxShop').click(function(){
        $('.vanChuyen').html('vận chuyển: '+ checkboxShop)
        var tong = numberPrice;
        var floatTong = tong.toLocaleString();
        $('.tong').html('Tổng: '+floatTong+' VNĐ');
    })
    $('#checkboxHouse').click(function(){
        $('.vanChuyen').html('vận chuyển: '+checkboxHouse)
        var tong = numberPhi+numberPrice;
        var floatTong = tong.toLocaleString();
        $('.tong').html('Tổng: '+floatTong+' VNĐ');
    })
})