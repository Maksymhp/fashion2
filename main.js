const menuBtn = document.querySelector ('.burger__btn');
const  menu = document.querySelector ('.nav__items');


menuBtn.addEventListener ('click' , () => {
    menu.classList.toggle('nav__items--active');
});

const anchors = document.querySelectorAll ('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click",function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector(''+ blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

$(document).ready(function() {
	$('#pagepiling').pagepiling();
});