const express = require('express');
const app=express()

//for parshing req with json paylode in req.body
app.use(express.json());

//for URL-encoded payloads req.body
app.use(express.urlencoded({extended:true}));


//default Public
app.use(express.static(__dirname+'/public'));



app.listen('3000',()=>{
    console.log("Running!");
})