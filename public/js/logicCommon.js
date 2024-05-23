//Logout
const logout = document.querySelector('#LogOut');
logout.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="/logout";
})
//Dashboard
const navToDashboard = document.querySelector('#nav_dashboard');
navToDashboard.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="/dashboard";
})

