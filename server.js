require('dotenv').config()  // Initialize our protected environment variables
const express = require('express');
const cors = require('cors');
const app = express();
const API_PORT = process.env.API_PORT || 8080;

let whitelist = ['http://localhost:8080', 'http://localhost:3000']

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

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api/postblog', (req, res) => {
    res.json(JSON.stringify(req.body))
})

app.listen(API_PORT, () => {
    console.log(`API Server listening on ${API_PORT}`);
})
