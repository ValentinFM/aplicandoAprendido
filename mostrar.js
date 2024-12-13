import { buscarTareaPorEstado } from './buscar.js';//Importo funciones de el archivo buscar
import { editarTarea } from './funcionesTareas.js';//Importo funciones de el archivo funcionesTarea
import { menuSecundario } from './menu.js';//Importo funciones de el archivo menu
import { mensajesMostrar,pedirDato, pedirDatoNumerico } from './comunicacion.js';
//funcion para mostrar tarea
//todo impuro
function mostrarTarea() {//funcion mostrar tareas
    let opcion1 = menuSecundario();
    if (opcion1 != 0) {//usamos if para no usar while y que el valor cuando sea 0 salga
        switch (opcion1) {
            case 1://MUESTRO TODAS LAS TAREAS
                if (arrayTarea.length > 0) {//si es mayor a 0, nos indica que tenemos algo en el arreglo y muestra
                    mensajesMostrar(1);
                    arrayTarea.forEach(function (tareas) {
                        console.log(`Titulo: ${tareas.getTitulo()}`);
                    });
                }
                else {//si es igual a 0, entonces el arreglo esta vacio por lo que no tiene tareas.
                    mensajesMostrar(2);
                }
                break;
            case 2://MUESTRO LAS TAREAS PENDIENTES
                buscarTareaPorEstado('P');//busco las tareas en estado pendiente mediante la funcion y pasando la letra como parametro
                break;
            case 3://MUESTRO LAS TAREAS EN CURSO
                buscarTareaPorEstado('E');//busco las tareas en estado pendiente mediante la funcion y pasando la letra como parametro
                break;
            case 4://MUESTRO LAS TAREAS TERMINADAS
                buscarTareaPorEstado('T');//busco las tareas en estado pendiente mediante la funcion y pasando la letra como parametro
                break;
            default:
                mensajesMostrar(3);
                break;
        }
    }
}

function mostrarDetallesTarea(tarea) {//funcion para mostrar los detalles de la tarea
    console.log(`   ID: ${tarea.id}`);
    console.log(`   Título: ${tarea.titulo}`);
    console.log(`   Descripción: ${tarea.descripcion}`);
    console.log(`   Estado: ${tarea.estado}`);
    console.log(`   Dificultad: ${tarea.dificultad}`);
    console.log(`   Fecha de creación: ${tarea.creacion}`);
    console.log(`   Fecha de vencimiento: ${tarea.vencimiento}`);
    console.log(`   Fecha de ultima modificacion: ${tarea.fechaModificacion}`);
}

function mostrarTodasLasTareas(tareas) {//funcion para mostrar todas las tareas
    mensajesMostrar(4);
    tareas.forEach((tarea, index) => {
        console.log(`[${index + 1}] :  Título: ${tarea.titulo}`);
    });
    mensajesMostrar(5);
    let opcion = pedirDatoNumerico();
    (opcion > 0 && opcion <= tareas.length)
        ? (
            mostrarDetallesTarea(tareas[opcion - 1]),
            (tareas[opcion - 1]),
            mensajesMostrar(6),
            pedirDato().toUpperCase() === 'S'
                ? editarTarea(tareas[opcion - 1])//Si es verdadero entonces edito la posicion que toma la opcion -1 para dar con la posicion correcta
                : null//si es falso, queda en nulo
        )//Si es verdadero muestro y edito o no dependiendo lo ingresado
        : opcion === 0
            ? mensajesMostrar(7)//si es verdadero regresa al menu
            : mensajesMostrar(8);//si es falso entonces opcion no valida.
}

export {
    mostrarTarea,
    mostrarDetallesTarea,
    mostrarTodasLasTareas
};//exporto las funciones para poder usar en otros archivos.