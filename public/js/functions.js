const home_nav = document.querySelector('#home')
const contact_nav = document.querySelector('#contactUs')

home_nav.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="/";
})

contact_nav.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="";

})