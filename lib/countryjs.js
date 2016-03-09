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
var _countryList = require('bulk-require')(__dirname, ['../data/**.json'])['..'].data
_countryList = _.values(_countryList)
var normalizeName = function (name) {
  return _.deburr(name)
    .toLowerCase()
    .replace(/\-/g, ' ')
    .replace(/(\.|\b(the|and|of|de|des|du|di|del|y|da|und|die) \b)/g, '')
    .trim()
}
var findIndex = _.transform(_countryList, function (index, country, key) {
  var addToIndex = function (name) {
    if (name) {
      index[normalizeName(name)] = key
    }
  }
  addToIndex(country.name)
  _.forEach(country.altSpellings, addToIndex)
  _.forEach(country.translations, addToIndex)
})
var Country = function () {
  var _returnCountry = function (country, type) {
    if (type === 'name') {
      var key = findIndex[normalizeName(country)]
      return _countryList[key]
    } else if (type === 'ccn3') {
      return _.find(_countryList, function (thiscountry) {
        return thiscountry.codes.ccn3 === country
      })
    } else {
      return _.find(_countryList, function (thiscountry) {
        return thiscountry.codes.ccn2 === country
      })
    }
  }
  this.all = function () {
    return _countryList
  }
  var methods = {
    info: null,
    name: 'name',
    altSpellings: 'altSpellings',
    area: 'area',
    borders: 'borders',
    capital: 'capital',
    demonym: 'demonym',
    flag: 'flag',
    geoJSON: 'geoJSON',
    languages: 'languages',
    latlng: 'latlng',
    nativeName: 'nativeName',
    population: 'population',
    states: 'provinces',
    provinces: 'provinces',
    region: 'region',
    subregion: 'subregion',
    timezones: 'timezones',
    tld: 'tld',
    translations: 'translations',
    wiki: 'wiki',
    currency: 'currency',
    callingCode: 'callingCode',
    landlocked: 'landlocked',
    codes: 'codes'
  }
  _.forEach(methods, function (property, method) {
    this[method] = function (country, type) {
      var _returnData = _returnCountry(country, type)
      if (_returnData) {
        if (property) {
          return _returnData[property]
        }
        return _returnData
      }
    }
  }.bind(this))
  return this
}
module.exports = new Country()
