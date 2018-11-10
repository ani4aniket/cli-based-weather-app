const request = require('request');

var geocodeAddress = (address,callback) => {
	var encAdd = encodeURIComponent(address);

	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encAdd}&key=AIzaSyDWdxtYfLBpa7Vh-9BkqnLJOPkEuh4cV_M`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Unable to connect to the servers');
		} else if (body.status === 'ZERO_RESULTS') {
			callback('Address not found');
		} else if (body.status === 'OK'){
			callback(undefined, {
				address: body.results[0].formatted_address,
				latitude: body.results[0].geometry.location.lat,
				longitude: body.results[0].geometry.location.lng
			});
		}
	});
};

module.exports.geocodeAddress = geocodeAddress;