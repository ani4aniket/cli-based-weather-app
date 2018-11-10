const request = require('request');

var getWeather= (lat, lng, callback) =>{
		request({
		url: `https://api.darksky.net/forecast/0b8d94546bf8a1b544cd0d667d82a1cb/${lat},${lng}`,
		json: true
	}, (error, response , body) => {
		if (!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			});
		} else {
			callback('Unable to fetch weather');
		}
	}); 
};

module.exports.getWeather = getWeather;

