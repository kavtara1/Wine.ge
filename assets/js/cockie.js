// let i  = 0;
// while  (i < 1) {
// window.addEventListener('load', () => {
//     let cookieLang = Cookies.get("lang")

//     if (cookieLang =="english"){
//         window.location.href = "indexENG.html"
        
//     }
//     else{
        
//         window.location.href = "index.html"
//     }
//   });
//   i++
// }

let language = document.getElementById("English");
language.addEventListener("click",function(){
  Cookies.set("lang","english",{expires:7})
})

// let cookieLang = Cookies.get("lang");
// console.log(cookieLang)