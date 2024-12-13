import { editarTarea } from './funcionesTareas.js';//Importo funciones de el archivo funcionesTarea
import { mostrarDetallesTarea } from './mostrar.js';//Importo funciones de el archivo mostrar
import { tareas } from './index.js';//Importo funciones de el archivo index
import { convertirTextoDificultad, validarInicialDificultad, verificarID } from './control.js';//Importo funciones de el archivo control
import { mensajesSolicitando, pedirDato, pedirDatoNumerico } from './comunicacion.js';//Importo funciones de el archivo comunicacion
//todo puro
function solicitarId() {//funcion que pide el ID de la tarea a buscar
    mensajesSolicitando(1);
    let idBusqueda = pedirDato();
    // Validar el ID usando operador ternario
    return verificarID(idBusqueda, tareas)//recibe idBusqueda y tareas como parametro. 
        ? idBusqueda//Si es verdadero devuelve el idBusqueda
        : (mensajesSolicitando(2),
            solicitarId());//Si es falso, solicita el id nuevamente.
}

function solicitarNombre() {//funcion que pide el nombre de la tarea a buscar
    mensajesSolicitando(3);
    let nombre = pedirDato();
    return nombre;//devuleve el nombre ingresado para que sea utilizado en la busqueda
}

function solicitarDificultad() {//funcion que solicita la dificultad de la tarea
    mensajesSolicitando(4);
    let dificultad = pedirDato();
    return validarInicialDificultad(dificultad)//valida la inicial de la dificultad
        ? dificultad = convertirTextoDificultad(dificultad)//si es verdadero, convierte la dificultar en emoji
        : (mensajesSolicitando(5),
            solicitarDificultad());//si es falso, entonces vuelve a pedir la dificultad
}

function seleccionarOpcion(resultados) {//funcion que toma como parametro resultados, es usada para seleccionar las opciones
    let tareaSeleccionada, opcion2;
    mensajesSolicitando(6);
    let opcion = pedirDatoNumerico;
    opcion > 0 && opcion <= resultados.length//
        ? (tareaSeleccionada = resultados[opcion - 1],
            mensajesSolicitando(7),
            mostrarDetallesTarea(tareaSeleccionada),
            mensajesSolicitando(8),
            opcion2 = prompt(),
            opcion2 === 'S' ? editarTarea(tareaSeleccionada) : opcion = 0)
        : opcion === 0
            ? (mensajesSolicitando(9), null)
            : (mensajesSolicitando(10), seleccionarOpcion(resultados));
}

export {
    solicitarId,
    solicitarNombre,
    solicitarDificultad,
    seleccionarOpcion
};//exporto funciones para utilizar en otros archivos