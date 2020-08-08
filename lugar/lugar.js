const axios = require('axios');

const getLugar = async(direccion) => {
    let encoded = encodeURI(direccion);

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${encoded}&APPID=9cfcc0c7a3d5a11558b8688daaf5ce7d`;
    let lat = 0;
    let lon = 0;

    await axios.get(url)
        .then(function(response) {
            //console.log(response.data);
            lat = response.data.coord.lat;
            lon = response.data.coord.lon;
        })
        .catch(function(error) {
            console.log(error);
        });


    return {
        direccion,
        lat,
        lon
    };
};

module.exports = {
    getLugar
}