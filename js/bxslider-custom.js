$(document).ready(function(){
    var textSlider = $('.bx-text-slider').bxSlider({
        pagerType: 'short',
        pagerSelector: '#bx-pager',
        prevSelector: '#custom-bx-prev',
        nextSelector: '#custom-bx-next',
        nextText: '',
        prevText: '',
        onSliderLoad: function(current) {
            $('#bx-pager').text("0"+(current+1) + "/0"+5);
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
            $('#bx-pager').text("0"+(newIndex+1) + "/0"+5);
        }
    });

    $('#custom-bx-prev').on('click', function () {
        var current = textSlider.getCurrentSlide();
        textSlider.goToPrevSlide(current) - 1;
    });
    $('#custom-bx-next').on('click', function () {
        var current = textSlider.getCurrentSlide();
        textSlider.goToNextSlide(current) + 1;
    });

    $('.bxslider-multiple').bxSlider({
        minSlides: 2,
        maxSlides: 2,
        slideWidth: 370,
        slideMargin: 25
    });
});