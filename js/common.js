$(document).ready(function () {
    //init wow.min.js
    new WOW().init();

    //scroll to div
    $('.linkto').click(function () {
        var link = $(this).attr('href');
        var menuPos = $('#topMenu').position().top;
        var posi = $(link).offset().top-menuPos*2;
        console.log(posi);
        $('body,html').animate({
            scrollTop: posi
        }, 700);
    });

    //popup ordered
    //    $("#btn-order").on("click", function () {
    //        if ($(".popup-success").is(":hidden")) {
    //            $(".blur-all").addClass("blur_active");
    //            $(".popup-success").show(200);
    //        }
    //        if ($(".popup-success").is(":visible")) {
    //            $(".closeSuccess").on("click", function () {
    //                $(".blur-all").removeClass("blur_active");
    //                $(".popup-success").hide();
    //            });
    //        }
    //    });

    //form validator
    $("#sendOrder").validate({
        rules: {
            quantity: {
                required: true,
                number: true,
                min: 1
            },
            name: "required",
            tel: "required",
            address: "required"
        },
        messages: {
            quantity: {
                required: "",
                number: "",
                min: ""
            },
            name: "Введите Ваше имя",
            tel: "Введите Ваш телефон",
            address: "Введите адрес доставки"
        },
        submitHandler: function (form) {
            var msg = $("#sendOrder").serialize();
            $.ajax({
                type: 'POST',
                url: 'fns.php',
                data: msg,
                success: function () {
                    $("#sendOrder").fadeTo(function () {
                        this.reset();
                        $(".blur-all").addClass("blur_active");
                        $(".popup-success").show(200);
                        $(".closeSuccess").on("click", function () {
                            $(".blur-all").removeClass("blur_active");
                            $(".popup-success").hide();
                        });
                    });
                }
            });
        }
    });

});