
$(function () {
	$(window).scroll(function() {
        $('#learn .section-title').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });

    $(window).scroll(function() {
        $('#learn .skills').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInUp");
            }
        });
    });

    $(window).scroll(function() {
        $('.section-titles').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInDown");
            }
        });
    });

    $(window).scroll(function() {
        $('.Name').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInRightBig");
            }
        });
    });

    $(window).scroll(function() {
        $('.email').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeftBig");
            }
        });
    });

    $(window).scroll(function() {
        $('.Phone').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInRightBig");
            }
        });
    });

    $(window).scroll(function() {
        $('.fly').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeftBig");
            }
        });
    });

    $(window).scroll(function() {
        $('.btn-form').each(function(){
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInRightBig");
            }
        });
    });
});