const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({


    type: {
        type: String,
        trim: true
    },

    name: {
        type: String,
        trim: true
    },
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number,

})

const Excercises = mongoose.model("Excercises", exerciseSchema);

module.exports = Excercises;
