function pasarEspanol(){
	var title= document.getElementById('form-signin-heading');
	title.innerHTML= "Por favor inicia sesión";
	//cambio de email a español
	var correo = document.getElementById('inputEmail');
	correo.placeholder = "Correo electronico";
	//cambio de password a español
	var clave = document.getElementById('inputPassword');
	clave.placeholder = "Contraseña";
	// modificacion de etiqueta span a español
	var cambio = document.getElementsByTagName("span")[0];
	cambio.innerHTML= "Recordar Datos";
	// Cambio de contenido del boton a español
	var boton = document.getElementsByClassName("btn")[0];
	boton.innerHTML = "Iniciar Sesión";
}
