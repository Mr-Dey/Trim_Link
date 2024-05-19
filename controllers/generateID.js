const urlSchema=require('../model/urlSchema'); //if randomID not in urlSchema.shortID => ok


//It will generate an shortID and check whether its not in DB.
const generateID=async(length)=>{
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = lowerCase.toUpperCase();
    const numbers = '0123456789';
    const specialChars = "_-";
    let id='';
    const all=lowerCase+upperCase+numbers+specialChars;
    for(let i=0; i<length; i++){
        let index=Math.floor(Math.random()*all.length)
        id+=all[index];
    }
    const exists=await urlSchema.findOne({shortId:id});
    if(!exists){
        return id;
    }else{
        return generateID(length);
    }
        
}
module.exports ={generateID};