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

/** Troca de Tema */
const themeButton = document.getElementById('btn_theme')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})