const express = require('express');
// const routes = require('./routes')
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api/new-post', (req, res) => {
    console.log(req.body)
})

app.listen(port, () => {
    console.log(`API Server listening on ${port}`);
})
