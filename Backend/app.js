//app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const file = require('./routes/file.route'); // Imports routes for the products

app.use(cors());

app.use('/file', file);

let port = 3000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
