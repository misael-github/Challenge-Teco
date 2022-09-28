const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudmernstack');

const db = mongoose.connection

db.on("connected", ()=>{console.log("conexion a la db correcta")})
db.on("error", ()=>{console.log("error en la conexion a la db ")})

module.exports = mongoose;
