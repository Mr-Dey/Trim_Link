const express=require('express');
const urlSchema=require('../model/urlSchema');
const userSchema=require('../model/usersSchema');

const trimlink=express.Router()

//ShortLink Handeler
trimlink.get('/:userId/:shortid',async(req,res)=>{
    try{
        let user=await userSchema.findOne({name:req.params.userId})
        if(user){

            const result = await userSchema.findOneAndUpdate({
                name:user.name,
                'urlSchema.shortId':req.params.shortid
            },{
                $push:{
                    "urlSchema.$.analytics":{
                        timestamp : Date.now()
                    }
                }
            })
            console.log("this is working from trimlink");
            let data=result.urlSchema.find(id=> id.shortId===req.params.shortid);
            res.redirect(data.redirectURL);
        }
    }catch(e){
        console.log("error here in trimlink\n"+e);
    }
})

module.exports={trimlink};