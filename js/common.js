//init wow.min.js
new WOW().init();

//scroll to div
$('.linkto').click(function () {
    var link = $(this).attr('href');
    var posi = $(link).offset().top;
    $('body,html').animate({
        scrollTop: posi
    }, 700);
});

//popup ordered
$("#btn-order").on("click", function(){
    if($(".popup-success").is(":hidden")) {
        $(".blur-all").addClass("blur_active");
        $(".popup-success").show(200);
    }
    if($(".popup-success").is(":visible")){
        $(".closeSuccess").on("click", function(){
            $(".blur-all").removeClass("blur_active");
            $(".popup-success").hide();
        });
    }
});