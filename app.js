require("colors");
//import fetch from "node-fetch";

const {inquirerMenu, pausa, leerInput} = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require('./models/tareas')

//const { mostrarMenu, pausa } = require("./helpers/mensajes");

const main = async() => {
    console.log('Hola Mundo');

    const tareas = new Tareas();
   let opt = ''

    do {
    opt = await inquirerMenu()
    switch (opt) {
        case '1':

            const desc = await leerInput('Descripción:')
            console.log(desc, 'desde app')
            tareas.crearTarea(desc)
            break;

        case '2':
            console.log( tareas._listado )
            break;    
    }


    if ( opt !== '0') await pausa();

    } while ( opt !== '0');

} 
main();