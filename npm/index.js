

const pg = require('pg-promise')();
const db = pg("postgres://postgres:goodworks17@localhost:3000/postgres")
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
document.getElementById("random").onclick = 

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
    else if((Object.keys(req.query).length != 0) && (Object.keys(req.query)[0] != "id" && Object.keys(req.query)[0] != "name" && Object.keys(req.query)[0] != "primary_type" && Object.keys(req.query)[0] != "secondary_type" && Object.keys(req.query)[0] != "evolution_stage" && Object.keys(req.query)[0] != "region_of_origin" && Object.keys(req.query)[0] != "height" && Object.keys(req.query)[0] != "weight_lbs" && Object.keys(req.query)[0] != "bst" && Object.keys(req.query)[0] != "partyPokemon" && Object.keys(req.query)[0] != "oppoPokemon")) {
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
        if(req.query.id == undefined && req.query.name == undefined && req.query.primary_type == undefined && req.query.secondary_type == undefined && req.query.evolution_stage == undefined && req.query.region_of_origin == undefined && req.query.height == undefined && req.query.weight_lbs == undefined && req.query.bst == undefined && req.query.image == undefined && req.query.partyPokemon == undefined && req.query.oppoPokemon == undefined) {
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
        } else if(req.query.id !== undefined) {
            // selects data using id parameter
            let id = req.query.id;
            let pokemonId = await db.query('SELECT * FROM pokedex WHERE id = $1', [id])
            res.json(pokemonId);
        } else if (req.query.partyPokemon !== undefined) {
            await db.none('DROP TABLE partypokemon');

            await db.none('CREATE TABLE partypokemon (id SERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL, primary_type VARCHAR(50) NOT NULL, secondary_type VARCHAR(50) NULL, hp INTEGER NOT NULL, attack INTEGER NOT NULL, defense INTEGER NOT NULL, spatk INTEGER NOT NULL, spdef INTEGER NOT NULL, speed INTEGER NOT NULL, image VARCHAR(500) NOT NULL, moves VARCHAR(500)[]);');

            let partypokemon = await db.any('SELECT name, primary_type, secondary_type, hp, attack, defense, spatk, spdef, speed, image FROM pokedex ORDER BY RANDOM() LIMIT 6');

            for(let i = 0; i < partypokemon.length; i++) {
                await db.any('INSERT INTO partypokemon (name, primary_type, secondary_type, hp, attack, defense, spatk, spdef, speed, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', [partypokemon[i].name, partypokemon[i].primary_type, partypokemon[i].secondary_type, partypokemon[i].hp, partypokemon[i].attack, partypokemon[i].defense, partypokemon[i].spatk, partypokemon[i].spdef, partypokemon[i].speed, partypokemon[i].image]);
            }
            // await db.any('INSERT INTO partypokemon (name, primary_type, secondary_type, hp, attack, defense, spatk, spdef, speed, image) SELECT name, primary_type, secondary_type, hp, attack, defense, spatk, spdef, speed, image FROM pokedex ORDER BY RANDOM() LIMIT 6 RETURNING *;');

            // Create a variable that holds all party pokemon
            // Run a SQL query retrieve all pokemon

            // Get a set of moves for each pokemon
            // Convert array of moves to a string 
            // Loop

            // let partypokemon = select * from partpokemon;
            
            for(let i = 1; i <= partypokemon.length; i++){
                let moves = await db.any('SELECT moves.name from partypokemon INNER JOIN moves ON partypokemon.primary_type = moves.type OR partypokemon.secondary_type = moves.type WHERE partypokemon.id = $1 ORDER BY RANDOM() LIMIT 4;', [i])
            
                for(let j=0; j < moves.length; j++) {
                    moves[j] = moves[j].name;
                }
                // psql uses {} for arrays, js uses [] for arrays
                // first, convert value to string using toString(), then concatenate with { }
                moves = "{" + moves.toString() + "}";

                await db.any('UPDATE partypokemon SET moves = $1 WHERE partypokemon.id = $2', [moves, i]);
            }
            
            res.json(await db.any('SELECT * FROM partypokemon'));
        } else if (req.query.oppoPokemon !== undefined) {
            await db.none('DROP TABLE opponentpokemon');
            await db.none('CREATE TABLE opponentpokemon (id SERIAL PRIMARY KEY, name VARCHAR(50) NOT NULL, primary_type VARCHAR(50) NOT NULL, secondary_type VARCHAR(50) NULL, hp INTEGER NOT NULL, attack INTEGER NOT NULL, defense INTEGER NOT NULL, spatk INTEGER NOT NULL, spdef INTEGER NOT NULL, speed INTEGER NOT NULL, image VARCHAR(500) NOT NULL, moves VARCHAR(500)[]);');

            let oppopokemon = await db.any('SELECT name, primary_type, secondary_type, hp, attack, defense, spatk, spdef, speed, image FROM pokedex ORDER BY RANDOM() LIMIT 6');

            for(let i = 0; i < oppopokemon.length; i++) {
                await db.any('INSERT INTO opponentpokemon (name, primary_type, secondary_type, hp, attack, defense, spatk, spdef, speed, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', [oppopokemon[i].name, oppopokemon[i].primary_type, oppopokemon[i].secondary_type, oppopokemon[i].hp, oppopokemon[i].attack, oppopokemon[i].defense, oppopokemon[i].spatk, oppopokemon[i].spdef, oppopokemon[i].speed, oppopokemon[i].image]);
            }

            for(let i = 1; i <= oppopokemon.length; i++){
                let moves = await db.any('SELECT moves.name from opponentpokemon INNER JOIN moves ON opponentpokemon.primary_type = moves.type OR opponentpokemon.secondary_type = moves.type WHERE opponentpokemon.id = $1 ORDER BY RANDOM() LIMIT 4;', [i])
            
                for(let j=0; j < moves.length; j++) {
                    moves[j] = moves[j].name;
                }

                moves = "{" + moves.toString() + "}";

                await db.any('UPDATE opponentpokemon SET moves = $1 WHERE opponentpokemon.id = $2', [moves, i]);
            }
            
            res.json(await db.any('SELECT * FROM opponentpokemon'));
        }
    }
});


