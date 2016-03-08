#!/usr/bin/env node

var request = require('unirest')
var through2 = require('through2')
var _ = require('lodash')
var str2snake = require('to-snake-case')
var path = require('path')
var fs = require('fs')

request.get('https://raw.githubusercontent.com/mledoze/countries/master/dist/countries.json')
  .type('json')
  .end(function (data) {
    data = JSON.parse(data.body)
    // console.log(data)
    _readCountries(data)
  })

function _readCountries(countries){
  _.forEach(countries, function(country){
    var name = country.name.common
    var filename = str2snake(name)
    console.log(filename)
    try{
      var fullPath = path.resolve(process.cwd(), './legacy_data/' + filename + '.json')
      var file = fs.statSync(fullPath)
      var isFile = file.isFile()
      if (isFile) {
        console.log('File exists!', name,filename,fullPath)
        var data = JSON.parse(fs.readFileSync(fullPath).toString())
        _buildCountry(filename, country, data)
      }
      else {
        console.error('File doesnt exist!',name,filename,fullPath)
      }
    } catch(e){
      console.error('File doesnt exist!',name,filename)
      _buildCountry(filename, country)
    }
  })
}

function _buildCountry(filename, newData, oldData){
  oldData = oldData || {}
  // console.log(filename, newData, oldData)
  _.forEach(newData, function(value, key){
    oldData[key] = value
  })
  delete oldData.currencies
  delete oldData.callingCodes
  oldData.codes = oldData.codes || {}
  oldData.codes.cca2 = oldData.cca2
  oldData.codes.ccn3 = oldData.ccn3
  oldData.codes.cca3 = oldData.cca3
  oldData.codes.cioc = oldData.cioc
  delete oldData.ISO
  delete oldData.cca2
  delete oldData.ccn3
  delete oldData.cca3
  delete oldData.cioc
  console.log(filename,oldData)
  var stringDataToWrite = JSON.stringify(oldData, null, 2)
  var fullPath = path.resolve(process.cwd(), './data/' + filename + '.json')
  fs.writeFileSync(fullPath, stringDataToWrite)
}
