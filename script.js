let footer = document.querySelector("footer")
let click = 0;
footer.addEventListener("click",function()  {
        click += 1;
    console.log("click "+ click)
})

let btn = document.querySelector('body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > button > span')// je ramene le hamburger avec le js path que je nome btn
let nav = document.querySelector('#navbarHeader') // ici je ramene toute la navbar avec le js path que je nome nav
btn.addEventListener("click", function(){ // la je lance ma logique avec addEventListener qui dis que ca agira sur un click
nav.classList.toggle("collapse") // et ici je lance ma fonction sur la nav avec toggle qui agira sur la classe collapse toggle est une option qui permet d'ajouter ou naon une classe

})

// card 1
let edit = document.querySelector('body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary')
let texte = document.querySelector('body > main > div > div > div > div:nth-child(1) > div > div > p')
edit.addEventListener("click",cardColor);
function cardColor() {
    texte.style ="color: red" 
}

//card 2
let edit2 = document.querySelector('body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary')
let texte2 = document.querySelector('body > main > div > div > div > div:nth-child(2) > div > div > p')
edit2.addEventListener("click",greenColor);
function greenColor() {
    texte2.classList.toggle("text-success")
}







    
    