require('dotenv').config();

//Import modules
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 
const app = express();
const mysqlCon = require('./connection');
const port = 3000;


// //test server 
// app.get('/',(req,res)=>{
//     res.send('You are fool.');

// })

//Set up middlewares
//read the body of an incoming JSON object. 
app.use(bodyParser.json());
//Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));


// setting routes
const userRoutes = require('./routes/userRoutes');
app.use('/',userRoutes);



// listen to the port 
app.listen(port,()=>{
    console.log('Server started at port '+ port);
});

module.exports = app;