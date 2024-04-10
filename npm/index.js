

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

  function clientError(req, message, errorCode) {
    logger.log({
        level: "info",
        endpoint: req.path,
        method: req.method,
        query_parameters: req.query,
        path_parameters: req.params,
        body: req.body,
        ip: req.ip,
        errorCode: errorCode,
        message: message,
        timestamp: new Date(),
    })
}



// Justin GET
app.get('/pokedex', async function(req, res) {
    let pokedex = await db.any('SELECT * FROM pokedex;');
    if(Object.keys(req.body).length != 0) {
        clientError(req, "Request body is not permitted", 400);
        // check if a body was provided in the request
        res.status(400).json({
            error: "Request body is not permitted"
        });
    } 
    else {
        // else is the success case
        if(req.query.id == undefined) {
            // check if an id was passed or not from the client
            // if not, return all todos
            res.json({pokedex})
        } else {
            let id = req.query.id;
            let pokemonId = await db.query('SELECT * FROM pokedex WHERE id = $1', [id])
            res.json(pokemonId);
        }
    }
});


// Marcus POST



// Joel PUT



// David DELETE


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})