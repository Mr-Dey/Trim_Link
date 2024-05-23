const express=require('express'); 
const urlGenerate=express.Router();
const dashboard=express.Router()
const URL=require('../model/urlSchema');
const userSchema=require('../model/usersSchema');
const generateIDfunc=require('../controllers/generateID');


//from root directory .env
const host=process.env.HOST;

urlGenerate.post ('/',async(req,res)=>{
   try{
      let shortId=generateIDfunc(8);
      const {url,urlName}=req.body;
      const user=await userSchema.findOne({name:req.session.userName});
       if(user){
           if(user.urlSchema && user.urlSchema.length>0){
               
               // checking if any shortid similar to unique id
               let exists = user.urlSchema.some(url => url.shortId===shortId); 


               // i can limit the loop and throw an error after maximum try.
               while(exists){
                   console.log('similar id generated. Trying again');
                   shortId=generateIDfunc(8);
   
                   //check again
                   exists = user.urlSchema.some(url => url.shortId===shortId); 
               }
               console.log('UniqeID generated '+shortId);
            }
            const trimLink=`${host}trimlink/${user.name}/${shortId}`;
            console.log('TrimLink generated'+trimLink);
   
            //creting an urlSchema
            let urlSchema=await new URL({
               userName:user.name,
               shortId:shortId,
               redirectURL:url,
               redirectURLName:urlName,
               trimlinkURL:trimLink,
               analytics:[]
            })
   
            try{
               //saving the url Schema is optional (IF its not using for Referance.)
               await urlSchema.save();
         
               //pushing urlSchema inside user.urlSchema array
               let result = await userSchema.updateOne({name:user.name},{
                  $push:{

                     //either i can Push the whole urlSChema or just the reference id urlSchema._id. 
                     //to store id i may need to change the type of storing data in userSchema to ObjectId.

                     urlSchema:urlSchema
                  }
               })
            }catch(e){
               console.log("error occured in urlGenerate route!\n"+e);
            }
         
            res.redirect('/dashboard');
       }
   }catch(e){
      console.log('error occured in urlGenerate route!\n '+e);
   }
})



dashboard.get('/',async(req,res)=>{
   if(!req.session.userName){
      res.redirect('/');
   }else{
      let userName=req.session.userName;

      let user=await userSchema.findOne({name:userName});

      let userData=await user.urlSchema;

      //userName in dashboard to show the name on top left and userData to load the Urls list.
      res.render('dashboard',{userName:userName,userData:userData});
   }
})



module.exports={
   urlGenerate,
   dashboard
};