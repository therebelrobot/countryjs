#country.js
[![NPM](https://nodei.co/npm/countryjs.png)](https://nodei.co/npm/countryjs/)

[![Dependency Status](https://david-dm.org/therebelrobot/countryjs.svg)](https://david-dm.org/therebelrobot/countryjs)
[![Code Climate](https://codeclimate.com/github/therebelrobot/countryjs/badges/gpa.svg)](https://codeclimate.com/github/therebelrobot/countryjs)
[![Gratipay](http://img.shields.io/gratipay/therebelrobot.svg)](https://gratipay.com/therebelrobot/)

A Node.js module for returning data about countries, ISO info and states/provinces within them.

##Install
```bash
npm install countryjs
```
##API
###.all()
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
###.info()
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
###.states()
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
###.name()
```javascript
var country = require('countryjs');
country.name('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.name('USA') // Defaults to 'ISO2'
// returns string
// "United States"
```
###.altSpellings()
```javascript
var country = require('countryjs');
country.altSpellings('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.altSpellings('USA') // Defaults to 'ISO2'
// returns array of strings, alternate names
// ["US", "USA", "United States of America"]
```
###.area()
```javascript
var country = require('countryjs');
country.area('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.area('USA') // Defaults to 'ISO2'
// returns number of square mile area
// 9629091
```
###.borders()
```javascript
var country = require('countryjs');
country.borders('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.borders('USA') // Defaults to 'ISO2'
// returns array of strings, ISO3 codes of countries that border the given country
// ["CAN", "MEX"]
```
###.callingCodes()
```javascript
var country = require('countryjs');
country.callingCodes('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.callingCodes('USA') // Defaults to 'ISO2'
// returns array of calling code strings
// ["1"]
```
###.capital()
```javascript
var country = require('countryjs');
country.capital('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.capital('USA') // Defaults to 'ISO2'
// returns string
// "Washington D.C."
```
###.currencies()
```javascript
var country = require('countryjs');
country.currencies('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.currencies('USA') // Defaults to 'ISO2'
// returns array of strings, currencies
// ["USD", "USN", "USS"]
```
###.demonym()
```javascript
var country = require('countryjs');
country.demonym('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.demonym('USA') // Defaults to 'ISO2'
// returns string, name of residents
// "American"
```
###.flag() - INCOMPLETE
```javascript
var country = require('countryjs');
country.flag('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.flag('USA') // Defaults to 'ISO2'
// returns string URL of CC licensed svg flag
```
###.geoJSON()
```javascript
var country = require('countryjs');
country.geoJSON('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.geoJSON('USA') // Defaults to 'ISO2'
// returns object of GeoJSON data
```
###.ISOcodes()
```javascript
var country = require('countryjs');
country.ISOcodes('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.ISOcodes('USA') // Defaults to 'ISO2'
// returns object of ISO codes
// {
//   "alpha2": "US",
//   "alpha3": "USA"
// }
```
###.languages()
```javascript
var country = require('countryjs');
country.languages('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.languages('USA') // Defaults to 'ISO2'
// returns array of language codes
// ["en"]
```
###.latlng()
```javascript
var country = require('countryjs');
country.latlng('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.latlng('USA') // Defaults to 'ISO2'
// returns array, approx latitude and longitude for country
// [38, -97]
```
###.nativeName()
```javascript
var country = require('countryjs');
country.nativeName('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.nativeName('USA') // Defaults to 'ISO2'
// returns string, name of country in native language
// "United States"
```
###.population()
```javascript
var country = require('countryjs');
country.population('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.population('USA') // Defaults to 'ISO2'
// returns number, approx population
// 319259000
```
###.region()
```javascript
var country = require('countryjs');
country.region('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.region('USA') // Defaults to 'ISO2'
// returns string
// "Americas"
```
###.subregion()
```javascript
var country = require('countryjs');
country.subregion('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.subregion('USA') // Defaults to 'ISO2'
// returns string
// "Northern America"
```
###.timezones()
```javascript
var country = require('countryjs');
country.timezones('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.timezones('USA') // Defaults to 'ISO2'
// returns array of timezones
```
###.tld()
```javascript
var country = require('countryjs');
country.tld('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.tld('USA') // Defaults to 'ISO2'
// returns array of top level domains specific to the country
// [".us"]
```
###.translations()
```javascript
var country = require('countryjs');
country.translations('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.translations('USA') // Defaults to 'ISO2'
// returns object of translations of country name in major languages
// {
//   "de": "Vereinigte Staaten von Amerika",
//   "es": "Estados Unidos",
//   "fr": "États-Unis",
//   "ja": "アメリカ合衆国",
//   "it": "Stati Uniti D'America"
// }
```
###.wiki()
```javascript
var country = require('countryjs');
country.wiki('USA','ISO3'); // 'ISO2', 'ISO3', 'name'
country.wiki('USA') // Defaults to 'ISO2'
// returns string URL of wikipedia article on country
// "http://en.wikipedia.org/wiki/united_states_of_america"
```

## Special Thanks
Special thanks to johan for his work on [johan/world.geo.json](https://github.com/johan/world.geo.json), who made the geojson portion of this build possible.
## Contributing
If you find errors or have requests, please open a Github Issue. Also, feel free to fork and create a pull request.
2 space tabs, spaces only. Try to adhere to the form of the current code.
## Disclaimer
This is being maintained in the contributor's free time, and as such, may contain minor errors in regards to some countries.
Most of the information included in this library is what is listed on Wikipedia. If there is an error, please let me know and I will do my best to correct it.
## License (ISC)
Copyright (c) 2015, Trent Oswald <trentoswald@therebelrobot.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted,
provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
THIS SOFTWARE.



