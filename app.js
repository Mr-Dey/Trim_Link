const express = require('express');
const signup=require('./route/signup');
const login=require('./route/login');
const app=express()

//for parshing req with json paylode in req.body
app.use(express.json());

//for URL-encoded payloads req.body
app.use(express.urlencoded({extended:true}));


//default handler
app.use(express.static(__dirname+'/public'));


//handle /signup
app.use("/signup",signup);
app.use("/login",login);


app.listen('3000',()=>{
    console.log("Running!");
})