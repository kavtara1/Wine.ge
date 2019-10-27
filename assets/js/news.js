let span1 = document.getElementsByClassName("p_span2");
let seeMore = document.getElementsByClassName("full_wiev");
console.log(seeMore)
console.log(span1)

for (let i = 0; i < seeMore.length; i ++){
this.addEventListener("click",function(){
	for (let k = 0; k < span1.length; k ++) {
	
	if (span1[k].style.display == "none") {
		span1[k].style.display ="block"
	}
	else {
		span1[k].style.display = "none"
	}
}
})
console.log(span1)
}