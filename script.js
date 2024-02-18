const ToggleBtn=document.querySelector(".dropdown_menu");
const links=document.querySelectorAll(".After_3Bars_click ul a");
const TogglelistS=document.querySelector(".After_3Bars_click");
const CloseBtn=document.querySelector(".Xbutton");
ToggleBtn.addEventListener("click",()=>{
    TogglelistS.classList.toggle('on');
    CloseBtn.classList.toggle('on');
   
    
    
})
CloseBtn.addEventListener("click",()=>{
    TogglelistS.classList.remove('on');
    CloseBtn.classList.remove('on');
})

links.forEach(link=>{
    link.addEventListener("click",()=>{
        TogglelistS.classList.remove('on');
        CloseBtn.classList.remove('on');
        
    })
})