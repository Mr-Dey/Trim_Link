const express = require('express');
const profile =express.Router();

profile.get('/',(req,res)=>{
    if(req.session.userName){
        res.render('profile',{userName:req.session.userName});
    }else{
        res.render('status',{status:"Please Login!"});
    }
})

module.exports={profile}
