const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
const pg = require('pg')
//const app = express();
//const app = express();
const Pool = pg.Pool;
const pool = new Pool({
    database: 'jazzy', 
    host: 'localhost',
    port: 5432,
})
pool.on('connect', () => {
console.log('connected to postgres')
})

pool.on('error', (error) => {
    console.log(error);
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});







app.get('/songs' , (req, res) => {
    const queryText = `SELECT * FROM "songs" ORDER BY "id" DESC;`
//send query to db
pool.query(queryText)
  .then( (result) => {
      //only 100% sure that the query is done
      console.log(result.rows);
      res.send(result.rows);
  }).catch( (err) =>{
      console.log(err);
      res.sendStatus(500);
  })  
//res.send();
})


app.get('/artist' , (req, res) => {
    const queryText = `SELECT * FROM "artist" ORDER BY "id" DESC;`
//send query to db
pool.query(queryText)
  .then( (result) => {
      //only 100% sure that the query is done
      console.log(result.rows);
      res.send(result.rows);
  }).catch( (err) =>{
      console.log(err);
      res.sendStatus(500);
  })  
//res.send();
})

app.post('/artist', (req, res) => {
    //musicLibrary.push(req.body);
    //query
    let queryText = `INSERT INTO "artist" ("name", "birthdate")
    VALUES  ($1, $2);`

    let values = [req.body.name, req.body.birthday ]
    res.sendStatus(200);
;
pool.query(queryText, values)
.then((result) => {
res.sendStatus(201)
}).catch( err => {
    console.log(err)
    res.sendStatus(500);
})
})





app.post('/song', (req, res) => {
    //musicLibrary.push(req.body);
    //query
    let queryText = `INSERT INTO "songs" ("title", "length", "released")
    VALUES  ($1, $2, $3, $4);`

    let values = [req.body.title, req.body.length, req.body.released]
    res.sendStatus(200);
;
pool.query(queryText, values)
.then((result) => {
res.sendStatus(201)
}).catch( err => {
    console.log(err)
    res.sendStatus(500);
})
})
//module.exports = router;


