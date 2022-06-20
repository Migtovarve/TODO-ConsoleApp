const Tarea = require("./tarea");


/**
 * _listado { 'uuid-2213-5435345-12': {id:12, desc:asd, compleadoEn: 92231} }
 * 
 */
class Tareas {

    _listado = {};

    constructor(){
        this._listado= {};
    }

    crearTarea(desc = ''){
        const tarea =  new Tarea(desc);
        this._listado[tarea.id] = tarea
    }
}

module.exports = Tareas;