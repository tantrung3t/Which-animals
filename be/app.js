const express = require('express')
const cors = require('cors');
const body_Parser = require('body-parser');

// //cofig app and port
const app = express()
const port = 3003

// //use lib
app.use(cors());
app.use(body_Parser.urlencoded({extended: false}));
app.use(body_Parser.json());

require('./app/routers/home.router')(app);

app.get('/', (req, res)=>{
    res.send("hello")
})

app.listen(port, ()=>{
    console.log(__dirname)
    console.log("Listening on port: " + port)
})