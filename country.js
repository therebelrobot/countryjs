var _ = require('lodash');
var _countryList = require('./list');

var Country = {
  info: function(country, type) {
    var _returnData;
    switch (type) {
      case 'name':
        _returnData = _.find(_countryList, {
          name: country
        })[0];
        break;
      case 'ISO3':
        _returnData = _.find(_countryList, function(obj) {
          if (obj.ISO[3] == country) {
            return obj;
          }
          return false;
        })[0];
        break;
      case 'numeric':
        _returnData = _.find(_countryList, function(obj) {
          if (obj.ISO.numeric == country) {
            return obj;
          }
          return false;
        })[0];
        break;
      case 'code':
        _returnData = _.find(_countryList, function(obj) {
          if (obj.ISO.code == country) {
            return obj;
          }
          return false;
        })[0];
        break;
      default:
        _returnData = _.find(_countryList, function(obj) {
          if (obj.ISO[2] == country) {
            return obj;
          }
          return false;
        })[0];
        break;
    }
    if (_.isUndefined(_returnData)) {
      return false;
    }
    _returnData = _.omit(_returnData, 'provinces');
    return _returnData;
  },
  states: function(country, type) {
    var _returnData;
    switch (type) {
      case 'name':
        _returnData = _.find(_countryList, {
          name: country
        })[0];
        break;
      case 'ISO3':
        _returnData = _.find(_countryList, function(obj) {
          if (obj.ISO[3] == country) {
            return obj;
          }
          return false;
        })[0];
        break;
      case 'numeric':
        _returnData = _.find(_countryList, function(obj) {
          if (obj.ISO.numeric == country) {
            return obj;
          }
          return false;
        })[0];
        break;
      case 'code':
        _returnData = _.find(_countryList, function(obj) {
          if (obj.ISO.code == country) {
            return obj;
          }
          return false;
        })[0];
        break;
      default:
        _returnData = _.find(_countryList, function(obj) {
          if (obj.ISO[2] == country) {
            return obj;
          }
          return false;
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
      var newObj = {
        name: obj.name,
        ISO2: obj.ISO[2],
        ISO3: obj.ISO[3],
        ISOnum: obj.ISO.numeric,
        ISOcode: obj.ISO.code,
        stateCount: obj.provinces.length
      }
      return newObj;
    });
    return _returnData;
  }
}
console.log(Country.all());
module.exports = Country;