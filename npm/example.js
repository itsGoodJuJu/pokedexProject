const express = require('express');
const pgp = require('pg-promise'());

const app = express();
const db = pgp('postgres://luqsxohi:RDqS9xomN9tCkgBQP452dxZffdFjFLHg@baasu.db.elephantsql.com/luqsxohi');

// end points work for the ID for players that got it within the database
app.get('/players', async (req, res)=> {
        let player = await db.oneOrNone('SELECT * FROM nba_players WHERE id = $1',req.query.id);
        res.json(player);
    }
)

app.get('/player', async (req, res)=> {
    // Check to make sure Get request does not have a body 
    console.log(typeof(req.body));
    if(req.body != 'undefined') {
        res.sendStatus(400).statusMessage('Bad Request');
        console.log("Received a request with a body")
    } else {
        let players = await db.any('SELECT * FROM nba_players');
        res.json(players);
    }
})



app.post('/player', async (req, res)=> {
    let players = await db.any('INSERT INTO * FROM nba_players')
    res.json(players);

})

app.patch('/player', async (req, res)=> {
    let players = await db.any('UPDATE * FROM nba_players')
    res.json(players);
    
})

app.delete('/player', async(req, res)=> {
    let players = await db.any('DELETE FROM nba_players')
    res.json(players)
})

app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
})