const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    recipient: {
        type: String,
        required : true
    },
    items:[String]
    
});

module.exports = mongoose.model('Order', orderSchema);