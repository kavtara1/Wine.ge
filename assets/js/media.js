$(document).ready(function(){
    $(".full_wiev").click(function(){
		$(this).siblings(".article_p").find(".p_span2").show()
		$(this).hide();
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
	