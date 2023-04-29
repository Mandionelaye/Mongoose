const mongoose = require('mongoose')
//Création d'une personne avec ce prototype
let personneshemat = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
   age:Number,
   favoriteFoods:[String]
})

const person=mongoose.model("personne", personneshemat)
module.exports = person






