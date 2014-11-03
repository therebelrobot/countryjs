var fs = require('fs');
var path = require('path');
var glob = require("glob");
var _ = require('lodash');

module.exports = function() {
  var totalList = [];
  var fileList = glob.sync(__dirname + "/data/*.json");
  _.forEach(fileList, function(file) {
    totalList.push(require(file));
  });
  return totalList;
}