// // Marcus's get he sent during the weekend
// app.get('/getRandomPokemon', async function(req,res){ try{
//     let randomPokemon = await db.query('SELECT image FROM pokedex ORDER BY RANDOM() LIMIT 2');
//     if(randomPokemon.length === 0){
//         res.statusCode = 400
//         res.json({error: "images not found"})
//     }else{
//         res.json(randomPokemon)
//     }
//         } catch (error) {
//     res.statusCode = 400
//     res.json({error: "Action failed"})
//     }
// })


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

    if((!req.body|| typeof(req.body) !== 'object') || (!'name' in req.body || typeof(req.body.name) !== 'string') || (!'primary_type' in req.body || typeof(req.body.primary_type) !== 'string') || (!'secondary_type' in req.body || (typeof(req.body.secondary_type) !== 'string')) && (!'evolution_stage' in req.body || (typeof(req.body.evolution_stage) !== 'number' && typeof(req.body.evolution_stage) !== 'null')) || (!'region_of_origin' in req.body || typeof(req.body.region_of_origin) !== 'string') || (!'height' in req.body || typeof(req.body.height) !== 'string') || (!'weight_lbs' in req.body || typeof(req.body.weight_lbs) !== 'number') || (!'bst' in req.body || typeof(req.body.bst) !== 'number') || (!'image' in req.body || typeof(req.body.image) !== 'string') || (!'moves' in req.body || typeof(req.body.moves) !== 'object')){
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


// get random 6 for party
// function pokemonParty() {
//     app.get('/playerParty', async function(req, res) {
//         let partyPlayer = await db.any('INSERT INTO partypokemon (name, primary_type, secondary_type, hp, physical, defense, spatk, spdef, speed, image) SELECT name, primary_type, secondary_type, hp, physical, defense, spatk, spdef, speed, image FROM pokedex ORDER BY RANDOM() LIMIT 6 RETURNING *;');
//         // res.json(partyPlayer);

//         let partyMoves;
//         for(i=1; i <= 6; i++) {
//             partyMoves = await db.any('SELECT partypokemon.id, partypokemon.name, partypokemon.primary_type, partypokemon.secondary_type, moves.name, moves.type from partypokemon INNER JOIN moves ON partypokemon.primary_type = moves.type OR partypokemon.secondary_type = moves.type WHERE partypokemon.id = $1', [i]);
            
//         }
//         res.json(partyMoves);
        
//     })

        // let pokeContainer = document.getElementById("pokemonContainer")
        // let pokeCard = document.createElement("div");
        // pokeCard.classList.add("card");

        // let heroImage = document.createElement("img");

        // let heroNameTag = document.createElement("p");
        // let hpTag = document.createElement("p");

        // heroNameTag.innerText = "Name: " + result.heros[i].data.name;
    
// }




let currentOppo = 1;
let remainingHP;

async function currentOpponent() {
    console.log(currentOppo)
    if(remainingHP == 0) {
        await db.any('DELETE FROM opponentpokemon WHERE hp = 0 RETURNING *');
        currentOppo++;
        console.log(currentOppo);
    }
}

// ATTACK Opponent ENDPOINT
app.get('/battleOpponent', async function(req, res) {
    let chosenMove = req.query.attack;
    console.log(chosenMove)
    if(currentOppo == 7){
        res.json("All of the opponent's pokémon have fainted! Opponent ran to the Pokemon Center.");
    } else {
        console.log(currentOppo);
        
        // SELECTS the pokemon's name
        let pokeName = await db.any('SELECT name FROM partypokemon where id = $1', currentPoke);
        pokeName = pokeName[0].name;
        console.log(pokeName);

        // SELECTS the opponent pokemon's name
        let oppoName = await db.any('SELECT name FROM opponentpokemon where id = $1', currentOppo);
        oppoName = oppoName[0].name;
        console.log(oppoName);

        // SELECTS the name of the move being used
        let moveName = await db.any('SELECT moves[$1] FROM partypokemon WHERE name = $2', [chosenMove, pokeName]);
        moveName = moveName[0].moves;
        console.log(moveName);

        // select type from moves where name = $1, moveName

        // SELECTS the attack stat of the attacking pokemon
        let atkStat = await db.any('SELECT attack FROM partypokemon WHERE name = $1', pokeName);
        atkStat = atkStat[0].attack;
        // console.log(atkStat);

        // SELECTS the special attack stat of the attacking pokemon
        // let spatkStat = await db.any('SELECT spatk FROM partypokemon WHERE name = $1', pokeName);
        // spatkStat = spatkStat[0].spatk;
        // console.log(spatkStat);

        // SELECTS the attack power of the move being used
        let atkPower = await db.any('SELECT power FROM moves WHERE name = $1', moveName);
        atkPower = atkPower[0].power;
        // console.log(atkPower);

        // SELECTS the defense stat of the opposing pokemon
        let defStat = await db.any('SELECT defense FROM opponentpokemon WHERE name = $1', oppoName);
        defStat = defStat[0].defense;
        // console.log(defStat);

        // SELECTS the hp stat of the opposing pokemonm
        let oppoHP = await db.any('SELECT hp FROM opponentpokemon WHERE name = $1', oppoName);
        oppoHP = oppoHP[0].hp;
        // console.log(oppoHP);

        // SELECTS the special defense stat of the opposing pokemon
        // let spdefStat = await db.any('SELECT spdef FROM partypokemon WHERE name = $1', pokeName);
        // spdefStat = spdefStat[0].spdef;
        // console.log(spdefStat);

        let stab = 1.5;
        let type1Effect = 2;
        let type2Effect = 0.5;

        // calculations
        let damage = Math.ceil(((((((2 / 5) + 2) * atkPower * atkStat / defStat)/50)+2) * type1Effect * type2Effect * stab));
        console.log(damage);

        // let A = (atkStat + atkPower)/4;
        // let D = Math.sqrt(defStat) * 1.25;
        // let dmg = A - D * type1Effect * type2Effect;

        // if hp calculation results in less than 0, then hp = 0
        remainingHP = oppoHP - damage;
        if(remainingHP < 0) {
            remainingHP = 0;
        }
        console.log(remainingHP);

        // UPDATE opponent's health after the attack
        let opponentHealth = await db.any('UPDATE opponentpokemon SET hp = $1 WHERE name = $2 RETURNING *', [remainingHP, oppoName]);

        // function to check if HP is 0 and to increment to next pokemon id
        currentOpponent();

        res.json(opponentHealth);
    }
})

let currentPoke = 1;
let remainingPokeHP;

async function currentPokemon() {
    console.log(currentPoke)
    if(remainingPokeHP == 0) {
        await db.any('DELETE FROM partypokemon WHERE hp = 0 RETURNING *');
        currentPoke++;
        console.log(currentPoke);
    }
}

// ATTACK Player ENDPOINT
app.get('/battlePlayer', async function(req, res) {
    // chosen move needs to be at least 0 and at max 3
    let chosenMove = req.query.attack;
    if(currentPoke == 7){
        res.json("All of your pokémon have fainted! You paid $1000 and fled to the Pokemon Center.");
    } else {
        console.log(currentPoke);
        
        // SELECTS the pokemon's name
        let pokeName = await db.any('SELECT name FROM partypokemon where id = $1', currentPoke);
        pokeName = pokeName[0].name;
        console.log(pokeName);

        // SELECTS the opponent pokemon's name
        let oppoName = await db.any('SELECT name FROM opponentpokemon where id = $1', currentOppo);
        oppoName = oppoName[0].name;
        console.log(oppoName);

        // SELECTS the name of the move being used
        let moveName = await db.any('SELECT moves[$1] FROM opponentpokemon WHERE name = $2', [chosenMove, oppoName]);
        moveName = moveName[0].moves;
        console.log(moveName);

        // select type from moves where name = $1, moveName

        // SELECTS the attack stat of the attacking pokemon
        let atkStat = await db.any('SELECT attack FROM opponentpokemon WHERE name = $1', oppoName);
        atkStat = atkStat[0].attack;
        // console.log(atkStat);

        // SELECTS the special attack stat of the attacking pokemon
        // let spatkStat = await db.any('SELECT spatk FROM partypokemon WHERE name = $1', pokeName);
        // spatkStat = spatkStat[0].spatk;
        // console.log(spatkStat);

        // SELECTS the attack power of the move being used
        let atkPower = await db.any('SELECT power FROM moves WHERE name = $1', moveName);
        atkPower = atkPower[0].power;
        // console.log(atkPower);

        // SELECTS the defense stat of the opposing pokemon
        let defStat = await db.any('SELECT defense FROM partypokemon WHERE name = $1', pokeName);
        defStat = defStat[0].defense;
        // console.log(defStat);

        // SELECTS the hp stat of the opposing pokemonm
        let pokeHP = await db.any('SELECT hp FROM partypokemon WHERE name = $1', pokeName);
        pokeHP = pokeHP[0].hp;
        // console.log(oppoHP);

        // SELECTS the special defense stat of the opposing pokemon
        // let spdefStat = await db.any('SELECT spdef FROM partypokemon WHERE name = $1', pokeName);
        // spdefStat = spdefStat[0].spdef;
        // console.log(spdefStat);

        let stab = 1.5;
        let type1Effect = 2;
        let type2Effect = 0.5;

        // calculations
        let damage = Math.ceil(((((((2 / 5) + 2) * atkPower * atkStat / defStat)/50)+2) * type1Effect * type2Effect * stab));
        console.log(damage);

        // let A = (atkStat + atkPower)/4;
        // let D = Math.sqrt(defStat) * 1.25;
        // let dmg = A - D * type1Effect * type2Effect;

        // if hp calculation results in less than 0, then hp = 0
        remainingPokeHP = pokeHP - damage;
        if(remainingPokeHP < 0) {
            remainingPokeHP = 0;
        }
        console.log(remainingPokeHP);

        // UPDATE opponent's health after the attack
        let pokemonHealth = await db.any('UPDATE partypokemon SET hp = $1 WHERE name = $2 RETURNING *', [remainingPokeHP, pokeName]);

        // function to check if HP is 0 and to increment to next pokemon id
        currentPokemon();

        res.json(pokemonHealth);
    }
})


// AUDIO for the backgrounds: from David
app.get('/backgroundAudio', async (req, res) => {
    try {
        const audioData = await db.many('SELECT name,image,music FROM stages');
            if (!audioData || audioData.length === 0) {
            return res.status(200).json({ error: 'No background audio data found' });
        }
         // Process each row with a for-loop
        for (let i = 0; i < audioData.length; i++) {
            console.log(audioData[i])
        }
        res.json(audioData);
    } catch (error) {
        console.error('Failed to get background audio data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


// listen
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})


// let x = document.getElementById("pokeaudio");
// function playAudio() {
//     x.play();
// }

// playAudio();

// function playMusic(){
//     var music = new Audio('audio/wildPokemon.mp3');
//     music.play();
//     };

// playMusic();


// DAVID'S FETCH
// fetch('http://localhost:3000/pokedex')
// .then(resp =>  resp.json())
// .then(data => {
//         // console.log(data);
//     for(let i = 0; i < data.pokedex.length; i++) {
//         console.log(data.pokedex[i].image)
//     }
    
//     // let pokedexContainer = document.getElementById("pokemonContainer");
//     // let pokedexCard = document.createElement("div");
//     // pokedexCard.classList.add("card");

//     // let pokemonNameTag = document.createElement("p");
//     // let pokemonUrl = document.createElement("p");
    
//     // pokemonNameTag.innerText = "Name: " + user[i].name;
//     // pokemonUrl.innerText = "Url:  " + user[i].image;
    
//     // pokedexCard.appendChild(pokemonNameTag);
//     // pokedexCard.appendChild(pokemonUrl);
//     // pokedexContainer.appendChild(pokedexCard);
// });

