require('dotenv').config()  // Initialize our protected environment variables
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const API_PORT = process.env.API_PORT || 8080;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Load CORS policy, as well as backend routes
app.use(cors({
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
}));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("./build"));
    mongoose.connect(process.env.MONGODB_URI, {       // Use mongodb v4 connection settings
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  
  } else {
    mongoose.connect(process.env.MONGODB_URI, {     // Connect to the Mongo DB locally
      useNewUrlParser: true,                        // Use mongodb v4 connection settings
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('Connected to mongo!')
  }

  app.post('/api/postblog', (req, res) => {
    // userController.publishPost(req.body);
    res.send(req.body)
})

  app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(API_PORT, () => {
    console.log(`API Server listening on ${API_PORT}`);
})