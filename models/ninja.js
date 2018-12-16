const mongoose = require('mongoose');//import schema
const Schema = mongoose.Schema;//variable to store schema class

//create ninja schema & model
const NinjaSchema = new Schema({
    name: {
        type:String,
        required: (true,'Name field is required'),
    },
    rank: {
        type:String,
    },
    available: {
        type: Boolean,
        default: false
    }
    //add in geo location
});

const Ninja = mongoose.model('ninja',NinjaSchema);//Ninja-model name,ninja-collection name


module.exports = Ninja;//for accessing in other files