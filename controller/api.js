const blogUser = require('../models');

module.exports = {
    grabPostHistory: (username, callback) => {
        blogUser.findOne({ username })
            .then((searchedUser) => {
                if (searchedUser) {
                    callback(200, searchedUser)
                }
            })
    }
}