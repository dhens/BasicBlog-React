const db = require('../models');

module.exports = {
    publishPost: function(req, res) {
        db.bloggers.insertOne({
            title: req.body.title,
            body: req.body.body,
            username: req.body.username
        })
        .then(dbData => res.json(dbData))
        .catch(err => res.status(422).json(err));
    }
}