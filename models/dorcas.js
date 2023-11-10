const mongoose = require('mongoose'),

reportSchema = new mongoose.Schema({
    name: {
        type: String,
        //required: true
    },
    
    message: {
        type: String,
        required: true
    },
    report:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Report', reportSchema)

