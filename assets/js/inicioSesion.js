window.addEventListener('load', function(){
	var boton = document.getElementById("iniciar");
	boton.addEventListener('click', function(){
		var correo = document.getElementById("correo");
		var contraseña = document.getElementById("contraseña");
		var error = document.getElementById("error");
		if(correo.value == "" || contraseña.value == ""){
			error.innerText = "Ingrese todos los datos";
			
		}else{
			window.location = "index.html";
		}
		
	})
})