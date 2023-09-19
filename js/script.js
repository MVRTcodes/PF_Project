window.onscroll = function(){
    
    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");

    if (scroll > 15){
        header.classList.add('sec_h_mod');
    }else{
        header.classList.remove('sec_h_mod');
    };

}

document.getElementById("btnmenu").addEventListener("click", mostrar_respmenu);

menu = document.getElementById("header");
body = document.getElementById("secall");
nav = document.getElementById("nav");

function mostrar_respmenu(){

    menu.classList.toggle('move_content');
    body.classList.toggle('move_content');
    nav.classList.toggle('move_nav');

}

window.addEventListener("resize", function(){
    if(window.innerWidth > 760){
        menu.classList.remove('move_content');
        body.classList.remove('move_content');
        nav.classList.remove('move_nav');
    }
})