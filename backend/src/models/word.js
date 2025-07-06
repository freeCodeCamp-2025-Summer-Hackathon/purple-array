const mongoose = require('mongoose')


const WordSchema = new mongoose.Schema({
    word:{
        type:String,
        required: [true, "please provide a word"],
        minlength:2 ,
    },
    pronunciation:{
        type:String,
        required: [true, "please provide the pronunciation"],
        minlength:2 ,
    },
    definition:{
        type:String,
        required: [true, "please provide the definition"],
        minlength:2 ,
    },
    dateUsed:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('Word', WordSchema)