let sendButton = document.getElementById("send")
sendButton.addEventListener('click', function(){
	let name = document.getElementById("name")
	let eMail = document.getElementById("email")
	let number = document.getElementById("num")
	let massage = document.getElementById("msg")	
	let subject = document.getElementById("subject")
	let successText = document.getElementById("success")
	let fullScreen = document.getElementById("full_screen")

	let inputs = document.getElementsByClassName("inputs")

	let isvalid = true
	for(let i = 0; i < inputs.length; i++){

		if (inputs[i].value.length < 5) {
			inputs[i].style.borderColor = "red"
			isvalid = false
		}
		

	}
	if (isvalid == true) {

	
	Email.send({
		Host : "smtp.elasticemail.com",
		Username : "kavtara123@gmail.com",
		Password : "51507d6f-bcd0-4cb9-ac87-6ac390c8da9f",
		To : 'saba.kavtaradze@wandio.com',
		From : "kavtara123@gmail.com",
		Subject : `${subject.value}`,
		Body : `${name.value},${eMail.value},${number.value} \n ${massage.value} `
	}).then(
		function successMassage (){
		fullScreen.style.display = "block"
		successText.style.display = "flex"
	}
	)
}		
});

okButton = document.getElementById("ok")
okButton.addEventListener('click',function(){
	location.reload()
	fullScreen.style.display = "none"

})

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