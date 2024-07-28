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
})


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
