

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
app.get('/pokedex', function (req, res) {
    db.any('SELECT * FROM pokedex')
})


// Marcus POST



// Joel PUT



// David DELETE

app.delete('/pokedex/:id', (req, res)=> {
    if(Object.keys(req.body).length != 0) {
        res.status(400).json({error: "Request within the body is not allowed"}); 

    } else if(Object.keys(req.query).length > 1){ 
        clientError(req, "Query Parameters do not meet requirements", 400);
        res.status(400).json({error: "Query Parameters do not meet requirements"});

    } else if((Object.keys(req.query).length != 0) && (Object.keys(req.query)[0] != "id")){
        clientError(req, "Query Parameters do not meet requirements", 400);
        res.status(401).json({error: "Query Parameters do not meet requirements"});

    } else if(isNaN(req.query.id) && req.query.id != undefined){
        clientError(req, "id provided is not a number", 400);
        res.status(401).json({error: "id provided is not a number"});
    }
})

app.delete('/pokedex/id', (req, res)=> {
    
})



app.listen(5432, () => {
    console.log("Server is running on port 5432");
})