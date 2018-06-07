$(document).ready(function(){
    $('.carousel').carousel({
        fullWidth: true,
        indicators: true,
        duration: 500,
        dist: -400
    });
    autoplay()
    function autoplay(){
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }
});



// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     // var instance = M.Carousel.getInstance(elem);
//     var instance = M.Carousel.init({
//         fullWidth: true,
//         indicators: true,
//         duration: 300
//       });
// });