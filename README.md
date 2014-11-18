#country.js
[![NPM](https://nodei.co/npm/countryjs.png)](https://nodei.co/npm/countryjs/)

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
//  "name": "United States of America",
//  "ISO":{
//    "2": "US",
//    "3": "USA",
//    "num": 840,
//    "code": "ISO 3166-2:US"
//  }
//  "stateCount:50
// }...]
```
###.info()
```JavaScript
var country = require('countryjs');
country.info('US', 'ISO2'); // 'ISO2', 'ISO3', 'ISOcode', 'ISOnum', 'name'
country.info('US'); // Defaults to ISO2
// returns object, 
// {
//  "name": "United States of America",
//  "ISO":{
//    "2": "US",
//    "3": "USA",
//    "num": 840,
//    "code": "ISO 3166-2:US"
//  }
//  "stateCount:50
// }
```
###.states()
```JavaScript
var country = require('countryjs');
country.states('USA', 'ISO3'); // 'ISO2', 'ISO3', 'ISOcode', 'ISOnum', 'name'
country.states('US'); // Defaults to ISO2
// returns array of states, 
// [
//  "Alabama",
//  ...
// ]
```
## TODO
I'm looking at adding the following to the API:
- currency
- languages
- wikipedia article

## Contributing
Feel free to fork and create a pull request. 2 space tabs, spaces only. Try to adhere to the form of the current code.
## License
The MIT License (MIT)

Copyright (c) 2014 Trent Oswald

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
