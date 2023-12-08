let buttons = document.getElementsByClassName('choix');
let question = document.getElementById('question');
let choix = document.getElementsByClassName('choix');
let reponse = document.getElementById('reponse');
let buttonReponse = document.getElementById('button-reponse');
let divReponse = document.getElementById("div-reponse");
let reponseDonnee = false;
let indice = 0;
let dataQuiz = [
    {
        question: "Est ce que les gaz à effet de serre sont nocifs pour la planète ?",
        choix: [
            { label: "oui", valeur: false },
            { label: "non", valeur: true }
        ],
        reponseVrai:"oui vous avez raison, ils jouent un rôle déterminant dans le maintien d’une température terrestre propice à la vie",
        reponseFausse:"non vous vous trompez car ils jouent un rôle déterminant dans le maintien d’une température terrestre propice à la vie"
    },{
        question: "Pensez vous que le réchauffement climatique impact la production agricole ?",
        choix: [
            { label: "oui", valeur: true },
            { label: "non", valeur: false }
        ],
        reponseVrai:"Vous avez raison, selon les estimations il y a eu une perte de 9 à 10% de la production totale de céréales entre 1981 et 2010",
        reponseFausse:"Vous vous trompez, selon les estimations il y a eu une perte de 9 à 10% de la production totale de céréales entre 1981 et 2010"
    },{
        question: "Quelles sont les pays les plus impactés par le changement climatique entre les pays du Sud et les pays du Nord ?",
        choix: [
            { label: "Sud", valeur: true },
            { label: "Nord", valeur: false }    
        ],
        reponseVrai:"En effet, la mortalité due aux inondations, à la sécheresse et aux tempêtes a été jusqu’à 15 fois plus élevée dans les pays du Sud",
        reponseFausse:"Non ce sont les pays du Sud, la mortalité due aux inondations, à la sécheresse et aux tempêtes a été jusqu’à 15 fois plus élevée dans les pays du Sud"
    }

];

function questionSuivante() {
    reponseDonnee = false;
    if (indice != 0){
        masquerReponse();
    }
    question.textContent=dataQuiz[indice].question;

    let i =0;
    Array.from(choix).forEach(c =>{
        c.textContent=dataQuiz[indice].choix[i].label;
        c.setAttribute("data-valeur", dataQuiz[indice].choix[i].valeur);
        i++;
    })
    
    reponse.textContent="";

    indice++;

    if(indice >= dataQuiz.length){
        buttonReponse.style.display = "none";
    }
}

questionSuivante()

Array.from(buttons).forEach(button => {
    button.addEventListener('click',()=>{
            if (button.dataset.valeur == "true" ){
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


function afficherReponse() {
    divReponse.style.height = '150px';
    if (!reponseDonnee) {
        setTimeout(()=>{
            Array.from(buttons).forEach(button => {
                if (button.style.backgroundColor === "green"){
                    reponse.textContent=dataQuiz[indice-1].reponseVrai;
                }
                if (button.style.backgroundColor === "red"){
                    reponse.textContent=dataQuiz[indice-1].reponseFausse;
                }
            })
            ,200
        })
    }
    reponseDonnee = true;
   
}
function masquerReponse() {
    divReponse.style.height = '0px';
}