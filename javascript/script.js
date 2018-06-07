$(document).ready(function(){
    $('.carousel').carousel({
        fullWidth: true,
        indicators: true,
        duration: 500
    });
    autoplay()
    function autoplay(){
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
    }
});
