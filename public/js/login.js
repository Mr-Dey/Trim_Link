const signup_btn=document.querySelector("#signup_btn")
const form= document.querySelector("#login_form")
const inputs=document.querySelectorAll('.input');

    signup_btn.addEventListener('click',(e)=>{
        inputs.forEach((e)=>e.required=false);
        form.action="/signup";
        form.method='GET';
    })
