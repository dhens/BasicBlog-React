const cors = require('cors');

const whitelist = ['http://localhost:8080', 'http://localhost:3000']

cors({
    origin: function(origin, callback){
      // allow requests with no origin 
      if(!origin) return callback(null, true);
      if(whitelist.indexOf(origin) === -1){
        var message = 'The CORS policy for this origin doesn\'t ' +
                  'allow access from the particular origin.';
        return callback(new Error(message), false);
      }
      return callback(null, true);
    }
  });

module.exports = cors