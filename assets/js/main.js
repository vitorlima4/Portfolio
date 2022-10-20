/**Variáveis */
const navMenu = document.getElementById('nav_menu'),
navClose = document.getElementById('nav_close'),
navToggle = document.getElementById('nav_toggle'), 
navLink = document.querySelectorAll('.nav_links[href^="#"]')


/**Menu */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show_menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show_menu')
    })
}

/**Remover Menu */
function linkAction(){
    navMenu.classList.remove('show_menu')
}

navLink.forEach(n => {
    n.addEventListener('click', linkAction)
})

/**Scrool Suave */
navLink.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 56;
    scrollToPosition(to);
}

function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: "smooth",
    })
}