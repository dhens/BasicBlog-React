const blogUser = require('../models');
const express = require('express');

module.exports = {
    grabPostHistory: (username, callback) => {
        console.log(`req. grabPostHistory controller: ${JSON.stringify(username)}`)
        blogUser.findOne({ username })
            .then((searchedUser) => {
                if (searchedUser) {
                    callback(200, searchedUser)
                }
            })
    }
}