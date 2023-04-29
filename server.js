const mongoose = require('mongoose'); 
//creation d'une classe pour la connection au base de donnnee     
class Database {
  constructor() {
    this._connect()
  }
  //la methode connect sera revoyer par le classe Database  
_connect() {
    require('dotenv').config();
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
       .then(() => {
        console.log('Database connection successful')
       })
       .catch(err => {
         console.error(err)
       })
  }
}
//exprtation de la classe Database
module.exports = new Database()