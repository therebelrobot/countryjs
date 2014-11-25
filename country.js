var _ = require('lodash');
var _countryList = require(__dirname + '/list')();

var Country = {
  info: function(country, type) {
    var _returnData;
    switch (type) {
      case 'name':
        _returnData = _.where(_countryList, {
          name: country
        })[0];
        break;
      case 'ISO3':
        _returnData = _.where(_countryList, function(obj) {
          return obj.ISO[3] === country;
        })[0];
        break;
      case 'numeric':
        _returnData = _.where(_countryList, function(obj) {
          return obj.ISO.numeric === country;
        })[0];
        break;
      case 'code':
        _returnData = _.where(_countryList, function(obj) {
          return obj.ISO.code === country;
        })[0];
        break;
      default:
        _returnData = _.where(_countryList, function(obj) {
          return obj.ISO[2] === country;
        })[0];
        break;
    }
    if (_.isUndefined(_returnData)) {
      return false;
    }
    _returnData.stateCount = _returnData.provinces.length;
    _returnData = _.omit(_returnData, 'provinces');
    return _returnData;
  },
  states: function(country, type) {
    var _returnData;
    switch (type) {
      case 'name':
        _returnData = _.where(_countryList, {
          name: country
        })[0];
        break;
      case 'ISO3':
        _returnData = _.where(_countryList, function(obj) {
          return obj.ISO[3] === country;
        })[0];
        break;
      case 'numeric':
        _returnData = _.where(_countryList, function(obj) {
          return obj.ISO.numeric === country;
        })[0];
        break;
      case 'code':
        _returnData = _.where(_countryList, function(obj) {
          return obj.ISO.code === country;
        })[0];
        break;
      default:
        _returnData = _.where(_countryList, function(obj) {
          return obj.ISO[2] === country;
        })[0];
        break;
    }
    if (_.isUndefined(_returnData)) {
      return false;
    }
    _returnData = _returnData.provinces;
    return _returnData;
  },
  all: function() {
    var _returnData = _countryList.map(function(obj) {
      obj.stateCount = obj.provinces.length;
      obj = _.omit(obj, 'provinces');
      return obj;
    });
    return _returnData;
  },
  currency: function(country, type, reverse) {

  },
  flag: function(country, type, reverse) {

  },
  languages: function(country, type, reverse) {

  },
  wiki: function(country, type, reverse) {

  },
  callingCode: function(country, type, reverse) {

  },
  ioc: function(country, type, reverse) {

  },
  tld: function(country, type, reverse) {

  },
  coordinates: function(country, type, reverse) {

  },
  timezone: function(country, type, reverse) {

  }
}
module.exports = Country;