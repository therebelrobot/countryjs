var expect = require('chai').expect
var country = require('../index')

/* Definitions for JS Standard */
/* global describe, it */

describe('countryjs', function () {
  it('should get all country information', function (done) {
    var tester = country.all()
    expect(tester).to.be.an('array')
    expect(tester.length).to.equal(251)
    expect(tester[0]).to.be.an('object')
    done()
  })
  it('should get all available info for United States (default)', function (done) {
    var tester = country.info('US')[0]
    expect(tester).to.be.an('object')
    done()
  })
  it('should get all available info for United States (ISO2)', function (done) {
    var tester = country.info('US', 'ISO2')[0]
    expect(tester).to.be.an('object')
    done()
  })
  it('should get all available info for United States (ISO3)', function (done) {
    var tester = country.info('USA', 'ISO3')[0]
    expect(tester).to.be.an('object')
    done()
  })
  it('should get all available info for United States (name)', function (done) {
    var tester = country.info('United States', 'name')[0]
    expect(tester).to.be.an('object')
    done()
  })
  it('should get all available info for United States (alternate name)', function (done) {
    var tester = country.info('United States of America', 'name')[0]
    expect(tester).to.be.an('object')
    done()
  })
  it('should get all available info for United States (translation name)', function (done) {
    var tester = country.info('Estados Unidos', 'name')[0]
    expect(tester).to.be.an('object')
    done()
  })
  it('should get all available info using approximate string matching', function (done) {
    var searches = {
      'thailande': 'Thailand',
      'U.S.A': 'United States',
      'THE GREAT BRITAIN': 'United Kingdom',
      ' Bosnia herzegovina ': 'Bosnia and Herzegovina'
    }
    Object.keys(searches).forEach(function (search) {
      var tester = country.info(search, 'name')
      expect(tester).to.be.an('object')
      expect(tester.name).to.equal(searches[search])
    })
    done()
  })
  it('should get list of states for United States', function (done) {
    var tester = country.states('US')[0].states
    expect(tester).to.be.an('array')
    expect(tester.length).to.equal(51)
    expect(tester[0]).to.be.a('string')
    done()
  })
  it('should get list of provinces for United States', function (done) {
    var tester = country.provinces('US')[0].provinces
    expect(tester).to.be.an('array')
    expect(tester.length).to.equal(51)
    expect(tester[0]).to.be.a('string')
    done()
  })
  it('should get name for United States', function (done) {
    var tester = country.name('US')[0].name
    expect(tester).to.be.a('string')
    done()
  })
  it('should get alternate spellings for United States', function (done) {
    var tester = country.altSpellings('US')[0].altSpellings
    expect(tester).to.be.an('array')
    expect(tester.length).to.equal(3)
    expect(tester[0]).to.be.a('string')
    done()
  })
  it('should get area (km²) of United States', function (done) {
    var tester = country.area('US')[0].area
    expect(tester).to.be.a('number')
    done()
  })
  it('should get list of bordering countries for United States', function (done) {
    var tester = country.borders('US')[0].borders
    expect(tester).to.be.an('array')
    expect(tester.length).to.equal(2)
    expect(tester[0]).to.be.a('string')
    done()
  })
  it('should get list of calling codes for United States', function (done) {
    var tester = country.callingCodes('US')[0].callingCodes
    expect(tester).to.be.an('array')
    expect(tester.length).to.equal(1)
    expect(tester[0]).to.be.a('string')
    done()
  })
  it('should get capital for United States', function (done) {
    var tester = country.capital('US')[0].capital
    expect(tester).to.be.a('string')
    done()
  })
  it('should get list of currencies for United States', function (done) {
    var tester = country.currencies('US')[0].currencies
    expect(tester).to.be.an('array')
    expect(tester.length).to.equal(3)
    expect(tester[0]).to.be.a('string')
    done()
  })
  it('should get demonym for United States', function (done) {
    var tester = country.demonym('US')[0].demonym
    expect(tester).to.be.a('string')
    done()
  })
  it('should get flag for United States', function (done) {
    var tester = country.flag('US')[0].flag
    expect(tester).to.be.a('string')
    done()
  })
  it('should get geoJSON for United States', function (done) {
    var tester = country.geoJSON('US')[0].geoJSON
    expect(tester).to.be.an('object')
    done()
  })
  it('should get list of ISO codes for United States', function (done) {
    var tester = country.ISOcodes('US')[0].ISO
    expect(tester).to.be.an('object')
    done()
  })
  it('should get list of languages for United States', function (done) {
    var tester = country.languages('US')[0].languages
    expect(tester).to.be.an('array')
    expect(tester.length).to.equal(1)
    expect(tester[0]).to.be.a('string')
    done()
  })
  it('should get approximate latitude and longitude coordinates for United States', function (done) {
    var tester = country.latlng('US')[0].latlng
    expect(tester).to.be.an('array')
    expect(tester.length).to.equal(2)
    expect(tester[0]).to.be.a('number')
    done()
  })
  it('should get native name for United States', function (done) {
    var tester = country.nativeName('US')[0].nativeName
    expect(tester).to.be.a('string')
    done()
  })
  it('should get population for United States', function (done) {
    var tester = country.population('US')[0].population
    expect(tester).to.be.a('number')
    done()
  })
  it('should get region for United States', function (done) {
    var tester = country.region('US')[0].region
    expect(tester).to.be.a('string')
    done()
  })
  it('should get subregion for United States', function (done) {
    var tester = country.subregion('US')[0].subregion
    expect(tester).to.be.a('string')
    done()
  })
  it('should get list of timezones for United States', function (done) {
    var tester = country.timezones('US')[0].timezones
    expect(tester).to.be.an('array')
    expect(tester.length).to.equal(11)
    expect(tester[0]).to.be.a('string')
    done()
  })
  it('should get tld for United States', function (done) {
    var tester = country.tld('US')[0].tld
    expect(tester).to.be.an('array')
    expect(tester.length).to.equal(1)
    expect(tester[0]).to.be.a('string')
    done()
  })
  it('should get list of translations of the name of United States', function (done) {
    var tester = country.translations('US')[0].translations
    expect(tester).to.be.an('object')
    done()
  })
  it('should get wiki page link for United States', function (done) {
    var tester = country.wiki('US')[0].wiki
    expect(tester).to.be.a('string')
    done()
  })
  it('should get info for all countries under same ISO code', function (done) {
    var tester = country.info('GB')
    expect(tester).to.be.an('array')
    expect(tester[0].name).to.equal('Scotland')
    expect(tester[1].name).to.equal('United Kingdom')
    done()
  })
  it('should undefined for a mismatched country identifier', function (done) {
    var tester = country.info('UX')
    expect(tester).to.be.an('array')
    expect(tester.length).to.equal(0)
    done()
  })
  it('should undefined for a mismatched country identifier (other methods)', function (done) {
    var methods = [
      'states',
      'provinces',
      'name',
      'altSpellings',
      'area',
      'borders',
      'callingCodes',
      'capital',
      'currencies',
      'demonym',
      'flag',
      'geoJSON',
      'ISOcodes',
      'languages',
      'latlng',
      'nativeName',
      'population',
      'region',
      'subregion',
      'timezones',
      'tld',
      'translations',
      'wiki'
    ]
    methods.forEach(function (method) {
      var tester = country[method]('UX')
      expect(tester).to.be.an('undefined')
    })
    done()
  })
})
