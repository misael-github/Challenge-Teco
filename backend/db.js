// Import de variable locales
require("dotenv").config({path: "./variables.env"})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudmernstack');
console.log(process.env.DB_URL)

const db = mongoose.connection;

db.on(process.env.DB_URL, () => {
  console.log('conexion a la db correcta');
});
db.on('error', () => {
  console.log('error en la conexion a la db ');
});

module.exports = mongoose;
