const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({

    name : {
        type: String ,
        required: true
    },
    maxcount : {
        type: Number ,
        required: true
    },
    rentperday : {
        type: String ,
        required: true
    },
    imageurls : [],
    currentbookings : [],
    type : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    }
} , {
    timestamps : true,
})

const roomModel = mongoose.model('room' , roomSchema)

module.exports = roomModel