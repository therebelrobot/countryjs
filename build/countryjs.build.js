#!/usr/bin/env node

/*
  This builds the country data off of mledoze/countries - https://github.com/mledoze/countries
  Licensed under ODbL - https://tldrlegal.com/license/odc-open-database-license-(odbl)
  as well as original data for provinces/states
*/

var request = require('unirest')
var _ = require('lodash')
var str2snake = require('to-snake-case')
var path = require('path')
var fs = require('fs')
// var wikipedia = require('node-wikipedia')
var wtf_wikipedia = require('wtf_wikipedia')

request.get('https://raw.githubusercontent.com/mledoze/countries/master/dist/countries.json')
  .type('json')
  .end(function (data) {
    data = JSON.parse(data.body)
    // console.log(data)
    _readCountries(data)
  })

function _readCountries (liveCountries) {
  _.forEach(liveCountries, function (liveCountry) {
    var name = liveCountry.name.common
    var filename = str2snake(name)
    console.log(filename)
    try {
      var fullPath = path.resolve(process.cwd(), './legacy_data/' + filename + '.json')
      var file = fs.statSync(fullPath)
      var isFile = file.isFile()
      if (isFile) {
        console.log('File exists!', name, filename, fullPath)
        var oldCountry = JSON.parse(fs.readFileSync(fullPath).toString())
        _buildCountry(filename, liveCountry, oldCountry)
      } else {
        console.error('File is not file!', name, filename, fullPath)
        _buildCountry(filename, liveCountry)
      }
    } catch(e) {
      console.error('File doesnt exist!', name, filename)
      _buildCountry(filename, liveCountry)
    }
  })
}

function _buildCountry (filename, liveCountry, legacyCountry) {
  console.log('_buildCountry', filename, _.keys(liveCountry), _.keys(legacyCountry))
  legacyCountry = legacyCountry || {}
  _callWiki(liveCountry).then((wiki) => {
    delete liveCountry.currencies
    delete liveCountry.callingCodes
    liveCountry.codes = liveCountry.codes || {}
    liveCountry.codes.cca2 = liveCountry.cca2
    liveCountry.codes.ccn3 = liveCountry.ccn3
    liveCountry.codes.cca3 = liveCountry.cca3
    liveCountry.codes.cioc = liveCountry.cioc
    delete liveCountry.ISO
    delete liveCountry.cca2
    delete liveCountry.ccn3
    delete liveCountry.cca3
    delete liveCountry.cioc
    liveCountry.provinces = legacyCountry.provinces
    liveCountry.geoJSON = legacyCountry.geoJSON
    liveCountry.flag = legacyCountry.flag
    if (!legacyCountry.provinces || !legacyCountry.provinces.length) {
      // retrieve provinces from wikipedia
    }
    if (!liveCountry.flag || liveCountry.flag === '') {
      if (wiki.image_flag && wiki.image_flag.text) {
        liveCountry.flag = 'https://en.m.wikipedia.org/wiki/File:' + wiki.image_flag.text
      }
    }
    console.log(filename)
    var stringDataToWrite = JSON.stringify(liveCountry, null, 2)
    var fullPath = path.resolve(process.cwd(), './data/' + filename + '.json')
    fs.writeFileSync(fullPath, stringDataToWrite)
  })
  // console.log(filename, legacyCountry, liveCountry)

}

function _callWiki (country) {
  return new Promise((resolve, reject) => {
    wtf_wikipedia.from_api(country.name.common, 'en', function (markup) {
      console.log(markup)
      var wiki = wtf_wikipedia.parse(markup)
      if (wiki.type === 'disambiguation') {
        console.log(country.name.common, 'disambiguation. fetching flag from +(country)')
        return wtf_wikipedia.from_api(country.name.common + ' (country)', 'en', function (markup) {
          var wiki = wtf_wikipedia.parse(markup)
          console.log(country.name.common, '(country) wiki', wiki)
          console.log(country.name.common, '(country) infobox', wiki.infobox)
          if (wiki.infobox && wiki.infobox.image_flag && wiki.infobox.image_flag.text) {
            console.log(country.name.common, '(country) flag', wiki.infobox.image_flag.text)
          }
          resolve(wiki.infobox)
        })
      }
      console.log(country.name.common, 'infobox', wiki.infobox)
      if (wiki.infobox && wiki.infobox.image_flag && wiki.infobox.image_flag.text) {
        console.log(country.name.common, 'flag', wiki.infobox.image_flag.text)
        country.flag = 'https://en.m.wikipedia.org/wiki/File:' + wiki.infobox.image_flag.text
      }
      resolve(wiki.infobox)
    })
  })
}
