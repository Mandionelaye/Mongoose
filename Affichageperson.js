//recuperation de la classe database
const database = require("./server")
database._connect()
//recuperation du model
const personneModule = require("./personneShema")

//Utilisez model.find() pour rechercher dans votre base de données
personneModule.find({name:"seydina Mandione"})
.then((doc)=> console.log("le resulta 1: "+doc)).catch((err)=> console.error(err))

//Utilisez model.findOne() pour renvoyer un seul document correspondant à partir de votre base de données
let food = "domoda"
personneModule.findOne({favoriteFoods:{$in:[food]}})
.then((doc)=> console.log("le resulta 2: "+doc)).catch((err)=> console.error(err)) 

//Utilisez model.findById() pour rechercher votre base de données par _id
let personId = "644c5868f013d6921cf895e8"
personneModule.findById(personId)
.then((doc)=> console.log("le resulta de Id: "+doc)).catch((err)=> console.error(err))

//Effectuez des mises à jour classiques en exécutant Rechercher, Modifier, puis Enregistrer
personneModule.findById(personId)
.then((doc)=>{
    doc.favoriteFoods.push('hamburger')
 console.log("le resulta de l'ajout: "+doc)
}).catch((err)=> console.error(err))

//Effectuer de nouvelles mises à jour sur un document à l'aide de model.findOneAndUpdate()
let personName ="Libasse Mbaye"
personneModule.findOneAndUpdate({name:personName},{age:20},{new:true, runValidators:true})
.then((doc)=>{
 console.log("le resulta de la modif: "+doc)
}).catch((err)=> console.error(err))

//Supprimer un document à l'aide de model.findByIdAndRemove
personneModule.findByIdAndRemove(personId)
.then((doc)=> console.log("suppresion de la personne")).catch((err)=> console.error(err))

//MongoDB et Mongoose - Supprimer de nombreux documents avec model.remove()
personneModuleremove({ name: "Mary" }).then((doc)=>{
   done(null,doc)
    console.log("suppresion de la personne:"+doc)
   }).catch((err)=> console.error(err))

//Chain Search Query Helpers pour affiner les résultats de recherche
personneModule.find({favoriteFoods:{$in:["burritos"]}})                        
.limit(2)                
.sort({name: 1})     
.select({name: true}) 
.exec() 
.then(docs => {
    console.log("Trouvez des gens qui aiment les burritos:"+docs)
  })
 .catch(err => {
    console.error(err)
  })