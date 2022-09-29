const express = require('express');
const app = express();

// Conexión a db
const db = require('./db');

// Import de rutas y modelo usuario
const routeUser = require('./routes/user');

// Import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: 'true' }));

app.use('/api/user', routeUser);

app.get('/', (req, res) => {
  res.send('bienvenidos al back');
});

app.listen(5000, () => {
  console.log('escuchando en el puerto 5000...');
});
