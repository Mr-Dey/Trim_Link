const express=require('express');
const urlSchema=require('../model/urlSchema');
const userSchema=require('../model/usersSchema');
const geoip= require('geoip-lite');

const trimlink=express.Router()

//ShortLink Handeler
trimlink.get('/:userId/:shortid',async(req,res)=>{
    try{
        let user=await userSchema.findOne({name:req.params.userId})
        if(user){

            //click time
            const timestamp = Date.now();
            const formattedTime = new Date(timestamp).toLocaleTimeString('en-US', {hour12: false, hour: '2-digit', minute: '2-digit'});
            
            //Device data
            let useragent=req.headers['user-agent'];
            let device = useragent.match(/Mobile|Android/i)?"Mobile":"Desktop";

            // for test url analytics data
            let japanip = "45.87.213.230"
            let usaip = "91.245.252.9"
            let germanyip = "146.70.82.206"
        
            let locationData = geoip.lookup(germanyip);
            // let locationData = geoip.lookup(req.ip);
            let location = `${locationData.city} ${locationData.country} ${locationData.timezone} ${device}`

            const result = await userSchema.findOneAndUpdate({
                name:user.name,
                'urlSchema.shortId':req.params.shortid
            },{
                $push:{
                    "urlSchema.$.analytics":{
                        timeStamp : formattedTime,
                        ip:germanyip,
                        // ip:req.ip,
                        userAgent:req.headers['user-agent'],

                        location:location
                    }
                }
            })
            let data=result.urlSchema.find(id=> id.shortId===req.params.shortid);
            res.redirect(data.redirectURL);
        }
    }catch(e){
        console.log("error here in trimlink\n"+e);
    }
})

module.exports={trimlink};