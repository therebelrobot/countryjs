#country.js

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
## Special Thanks
Special thanks to johan for his work on [johan/world.geo.json](https://github.com/johan/world.geo.json), who made the geojson portion of this build possible.
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


## COUNTRY TODO LIST
- ✔ afghanistan 
- ✔ albania
- ✔ algeria
- american_samoa
- angola
- anguilla
- antarctica
- antigua_and_barbuda
- argentina
- armenia
- aruba
- ashmore_and_cartier_island
- australia
- austria
- azerbaijan
- bahamas
- bahrain
- bangladesh
- barbados
- belarus
- belgium
- belize
- benin
- bermuda
- bhutan
- bolivia
- bosnia_and_herzegovina
- botswana
- brazil
- british_virgin_islands
- brunei
- bulgaria
- burkina_faso
- burma
- burundi
- cambodia
- cameroon
- canada
- cape_verde
- cayman_islands
- central_african_republic
- chad
- chile
- china
- christmas_island
- clipperton_island
- cocos_keeling_islands
- colombia
- comoros
- congo_democratic_republic_of_the
- congo_republic_of_the
- cook_islands
- costa_rica
- cote_d_ivoire
- croatia
- cuba
- cyprus
- czeck_republic
- denmark
- djibouti
- dominica
- dominican_republic
- ecuador
- egypt
- el_salvador
- equatorial_guinea
- eritrea
- estonia
- ethiopia
- europa_island
- falkland_islands_islas_malvinas
- faroe_islands
- fiji
- finland
- france
- french_guiana
- french_polynesia
- french_southern_and_antarctic_lands
- gabon
- gambia_the
- gaza_strip
- georgia
- germany
- ghana
- gibraltar
- glorioso_islands
- greece
- greenland
- grenada
- guadeloupe
- guam
- guatemala
- guernsey
- guinea_bissau
- guinea
- guyana
- haiti
- heard_island_and_mc_donald_islands
- holy_see_vatican_city
- honduras
- hong_kong
- howland_island
- hungary
- iceland
- india
- indonesia
- iran
- iraq
- ireland
- ireland_northern
- israel
- italy
- jamaica
- jan_mayen
- japan
- jarvis_island
- jersey
- johnston_atoll
- jordan
- juan_de_nova_island
- kazakhstan
- kenya
- kiribati
- korea_north
- korea_south
- kuwait
- kyrgyzstan
- laos
- latvia
- lebanon
- lesotho
- liberia
- libya
- liechtenstein
- lithuania
- luxembourg
- macau
- macedonia_former_yugoslav_republic_of
- madagascar
- malawi
- malaysia
- maldives
- mali
- malta
- man_isle_of
- marshall_islands
- martinique
- mauritania
- mauritius
- mayotte
- mexico
- micronesia_federated_states_of
- midway_islands
- moldova
- monaco
- mongolia
- montserrat
- morocco
- mozambique
- namibia
- nauru
- nepal
- netherlands_antilles
- netherlands
- new_caledonia
- new_zealand
- nicaragua
- nigeria
- niger
- niue
- norfolk_island
- northern_mariana_islands
- norway
- oman
- pakistan
- palau
- panama
- papua_new_guinea
- paraguay
- peru
- philippines
- pitcaim_islands
- poland
- portugal
- puerto_rico
- qatar
- reunion
- romainia
- russia
- rwanda
- saint_helena
- saint_kitts_and_nevis
- saint_lucia
- saint_pierre_and_miquelon
- saint_vincent_and_the_grenadines
- samoa
- san_marino
- sao_tome_and_principe
- saudi_arabia
- scotland
- senegal
- seychelles
- sierra_leone
- singapore
- slovakia
- slovenia
- solomon_islands
- somalia
- south_africa
- south_georgia_and_south_sandwich_islands
- spain
- spratly_islands
- sri_lanka
- sudan
- suriname
- svalbard
- swaziland
- sweden
- switzerland
- syria
- taiwan
- tajikistan
- tanzania
- thailand
- tobago
- toga
- tokelau
- tonga
- trinidad
- tunisia
- turkey
- turkmenistan
- tuvalu
- uganda
- ukraine
- united_arab_emirates
- united_kingdom
- united_states_of_america
- uruguay
- uzbekistan
- vanuatu
- venezuela
- vietnam
- virgin_islands
- wales
- wallis_and_futuna
- west_bank
- western_sahara
- yemen
- yugoslavia
- zambia
- zimbabwe