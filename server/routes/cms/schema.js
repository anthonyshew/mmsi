let mongoose = require('mongoose')

let CMS = new mongoose.Schema({
    content: {}
})

module.exports = mongoose.model('cms', CMS)