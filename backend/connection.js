const mysql = require('mysql');

//Connect to the mysql database
const mysqlConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user:process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

mysqlConnection.connect((err)=>{
    if(err){
        throw err;
    }else{
        console.log("Successfully connecting to MySQL database");

        let sqldb = "CREATE DATABASE IF NOT EXISTS db";
        mysqlConnection.query(sqldb,(err)=>{
            if(err) throw err;

            mysqlConnection.query('USE db',(err)=>{
                if(err) throw err;
        
                let sqltb = `CREATE TABLE IF NOT EXISTS users(
                    id int AUTO_INCREMENT,
                    first_name VARCHAR(80),
                    last_name VARCHAR(80), 
                    username VARCHAR(80), 
                    password VARCHAR(255),
                    PRIMARY KEY (id)
                    )`;
                    mysqlConnection.query(sqltb,(err,result)=>{
                    if(err) throw err;
                    console.log("Create user table under db");
                })
            })
        })
    }
})



module.exports = mysqlConnection;
