const blogUser = require('../models');

module.exports = {
    grabPostHistory: (req) => {
        blogUser.findOne({ username: username})
            .then((searchedUser) => {
                if (searchedUser) {
                    // find the posts from that user
                    // send them as a response to the client
                }
            })
    }
}