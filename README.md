# country.js

[![NPM](https://nodei.co/npm/countryjs.png?downloads=true)](https://nodei.co/npm/countryjs/)
[![NPM](https://nodei.co/npm-dl/countryjs.png?months=3&height=2)](https://nodei.co/npm/countryjs/)

[![Join the chat at https://gitter.im/therebelrobot/countryjs](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/therebelrobot/countryjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)
[![Dependency Status](https://david-dm.org/therebelrobot/countryjs.svg)](https://david-dm.org/therebelrobot/countryjs)
[![Code Climate](https://codeclimate.com/github/therebelrobot/countryjs/badges/gpa.svg)](https://codeclimate.com/github/therebelrobot/countryjs)
[![Test Coverage](https://codeclimate.com/github/therebelrobot/countryjs/badges/coverage.svg)](https://codeclimate.com/github/therebelrobot/countryjs)
[![JS.ORG](https://img.shields.io/badge/js.org-country-ffb400.svg?style=flat)](http://js.org)

A Node.js module for returning data about countries, ISO info and states/provinces within them.

## Table of Contents

* [Install](#install)
  * [Using with browserify](#browserify)
* [Usage](#usage)
* [API](#api)
  * [`.info()`](#info)
  * [`.states()`](#states)
  * [`.provinces()`](#provinces)
  * [`.name()`](#name)
  * [`.altSpellings()`](#altspellings)
  * [`.area()`](#area)
  * [`.borders()`](#borders)
  * [`.callingCodes()`](#callingcodes)
  * [`.capital()`](#capital)
  * [`.currencies()`](#currencies)
  * [`.demonym()`](#demonym)
  * [`.flag()`](#flag)
  * [`.geoJSON()`](#geojson)
  * [`.ISOcodes()`](#isocodes)
  * [`.languages()`](#languages)
  * [`.latlng()`](#latlng)
  * [`.nativeName()`](#nativename)
  * [`.population()`](#population)
  * [`.region()`](#region)
  * [`.subregion()`](#subregion)
  * [`.timezones()`](#timezones)
  * [`.tld()`](#tld)
  * [`.translations()`](#translations)
  * [`.wiki()`](#wiki)
  * [`.all()`](#all)
* [Special Thanks](#special-thanks)
* [Contributing](#contributing)
* [Changelog](#changelog)
* [Disclaimer](#disclaimer)
* [License (ISC)](#license-isc)

## Install

```bash
npm install countryjs
```

### Using with browserify

To run in-browser, you'll need the `bulkify` transform for `browserify`, as it pairs with `bulk-require`, to staticly resolve each country JSON.

```
npm install bulkify
```

```
var bulkify = require('bulkify')
var bundle = browserify({
  entries: [...],
})
.transform(bulkify, {
  global: true
})
```

## Usage

To access one of the country properties available, you'll need to use one of the API methods listed below and pass a country in either way:

- Using the ISO-alpha2 code: `country.population('US', 'ISO2')` or `country.area('JP')` (defaults)
- Using the ISO-alpha3 code: `country.capital('GBR', 'ISO3)`
- Using the country name: `country.wiki('france', 'name')`. The matching is case-insensitive, against the native name, alternative spellings and available transalations.

## API

### `.info()`

Returns all available information for a specified country.

```JavaScript
var country = require('countryjs');
country.info('US', 'ISO2'); // 'ISO2', 'ISO3', 'name'
country.info('US'); // Defaults to ISO2
// returns object,
// {
//     "name": "United States",
//     "altSpellings": ["US", "USA", "United States of America"],
//     "area": 9629091,
//     "borders": ["CAN", "MEX"],
//     "callingCodes": ["1"],
//     "capital": "Washington D.C.",
//     "currencies": ["USD", "USN", "USS"],
//     "demonym": "American",
//     "flag": "", // Flag API is incomplete
//     "geoJSON": {} //GeoJSON data,
//     "ISO": {
//         "alpha2": "US",
//         "alpha3": "USA"
//     },
//     "languages": ["en"],
//     "latlng": [38, -97],
//     "nativeName": "United States",
//     "population": 319259000,
//     "provinces": [], // State/Province list
//     "region": "Americas",
//     "subregion": "Northern America",
//     "timezones": [], // TimeZone list
//     "tld": [".us"],
//     "translations": {
//         "de": "Vereinigte Staaten von Amerika",
//         "es": "Estados Unidos",
//         "fr": "États-Unis",
//         "ja": "アメリカ合衆国",
//         "it": "Stati Uniti D'America"
//     },
//     "wiki": "http://en.wikipedia.org/wiki/united_states_of_america"
// }
```

### `.states()`

Returns all states/provinces for a specified country.

```JavaScript
var country = require('countryjs');
country.states('USA', 'ISO3'); // 'ISO2', 'ISO3', 'name'
country.states('US'); // Defaults to ISO2
// returns array of states / provinces,
// [
//  "Alabama",
//  ...
// ]
```

### `.provinces()`

Alias of [`.states()`]()

### `.name()`

Returns name for a specified country

```javascript
var country = require('countryjs');
country.name('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.name('US') // Defaults to 'ISO2'
// returns string
// "United States"
```

### `.altSpellings()`

Returns alternate spellings for the name of a specified country

```javascript
var country = require('countryjs');
country.altSpellings('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.altSpellings('US') // Defaults to 'ISO2'
// returns array of strings, alternate names
// ["US", "USA", "United States of America"]
```

### `.area()`

Returns area (km²) for a specified country

```javascript
var country = require('countryjs');
country.area('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.area('US') // Defaults to 'ISO2'
// returns number of square kilometer area
// 9629091
```

### `.borders()`

Returns bordering countries (ISO3) for a specified country

```javascript
var country = require('countryjs');
country.borders('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.borders('US') // Defaults to 'ISO2'
// returns array of strings, ISO3 codes of countries that border the given country
// ["CAN", "MEX"]
```

### `.callingCodes()`

Returns international calling codes for a specified country

```javascript
var country = require('countryjs');
country.callingCodes('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.callingCodes('US') // Defaults to 'ISO2'
// returns array of calling code strings
// ["1"]
```

### `.capital()`

Returns capital city for a specified country

```javascript
var country = require('countryjs');
country.capital('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.capital('US') // Defaults to 'ISO2'
// returns string
// "Washington D.C."
```

### `.currencies()`

Returns official currencies for a specified country

```javascript
var country = require('countryjs');
country.currencies('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.currencies('US') // Defaults to 'ISO2'
// returns array of strings, currencies
// ["USD", "USN", "USS"]
```

### `.demonym()`

Returns the [demonyms](http://en.wikipedia.org/wiki/Demonym) for a specified country

```javascript
var country = require('countryjs');
country.demonym('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.demonym('US') // Defaults to 'ISO2'
// returns string, name of residents
// "American"
```

### `.flag() - INCOMPLETE`

Returns SVG link of the official flag for a specified country

```javascript
var country = require('countryjs');
country.flag('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.flag('US') // Defaults to 'ISO2'
// returns string URL of CC licensed svg flag
```

### `.geoJSON()`

Returns [geoJSON](http://en.wikipedia.org/wiki/GeoJSON) for a specified country

```javascript
var country = require('countryjs');
country.geoJSON('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.geoJSON('US') // Defaults to 'ISO2'
// returns object of GeoJSON data
```

### `.ISOcodes()`

Returns ISO codes for a specified country

```javascript
var country = require('countryjs');
country.ISOcodes('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.ISOcodes('US') // Defaults to 'ISO2'
// returns object of ISO codes
// {
//   "alpha2": "US",
//   "alpha3": "USA"
// }
```

### `.languages()`

Returns official languages for a specified country

```javascript
var country = require('countryjs');
country.languages('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.languages('US') // Defaults to 'ISO2'
// returns array of language codes
// ["en"]
```

### `.latlng()`

Returns approx latitude and longitude for a specified country

```javascript
var country = require('countryjs');
country.latlng('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.latlng('US') // Defaults to 'ISO2'
// returns array, approx latitude and longitude for country
// [38, -97]
```

### `.nativeName()`

Returns the name of the country in its native tongue

```javascript
var country = require('countryjs');
country.nativeName('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.nativeName('US') // Defaults to 'ISO2'
// returns string, name of country in native language
// "United States"
```

### `.population()`

Returns approximate population for a specified country

```javascript
var country = require('countryjs');
country.population('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.population('US') // Defaults to 'ISO2'
// returns number, approx population
// 319259000
```

### `.region()`

Returns general region for a specified country

```javascript
var country = require('countryjs');
country.region('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.region('US') // Defaults to 'ISO2'
// returns string
// "Americas"
```

### `.subregion()`

Returns a more specific region for a specified country

```javascript
var country = require('countryjs');
country.subregion('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.subregion('US') // Defaults to 'ISO2'
// returns string
// "Northern America"
```

### `.timezones()`

Returns all timezones for a specified country

```javascript
var country = require('countryjs');
country.timezones('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.timezones('US') // Defaults to 'ISO2'
// returns array of timezones
```

### `.tld()`

Returns official [top level domains](http://en.wikipedia.org/wiki/Top-level_domain) for a specified country

```javascript
var country = require('countryjs');
country.tld('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.tld('US') // Defaults to 'ISO2'
// returns array of top level domains specific to the country
// [".us"]
```

### `.translations()`

Returns translations for a specified country name in popular languages

```javascript
var country = require('countryjs');
country.translations('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.translations('US') // Defaults to 'ISO2'
// returns object of translations of country name in major languages
// {
//   "de": "Vereinigte Staaten von Amerika",
//   "es": "Estados Unidos",
//   "fr": "États-Unis",
//   "ja": "アメリカ合衆国",
//   "it": "Stati Uniti D'America"
// }
```

### `.wiki()`

Returns link to wikipedia page for a specified country

```javascript
var country = require('countryjs');
country.wiki('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.wiki('US') // Defaults to 'ISO2'
// returns string URL of wikipedia article on country
// "http://en.wikipedia.org/wiki/united_states_of_america"
```

### `.all()`

Returns array of objects containing all available data for all countries. This will be super big. Not recommended.

```JavaScript
var country = require('countryjs');
country.all();
// returns array of objects,
// [{
//     "name": "United States",
//     "altSpellings": ["US", "USA", "United States of America"],
//     "area": 9629091,
//     "borders": ["CAN", "MEX"],
//     "callingCodes": ["1"],
//     "capital": "Washington D.C.",
//     "currencies": ["USD", "USN", "USS"],
//     "demonym": "American",
//     "flag": "", // Flag API is incomplete
//     "geoJSON": {} //GeoJSON data,
//     "ISO": {
//         "alpha2": "US",
//         "alpha3": "USA"
//     },
//     "languages": ["en"],
//     "latlng": [38, -97],
//     "nativeName": "United States",
//     "population": 319259000,
//     "provinces": [], // State/Province list
//     "region": "Americas",
//     "subregion": "Northern America",
//     "timezones": [], // TimeZone list
//     "tld": [".us"],
//     "translations": {
//         "de": "Vereinigte Staaten von Amerika",
//         "es": "Estados Unidos",
//         "fr": "États-Unis",
//         "ja": "アメリカ合衆国",
//         "it": "Stati Uniti D'America"
//     },
//     "wiki": "http://en.wikipedia.org/wiki/united_states_of_america"
// }...]
```

## Special Thanks

Special thanks to johan for his work on [johan/world.geo.json](https://github.com/johan/world.geo.json), who made the geojson portion of this build possible.

## Contributing

*This project adheres to [Javascript Standard style](https://github.com/feross/standard)*

To contribute code to this module, please follow this workflow: 

1. fork the repo
2. make sure to install dev dependencies using

  ```bash
  npm install --dev
  ```

3. Make the changes you desire
4. Ensure all changes have a new test in the `test/` folder, and run:

  ```bash
  npm test
  ```

  This will check do the following:
  * Check your code against [feross/standard style](https://github.com/feross/standard) and notify of any issues.
  * Run all mocha tests listed in `test/`
  * Run all code through [istanbul's code coverage runner](https://github.com/gotwarlost/istanbul). You can check the coverage afterwards the coverage report page: `coverage/lcov-report/index.html`

5. After making changes in your fork, open a pull request.

Please note that if your code updates do not pass JS Standard style, mocha tests and code coverage, your PR may be rejected and you'll need to fix any issues listed in it.

### Contributors

* Trent Oswald <a href="mailto:trentoswald@therebelrobot.com">trentoswald@therebelrobot.com</a> - [/therebelrobot](https://github.com/therebelrobot) - [therebelrobot.com](http://therebelrobot.com)
* Scott Hillman <a href="mailto:hillmanov@gmail.com">hillmanov@gmail.com</a> - [/hillmanov](https://github.com/hillmanov)
* Michael Scott Hertzberg <a href="mailto:mshertzberg@gmail.com">mshertzberg@gmail.com</a> - [/moimikey](https://github.com/moimonkey) - [michael.hertzberg.co](http://michael.hertzberg.co)
* Loris Guignard <a href="mailto:loris.guignard@gmail.com">loris.guignard@gmail.com</a> - [/loris](https://github.com/loris)

## Changelog

All notable changes to this project will be documented in this file.

*This project adheres to [Semantic Versioning](http://semver.org/) and [Keep A Changelog](http://keepachangelog.com/).*

### Unreleased

### v1.4.2 - 2015-04-14
#### Added

* `bulk-require` to deps

#### Fixed

* Browserify compatibility

#### Removed

* `glob` dep (replaced by `bulk-require`)

### v1.4.1 - 2015-04-14
#### Added

* Contributor section to README
* @moimikey to contributor list (`package.json` and `README`)

#### Fixed

* Undefined ISO tags from certain countries (refer https://github.com/therebelrobot/countryjs/issues/19)

#### Removed

* Yugoslavia from country list, as it's not a country anymore


### v1.4.0 - 2015-03-13
#### Added

* `mocha.opts`
* Added standard dev dep
* Added Changelog to README
* `.DS_STORE` to `.gitignore`

#### Changed

* Updated `test` script
* Updated Contributing Doc


## Disclaimer

This is being maintained in the contributor's free time, and as such, may contain minor errors in regards to some countries.
Most of the information included in this library is what is listed on Wikipedia. If there is an error, 
please let me know and I will do my best to correct it.

## License (ISC)

Copyright (c) 2015, Trent Oswald <trentoswald@therebelrobot.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted,
provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
THIS SOFTWARE.
