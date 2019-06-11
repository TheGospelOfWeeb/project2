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