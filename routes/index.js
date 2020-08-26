const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.post('/api/postblog', (req, res) => {
    res.json(JSON.stringify(req.body))
})

module.exports = router;