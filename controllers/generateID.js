const generateID=(length)=>{
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
    return id;
}
module.exports =generateID;