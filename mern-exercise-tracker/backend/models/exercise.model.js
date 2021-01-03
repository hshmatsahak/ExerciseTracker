const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, { 
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema); //i think: create table table exercise and say each row has to be of format above

module.exports = Exercise;
