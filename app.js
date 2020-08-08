const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//console.log('Direccion: ' + argv.direccion);

const getInfo = async(ciudad) => {

    try {
        const coord = await lugar.getLugar(ciudad);
        const temp = await clima.getClima(coord.lat, coord.lon);

        return `La temperatura en ${ciudad} es de ${temp} grados centigrados`;
    } catch (err) {

        return `No se pudo determinar el clima de ${ciudad}`;
    }

};

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);