const express = require('express');
const deleteURL = express.Router();
const userSchema = require('../model/usersSchema');

deleteURL.get('/:code',async (req,res)=>{
    if(req.session.userName){
        let shortId = req.params.code;
        let result= await userSchema.updateOne({name:req.session.userName ,'urlSchema.shortId':req.params.code},{
            $pull:{
                urlSchema: {
                    shortId: req.params.code
                }
            }
        })
        if(result){
            res.redirect('/dashboard');
        }
    }
    
})

module.exports={deleteURL};