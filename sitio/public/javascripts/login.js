const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});



	  /*Mostrar / ocultar la contraseña*/
const showBtn = document.querySelector(".show-btn i");
const inputPassword = document.getElementById("input-password");
const btnWatch = document.getElementById("watch");
      
	btnWatch.addEventListener('click', () => {
		if(inputPassword.type === "text"){
			inputPassword.type = "password";
			showBtn.classList.add("hide-btn");
		}else {
			inputPassword.type = "text";
			showBtn.classList.remove("hide-btn");
		}
    
    console.log(inputPassword.type)
})