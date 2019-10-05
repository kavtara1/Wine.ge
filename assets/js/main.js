var myWidth = innerWidth;
var slider_prev;

function checkWidth () {
    if (myWidth <= 480){
      slider_prev = 2;
    }
    else {
        slider_prev = 4;
    }
}
checkWidth();

var swiper = new Swiper('.swiper-container', {
    slidesPerView: slider_prev,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


