const fs = require('fs');
var _countryList = require('../data')()
const update = require('./update');

/*update.forEach(function(up){
	_returnData = _countryList.filter(function (obj) {
	  return obj.ISO.alpha3 === up.code;
	})[0]

	if(!_returnData) return;// console.log('NOTFOUD',up.code);
	_returnData.ISO.number = up.number;

	var filename = '';
	if(!_returnData.name) _returnData.name = 'United Kingdom'; 

	filename = _returnData.name.toLowerCase().split(' ').join('_');
		
	fs.writeFile('../data/' + filename + '.json' , JSON.stringify(_returnData));
})*/


update.forEach(function(up) {
	_returnData = _countryList.filter(function (obj) {
	  return obj.ISO.alpha3 === up.code;
	})[0]

	if(_returnData) console.log(_returnData.ISO.number, _returnData.name);	
	else console.log(up)
});

