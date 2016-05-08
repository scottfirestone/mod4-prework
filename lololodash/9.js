var _ = require("lodash");

var template = function(user) {
    var compiled = _.template('Hello <%= user.name %> (logins: <%= user.login.length %>)');
    return compiled({ user: user });
};

module.exports = template;
