var _ = require("lodash");

var worker = function(arguments) {
  return _.filter(arguments, {'active': true});
}

module.exports = worker;
