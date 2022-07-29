require("colors");
console.clear();

const {guardarDB, leerDB} = require("./helpers/guardarArchivo");
const {inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require("./helpers/inquirer");

const Tareas = require('./models/tareas')

//const { mostrarMenu, pausa } = require("./helpers/mensajes");

const main = async() => {

    const tareas = new Tareas();
    let opt = ''

    const tareasDB = leerDB() //Cargar Tareas
    if ( tareasDB ) { 
        tareas.cargarDB(tareasDB)
    }

    do {

        opt = await inquirerMenu()

        switch (opt) {
            case '1':

                const desc = await leerInput('Descripción:')
                tareas.crearTarea(desc)

                break;

            case '2':
                tareas.listadoCompleto()
                break; 
            case '3':
                tareas.listarPendientesCompletadas();
            break;    
            case '4':
                tareas.listarPendientesCompletadas(false);
            break; 
            
            case '5':
                const ids= await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids)
            break; 

            case '6': //borrar

                const id = await listadoTareasBorrar( tareas.listadoArr)
                if(id !== '0') {
                    const ok = await confirmar('Estas seguro?')
                    if (ok){
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada')
                    }
                }
        

            break; 



        }

        guardarDB( tareas.listadoArr )

        if ( opt !== '0') await pausa();

    } while ( opt !== '0');

} 
main();