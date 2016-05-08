var _ = require("lodash");

var worker = function(collection){
  return _.forEach(collection, function(country){
    if (country.population > 1) {
      country.size = "big";
    } else if (country.population > .5){
      country.size = "med";
    } else {
      country.size = "small";
    }
  });
}

module.exports = worker;
