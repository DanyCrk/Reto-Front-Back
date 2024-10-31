var lista = document.getElementById("lista"),
    ingresaTarea = document.getElementById("tareaInput"),
    btnnuevaTarea = document.getElementById("btn-add"),
    btnEliminarTodo = document.getElementById("eliminarTodo");

function agregarTarea() {
    var tarea = ingresaTarea.value,
        nuevaTarea = document.createElement("li"),
        enlace = document.createElement("a"),
        btnEditar = document.createElement("input"),
        contenido = document.createTextNode(tarea),
        btnEliminar = document.createElement("input");

    // Validar que la tarea no esté vacía
    if (tarea === "") {
        ingresaTarea.setAttribute("placeholder", "Agrega una Tarea");
        ingresaTarea.className = "error";
        return false;
    }

    // Asignar el contenido al enlace
    enlace.appendChild(contenido);
    enlace.setAttribute("href", "#");

    // Configurar botón de editar
    btnEditar.setAttribute("type", "button");
    btnEditar.setAttribute("value", "Editar");
    btnEditar.className = "editar";

    // Configurar botón de eliminar
    btnEliminar.setAttribute("type", "button");
    btnEliminar.setAttribute("value", "Eliminar");
    btnEliminar.className = "eliminar";

    // Evento para editar la tarea
    btnEditar.addEventListener("click", function() {
        var nuevaTarea = prompt("Edita tu tarea:", contenido.textContent);
        if (nuevaTarea) {
            contenido.nodeValue = nuevaTarea; // Actualizar el texto de la tarea
        }
    });

    // Evento para eliminar la tarea
    btnEliminar.addEventListener("click", function() {
        nuevaTarea.remove(); // Eliminar la tarea
    });

    // Agregar el enlace y los botones al elemento de la tarea
    nuevaTarea.appendChild(enlace);
    nuevaTarea.appendChild(btnEditar);
    nuevaTarea.appendChild(btnEliminar);
    lista.appendChild(nuevaTarea);
    ingresaTarea.value = ""; // Limpiar el campo de entrada
}

// Función para comprobar si la tarea está vacía
function comprobarTarea() {
    ingresaTarea.className = "";
    ingresaTarea.setAttribute("placeholder", "Agrega una Tarea");
}

// Función para eliminar todas las tareas
function eliminarTodasLasTareas() {
    lista.innerHTML = ''; // Limpiar la lista
}

// Asignar eventos a los botones
btnnuevaTarea.addEventListener("click", agregarTarea);
ingresaTarea.addEventListener("click", comprobarTarea);
btnEliminarTodo.addEventListener("click", eliminarTodasLasTareas);
