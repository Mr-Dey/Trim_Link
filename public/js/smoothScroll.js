let smooth=document.querySelectorAll(".smooth")

//The main Function to show smooth blur transition
const observer=new IntersectionObserver((elemet)=>{
    elemet.forEach((e)=>{
        e.isIntersecting?e.target.classList.add('show'):e.target.classList.remove('show');
    })
})

smooth.forEach((e)=>observer.observe(e));