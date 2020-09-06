const blogUser = require('../models');
const scripts = require('../scripts');
const { newPostLogMessage, postTimestamp } = require('../scripts');

module.exports = {
    // publishPost function: take the data passed from client and inscribe it into our database
    // 1. check if username already exists
    // 2. if so, create the post and add it to their list of posts
    // 3. if username doesn't exist, add new user to db with his new post

    publishPost: function (req) {
        blogUser.findOne({ username: req.username })                    // check if user exists in db
            .then((currentUser) => {
                if (currentUser) {
                    blogUser.updateOne(
                        { username: req.username },     // find the entity that matches the existing username
                        { $push: { posts: req } })        // arr.push the new post into the existing posts array for that user
                        .then(postSuccess =>
                            newPostLogMessage(
                                req.username,
                                scripts.postTimestamp(),
                                req.post_id,
                                JSON.stringify(postSuccess)
                            )
                        )
                        .catch(err =>
                            console.log(
                                `MONGO ERR:${req.username} at ${scripts.postTimestamp()}!: \n${err}\n`)
                        );
                } else {
                    new blogUser({
                        username: req.username,
                        posts: req
                    }).save().then((newUser) => {
                        console.log('Created new user:\n', newUser);
                    });
                }
            })

    }
}