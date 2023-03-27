const nav = document.querySelector("nav");
let posY = window.scrollY;

window.addEventListener('scroll', (e) => {
    if(window.scrollY > posY)
    {
        nav.style.top = "-60px";
    }
    else{
        nav.style.top = "0px";
    }
    posY = window.scrollY;
});