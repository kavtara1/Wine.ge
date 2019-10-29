$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
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