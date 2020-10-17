let links = [...document.querySelectorAll(".menu-link")];
let hoverEffectSpan = document.querySelector(".hover-effect");
let menuBtn = document.querySelector(".hamburger-menu");
let firstSpan = document.querySelector(".first");
let secondSpan = document.querySelector(".second");
let thirdSpan = document.querySelector(".third");
let mobileMenu = document.querySelector(".menu");
//////////////////////////////////////////////////// HOVER ON LINK EFFECT FUNCTION //////////////////////////////////////////////


let hoverOnLinkEffect = function() 
{
    links.forEach(link => {
        link.addEventListener("mouseover", function() 
        {
            let x = link.offsetLeft;
            let w = link.clientWidth;
            hoverEffectSpan.style.left = x +"px";
            hoverEffectSpan.style.width = w + "px";
            hoverEffectSpan.style.opacity = "1"
        });

        link.addEventListener("mouseout", function() 
        {
            hoverEffectSpan.style.opacity = "0"
        });
    });
}

let menuClicked = function() 
{
    firstSpan.classList.toggle("hamburger-span-first-clicked");
    secondSpan.classList.toggle("hamburger-span-second-clicked");
    thirdSpan.classList.toggle("hamburger-span-third-clicked");
    mobileMenu.classList.toggle("menu-clicked");
}






    hoverOnLinkEffect();
    menuBtn.addEventListener("click", menuClicked);


