

$(document).ready(function(){
    $('#myBtn').click(function(){
        $('#myModal').modal()
    })

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        nav:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },            
            960:{
                items:5
            },
            1000:{
                items:4
            }
        }
    });
 
       
    
        // Gán sự kiện click cho nút "Change Avatar"
    $("#change-avatar").on("click", function () {
            // Kích hoạt sự kiện click trên input type=file để mở File Explorer
            $("#file-input").click();
    });

        // Xử lý sự kiện khi người dùng chọn tệp
    $("#file-input").on("change", function (e) {
        var fileInput = e.target;

        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                    // Thay đổi nguồn hình ảnh của thẻ img bằng ảnh từ File Explorer
                $("#avatar").attr("src", e.target.result);
            };

                // Đọc dữ liệu của tệp đã chọn
            reader.readAsDataURL(fileInput.files[0]);
        }
    });

    $('#btnSave').click(function(){
        window.location.href = "./Login.html";
    })

});