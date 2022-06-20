const inquirer = require('inquirer');
// import inquirer from 'inquirer';
require('colors')
//import fetch from 'node-fetch'
// import inquirer from 'inquirer'


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tarea'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tarea'
            },
            {
                value: '6',
                name: '6. Borrar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },
            
        ]
    }
]

// const pausas = [{
//     type: 'list',
//     name: 'pausa',
//     message: `Presione ${'ENTER'.green} para continuar`
//     choices: [{
        
//     }]
// }]

const inquirerMenu = async ()=> {
//     return new Promise( (resolve)=>{
   
    console.clear();
    console.log('=========================='.green);
    console.log(' Seleccione una opción'.green);
    console.log('==========================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas) 
    console.log({opcion})
    return opcion

//     resolve(opt)
//     })
}

const pausa = async () => {
    
   await inquirer.prompt( [{
    //type: 'input',
    name: 'Enter',
    message: `Presione ${'ENTER'.green} para continuar`,
   }])
    
}

const leerInput = async(message) => {
    const {desc} = await inquirer.prompt([{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Por favor escriba una descripción'
            }
            return true
        }
    }])
    console.log('desc desde leer input', desc)
    return desc
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}
