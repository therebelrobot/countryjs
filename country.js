var _ = require('lodash');
var _countryList = require('./list')();

var Country = {
  all: function() {
    var _returnData = _countryList;
    return _returnData;
  },
  info: function(country, type) {
    var _returnData = _returnCountry(country, type);
    return _returnData;
  },
  name: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.name;
    return _returnData;
  },
  states: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.provinces;
    return _returnData;
  },
  provinces: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.provinces;
    return _returnData;
  },
  altSpellings: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.altSpellings;
    return _returnData;
  },
  area: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.area;
    return _returnData;
  },
  borders: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.borders;
    return _returnData;
  },
  callingCodes: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.callingCodes;
    return _returnData;
  },
  capital: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.capital;
    return _returnData;
  },
  currencies: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.currencies;
    return _returnData;
  },
  demonym: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.demonym;
    return _returnData;
  },
  flag: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.flag;
    return _returnData;
  },
  geoJSON: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.geoJSON;
    return _returnData;
  },
  ISOcodes: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.ISO;
    return _returnData;
  },
  languages: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.languages;
    return _returnData;
  },
  latlng: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.latlng;
    return _returnData;
  },
  nativeName: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.nativeName;
    return _returnData;
  },
  population: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.population;
    return _returnData;
  },
  region: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.region;
    return _returnData;
  },
  subregion: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.subregion;
    return _returnData;
  },
  timezones: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.timezones;
    return _returnData;
  },
  tld: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.tld;
    return _returnData;
  },
  translations: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.translations;
    return _returnData;
  },
  wiki: function(country, type) {
    var _returnData = _returnCountry(country, type);
    _returnData = _returnData.wiki;
    return _returnData;
  }
}
module.exports = Country;

function _returnCountry(country, type) {
  var _returnData;
  switch (type) {
    case 'name':
      _returnData = _.where(_countryList, {
        name: country
      })[0];
      break;
    case 'ISO3':
      _returnData = _.where(_countryList, function(obj) {
        return obj.ISO.alpha3 === country;
      })[0];
      break;
    case 'ISO2':
      _returnData = _.where(_countryList, function(obj) {
        return obj.ISO.alpha2 === country;
      })[0];
      break;
    default:
      _returnData = _.where(_countryList, function(obj) {
        return obj.alpha2 === country;
      })[0];
      break;
  }
  if (_.isUndefined(_returnData)) {
    return undefined;
  }
  return _returnData;
}
