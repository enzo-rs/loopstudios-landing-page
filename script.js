
const icon_burger = document.querySelector('.hero img[alt="burger_menu"]');
const menu = document.querySelector('.menu');


let count = 0;
icon_burger.addEventListener('click',() => {
    count++; 
    menu.classList.toggle('show');
    if (count%2 === 0) {
        icon_burger.setAttribute("src", "images/icon-hamburger.svg");
        document.body.style.overflow = "visible";
    }
    else {
        icon_burger.setAttribute("src", "images/icon-close.svg");
        document.body.style.overflow = "hidden";
    }
 
    
    console.log(count);
} )