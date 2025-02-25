const menu = document.querySelector(".abrir")
const menuMobile = document.querySelector (".menuMobile")
const fechar = document.querySelector(".fechar")


menu.addEventListener('click',()=>{
    menuMobile.classList.add("menu-aberto")
    
})

fechar.addEventListener('click',()=>{
    menuMobile.classList.remove("menu-aberto")
})




///ADD JOGOS

const add = document.querySelector(".card-game")
const games = document.querySelector(".games")




    add.addEventListener("click",()=>{
        const newGameCard = document.createElement("div")
        newGameCard.classList.add("game-card")


        games.appendChild(newGameCard)
    })




    