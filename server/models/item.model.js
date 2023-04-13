const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    item:{
        type: String
    },
    price:{
        type: Number
    },
    description:{
        type: String
    },

}
);

const Item = mongoose.model('Item', itemSchema)
module.exports = Item;