//Dependency
const express = require('express');
const mongoose=require('mongoose');
const path=require('path');
const hbs=require('hbs');

//routes
const signup=require('./route/signup');
const login=require('./route/login');
const adduser=require('./route/adduser');
const verifyLogin=require('./route/verifyLogin');

//database Schema
const userSchema=require('./model/usersSchema');


//database url
const url="mongodb://localhost:27017/trimlink"
mongoose.connect(url)

//to test whether db is connected or not
.then(()=>{
    console.log("db Connected");
})
.catch((e)=>{
    console.log("db is not connected!");
})

const app=express()
app.use(express.static(path.join(__dirname, 'public')));

//viewengine
const viewsPath=path.join(__dirname,'/views');
app.set("view engine","hbs");
app.set('views',viewsPath);


//for parshing req with json paylode in req.body
app.use(express.json());

//for URL-encoded payloads req.body
app.use(express.urlencoded({extended:true}));

//Handeler

app.use("/signup",signup);
app.use("/login",login);
app.use('/adduser',adduser);
app.use('/verifyLogin',verifyLogin);


//fortest 
app.get("/xyz",(req,res)=>{
    res.redirect("https://www.google.com/");
    // res.render('status',{status:"This is working"});
})

app.listen('3000',()=>{
    console.log("Running!");
})