'use strict'

const test = require('tape')
const _ = require('lodash')
const fs = require('fs')
const path = require('path')

const country = require('../lib/countryjs')
const dataDir = fs.readdirSync(path.resolve(__dirname, '../data'))
const staticUS = require('../data/united_states.json')
const staticBE = require('../data/belgium.json')

process.env.DEBUG = 'function,block'

test('it should get all country information', (t) => {
  t.plan(2)
  let testCountry = country.all()
  t.ok(_.isArray(testCountry), 'should be array')
  t.equal(testCountry.length, dataDir.length)
  t.end() // t.end(err)
})

test('it should get all available info for United States (default)', (t) => {
  t.plan(2)
  let testCountry = country.info('US')
  t.ok(_.isArray(testCountry), 'should be array')
  t.deepEqual(testCountry[0], staticUS)
  t.end() // t.end(err)
})

test('it should get all available info for United States (ISO2/CCA2)', (t) => {
  t.plan(2)
  let testCountry = country.info('US', 'cca2')
  t.ok(_.isArray(testCountry), 'should be array')
  t.deepEqual(testCountry[0], staticUS)
  t.end() // t.end(err)
})

test('it should get all available info for United States (ISO3/CCA3)', (t) => {
  t.plan(2)
  let testCountry = country.info('USA', 'cca3')
  t.ok(_.isArray(testCountry), 'should be array')
  t.deepEqual(testCountry[0], staticUS)
  t.end() // t.end(err)
})

test('it should get all available info for United States (CCN3)', (t) => {
  t.plan(2)
  let testCountry = country.info('840', 'ccn3')
  t.ok(_.isArray(testCountry), 'should be array')
  t.deepEqual(testCountry[0], staticUS)
  t.end() // t.end(err)
})

test('it should get all available info for United States (CIOC)', (t) => {
  t.plan(2)
  let testCountry = country.info('USA', 'cioc')
  t.ok(_.isArray(testCountry), 'should be array')
  t.deepEqual(testCountry[0], staticUS)
  t.end() // t.end(err)
})

test('it should get all available info for country code 32 (Belgium)', (t) => {
  t.plan(2)
  let testCountry = country.info('32', 'callCode')
  t.ok(_.isArray(testCountry), 'should be array')
  t.deepEqual(testCountry[0], staticBE)
  t.end() // t.end(err)
})

test('it should get codes available for country code 32 (Belgium)', (t) => {
  t.plan(2)
  let testCountry = country.codes('32', 'callCode')
  t.ok(_.isArray(testCountry), 'should be array')
  t.deepEqual(testCountry[0], staticBE.codes)
  t.end() // t.end(err)
})

test('it should get all available info for United States (name - common)', (t) => {
  t.plan(2)
  let testCountry = country.info('United States', 'name')
  t.ok(_.isArray(testCountry), 'should be array')
  t.deepEqual(testCountry[0], staticUS)
  t.end() // t.end(err)
})

test('it should get all available info for United States (name - official)', (t) => {
  t.plan(2)
  let testCountry = country.info('United States of America', 'name')
  t.ok(_.isArray(testCountry), 'should be array')
  t.deepEqual(testCountry[0], staticUS)
  t.end() // t.end(err)
})

test('it should get all available info for United States (name - translation - common)', (t) => {
  t.plan(2)
  let testCountry = country.info('アメリカ合衆国', 'name')
  t.ok(_.isArray(testCountry), 'should be array')
  t.deepEqual(testCountry[0], staticUS)
  t.end() // t.end(err)
})

test('it should get all available info for United States (name - translation - official)', (t) => {
  t.plan(2)
  let testCountry = country.info("Les états-unis d'Amérique", 'name')
  t.ok(_.isArray(testCountry), 'should be array')
  t.deepEqual(testCountry[0], staticUS)
  t.end() // t.end(err)
})

test('it should get all available info using approximate string matching', (t) => {
  t.plan(12)
  var searches = {
    'thailande': 'Thailand',
    'U.S.A': 'United States',
    'THE GREAT BRITAIN': 'United Kingdom',
    ' Bosnia herzegovina ': 'Bosnia and Herzegovina'
  }
  Object.keys(searches).forEach(function (search) {
    let testCountry = country.info(search, 'name')
    t.ok(_.isArray(testCountry), 'should be array')
    t.ok(_.isObject(testCountry[0]), 'should be object')
    t.equal(testCountry[0].name.common, searches[search])
  })
  t.end() // t.end(err)
})
//
// test('it should get list of states for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get list of provinces for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get name for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get alternate spellings for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get area (km²) of United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get list of bordering countries for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get list of calling codes for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get capital for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get list of currencies for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get demonym for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get flag for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get geoJSON for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get list of ISO codes for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get list of languages for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get approximate latitude and longitude coordinates for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get native name for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get population for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get region for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get subregion for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get list of timezones for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get tld for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get list of translations of the name of United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get wiki page link for United States', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get info for all countries under same ISO code', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should undefined for a mismatched country identifier', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should get info for all countries under same ISO code', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should undefined for a mismatched country identifier', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
//
// test('it should undefined for a mismatched country identifier (other methods)', (t) => {
//   t.plan(0)
//   let testCountry = country
//   t.equal()
//   t.end() // t.end(err)
// })
