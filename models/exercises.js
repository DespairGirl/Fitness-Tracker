const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema=new Schema({

    //day - date
    //type - string
    //name - string
    //duration- number
    //weight - number
    //reps - number
    //sets - number
    //distance - number

})


















const Excercises = mongoose.model("Excercises", exerciseSchema);

module.exports = Excercises;
