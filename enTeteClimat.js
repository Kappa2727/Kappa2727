let buttons = document.getElementsByClassName('choix');
let question = document.getElementById('question');
let choix = document.getElementsByClassName('choix');
let reponse = document.getElementById('reponse');
let indice = 0;
let data = [
    {
        question: "Est-ce que...",
        choix: [
            { label: "1ère choix", valeur: false },
            { label: "2ème choix", valeur: true }
        ],
        reponse:"ici la reponse"
    },

];

function questionSuivante() {

    question.textContent=data[indice].question;

    let i =0;
    Array.from(choix).forEach(c =>{
        c.textContent=data[indice].choix[i].label;
        i++;
    })
    reponse.textContent=data[indice].reponse;
}

questionSuivante()










Array.from(buttons).forEach(button => {
    button.addEventListener('click',()=>{
            if (button.dataset.valeur == "true"){
                button.style.backgroundColor = "green";
            }
            else{
                button.style.backgroundColor = "red";
            }
            setTimeout(()=>{
                button.style.backgroundColor = "";
            }, 1000);
        }
    )});


function changerTaille() {
    // Accéder au paragraphe par son ID
    var paragraphe = document.getElementById("reponse");

    // Changer la hauteur du paragraphe (par exemple, doubler la hauteur actuelle)
    paragraphe.style.height = '5vh';

}