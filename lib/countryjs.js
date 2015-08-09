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
        })
        if (_.isEmpty(_returnData)) {
          _returnData = _.filter(_countryList, function (obj) {
            return _.indexOf(obj.altSpellings, country) > -1
          })
        }
        if (_.isEmpty(_returnData)) {
          _returnData = _.filter(_countryList, function (obj) {
            return _.indexOf(_.values(obj.translations), country) > -1
          })
        }
        break
      case 'ISO3':
        _returnData = _.filter(_countryList, function (obj) {
          return obj.ISO.alpha3 === country
        })
        break
      case 'ISO2':
        _returnData = _.filter(_countryList, function (obj) {
          return obj.ISO.alpha2 === country
        })
        break
      default:
        _returnData = _.filter(_countryList, function (obj) {
          return obj.ISO.alpha2 === country
        })
        break
    }
    if (_.isEmpty(_returnData)) {
      return []
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
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      return newCountry
    })
    return _returnData
  }
  this.states = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.states = country.provinces
      return newCountry
    })
    return _returnData
  }
  this.provinces = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.provinces = country.provinces
      return newCountry
    })
    return _returnData
  }
  this.altSpellings = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.altSpellings = country.altSpellings
      return newCountry
    })
    return _returnData
  }
  this.area = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.area = country.area
      return newCountry
    })
    return _returnData
  }
  this.borders = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.borders = country.borders
      return newCountry
    })
    return _returnData
  }
  this.callingCodes = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.callingCodes = country.callingCodes
      return newCountry
    })
    return _returnData
  }
  this.capital = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.capital = country.capital
      return newCountry
    })
    return _returnData
  }
  this.currencies = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.currencies = country.currencies
      return newCountry
    })
    return _returnData
  }
  this.demonym = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.demonym = country.demonym
      return newCountry
    })
    return _returnData
  }
  this.flag = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.flag = country.flag
      return newCountry
    })
    return _returnData
  }
  this.geoJSON = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.geoJSON = country.geoJSON
      return newCountry
    })
    return _returnData
  }
  this.ISOcodes = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.ISO = country.ISO
      return newCountry
    })
    return _returnData
  }
  this.languages = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.languages = country.languages
      return newCountry
    })
    return _returnData
  }
  this.latlng = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.latlng = country.latlng
      return newCountry
    })
    return _returnData
  }
  this.nativeName = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.nativeName = country.nativeName
      return newCountry
    })
    return _returnData
  }
  this.population = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.population = country.population
      return newCountry
    })
    return _returnData
  }
  this.region = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.region = country.region
      return newCountry
    })
    return _returnData
  }
  this.subregion = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.subregion = country.subregion
      return newCountry
    })
    return _returnData
  }
  this.timezones = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.timezones = country.timezones
      return newCountry
    })
    return _returnData
  }
  this.tld = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.tld = country.tld
      return newCountry
    })
    return _returnData
  }
  this.translations = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.translations = country.translations
      return newCountry
    })
    return _returnData
  }
  this.wiki = function (country, type) {
    var _returnData = _returnCountry(country, type)
    _returnData = _.map(_returnData, function (country) {
      var newCountry = {}
      newCountry.name = country.name
      newCountry.wiki = country.wiki
      return newCountry
    })
    return _returnData
  }
  return this
}
module.exports = new Country()
