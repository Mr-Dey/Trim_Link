//Logout
const logout = document.querySelector('#LogOut');
logout.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="/";
})

//for scroll
const navToGenerate = document.querySelector('#nav_generate');
const navToDashboard = document.querySelector('#nav_dashboard');
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
scroll=(element,offset)=>{
    window.scrollTo({
        top:element.offsetTop-offset,
        behavior:"smooth"
    })
}
navToGenerate.addEventListener('click',()=>scroll(section1,200))
navToDashboard.addEventListener('click',()=>scroll(section2,100))




//This is the function to copy the url of individual table
let copyBtns=document.querySelectorAll('.copybtn')
copyBtns.forEach((btn)=>{
    let data=btn.querySelector(".copybtn_span");
    btn.addEventListener('click',()=>{
        let url=data.textContent.trim();
        let text=document.createElement('textarea');
        text.value=url;
        document.body.appendChild(text);
        text.select()
        try{
            document.execCommand('copy');
        }catch(e){
            console.log(e);
        }
        document.removeChild=text

        btn.textContent="Copied";
    })
})
