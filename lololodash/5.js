var _ = require("lodash");

var worker = function(collection) {
  return _.chain(collection)
    .map(function(word) {
      return word + 'chained';
    })
    .map(function(word){
      return word.toUpperCase();
    })
    .sortBy();
};

module.exports = worker;
