const express=require('express');
const geoip= require('geoip-lite');

const home=express.Router()
const login=express.Router()
const signup=express.Router()

home.get('/',(req,res)=>{
    res.render('login');
})

login.get('/',(req,res)=>{
    res.render('login');
})

signup.get('/',(req,res)=>{
    res.render('signup');
})


module.exports={
    login,
    signup,
    home
}