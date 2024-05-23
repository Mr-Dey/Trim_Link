const express = require('express');
const logout = express.Router();

logout.get('/',(req,res)=>{
    //trying to end the session
    req.session.destroy((err)=>{
        if(err){
            return res.status(500).send('Failed to log out.');
        }
    })
    //clearing default cookies
    res.clearCookie('connect.sid');
    res.redirect('/');
})

module.exports = {logout};