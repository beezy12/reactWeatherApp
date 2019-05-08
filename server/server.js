'use strict'

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const keys = require('./config/keys')
const logger = require('morgan');
const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());

//app.use(express.static(path.join(__dirname, '/client/public')))

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));


app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`)
})

