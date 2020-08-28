require('dotenv').config()  // Initialize our protected environment variables
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const API_PORT = process.env.API_PORT || 8080;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Load CORS policy, as well as backend routes
app.use(require('./server_configs'));
app.use(require('./routes'));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("./build"));
    mongoose.connect(process.env.MONGODB_URI, {
      // use mongodb v4 connection settings
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  
  } else {
    // Connect to the Mongo DB locally
    mongoose.connect(process.env.MONGODB_URI, {
      // use mongodb v4 connection settings
      useNewUrlParser: true,
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