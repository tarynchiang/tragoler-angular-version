//importing modules
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); 
const app = express();
const port = 3000;

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'password',
    port: 3306
})

mysqlConnection.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log("Successfully connecting to MySQL database");
    }
})


// //test server 
// app.get('/',(req,res)=>{
//     res.send('You are fool.');

// })

// //setting middlewares
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


app.listen(port,()=>{
    console.log('Server started at port '+ port);
});

// setting routes

