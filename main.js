
let bod=document.body;
let nav=document.querySelector('nav');
let changedText=document.querySelectorAll('.change-text');
let contactDiv=document.querySelector('.contact-div');
let toggleIcon=document.querySelector('#toggle');
let modeDesc=document.querySelector('.mode-desc');
let blackedText=document.getElementById('blacked-text')


function darkMode(){
    nav.classList.toggle("navbar-dark")
    nav.classList.toggle("bg-dark")

    blackedText.classList.toggle('font-white')
   for(let elem of changedText ){
    elem.classList.toggle("font-color-purple")

   }
   contactDiv.classList.toggle("white-mode")
bod.classList.toggle("dark-mode");
toggleIcon.classList.toggle('fa-toggle-on')
if(toggleIcon.classList.contains('fa-toggle-on')){
    modeDesc.innerHTML='<i class="fas fa-moon fa-lg"></i>'
}else{
    modeDesc.innerHTML='<i class="fas fa-sun fa-lg"></i>'
}

}