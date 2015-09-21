$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var homeHeight = $('#home').outerHeight();

    if (scroll >= homeHeight) {
        $("#navbar-header").addClass("scrolling");
    } else {
        $("#navbar-header").removeClass("scrolling");
    }
});