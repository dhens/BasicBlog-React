const router = require('express').Router();
const userController = require('../controller');

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.post('/api/postblog', (req, res) => {
    // userController.publishPost(req.body);
    res.send(req.body)
})

module.exports = router;