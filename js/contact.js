const form = document.getElementById('form-contact');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const asunto = document.getElementById('asunto');
const consulta = document.getElementById('consulta');
const botoncito = document.getElementById('botoncito');

form.addEventListener('submit', function(e) {
	const nombreValue = nombre.value.trim();
	const emailValue = email.value.trim();
	const telefonoValue = telefono.value.trim();
	const asuntoValue = asunto.value.trim();
	const consultaValue = consulta.value.trim();
	let band=true;

	if(nombreValue === '') {
		setErrorFor(nombre, 'Completar campo nombre');
		band=false;
		
	} else {
		setSuccessFor(nombre);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Completar campo e-mail');
		band=false;
		
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'E-mail no válido');
		band=false;
		
	} else {
		setSuccessFor(email);
		
	}
	
	if(telefonoValue === '') {
		setErrorFor(telefono, 'Completar campo telefono');
		band=false;
	
	} else if (!isNumero(telefonoValue)){
		setErrorFor(telefono, 'Debe ingresar solamente números');
		band=false;
		
	} else {
		setSuccessFor(telefono);
		
	}
	
	if(asuntoValue === '') {
		setErrorFor(asunto, 'Completar asunto');
		band=false;
		
	} else{
		setSuccessFor(asunto);
		
	}

	if(consultaValue === '') {
		setErrorFor(consulta, 'Completar mensaje');
		band=false;
		
	} else{
		setSuccessFor(consulta);
		
	}

	if (band===false){
		e.preventDefault();
	}
	
});




function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isNumero(telefono){
	return /^[0-9]+$/.test(telefono);
}
