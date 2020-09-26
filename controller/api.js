const blogUser = require('../models');

module.exports = {
    grabPostHistory: (username, callback) => {
        blogUser.findOne({ username })
            .then((searchedUser) => {
                if (searchedUser) {
                    callback(200, searchedUser);
                }
            })
    },
    deletePost: (postId, callback) => {
        blogUser.findOneAndDelete({ "posts.post_id": postId })
            .then((queriedPost) => {
                if (queriedPost) {
                    callback(200, queriedPost);
                }
                else {
                    callback(500, 'Post Not Found');
                }
            })
    }
}