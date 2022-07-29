const fs = require('fs')

const archivo = './db/data.json'

const guardarDB = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data))
}

const leerDB = () => {
    
    if(!fs.existsSync(archivo)) {
        return null
    }

    const data = fs.readFileSync(archivo, { encoding:'utf-8' })    
    //console.log(JSON.parse(data))
    return JSON.parse(data)
}


module.exports = {
    guardarDB,
    leerDB
};