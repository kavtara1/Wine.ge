
window.addEventListener('load', () => {
    let cookieLang = Cookies.get("lang")

    if (cookieLang =="georgian"){
        window.location.href = "index.html"
        
    }
    
  });


  
let language = document.getElementById("georgian");
language.addEventListener("click",function(){
  Cookies.set("lang","georgian",{expires:7})
})
  