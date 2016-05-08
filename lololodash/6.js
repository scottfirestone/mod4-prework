var _ = require("lodash");

var commentCounter = function(comments) {
  var counts = [];

  var grouped =  _.groupBy(comments, 'username');

  _.forEach(grouped, function(comments, username) {
    counts.push({ username: username,
                  comment_count: _.size(comments) });
  });

  var sorted = _.sortBy(counts, function(user) {
      return -user.comment_count;
  });

  return sorted;
};

module.exports = commentCounter;
