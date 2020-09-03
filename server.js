require('dotenv').config()  // Initialize our protected environment variables
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const API_PORT = process.env.API_PORT || 8080;
const postController = require('./controller');
const userQueryController = require('./controller/api');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const whitelist = ['http://localhost:8080', 'http://localhost:3000']

// Load CORS policy
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

mongoose.connect(process.env.MONGODB_URI, {     // Connect to the Mongo DB locally
  useNewUrlParser: true,                        // Use mongodb v4 connection settings
  useUnifiedTopology: true,
  useCreateIndex: true
});

  app.post('/api/postblog', (req, res) => {
    postController.publishPost(req.body);
    res.send(req.body)
})

app.get('/api/getUserPostHistory/:username', (req, res) => {
  const callback = (status, message) => {
    res.status = status
    res.send(message);
  }
  userQueryController
    .grabPostHistory(
      req.params.username, callback
      )
})

  app.get('/', (req, res) => {
    res.send('/ Route hit!');
});

app.listen(API_PORT, () => {
    console.log(`API Server listening on ${API_PORT}`);
})