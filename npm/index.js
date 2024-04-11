

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

let pokedex=[];


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
    } else if(Object.keys(req.query).length > 1) {
        clientError(req, "Query parameters do not meet requirements", 400);
        // checks if there is more than one query parameter entered
        res.status(400).json({
            error: "Query parameters do not meet requirements"
        });
    } else if((Object.keys(req.query).length != 0) && (Object.keys(req.query)[0] != "id" && Object.keys(req.query)[0] != "name" && Object.keys(req.query)[0] != "primary_type" && Object.keys(req.query)[0] != "secondary_type" && Object.keys(req.query)[0] != "evolution_stage" && Object.keys(req.query)[0] != "region_of_origin" && Object.keys(req.query)[0] != "height" && Object.keys(req.query)[0] != "weight_lbs" && Object.keys(req.query)[0] != "bst")) {
        clientError(req, "Query parameters do not meet requirements", 400);
        // checks if parameters other than id or list are passed
        res.status(400).json({
            error: "Query parameters do not meet requirements"
        });
    } else if((isNaN(req.query.id) && req.query.id != undefined) || (isNaN(req.query.evolution_stage) && req.query.evolution_stage != undefined) || (isNaN(req.query.weight_lbs) && req.query.weight_lbs != undefined) || (isNaN(req.query.bst) && req.query.bst != undefined)) {
        clientError(req, "ID is NaN", 400);
        // checks to make sure that the id is a number
        res.status(400).json({
            error: "ID is NaN"
        });
    }
    else {
        // else is the success case
        if(req.query.id == undefined && req.query.name == undefined && req.query.primary_type == undefined && req.query.secondary_type == undefined && req.query.evolution_stage == undefined && req.query.region_of_origin == undefined && req.query.height == undefined && req.query.weight_lbs == undefined && req.query.bst == undefined) {
            // check if an id was passed or not from the client
            // if not, return all todos
            res.json({pokedex})
        } else if(req.query.bst !== undefined) {
            // selects data using BST parameter
            let bst = req.query.bst;
            let pokeBST = await db.query('SELECT * FROM pokedex WHERE bst = $1', [bst])
            res.json(pokeBST);
        } else if(req.query.weight_lbs !== undefined) {
            // selects data using weight parameter
            let weight_lbs = req.query.weight_lbs;
            let pokeWeight = await db.query('SELECT * FROM pokedex WHERE weight_lbs = $1', [weight_lbs])
            res.json(pokeWeight);
        } else if(req.query.height !== undefined) {
            // selects data using height parameter
            let height = req.query.height;
            let pokeHeight = await db.query('SELECT * FROM pokedex WHERE height = $1', [height])
            res.json(pokeHeight);
        } else if(req.query.region_of_origin !== undefined) {
            // selects data using region parameter
            let region_of_origin = req.query.region_of_origin;
            let pokeRegion = await db.query('SELECT * FROM pokedex WHERE region_of_origin = $1', [region_of_origin])
            res.json(pokeRegion);
        } else if(req.query.evolution_stage !== undefined) {
            // selects data using evolution stage parameter
            let evolution_stage = req.query.evolution_stage;
            let pokeEvoStage = await db.query('SELECT * FROM pokedex WHERE evolution_stage = $1', [evolution_stage])
            res.json(pokeEvoStage);
        } else if(req.query.secondary_type != undefined) {
            // selects data using secondary type parameter
            let secondary_type = req.query.secondary_type;
            let pokeSecondaryType = await db.query('SELECT * FROM pokedex WHERE secondary_type = $1', [secondary_type])
            res.json(pokeSecondaryType);
        } else if(req.query.primary_type != undefined) {
            // selects data using primary type parameter
            let primary_type = req.query.primary_type;
            let pokePrimaryType = await db.query('SELECT * FROM pokedex WHERE primary_type = $1', [primary_type])
            res.json(pokePrimaryType);
        } else if(req.query.name !== undefined) {
            // selects data using name parameter
            let name = req.query.name;
            let pokemonName = await db.query('SELECT * FROM pokedex WHERE name = $1', [name])
            res.json(pokemonName);
        } else {
            // selects data using id parameter
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
    // if(!req.body|| typeof req.body !== 'object'|| !('name' in req.body.name||!('primary_type' in req.body.primary_type||!('secondary_type' in req.body.secondary_type||!('evolution_stage' in req.body.evolution_stage||!('region_of_origin' in req.body.region_of_origin||!('height' in req.body.height||!('weight_lbs' in req.body.weight_lbs||!('bst' in req.body.bst))))))))){
    //     res.statusCode = 400
    //     res.json({error: "Invalid body Parameters"})
    //   }
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
    if(Object.keys(req.body).length != 0) {
        clientError(req, "Request body is not permitted", 400);
        // check if a body was provided in the request
        res.status(400).json({
            error: "Request body is not permitted"
        });
    } else {
        if(req.params.id >= 0 && req.params.id <= pokedex.length){
            const id = (req.params.id);
            let pokedexDelete = await db.query('DELETE FROM pokedex WHERE id = $1', [id]);
            res.json(pokedexDelete);
        } else {
            // if id# is not an available id, return an error message
            clientError(req, "Parameters do not meet requirements", 400)
            res.status(400).json({
                error: "Parameters do not meet requirements"
            });
        }
    }
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