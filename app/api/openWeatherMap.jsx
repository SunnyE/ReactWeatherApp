var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=286aa261aef2c67ace8e7aa017b93156&units=imperial'; 

module.exports = {
    getTemp: function (location) {
            var encodedLocation = encodedURIComponent(location);
            var requestUrl= `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
            
            axios.get(requestUrl).then(function(res){
                if(response.data.cod && res.data.message){
                    throw new Error(res.data.message);
                } else {
                    return res.data.main.temp; 
                }
            }, function(res){
                throw new Error(res.data.message); 
            });
    }
}