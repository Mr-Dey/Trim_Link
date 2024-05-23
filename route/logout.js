const express = require('express');
const logout = express.Router();

logout.get('/',(req,res)=>{
    req.session.userName=null;
    req.session.userEmail=null;
    res.redirect('/');
})

module.exports = {logout};