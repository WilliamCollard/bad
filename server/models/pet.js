console.log("inside of pet.js");

const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Pet must have a name!"], minlength: [3, "Name must be at least 3 characters!"]},
    type: {type: String, required: [true, "Pet must have a type!"], minlength: [3, "Type must be at least 3 characters!"]},
    desc: {type: String, required: [true, "Pet must have a desc!"], minlength: [3, "Desc must be at least 3 characters!"]},
    likes:{type: Number, default : 0},
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String}
}, {timestamps: true});

mongoose.model('Pet', PetSchema);