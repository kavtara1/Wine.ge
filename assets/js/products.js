$(document).ready(function(){
    $(".white").click(function(){
      $(".image").fadeOut(500);
      $(".wine_name").fadeOut(500);
      setTimeout("$('.image').attr('src','assets/images/wine_11.png');", 600);
      setTimeout("$('.wine_name').text('თეთრი ღვინო');",600);
      $(".image").fadeIn("slow");
      $(".wine_name").fadeIn("slow");
      $(".red").css( "color", "#fff" )
      $(".all").css( "color", "#fff" )
      $(".purple").css( "color", "#fff" )
      this.style.color = "#aa926b";
     });
 


    $(".red").click(function(){
      $(".image").fadeOut(500);
      $(".wine_name").fadeOut(500);
      setTimeout("$('.image').attr('src','assets/images/wine_14.png');", 600);
      setTimeout("$('.wine_name').text('წითელი ღვინო');",600);
      $(".image").fadeIn("slow");
      $(".wine_name").fadeIn("slow");
      $(".white").css( "color", "#fff" )
      $(".all").css( "color", "#fff" )
      $(".purple").css( "color", "#fff" )
      this.style.color = "#aa926b"
  
     });


 
    $(".purple").click(function(){
      $(".image").fadeOut(500);
      $(".wine_name").fadeOut(500);
      setTimeout("$('.image').attr('src','assets/images/wine_18.png');", 600);
      setTimeout("$('.wine_name').text('ვარდისფერი ღვინო');",600);
      $(".image").fadeIn("slow");
      $(".wine_name").fadeIn("slow");
      $(".red").css( "color", "#fff" )
      $(".all").css( "color", "#fff" )
      $(".white").css( "color", "#fff" )
      this.style.color = "#aa926b"
     });
  
     $(".all").click(function(){
        $(".image").fadeOut(500);
        $(".wine_name").fadeOut(500);
        setTimeout("$('.image').slice(0,4).attr('src','assets/images/wine_11.png');",600)
        setTimeout("$('.wine_name').slice('0.4').text('თეთრი ღვინო');",600);
        setTimeout("$('.image').slice(4,8).attr('src','assets/images/wine_14.png');",600)
        setTimeout("$('.wine_name').slice('4.8').text('წითელი ღვინო');",600);
        setTimeout("$('.image').slice(8,12).attr('src','assets/images/wine_18.png');",600)
        setTimeout("$('.wine_name').slice('8.12').text('ვარდისფერი ღვინო');",600);
        $(".image").fadeIn("slow");
        $(".wine_name").fadeIn("slow");
        $(".red").css( "color", "#fff" )
        $(".white").css( "color", "#fff" )
        $(".purple").css( "color", "#fff" )
        this.style.color = "#aa926b"
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
  