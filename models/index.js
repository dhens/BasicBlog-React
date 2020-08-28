const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const basicUserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        maxlength: 16
    },
    posts: {
        id: {
            type: Number,
            required: true
        },
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
        author: {
            type: String,
            required: true,
            unique: true,
            maxlength: 16    
        }
    }
});

const basicUser = mongoose.model('basicUser', basicUserSchema);

module.exports = basicUser;