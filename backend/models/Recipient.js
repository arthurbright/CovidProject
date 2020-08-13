const mongoose = require('mongoose');

const recipientSchema = mongoose.Schema({
    username: {
        type: String,
        required : true
    },

    password: {
        type: String,
        required : true
    },

    name: {
        type: String,
        required : true
    },



    //Address fields
    housenumber:{
        type: Number,
        required: true
    },

    streetname:{
        type: String,
        required: true
    },

    city:{
        type: String,
        required: true
    },

    postalcode:{
        type: String,
        required: true
    }

    
    
});

module.exports = mongoose.model('Recipients', recipientSchema);