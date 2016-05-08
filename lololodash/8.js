var _ = require("lodash");

var analyze = function(freelancers) {
  var total = _.reduce(freelancers, function (sum, freelancer) {
    return sum + freelancer.income;
  }, 0);

  var average = total / freelancers.length;

  var underperform = _.chain(freelancers)
    .filter(function (freelancer) {
      return freelancer.income <= average;
    })
    .sortBy('income');

  var overperform = _.chain(freelancers)
    .filter(function (freelancer) {
      return freelancer.income > average;
    })
    .sortBy('income');

  return {
    average: average,
    underperform: underperform,
    overperform: overperform
  };
};

module.exports = analyze;
