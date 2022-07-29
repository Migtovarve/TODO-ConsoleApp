const Tarea = require("./tarea");


/**
 * _listado { 'uuid-2213-5435345-12': {id:12, desc:asd, compleadoEn: 92231} }
 * 
 */
class Tareas {

    _listado = {};

    get listadoArr() {//Transforma el obj _listado en un array
        const listado = []

        //Transformar un obj en un array
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        })

        return listado
    }

    cargarDB(data = [] ) {//llega el listado de la base de datos y lo guardo en el obj _listado
        data.forEach(tareaDB => {
            this._listado[tareaDB.id] = tareaDB
        })
     }


    constructor(){
        this._listado= {};
    }

    borrarTarea ( id = '' ) {

        if ( this._listado[id] ) {
            delete this._listado[id]
        }
        
    }

    crearTarea(desc = ''){
        const tarea =  new Tarea(desc);
        this._listado[tarea.id] = tarea
    }


    listadoCompleto() {
        let estado
        const arr = this.listadoArr
        //console.log(arr)
        arr?.forEach( (tarea, i) => {
            const inx = `${i + 1}.`.green;
            const { desc, completadoEn } = tarea
            estado = completadoEn? 'Completada'.green: 'Pendiente'.red

            
            console.log ( `${inx} ${desc} :: ${estado}`)
         })
    }

    listarPendientesCompletadas( completadas = true) {
        //console.log(this.listadoArr)
        let fecha
        const filter = this.listadoArr.filter(tarea => Boolean(tarea.completadoEn) === completadas )
        //console.log(filter)
        filter.forEach( (tarea,i) => {
            fecha  = completadas ? tarea.completadoEn.green: "Pendiente".red 
            const inx = `${i + 1}.`.green;
            const {desc} =  tarea
            console.log(`${inx} ${desc} :: ${fecha}`)
        })
    }

    toggleCompletadas(ids = []) {

        ids.forEach(id=>{
            const tarea = this._listado[id]
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString()
            }
        })

        this.listadoArr.forEach( tarea => {
            if( !ids.includes(tarea.id) ) {
                this._listado[tarea.id].completadoEn = null
            }

        }) 
        
    }



}

module.exports = Tareas;