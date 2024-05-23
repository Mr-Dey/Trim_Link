//Dependency
const express = require('express');
const session = require('express-session');
const mongoose=require('mongoose');
const path=require('path');
const hbs=require('hbs');
const geoip=require('geoip-lite');
require('dotenv').config();

//routes
const {home}=require('./route/login');
const {signup}=require('./route/login');
const {login}=require('./route/login');
const {logout}=require('./route/logout');

const adduser=require('./route/adduser');
const {verifyLogin}=require('./route/verifyLogin');
const {profile}=require('./route/profile.js');
const {changePassword}=require('./route/changePassword.js')
const {urlGenerate}=require('./route/urlGenerate');
const {dashboard}=require('./route/urlGenerate');
const {trimlink}=require('./route/trimlink');
const {deleteURL} = require('./route/deleteURL');
const {urlanalytics} = require('./route/urlanalytics');

//database url
const url=process.env.TRIMLINK_DB
mongoose.connect(url)

//to test whether db is connected or not
.then(()=>{
    console.log("db Connected");
})
.catch((e)=>{
    console.log("db is not connected!");
})

const app=express()

//This makes the css and some logic availabe to acess in there browser. (Public folder for public)
app.use(express.static(path.join(__dirname, 'public')));

//viewengine
const viewsPath=path.join(__dirname,'/views');
app.set("view engine","hbs");
app.set('views',viewsPath);


//for parshing req with json paylode in req.body
app.use(express.json());

//for URL-encoded payloads req.body
app.use(express.urlencoded({extended:false}));


//session
app.use(session({
    secret:'secret-key',
    resave:false,
    saveUninitialized:false,
    cookie:{
        //The life of this cookie will be 1 hour.
        maxAge: 1000 * 60 * 60, 
        secure: false,
        httpOnly: true
    }
}))

//Handler
app.use('/',home)
app.use("/signup",signup);
app.use("/login",login);
app.use('/adduser',adduser);
app.use('/verifyLogin',verifyLogin);
app.use('/logout',logout);
app.use('/generate',urlGenerate);
app.use('/dashboard',dashboard);
app.use('/trimlink',trimlink);
app.use('/changepassword',changePassword);
app.use('/profile',profile);
app.use('/deleteurl',deleteURL);
app.use('/urlanalytics',urlanalytics);



//fortest 
// app.get("/test",(req,res)=>{
//     res.status(500);
// })


const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("Running!");
})