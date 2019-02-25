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

// faire disparaitre la bootstrap 
let linkRel = document.getElementsByTagName('link')[0];
let navBarHeader = document.getElementsByClassName('navbar navbar-dark bg-dark box-shadow')[0];
let nuclearStatus = false 
function nuclearToggle() {
  if(nuclearStatus == false) {
    console.log('wtf');
    linkRel.remove();
    nuclearStatus = true;
  } else if (nuclearStatus == true) {
    var head = document.head;
    var link = document.createElement("link");
  
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  
    head.appendChild(link);
  }
}

navBarHeader.ondblclick = nuclearToggle;

//fonction 6 hover de chez hover

let viewBtn = document.querySelectorAll('.btn-success');
let viewBtnStatus = false;

function viewToggle(j) {
  let textCard = document.querySelectorAll('.card-text');
  let imageCard = document.querySelectorAll('.card-img-top');

  if(viewBtnStatus == false) {
    textCard[j].style.visibility = 'hidden';
    imageCard[j].style.width = '20%';
    imageCard[j].style.height = 'auto';
    viewBtnStatus = true;
  } else if(viewBtnStatus == true) {
    console.log('ok');
    textCard[j].style.visibility = 'visible';
    imageCard[j].style.width = '100%';
    imageCard[j].style.height = 'auto';
    viewBtnStatus = false;
  };
};

for (let j = 0; j < viewBtn.length; j++) {
  let button = viewBtn[j];
  button.addEventListener('mouseover', function() {
    viewToggle(j);
  });
}
