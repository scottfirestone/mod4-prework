
var _ = require("lodash");

var worker = function (collection) {
    var results = {
        hot: [],
        warm: []
    }

    function compare (temperature) {
        return temperature > 19;
    };

    _.forEach(collection, function (value, key) {

        if (_.every(value, compare))
            results.hot.push(key);
        else if (_.some(value, compare))
            results.warm.push(key);

    });
    return results;
};

module.exports = worker;
