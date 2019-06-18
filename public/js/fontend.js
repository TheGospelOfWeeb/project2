$(document).ready(function () {
    $('.sidenav').sidenav();
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

setInterval(function () {
    $('.carousel').carousel('next');
}, 4000);

$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
});