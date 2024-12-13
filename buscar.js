import { solicitarId, seleccionarOpcion } from './solicitando.js';
import { mostrarDetallesTarea } from './mostrar.js';
import { esperarTeclaParaContinuar, LimpiarPantalla } from './comunicacion.js';
import { mensajesBuscar } from './comunicacion.js';

//funcion para buscar tarea //Impura
function buscarTareaId(tareas) {
    console.log(`Seleccione un ID entre 1 y ${tareas.length} :`)
    const idBusqueda = solicitarId();
    LimpiarPantalla();

    // Buscar tarea que coincida con el ID
    let tareaFiltrada = tareas.find(tarea => tarea.id.toString() === idBusqueda);

    // Mostrar resultados
    tareaFiltrada
        ? (mensajesBuscar(1),
            mostrarDetallesTarea(tareaFiltrada),
            esperarTeclaParaContinuar())
        : mensajesBuscar(2);
}
//Impura
function buscarTareaPorEstado(tareas, estado) {
    //utilizamos el metodo filter para filtrar el arrayTarea comparando el estado recibido por parametro con el estado de la tarea
    let arrayTarea = tareas;
    const tareasFiltradas = arrayTarea.filter((tareas) => tareas.getEstado() === estado);
    tareasFiltradas.length > 0
        ? (mensajesBuscar(3),
            //Para cada tarea de las tareas filtradas por el metodo filter mostramos el id y el titulo
            tareasFiltradas.forEach(tarea => console.log(`[${tarea.getId()}] Titulo: ${tarea.getTitulo()}`)),
            seleccionarOpcion(tareasFiltradas))
        : console.log(`No hay tareas del tipo ${estado} cargadas`);
}
//Impura
function buscarTareaPorNombre(tareas, nombre) {
    // Verifica qué contiene el array tareas
    let resultados = tareas.filter(tarea => tarea && tarea.getTitulo && tarea.getTitulo().toLowerCase().includes(nombre.toLowerCase())); // Filtra coincidencias
    resultados.length === 0
        ? (mensajesBuscar(4),
            esperarTeclaParaContinuar(),
            LimpiarPantalla())
        : (console.log(`Se encontraron ${resultados.length} coincidencias en la búsqueda:`),
            //Para cada tarea de las tareas filtradas por el metodo filter mostramos el id y el titulo
            resultados.forEach((tarea) => console.log(`[${tarea.getId()}] ${tarea.getTitulo()}`)),
            seleccionarOpcion(resultados));
    return resultados;
}

export {
    buscarTareaId,
    buscarTareaPorEstado,
    buscarTareaPorNombre
};