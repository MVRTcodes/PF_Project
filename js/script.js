

window.onscroll = function(){
    
    scroll = document.documentElement.scrollTop;

    header = document.getElementById("header");
    logo = document.getElementById("logoimg");
    textnav = document.getElementById("sechnavtext");

    if (scroll > 15){
        header.classList.add('sec_h_mod');
        logo.classList.remove('sec_h_logo_mod');
        textnav.classList.add('sec_h_nav_text_mod');
    }else{
        header.classList.remove('sec_h_mod');
        logo.classList.add('sec_h_logo_mod');
        textnav.classList.remove('sec_h_nav_text_mod');
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
/*
window.addEventListener("click", function(){
    header = document.getElementById("header");
    body = document.getElementById("secall");

    header.classList.toggle("header_mod");
    body.classList.toggle("sec_all_mod");
})*/