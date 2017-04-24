var fs = require('fs')
var path = require('path')
var expect = require('chai').expect
var data = require('../data')

/* Definitions for JS Standard */
/* global describe, it */

describe('data', function () {
  it('should export a function', function (done) {
    expect(data).to.be.a('function')
    done()
  })

  it('should contain data for every JSON file in the data directory', function (done) {
    var dataDirectory = path.join(path.dirname(__dirname), 'data')
    var dataArray = data()

    fs.readdir(dataDirectory, function (err, files) {
      if (err) {
        done(err)
        return
      }

      var jsonFiles = files.filter(function (file) {
        return file.endsWith('.json')
      })

      jsonFiles.forEach(function (file) {
        var jsonData = require(path.join(dataDirectory, file))
        expect(dataArray).to.contain(jsonData)
      })
    })

    done()
  })
})
