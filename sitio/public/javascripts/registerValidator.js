console.log('registerValidator success')
const $ = id => document.getElementById(id);

const formulario = $('form-register');
/* console.log(formulario.elements) */

const elementos = formulario.elements;

/* const inputName = elementos[0];
console.log(inputName); */


const emailVerify = async email => {
    try {
        let response = await fetch('/api/get-emails?email=' + email)
        let result = await response.json()
        return result
    } catch (error) {
        console.log(error)
    }
}


/* inputs */
const inputName = $('name');
const inputEmail = $('email');
const inputPassword = $('password');
const inputPassword2 = $('password2');



/* expresiones regulares */
const regExLetras = /^[_A-zA-Z]*((-|\s)*[_A-zA-Z])*$/
const regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/ 




/* name */
inputName.addEventListener('focus', () => {
    $('error-name').innerText = null;
})

inputName.addEventListener('blur', function() {
    switch (true) {
        case !this.value:
            $('error-name').innerText = "El nombre es requerido";   
            break;          
        case !regExLetras.test(this.value) : 
            $('error-name').innerText = "Solo se permiten letras";
            break;
        default:
            $('error-name').innerText = null;
            break;
    }
})


inputName.addEventListener('keydown', () => {
    $('error-name').innerText = null
})



/* email */
inputEmail.addEventListener('focus', () => {
    $('error-email').innerText = null;
})

inputEmail.addEventListener('blur',async function() {
    switch (true) {
        case !this.value:
            $('error-email').innerText = "El email es requerido";   
            break;          
        case !regExEmail.test(this.value) : 
            $('error-email').innerText = "Email inválido";
            break;
        case await emailVerify(this.value) :
            $('error-email').innerText = "El email ya está registrado";
            this.classList.add('is-invalid');
            break;
        default:
            $('error-email').innerText = null;
            break;
    }
})

inputEmail.addEventListener('keydown', () => {
    $('error-email').innerText = null
})



/* password */
inputPassword.addEventListener('focus', () => {
    $('error-pass').innerText = null;
})

inputPassword.addEventListener('blur', function() {
    switch (true) {
        case !this.value :
            $('error-pass').innerText = "La contraseña es requerida";
            break;   
        default:
            $('error-pass').innerText = null;
            break;
    }
})



/*confirmacion password */
inputPassword2.addEventListener('focus', () => {
    $('error-pass2').innerText = null;
})

inputPassword2.addEventListener('blur', function() {
    switch (true) {
        case !this.value :
            $('error-pass2').innerText = "Debe confirmar su contraseña";
            break;
        case this.value !== inputPassword.value :
            $('error-pass2').innerText = "Las contraseñas no coinciden";
            break;  
        default:
            $('error-pass2').innerText = null;
            break;
    }
})



/*efecto de linea al hacer focus */
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


/*Mostrar/ocultar la contraseña */
const showBtn = document.querySelector(".show-btn i"); //icono
const btnWatch = $("watch");
     
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


/*Mostrar/ocultar confirmacion de contraseña */
const showBtn1 = document.querySelector(".show-btn1 i"); //icono
const btnWatch1 = $("watch1");

 btnWatch1.addEventListener('click', () => {
		if(inputPassword2.type === "text"){
			inputPassword2.type = "password";
			showBtn1.classList.add("hide-btn");
		}else {
			inputPassword2.type = "text";
			showBtn1.classList.remove("hide-btn");
		}
    
    console.log(inputPassword2.type)
}) 
    



