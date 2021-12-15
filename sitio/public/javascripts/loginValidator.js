console.log('registerValidator success');

const $ = id => document.getElementById(id);

const emailVerify = async email => {
    try {
        let response = await fetch('/api/get-emails?email=' + email)
        let result = await response.json()
        return result
    } catch (error) {
        console.log(error)
    }
}

const formulario = $('form');
const inputEmail = $('email');
const inputPassword = $('input-password');
const inputName = $('input-name');
const showBtn = document.querySelector(".show-btn i"); //icono
const btnWatch = $("watch");


const inputs = document.querySelectorAll(".input");

/*efecto de linea al hacer focus */
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


/* expresiones regulares */
const regExLetras = /^[_A-zA-Z]*((-|\s)*[_A-zA-Z])*$/
const regExEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/ 
const regExPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/


/* nombre */
inputName.addEventListener('focus', function() {
    $('info-name').innerText = "Solo letras"
    $('error-name').innerText = null;
    this.classList.remove('is-invalid');
})

inputName.addEventListener('keydown', function() {
    $('info-name').innerText = null;
})

inputName.addEventListener('blur', function() {
    switch (true) {
        case !this.value :
            $('error-name').innerText = "El nombre es requerido";
            this.classList.add('is-invalid')
            break;
        case !regExLetras.test(this.value) :
            $('error-name').innerText = "Solo se permiten letras";
            this.classList.add('is-invalid');
            break;
        default:
            $('error-name').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            
    }
})










/* email */
inputEmail.addEventListener('focus', function() {
    $('info-email').innerText = "Escriba un email válido"
    $('error-email').innerText = null;
    this.classList.remove('is-invalid');
})

inputEmail.addEventListener('keydown', function() {
    $('info-email').innerText = null;
})

inputEmail.addEventListener('blur', async function() {
    switch (true) {
        case !this.value :
            $('error-email').innerText = "El email es requerido";
            this.classList.add('is-invalid')
            break;
        case !regExEmail.test(this.value) :
            $('error-email').innerText = "Email inválido";
            this.classList.add('is-invalid');
            break;
        default:
            $('error-email').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
})
/* password */

inputPassword.addEventListener('keydown', function() {
    $('info-password').innerText = null;
})

inputPassword.addEventListener('blur', function() {
    switch (true) {
        case !this.value :
            $('error-password').innerText = "La contraseña es requerida";
            this.classList.add('is-invalid')
            break;
            
        default:
            $('error-password').innerText = null;
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            break;
    }
})


/*errores al enviar form */
formulario.addEventListener('submit', e => {
    
    e.preventDefault();
    
    let error = false;
    const elementos = formulario.elements;
    
    for (let i = 0; i < elementos.length - 2; i++) {
        
        if(!elementos[i].value){
            elementos[i].classList.add('is-invalid');
            $('error-empty').innerText = "Los campos señalados son obligatorios";
            error = true;
        }
        
    }
    
    if(!error){
        formulario.submit()
    }

})


      /*Mostrar/ocultar la contraseña */
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


