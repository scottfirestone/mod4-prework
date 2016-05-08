var _ = require("lodash");

var worker = function(collection) {
  return _.sortBy(collection, function(num) {
    return 0 - num.quantity;
  });
}

module.exports = worker;
