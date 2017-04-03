window.addEventListener('load', function(){
  var postear = document.getElementById("postear");
  var comentario = document.getElementById("post");
  var todosComentarios = document.getElementById("comment");
  var vacio = document.getElementById("vacio");
  
  var imprimir = [];



    postear.addEventListener('click', function(e){
    	e.preventDefault();
      if(comentario.value != ""){
        var p = document.createElement("p");
        vacio.innerHTML = "";
        p.innerHTML = "<b>Comentario:</b><br>" + comentario.value + "<br><br>";
        imprimir.push(todosComentarios.prepend(p));
        document.getElementById("formulario").reset();

      } else{
        vacio.innerHTML = "Ingrese un comentario";
      }
    })


})
