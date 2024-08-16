const menu=document.querySelector('.mobile')
const navMenu=document.querySelector('.nav_menu')

const mobileMenu=()=>{
    menu.classList.toggle('active')
    navMenu.classList.toggle('active')
}

const closeMenu=()=>{
    navMenu.classList.toggle('active')
}

