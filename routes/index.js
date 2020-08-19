const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.post('/api/new-post', (req, res) => {
    res.send('Post Received!');
})