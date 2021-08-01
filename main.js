
let bod=document.body;
let nav=document.querySelector('nav');
let changedText=document.querySelectorAll('.change-text');
let contactDiv=document.querySelector('.contact-div');
let toggleIcon=document.querySelector('#toggle');
let modeDesc=document.querySelector('.mode-desc')

function darkMode(){
    nav.classList.toggle("navbar-dark")
    nav.classList.toggle("bg-dark")
   for(let elem of changedText ){
    elem.classList.toggle("font-color-purple")

   }
   contactDiv.classList.toggle("white-mode")
bod.classList.toggle("dark-mode");
toggleIcon.classList.toggle('fa-toggle-on')
if(toggleIcon.classList.contains('fa-toggle-on')){
    modeDesc.textContent='dark'
}else{
    modeDesc.textContent='Light'
}

}