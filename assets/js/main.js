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


let burger = document.getElementById("menu");
let overlay = document.getElementById("burger_overlay");
burger.addEventListener("click",function(){
   if (overlay.style.display === "block") {
       overlay.style.display = "none"
       this.classList.toggle("change")
       
   }
   else {
    overlay.style.display = "block"  
    this.classList.toggle("change")
    
   }

})
$(document).ready(function(){
//test for getting url value from attr
// var img1 = $('.test').attr("data-thumbnail");
// console.log(img1);

//test for iterating over child elements
var langArray = [];
var htmlList = ["!111","!222","!333"]
$('.vodiapicker option').each(function(){
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item = '<li><a href="" id="link" ><img src="'+ img +'" alt="" value="'+value+'"/><span>'+ text +'</span></a></li>';
  langArray.push(item);
 
  
})
console.log(langArray)

$('#a').html(langArray);

//Set the button value to the first el of the array
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'en');
$(".btn-select a").contents().unwrap();

//change button stuff on click
$('#a li').click(function(){
   var img = $(this).find('img').attr("src");
   var value = $(this).find('img').attr('value');
   var text = this.innerText;
   var item = '<li><img src="'+ img +'" alt="" /><span>'+ text +'</span></li>';
  $('.btn-select').html(item);
  $('.btn-select').attr('value', value);
  $(".b").toggle();
  //console.log(value);
});

$(".btn-select").click(function(){
        $(".b").toggle();
    });

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang){
  //find an item with value of sessionLang
  var langIndex = langArray.indexOf(sessionLang);
  $('.btn-select').html(langArray[langIndex]);
  $('.btn-select').attr('value', sessionLang);
} else {
   var langIndex = langArray.indexOf('ch');
  console.log(langIndex);
  $('.btn-select').html(langArray[langIndex]);
  //$('.btn-select').attr('value', 'en');
}


});


