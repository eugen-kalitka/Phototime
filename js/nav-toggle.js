function windowSize() {
    if ($(window).width() < 585){
        $('#nav-toggle').show();
        $('#nav-menu').css('display', 'none');
    } else {
        $('#nav-toggle').hide();
        $('#nav-menu').css('display', '');
    }
}
$(window).load(windowSize);
$(window).resize(windowSize);

$('#nav-toggle').on('keypress click', function(e){
    if (e.which === 13 || e.type === 'click') {
        $('#nav-menu').slideToggle("slow");
    }
});