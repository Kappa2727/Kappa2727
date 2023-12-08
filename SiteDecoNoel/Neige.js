var lesFlocon = [];
var gravite = 0.1;  // Ajout de la gravité
var friction = 0.99;  // Ajout de la friction

function ilNeige(){
    for(let i=0;i<lesFlocon.length;i++){
        // Appliquer la gravité
        lesFlocon[i].vy += gravite;

        // Appliquer la friction
        lesFlocon[i].vy *= friction;

        // Mettre à jour la position en fonction de la vélocité
        lesFlocon[i].style.top = (parseInt(lesFlocon[i].style.top) + lesFlocon[i].vy) + "px";


        if(parseInt(lesFlocon[i].style.top) < screen.height){
            lesFlocon[i].style.top = (parseInt(lesFlocon[i].style.top)+1)+"px"
        }
        if(parseInt(lesFlocon[i].style.left) > window.innerWidth){
            lesFlocon[i].remove()
        }
        if(parseInt(lesFlocon[i].style.top) > document.getElementById("content").clientHeight-15){
            lesFlocon[i].remove()
            lesFlocon.splice(i,1)
        }
    }
}

function creationFlocon(){
    let elt = document.createElement("div");
    elt.className="flocon";
    let taille = Math.random()*15;
    while(taille<5){
        taille = Math.random()*15;
    }
    let position = getRandomInt(window.innerWidth-100)
    elt.style.width = taille+"px"
    elt.style.height = taille+"px"
    elt.style.top="-15px"
    elt.style.top="-15px"
    elt.style.left = (50+position)+"px";

    // Ajout de la vélocité initiale aléatoire
    elt.vy = Math.random() * 2 + 1;

    document.body.appendChild(elt)
    lesFlocon.push(elt)
    return elt
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var divFlocon = document.createElement("div")
divFlocon.className="divFlocon"
divFlocon.id = "divFlocon"
divFlocon.overflow="hidden"
document.body.appendChild(divFlocon)

window.setInterval(creationFlocon, 100);
window.setInterval(ilNeige, 25);

var candy = document.createElement("div")
candy.id = "candy";
candy.className="candy"
candy.innerHTML="<img src='./images/candy2.png' style='max-height:50px;position: absolute'>"
candy.style.top=getRandomInt(document.getElementById("content").clientHeight)+"px"
candy.style.left=getRandomInt(document.getElementById("content").clientWidth-20)+"px"
document.body.appendChild(candy)

candy.addEventListener("mouseenter", (event) => {
    console.log("ENTRER"+" - "+candy.top+" - "+candy.left)
    candy.style.top=getRandomInt(document.getElementById("content").clientHeight)+"px"
    candy.style.left=getRandomInt(document.getElementById("content").clientWidth-20)+"px"
});


