$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
});



$(document).ready(function(){
    $(".img4").click(function(){
        $('.img4').removeClass('selected');
        $(this).addClass('selected');
        var newSrc = $(this).attr('src'); /* Lấy thuộc tính nguồn của hình nhỏ*/ 
        $('.large-image').attr('src', newSrc); /* Đặt thuộc tính nguồn của ảnh nhỏ lên ảnh lớn */
    });

    $(".detail-buy").click(function(){
        window.location.href= "./Pay.html";
        
    })

    localStorage.getItem("img")
    localStorage.getItem("name")
    localStorage.getItem("rating")
    localStorage.getItem("Price")
    localStorage.getItem("description")
    console.log(localStorage.getItem("name"))

    $('.large-image').attr('src', localStorage.getItem("img"))
    $('.ten').html(localStorage.getItem("name"))
    $('.danhgia').html(localStorage.getItem("rating"))
    $('.gia').html(localStorage.getItem("Price"))
    $('.mota').html(localStorage.getItem("description"))
});
