

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


/*
Endpoint: 
    GET: returns a list of all pokedex entries; if an id is provided, only a single pokedex entry is returned
Query Parameters:
    id[number]: assigned number of the pokedex entry
*/

// Justin GET
app.get('/pokedex', async function(req, res) {
    let pokedex = await db.any('SELECT * FROM pokedex;');
    if(Object.keys(req.body).length != 0) {
        clientError(req, "Request body is not permitted", 400);
        // check if a body was provided in the request
        res.status(400).json({
            error: "Request body is not permitted"
        });
    } else if(isNaN(req.query.id) && req.query.id != undefined) {
        clientError(req, "ID is NaN", 400);
        // checks to make sure that the id is a number
        res.status(400).json({
            error: "ID is NaN"
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
app.post('/pokedex', async function (req,res){
    console.log(req.body)
    const {name,
      primary_type,
      secondary_type,
      evolution_stage,
      region_of_origin,
       height,
       weight_lbs,
       bst} = req.body
    let pokedex = await db.query('INSERT INTO pokedex(name, primary_type, secondary_type, evolution_stage, region_of_origin, height, weight_lbs, bst) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *', [name, primary_type, secondary_type,
      evolution_stage,
      region_of_origin,
       height,
       weight_lbs,
       bst]);
    res.json(pokedex)
  })
  
  

// Joel PUT
app.put('/pokedex/:id', async function (req, res) {
    const id = parseInt(req.params.id)
    const { name, email } = request.body
    let pokedex = await db.none('UPDATE pokedex SET id = $1, name = $2',[id, name, email])
    res.json(pokedex);
});

// David DELETE
app.delete('/pokedex/:id', async function(req, res) {
    const id = (req.params.id);
    let pokedexDelete = await db.query('DELETE FROM pokedex WHERE id = $1', [id]);
    res.json(pokedexDelete);
})

// app.delete('/pokedex/:id', (req, res)=> {
//     if(Object.keys(req.body).length != 0) {
//         res.status(400).json({error: "Request within the body is not allowed"}); 

//     } else if(Object.keys(req.query).length > 1){ 
//         clientError(req, "Query Parameters do not meet requirements", 400);
//         res.status(400).json({error: "Query Parameters do not meet requirements"});

//     } else if((Object.keys(req.query).length != 0) && (Object.keys(req.query)[0] != "id")){
//         clientError(req, "Query Parameters do not meet requirements", 400);
//         res.status(401).json({error: "Query Parameters do not meet requirements"});

//     } else if(isNaN(req.query.id) && req.query.id != undefined){
//         clientError(req, "id provided is not a number", 400);
//         res.status(401).json({error: "id provided is not a number"});
//     }
// })

app.delete('/pokedex/:id', async function(req, res) {
    const id = (req.params.id);
    let pokedexDelete = await db.query('DELETE FROM pokedex WHERE id = $1', [id]);
    res.json(pokedexDelete);

})
    



// listen
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})