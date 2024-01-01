const header =document.querySelector("header");

window.addEventListener("scroll" ,function(){
    header.classList.toggle("sticky",window.scrollY>0);
});  

let menu =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll =() =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const sr =ScrollReveal({
    distance:'25px',
    duration:2500,
    reset:true
})

sr.reveal('.home-text' ,{delay:190, origin:'bottom'})
sr.reveal('.about,.services, .portfolio,.contact' ,{delay:190, origin:'bottom'})

//toggle mode
const toggleSwitch = document.getElementById('mode-toggle');

function switchTheme(e) {
  if (e.target.checked) {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);