const express = require('express');
const app = express();
// Conexión a db
const db = require('./db');
// Import de rutas y modelo usuario
const routeUser = require('./routes/user');
// Import body-parser
const bodyParser = require('body-parser');
// Import de variable locales
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));

app.use('/api/user', routeUser);

app.get('/', (req, res) => {
  res.send('bienvenidos al back');
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`escucuchando en el puerto: ${port} `);
});
