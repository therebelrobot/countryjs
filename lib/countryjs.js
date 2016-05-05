'use strict'

/* Debugging utilities */
const debug = require('debug')
const fnDebug = debug('function')
const blockDebug = debug('block')
// const miscDebug = debug('misc')

/* External dependencies */
const _ = require('lodash')
const bulkRequire = require('bulk-require')

/* Internal dependencies */
const _countryList = _.values(bulkRequire(__dirname, ['../data/**.json'])['..'].data)

/* Internal functions */
const normalizeName = function (name) {
  fnDebug('[i] normalizeName', name)
  return _.deburr(name)
    .toLowerCase()
    .replace(/\-/g, ' ')
    .replace(/(\.|\b(the|and|of|de|des|du|di|del|y|da|und|die) \b)/g, '')
    .trim()
}
const findIndex = _.transform(_countryList, function (index, country, key) {
  fnDebug('[i] findIndex transform', index, country, key)

  let addToIndex = (name) => {
    fnDebug('[i] findIndex addToIndex', name)

    if (name) {
      blockDebug('"name" is present', name)

      index[normalizeName(name)] = key
    }
    blockDebug('"name" is not present')
  }
  addToIndex(country.name.common)
  addToIndex(country.name.official)
  _.forEach(_.map(country.name.native, 'official'), addToIndex)
  _.forEach(_.map(country.name.native, 'common'), addToIndex)
  _.forEach(country.altSpellings, addToIndex)
  _.forEach(_.map(country.translations, 'official'), addToIndex)
  _.forEach(_.map(country.translations, 'common'), addToIndex)
})

/* Exposed functions */
const Country = function () {
  fnDebug('Country')

  let _returnCountry = (country, type) => {
    fnDebug('[i] _returnCountry', country, type)

    if (type === 'name') {
      blockDebug('type is "name"')
      let normalizedName = normalizeName(country)
      let key = findIndex[normalizedName]

      // this is kind of hacky, need to figure out multiple key names
      return [_countryList[key]]
    } else if (type === 'cca3') {
      blockDebug('type is "cca3"')

      return _.filter(_countryList, (thiscountry) => {
        return thiscountry.codes.cca3 === country
      })
    } else if (type === 'ccn3') {
      blockDebug('type is "ccn3"')

      return _.filter(_countryList, (thiscountry) => {
        return thiscountry.codes.ccn3 === country
      })
    } else if (type === 'cioc') {
      blockDebug('type is "cioc"')

      return _.filter(_countryList, (thiscountry) => {
        return thiscountry.codes.cioc === country
      })
    } else if (type === 'callCode') {
      blockDebug('type is "callCode"')

      return _.filter(_countryList, (thiscountry) => {
        return thiscountry.callingCode && thiscountry.callingCode.indexOf(country.toString()) > -1
      })
    } else {
      blockDebug('type isn\'nt "name", "cca3", "cioc", "ccn3", or "callCode" defaulting to "cca2" ' + country)

      return _.filter(_countryList, (thiscountry) => {
        return thiscountry.codes.cca2 === country
      })
    }
  }
  this.all = () => {
    fnDebug('all')

    return _countryList
  }
  let methods = {
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
  _.forEach(methods, (property, method) => {
    fnDebug('_.forEach', property, method)

    this[method] = (country, type) => {
      fnDebug(method, 'property:', property, country, type)

      let _returnData = _returnCountry(country, type)
      if (_returnData.length && _returnData[0]) {
        blockDebug('"_returnData" is present', _returnData)
        return _returnData.map(function (d) {
          if (property) {
            return d[property]
          }
          return d
        })
      }
      if (_returnData) {
        if (property) {
          blockDebug('"property" is present', property)

          return _.map(_returnData, property)
        }
        blockDebug('"property" is not present')

        return _returnData
      }
      blockDebug('"_returnData" is not present')

    }
  })
  return this
}
module.exports = new Country()
