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
        }
    }]
});

const blogUser = mongoose.model('blogUser', blogUserSchema);

module.exports = blogUser;