//recuperation de la classe database
const database = require("./server")
database._connect()
//recuperation du model
const personneModule = require("./personneShema")
//Créer et enregistrer un enregistrement d'un modèle
let personne = new personneModule({
        name:"seydina Mandione",
        age: 24,
        favoriteFoods:["riz au poisson", "hamburger"]
    })

 personne.save().then((doc) => console.log(doc)).catch((err) => console.error(err))   

//Créer de nombreux enregistrements avec model.create()
personneModule.create([{
    name:"Libasse Mbaye",
    age: 23,
    favoriteFoods:["riz au viande","sawarmen"]
},{
    name:"Abdoulaye Sarr",
    age: 24,
    favoriteFoods:["riz au poisson", "riz au viande"]
},{
    name:"Libasse Gaye",
    age: 22,
    favoriteFoods:["riz au poisson", "domoda"]
}])