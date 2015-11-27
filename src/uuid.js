var crypto = require('crypto');
module.exports = {
  v4: function() {
    // Author: http://stackoverflow.com/users/109538/broofa
    // Link: http://stackoverflow.com/a/2117523/553073
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
      .replace(/[xy]/g, function(c) {
        var r = crypto.randomBytes(1)[0] % 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
  }
}
