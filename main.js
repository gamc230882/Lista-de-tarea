(function(){
  // variable
  var lista = document.getElementById("lista"),
      tareaInput = document.getElementById("tareaInput"),
      btnNuevaTarea = document.getElementById("btn-agregar");

  // funciones
  var agregarTarea = function() {
     var tarea = tareaInput.value,
     nuevaTarea = document.createElement("li"),
     enlace = document.createElement("a"),
     contenido = document.createTextNode(tarea);

    if (tarea === ""){
      tareaInput.setAttribute("placeholder", "Agrega una tarea valida");      
      tareaInput.className = "error";  
      return false;
    }

    // agregamos el contenido al enlace 
    enlace.appendChild(contenido);
    // le establecemos un atributo href 
    enlace.setAttribute("href", "#");
    // agregamos el enlace (a) al elemento nueva tarea (li)
    nuevaTarea.appendChild(enlace);
    // agregamos nueva tarea al lista
    lista.appendChild(nuevaTarea);

    tareaInput.value = "";

    for (let i = 0;  i <= lista.children.length -1; i++) {
      lista.children[i].addEventListener("click", function(){
          this.parentNode.removeChild(this);
      });
    }

  };
  
  var comprobarInput = function(){
    tareaInput.className = "";  
    tareaInput.setAttribute("placeholder", "Agregar Tarea");
  }

  var eliminarElemento = function(){
    this.parentNode.removeChild(this);
    
  }


  // eventos 


  // Agregar Tarea
  btnNuevaTarea.addEventListener("click", agregarTarea);

  // Comprobar input 
  tareaInput.addEventListener("click", comprobarInput);

  // evento para borrar elementos de la lista 
  for (let i = 0;  i <= lista.children.length -1; i++) {
    lista.children[i].addEventListener("click", eliminarElemento);
  }
}());