const express = require('express');
const deleteURL = express.Router();
const userSchema = require('../model/usersSchema');

deleteURL.get('/:code',async (req,res)=>{
    try{
        if(req.session.userName){
            let shortId = req.params.code;
            let result= await userSchema.updateOne({name:req.session.userName ,'urlSchema.shortId':shortId},{
                $pull:{
                    urlSchema: {
                        shortId: shortId
                    }
                }
            })
    
            //result is an object which is always true
            console.log(result);
            if(result){
                res.redirect('/dashboard');
            }
        }
    }catch(e){
        console.log('error occured in deleteURL route!\n',e);
    }
    
})

module.exports={deleteURL};