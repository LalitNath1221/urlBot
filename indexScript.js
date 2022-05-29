let html = document.getElementsByTagName("html");
let body = document.getElementsByTagName("body");
let mode_toggler = document.getElementById("btn_mode_switcher");
mode_toggler.onclick=()=>{
    document.getElementById("toggle_mode_light").classList.toggle('active');
    if(body[0].classList[0]=='mode-dark'){
        body[0].classList.replace('mode-dark','mode-light');
    }else{
        body[0].classList.replace('mode-light','mode-dark');
    }
};

let btn = document.getElementById('menuBtn')
btn.addEventListener('click', togleMenu);
function togleMenu(){
    //btn.classList.toggle('activeMenuBtn');
    document.getElementById('navMenuContainer').classList.toggle('activenav');
}
let menuLinks = document.getElementsByClassName("nav-links");
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', togleMenu);
}
