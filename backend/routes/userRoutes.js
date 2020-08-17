const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const mysqlCon = require('../connection');

// POST method for sign up
router.post('/signup',(req,res)=>{
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log(req.body);
    const fname = req.body.fname;
    const lname = req.body.lname;
    const username = req.body.username;
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(12);
    console.log("-=-=-=-=-=-= ",password);
    console.log("0-0-0-0--0-0 ", fname);
    const hashedpwd = bcrypt.hashSync(password,salt);

    let sql = "INSERT INTO users(first_name, last_name, username, password) VALUES (fname, lname, username, hashedpwd)";
    mysqlCon.query(sql,(err,result)=>{
        if(err) throw err;
        res.send("store successfully");
    })

})



module.exports = router;



