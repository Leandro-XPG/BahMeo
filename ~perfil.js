const menu = document.querySelector(".abrir")
const menuMobile = document.querySelector (".menuMobile")
const fechar = document.querySelector(".fechar")


menu.addEventListener('click',()=>{
    menuMobile.classList.add("menu-aberto")
    
})

fechar.addEventListener('click',()=>{
    menuMobile.classList.remove("menu-aberto")
})
