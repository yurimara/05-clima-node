const axios = require('axios');

const getClima = async(lat, lon) => {

    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=9cfcc0c7a3d5a11558b8688daaf5ce7d&units=metric`;
    const resp = await axios.get(url);

    return resp.data.main.temp;
};

module.exports = {
    getClima
}