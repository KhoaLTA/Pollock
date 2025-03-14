$(document).ready(function () {
    // Event scroll
    $(window).scroll(function () {
        var distanceScroll = $('html, body').scrollTop();
        // Header
        if (distanceScroll > 100) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }
        // Scroll to top
        if (distanceScroll > 300) {
            $('.scrollTop').addClass('scroll');
        } else {
            $('.scrollTop').removeClass('scroll');
        }
    });

    // Scroll To Top
    $('.scrollTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });

    // Show Filter
    $('.filter__item-header').click(function () {
        $(this).parent().toggleClass('active');
        $(this).parent().children('.filter__content-body').slideToggle();
    });

    // Slider Ranger
    $('#slider-range').slider({
        range: true,
        min: 0,
        max: 3000,
        values: [0, 3000],
        slide: function (event, ui) {
            $('#amount').text('$' + ui.values[0] + ' - $' + ui.values[1]);
        },
    });
    $('#amount').text('$' + $('#slider-range').slider('values', 0) + ' - $' + $('#slider-range').slider('values', 1));
});

// Handle Slick Slider Reivew
$(document).ready(function () {
    $('.review__list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinity: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        draggable: true,
        dots: true,
    });
});
