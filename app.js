const express = require('express');
const mongoose=require('mongoose');

const signup=require('./route/signup');
const login=require('./route/login');
const adduser=require('./route/adduser');

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

//for parshing req with json paylode in req.body
app.use(express.json());

//for URL-encoded payloads req.body
app.use(express.urlencoded({extended:true}));

//Handeler
app.use(express.static(__dirname+'/public'));
app.use("/signup",signup);
app.use("/login",login);
app.use('/adduser',adduser);


//fortest
app.get("/test",async(req,res)=>{
    let jsons=await userSchema.find();
    res.send(jsons);
})

app.listen('3000',()=>{
    console.log("Running!");
})