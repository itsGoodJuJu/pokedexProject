

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
Middleware:
    Creates a log for every API call
*/
let clientID = 0;
app.all('/*', (req, res, next) => {
    clientID++;
    logger.log({
        level: "info",
        endpoint: req.path,
        method: req.method,
        query_parameters: req.query,
        path_parameters: req.params,
        body: req.body,
        ip: req.ip,
        // errorCode: 400,
        timestamp: new Date(),
    });
    next();
})



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
    } 
    // else if(Object.keys(req.query).length > 1) {
    //     clientError(req, "Query parameters do not meet requirements", 400);
    //     // checks if there is more than one query parameter entered
    //     res.status(400).json({
    //         error: "Query parameters do not meet requirements"
    //     });
    // } 
    else if((Object.keys(req.query).length != 0) && (Object.keys(req.query)[0] != "id" && Object.keys(req.query)[0] != "name" && Object.keys(req.query)[0] != "primary_type" && Object.keys(req.query)[0] != "secondary_type" && Object.keys(req.query)[0] != "evolution_stage" && Object.keys(req.query)[0] != "region_of_origin" && Object.keys(req.query)[0] != "height" && Object.keys(req.query)[0] != "weight_lbs" && Object.keys(req.query)[0] != "bst")) {
        clientError(req, "Query parameters do not meet requirements", 400);
        // checks if parameters other than id, name, types, etc. are passed
        res.status(400).json({
            error: "Query parameters do not meet requirements"
        });
    } else if((isNaN(req.query.id) && req.query.id != undefined) || (isNaN(req.query.evolution_stage) && req.query.evolution_stage != undefined) || (isNaN(req.query.weight_lbs) && req.query.weight_lbs != undefined) || (isNaN(req.query.bst) && req.query.bst != undefined)) {
        clientError(req, "Query Parameter is NaN", 400);
        // checks to make sure that the id is a number
        res.status(400).json({
            error: "Query Parameter is NaN"
        });
    }
    else {
        // else is the success case
        if(req.query.id == undefined && req.query.name == undefined && req.query.primary_type == undefined && req.query.secondary_type == undefined && req.query.evolution_stage == undefined && req.query.region_of_origin == undefined && req.query.height == undefined && req.query.weight_lbs == undefined && req.query.bst == undefined && req.query.image == undefined) {
            // check if an id was passed or not from the client
            // if not, return all todos
            res.json({pokedex})
        } else if(req.query.image !== undefined) {
            // selects data using image parameter
            let image = req.query.image;
            let pokeImage = await db.query('SELECT * FROM pokedex WHERE image = $1', [image])
            res.json(pokeImage);
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



// Marcus's get he sent during the weekend
app.get('/getRandomPokemon', async function(req,res){ try{
    let randomPokemon = await db.query('SELECT image FROM pokedex ORDER BY RANDOM() LIMIT 2');
    if(randomPokemon.length === 0){
        res.statusCode = 400
        res.json({error: "images not found"})
    }else{
        res.json(randomPokemon)
    }
        } catch (error) {
    res.statusCode = 400
    res.json({error: "Action failed"})
    }
})


/*
Endpoint: 
    POST: adds entries to the pokedex.
Body:
    name[string](required): the name to be added to the pokedex
    primary_type[string](required): the first type to be added to the pokedex
    secondary_type[string]: the second type to be added to the pokedex
    evolution_stage[number]: a number that represents the stage of evolution (1-3)
    region_of_origin[string](required): the region the pokemon was first introduced
    height[string](required): the height of the pokemon to be added
    weight_lbs[number](required): the weight in pounds of the pokemon to be added
    bst[number](required): the base stat total of the pokemon to be added to the pokedex
*/

// Marcus POST
app.post('/pokedex', async function (req,res){
    console.log(req.body.image);
    const type = [ "grass",  "water",  "fire",  "dark",  "normal",  "fairy", "electric", "ice", "fighting", "poison", "flying", "ground", "bug", "psychic", "rock", "ghost", "dragon", "steel", null];
    const regionAllowed = ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola", "Galar", "Hisui", "Paldea", "Kitakami"];

    let rexexpNumbers = /^[0-9\s]+$/;
    let Regexpletters = /^[a-zA-Z\s]+$/;
    let heightregexp = /^(([0-9]+|['])([0-9]*)['])*$/;

    if((!req.body|| typeof(req.body) !== 'object') || (!'name' in req.body || typeof(req.body.name) !== 'string') || (!'primary_type' in req.body || typeof(req.body.primary_type) !== 'string') || (!'secondary_type' in req.body || (typeof(req.body.secondary_type) !== 'string')) && (!'evolution_stage' in req.body|| (typeof(req.body.evolution_stage) !== 'number' && typeof(req.body.evolution_stage) !== 'null')) || (!'region_of_origin' in req.body || typeof(req.body.region_of_origin) !== 'string') || (!'height' in req.body || typeof(req.body.height) !== 'string') || (!'weight_lbs' in req.body || typeof(req.body.weight_lbs) !== 'number') || (!'bst' in req.body || typeof(req.body.bst) !== 'number') || (!'image' in req.body || typeof(req.body.image) !== 'string') || (!'moves' in req.body || typeof(req.body.moves) !== 'object')){
        // does not allow secondary_type or evolution_stage to equal null
        res.statusCode = 400
        res.json({error: "Invalid body Parameters"})
    } else if(!type.includes(req.body.primary_type)) {
        res.statusCode = 400
        res.json({error: "type does not exist"})
    } else if(!type.includes(req.body.secondary_type)) {
        res.statusCode = 400
        res.json({error: "type does not exist"})
    } else if(!regionAllowed.includes(req.body.region_of_origin)) {
        res.statusCode = 400
        res.json({error: "Region does not exist"})
    } else if(!Regexpletters.test(req.body.name)){
        res.statusCode = 400
        res.json({error: "Request body does not meet requirements"})
    } 
    // else if(!heightregexp.test(req.body.height)){
    //     res.statusCode = 400
    //     res.json({error: "height does not match criteria"})
    // }
    else {
        console.log(req.body)
        const {
            name,
            primary_type,
            secondary_type,
            evolution_stage,
            region_of_origin,
            height,
            weight_lbs,
            bst,
            image,
            moves
        } = req.body
        let pokedex = await db.query('INSERT INTO pokedex(name, primary_type, secondary_type, evolution_stage, region_of_origin, height, weight_lbs, bst, image, moves) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', [name, primary_type, secondary_type, evolution_stage, region_of_origin, height, weight_lbs, bst, image, moves]);
        res.json(pokedex)
    }
  })
  
  /*
Endpoint: 
    PUT: updates an existing pokedex entry and modifies its data
Path Parameter:
    name[string](required): the name of the pokemon to be updated to the pokedex
Body:
    name[string]:the pokedex entry to be updated
*/

// Joel PUT
app.put('/pokedex/:name', async function(req, res) {
    // } else 
    if((!req.body|| typeof(req.body) !== 'object') || (!'name' in req.body || typeof(req.body.name) !== 'string') || (!'primary_type' in req.body || typeof(req.body.primary_type) !== 'string') || (!'secondary_type' in req.body || typeof(req.body.secondary_type) !== 'string') || (!'evolution_stage' in req.body|| typeof(req.body.evolution_stage) !== 'number') || (!'region_of_origin' in req.body || typeof(req.body.region_of_origin) !== 'string') || (!'height' in req.body || typeof(req.body.height) !== 'string') || (!'weight_lbs' in req.body || typeof(req.body.weight_lbs) !== 'number') || (!'bst' in req.body || typeof(req.body.bst)!== 'number') || (!'image' in req.body || typeof(req.body.image) !== 'string') || (!'moves' in req.body || typeof(req.body.moves) !== 'object')){
        res.statusCode = 400
        res.json({error: "Invalid body Parameters"})
    } else {
        console.log(req.body);
        const nameInput = req.params.name;
        const {name, primary_type, secondary_type, evolution_stage, region_of_origin, height, weight_lbs, bst, image, moves} = req.body
        let updatedPokemon = await db.query(`UPDATE pokedex SET name = $1, primary_type = $2,secondary_type = $3,evolution_stage = $4, region_of_origin = $5, height = $6, weight_lbs = $7, bst = $8 , image = $9, moves = $10 WHERE name = $11 RETURNING *`,[name, primary_type, secondary_type, evolution_stage, region_of_origin, height, weight_lbs, bst, image, moves, nameInput]);
        res.json(updatedPokemon);
    }
    
});

/*
Endpoint: 
    DELETE: deletes an existing pokedex entry
Path Parameter:
    id[number](required): the id of the pokedex entry to be deleted from the pokedex
*/

// David DELETE
app.delete('/pokedex/:id', async function(req, res) {
    if(Object.keys(req.body).length != 0) {
        clientError(req, "Request body is not permitted", 400);
        // check if a body was provided in the request
        res.status(400).json({
            error: "Request body is not permitted"
        });
    } else if(isNaN(req.params.id)) {
        clientError(req, "Parameters do not meet requirements", 400)
        // checks if the parameter entered is a number
        res.status(400).json({
            error: "Parameters do not meet requirements"
        });
    } 
    // else if(req.params.id !== undefined) {
    //     let pokeId = await db.any('SELECT id FROM pokedex;');
    //     if(req.params.id != pokeId) {
    //         clientError(req, "Parameters do not meet requirements", 400)
    //         // checks if the parameter entered is a number
    //         res.status(400).json({
    //             error: "Parameters do not meet "
    //         });
    //     }
    // } 
    else {
        const id = (req.params.id);
        let pokedexDelete = await db.query('DELETE FROM pokedex WHERE id = $1 RETURNING *', [id]);
        res.json(pokedexDelete);
       
    }
})



// listen
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})


fetch('http://localhost:3000/pokedex')
.then(resp =>  resp.json())
.then(data => {
        console.log(data);
    for(let i = 0; i < data.pokedex.length; i++) {
        console.log(data.pokedex[i].height)
    }
    
    // let pokedexContainer = document.getElementById("pokemonContainer");
    // let pokedexCard = document.createElement("div");
    // pokedexCard.classList.add("card");

    // let pokemonNameTag = document.createElement("p");
    // let pokemonUrl = document.createElement("p");
    
    // pokemonNameTag.innerText = "Name: " + user[i].name;
    // pokemonUrl.innerText = "Url:  " + user[i].image;
    
    // pokedexCard.appendChild(pokemonNameTag);
    // pokedexCard.appendChild(pokemonUrl);
    // pokedexContainer.appendChild(pokedexCard);
});