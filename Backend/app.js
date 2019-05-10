//app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
const cors = require('cors');

const url = "mongodb://localhost:27017/mydb";
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const machineSchema =  require('./models/machine.model');

const file = require('./routes/file.route'); // Imports routes for the products
const machine = require('./routes/machine.route'); // Imports routes for the machine

app.use(cors());

mongoose.Promise = global.Promise;

mongoose.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  //db.close();
});

//This is the base route for file link will be - http://localhost:3000/file/test
app.use('/file', file);
app.use('/machine', machine);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
