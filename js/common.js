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
                        $('.itog').css('visibility', 'hidden');
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
    
    //Display coast
    var cost = 200;
    var amount, itog = 0;
    $('#litr').on('keyup', function() {
        amount = $('#litr').val();
        itog = +amount * cost;
        $('.itog').css('visibility', 'visible');
        $('#cost').text(itog);        
    });

});