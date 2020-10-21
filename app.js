let links = [...document.querySelectorAll(".menu-link")];
let hoverEffectSpan = document.querySelector(".hover-effect");
let menuBtn = document.querySelector(".hamburger-menu");
let firstSpan = document.querySelector(".first");
let secondSpan = document.querySelector(".second");
let thirdSpan = document.querySelector(".third");
let mobileMenu = document.querySelector(".menu");


let products = [...document.querySelectorAll(".product")];

let allCategory = document.querySelector(".all-category");
let cosmeticsCategory = document.querySelector(".cosmetics-category");
let foodCategory = document.querySelector(".food-category");
let dairyCategory = document.querySelector(".dairy-category");
let houseCategory = document.querySelector(".house-category");
let petCategory = document.querySelector(".pet-category");
let cleaningCategory = document.querySelector(".cleaning-category");

let categories = [allCategory, cosmeticsCategory, foodCategory, dairyCategory, houseCategory, petCategory, cleaningCategory];

let searchBtn = document.querySelector(".search-btn");

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


let sortByCategory = function(cat) 
{
    
    for(let i=0; i<products.length; i++)
    {
        let category = products[i].getAttribute("data-category");
        if(category != cat)
        {
            products[i].style.display="none";
        }
        else 
        {
            products[i].style.display="flex";
        }
    }

}

let search = function()
{
    let search_text = document.querySelector(".search-input").value;

    let products_names = [...document.querySelectorAll(".product-name")];

    for(let i=0; i<products_names.length; i++)
    {
        let prodname = products_names[i].textContent;
        if(search_text == prodname)
        {
            products[i].style.display="flex";
        }
        else{
            products[i].style.display="none";
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
    allCategory.addEventListener("click",function()
    {
    for(let i=0; i<products.length; i++)
    {
            products[i].style.display="flex";

    }
    for(let i=0; i<categories.length; i++)
    {
            categories[i].classList.remove("categoryClicked");

    }
    allCategory.classList.add("categoryClicked");
    });

    cosmeticsCategory.addEventListener("click",function()
    {
        sortByCategory("cosmetics");
        for(let i=0; i<categories.length; i++)
    {
            categories[i].classList.remove("categoryClicked");

    }
        cosmeticsCategory.classList.add("categoryClicked");
    });

    foodCategory.addEventListener("click",function()
    {
        sortByCategory("food");
        for(let i=0; i<categories.length; i++)
    {
            categories[i].classList.remove("categoryClicked");

    }
        foodCategory.classList.add("categoryClicked");
    });

    dairyCategory.addEventListener("click",function()
    {
        sortByCategory("dairy");
        for(let i=0; i<categories.length; i++)
    {
            categories[i].classList.remove("categoryClicked");

    }
        dairyCategory.classList.add("categoryClicked");
    });

    houseCategory.addEventListener("click",function()
    {
        sortByCategory("house");
        for(let i=0; i<categories.length; i++)
    {
            categories[i].classList.remove("categoryClicked");

    }
        houseCategory.classList.add("categoryClicked");
    });

    petCategory.addEventListener("click",function()
    {
        sortByCategory("pet");
        for(let i=0; i<categories.length; i++)
    {
            categories[i].classList.remove("categoryClicked");

    }
        petCategory.classList.add("categoryClicked");
    });

    cleaningCategory.addEventListener("click",function()
    {
        sortByCategory("cleaning");
        for(let i=0; i<categories.length; i++)
    {
            categories[i].classList.remove("categoryClicked");

    }
        cleaningCategory.classList.add("categoryClicked");
    });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    hoverOnLinkEffect();
    menuBtn.addEventListener("click", menuClicked);
    searchBtn.addEventListener("click", search);
   

