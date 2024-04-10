

const pg = require('pg-promise')();
const db = pg("postgres://corcoding@localhost:5432/postgres")
const express = require('express');
const winston = require('winston');

const app = express()
const bodyParser = require("body-parser") // for parsing application/json
app.use(bodyParser.json())

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });



// Justin GET
app.get('/todo', function (req, res) {})
await db.any('SELECT * FROM pokedex')


// Marcus POST



// Joel PUT



// David DELETE