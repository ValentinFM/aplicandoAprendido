class Tarea {//creamos los atributos de la tarea //TODO PURO
    // Atributos de Tarea
    id;
    titulo;
    descripcion;
    estado = 'P';
    creacion;
    vencimiento;
    dificultad;
    fechaModificacion;

    // Contador privado estático, esto para que no pueda modificarse
    static #contadorTarea = 1;

    // Constructor de Tarea
    constructor(titulo, descripcion, estado, dificultad, vencimiento) {
        this.id = Tarea.#contadorTarea++; // Asigna el valor actual del contador y luego lo incrementamos para llevar el id de la tarea
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.creacion = new Date();
        this.vencimiento = vencimiento;
        this.dificultad = dificultad;
        this.fechaModificacion = this.creacion;
    }

    //getters
    getId() {
        return this.id;
    }

    getTitulo() {
        return this.titulo;
    }

    getDescripcion() {
        return this.descripcion;
    }

    getEstado() {
        return this.estado;
    }

    getDificultad() {
        return this.dificultad;
    }

    getCreacion() {
        return this.creacion;
    }

    getVencimiento() {
        return this.vencimiento;
    }
};

export {
    Tarea
};