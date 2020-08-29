const blogUser = require('../models');

const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date+' '+time;

module.exports = {
    // check if username already exists
    // if so, create the post and add it to their list of posts
    // if username doesn't exist, add new user to db with his new post
    publishPost: function (req, res) {
        blogUser.findOne({ username: req.username })                    // check if user exists in db
            .then((currentUser) => {
                if (currentUser) {
                    blogUser.updateOne(
                        { username: req.username },     // find the entity that matches the existing username
                        { $push: {posts: req }})        // arr.push the new post into the existing posts array for that user
                        .then(postSuccess =>
                            console.log(`New blog post from user ${req.username} at ${dateTime}: ${JSON.stringify(postSuccess)}`)
                        )
                        .catch(err => console.log(`Error posting ${req.username}'s new post to mongo at ${dateTime}!: \n${err}\n`));
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