'use strict';

const express = require('express');
const app = express();

//BodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//API Routes
const cohorts = require('./routes/api/cohorts');

app.use('/api/cohorts/', cohorts);

//Static Files
app.use(express.static('public'));

//Errors

app.use((err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).send(err);
  }

  console.error(err);
  res.sendStatus(500);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port', port);
});


process.on('uncaughtException', function(err) {
    console.log( " UNCAUGHT EXCEPTION " );
    console.log( "[Inside 'uncaughtException' event] " + err.stack || err.message );
});

module.exports = app;
