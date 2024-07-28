const MenuIcon = document.getElementById('toggle')
const slideMenu = document.getElementById('slideMenu')
let x = false

document.addEventListener('DOMContentLoaded', ()=> {
    togglepop = () =>{
        if (!x){
            slideMenu.style.display = 'block'
            x = true
        }else{
            slideMenu.style.display = 'none'
            x = false
        }
    }

    MenuIcon.addEventListener('click', togglepop)
    // closepop.addEventListener('click', togglepop)
})


/*
const btn = document.getElementById("btn")
const menu = document.getElementById("pop")
const closepop = document.getElementById("del")
let x = false


document.addEventListener('DOMContentLoaded', ()=> {
    togglepop = () =>{
        if (!x){
            menu.style.display = 'block'
            x = true
        }else{
            menu.style.display = 'none'
            x = false
        }
    }

    btn.addEventListener('click', togglepop)
    closepop.addEventListener('click', togglepop)
})
 */

function makeActive(linkClass, activelink){
    const currentpage = window.location.pathname.split('/').pop()
    const navLinks = document.querySelectorAll(linkClass)

    console.log(currentpage)

    navLinks.forEach(link =>{
        const linkName = link.getAttribute('href')
        if(linkName === currentpage){
            link.classList.add(activelink)
        }else{
            link.classList.remove(activelink)
        }
    } )
}

window.onload = function(){
    makeActive('.nav-link', 'active')
}


/*

function setActiveLink(linkClass, activeClass){
    const currentPath = window.location.pathname.split('/').pop()
    const Nav_Link = document.querySelectorAll('.' + linkClass)
    
    Nav_Link.forEach(link => {
        const linkName = link.getAttribute('href')
        if (linkName === currentPath) {
            link.classList.add(activeClass)
        }else{
            link.classList.remove(activeClass)
        }
    })
}


window.onload = function(){
    setActiveLink('nav-link', 'active')
}
 */