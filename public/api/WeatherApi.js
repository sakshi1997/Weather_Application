var axios= require('axios');
const WEATHER_URL ='http://api.openweathermap.org/data/2.5/weather?appid=8ad0740651fda56383004aa4f56a3206&units=imperial';

module.exports= {
    getTemp : function(location){
        var el=encodeURIComponent(location);

        var url= `${WEATHER_URL}&q=${el}`;

        return axios.get(url).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }
            else{
                return res.data.main.temp;
            }
        },function(res){
            throw new Error(res.data.message);
        })
    }
}