const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogUserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        maxlength: 16
    },
    posts: [{
        title: {
            type: String,
            required: true,
            maxlength: 48
        },
        body: {
            type: String,
            required: true,
            maxlength: 480
        },
        username: {
            type: String,
            required: true,
            unique: true,
            maxlength: 16    
        },
        timestamp: {
            type: String,
            required: true
        },
        post_id: {
            type: Number,
            required: true
        }
    }]
});

const blogUser = mongoose.model('blogUser', blogUserSchema);

module.exports = blogUser;