const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    username: {
        type: String,
        required : true
    },

    items:[String],

    longitude:{
        type: Number,
        required: true
    },

    
    latitude:{
        type: Number,
        required: true
    }
    
});

module.exports = mongoose.model('Orders', orderSchema);