const mongoose = require('mongoose');

const volunteerSchema = mongoose.Schema({
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


    //address fields
    address:{
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
    },

    radius:{
        type: Number,
        required: true
    },



    //current order info, set as null if no current order
    orderinprogress:{
        type: Boolean,
        default: false
    },

    currentorder: {
        username: {
            type: String,
        },
    
        items:[String],
    
        longitude:{
            type: Number,
        },
    
        
        latitude:{
            type: Number,
        }

    }

    
    
});

module.exports = mongoose.model('Volunteers', volunteerSchema);