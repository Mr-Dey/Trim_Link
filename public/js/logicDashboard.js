const logout = document.querySelector('#LogOut');

logout.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="/";
})


let cobyBtns=document.querySelectorAll('.copybtn')


//This is the button inside the table row tp copy the url
cobyBtns.forEach((btn)=>{
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