// Import de variable locales
require("dotenv").config()

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);


const db = mongoose.connection;

db.on(process.env.DB_URL, () => {
  console.log('conexion a la db correcta');
});
db.on('error', () => {
  console.log('error en la conexion a la db ');
});

module.exports = mongoose;
