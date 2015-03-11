// Copyright (c) 2015, Trent Oswald <trentoswald@therebelrobot.com
//
// Permission to use, copy, modify, and/or distribute this software for any purpose
// with or without fee is hereby granted, provided that the above copyright notice
// and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
// REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT,
// OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE,
// DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS
// ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

var _ = require('lodash')
var _countryList = require('../data')()
var Country = function () {
  var _returnCountry = function (country, type) {
    var _returnData
    switch (type) {
    case 'name':
      _returnData = _.filter(_countryList, {
        name: country
      })[0]
      if (_.isUndefined(_returnData)) {
        _returnData = _.filter(_countryList, function (obj) {
          return _.indexOf(obj.altSpellings, country) > -1
        })[0]
      }
      if (_.isUndefined(_returnData)) {
        _returnData = _.filter(_countryList, function (obj) {
          return _.indexOf(_.values(obj.translations), country) > -1
        })[0]
      }
      break
    case 'ISO3':
      _returnData = _.filter(_countryList, function (obj) {
        return obj.ISO.alpha3 === country
      })[0]
      break
    case 'ISO2':
      _returnData = _.filter(_countryList, function (obj) {
        return obj.ISO.alpha2 === country
      })[0]
      break
    default:
      _returnData = _.filter(_countryList, function (obj) {
        return obj.ISO.alpha2 === country
      })[0]
      break
    }
    if (_.isUndefined(_returnData)) {
      return undefined
    }
    return _returnData
  }
  this.all = function () {
    var _returnData = _countryList
    return _returnData
  }
  this.info = function (country, type) {
    var _returnData = _returnCountry(country, type)
    return _returnData
  }
  this.name = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.name
    return _returnData
  }
  this.states = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.provinces
    return _returnData
  }
  this.provinces = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.provinces
    return _returnData
  }
  this.altSpellings = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.altSpellings
    return _returnData
  }
  this.area = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.area
    return _returnData
  }
  this.borders = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.borders
    return _returnData
  }
  this.callingCodes = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.callingCodes
    return _returnData
  }
  this.capital = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.capital
    return _returnData
  }
  this.currencies = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.currencies
    return _returnData
  }
  this.demonym = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.demonym
    return _returnData
  }
  this.flag = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.flag
    return _returnData
  }
  this.geoJSON = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.geoJSON
    return _returnData
  }
  this.ISOcodes = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.ISO
    return _returnData
  }
  this.languages = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.languages
    return _returnData
  }
  this.latlng = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.latlng
    return _returnData
  }
  this.nativeName = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.nativeName
    return _returnData
  }
  this.population = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.population
    return _returnData
  }
  this.region = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.region
    return _returnData
  }
  this.subregion = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.subregion
    return _returnData
  }
  this.timezones = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.timezones
    return _returnData
  }
  this.tld = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.tld
    return _returnData
  }
  this.translations = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.translations
    return _returnData
  }
  this.wiki = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _returnData.wiki
    return _returnData
  }
  return this
}
module.exports = new Country()
