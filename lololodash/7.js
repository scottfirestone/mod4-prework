var _ = require("lodash");

var totalOrders = function(orders) {
  var result = [];

  var grouped = _.groupBy(orders, 'article');

  _.forEach(grouped, function (allOrders, name) {
    var total = _.reduce(allOrders, function (sum, order) {
      return sum + order.quantity;
    }, 0);

    result.push({ article: parseInt(name), total_orders: total });
  });

  return _.sortBy(result, 'total_orders').reverse();
};

module.exports = totalOrders;
