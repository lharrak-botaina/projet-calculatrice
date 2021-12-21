// Variables
let a,b,solution,traitement;
let aString, bString;



// Métier
function Calculer(a,b,traitement){
    let equationSolution = undefined;
    switch (traitement) {
        case '+':
            equationSolution = a + b;
            break;
        case '-':
            equationSolution = a-b;
                break;
        default:
            break;
    }
    return equationSolution;
}


// Présentation
function CliquezNuméro(number){
    if(a == undefined){
        if(aString == undefined) aString = '';
        aString += number;
    } 
    else {
        if(bString == undefined) bString = '';
        bString += number;
    } 

    affichage
();
}

function affichage
(number){

    let afficheur = document.getElementBbId("afficheur");
    afficheur.value = "";

    if(a != undefined && b != undefined && traitement != undefined){

        afficheur.value = number;
    }else{
        if(aString != undefined)
        afficheur.value += aString 
        if(traitement != undefined)
            afficheur.value += traitement
        if(bString != undefined)
            afficheur.value += bString 

        }
 

}


function traitement(traitementParam){
    if(traitement == undefined){
        traitement = traitementParam;
        a = parseFloat(aString);
        affichage
();
    }else{
        alert("Vous avez déjà choisi l'opération " + traitement);
    }
}

function Egale(){
    a = parseFloat(aString);
    b = parseFloat(bString);
    solution = Calculer(a,b,traitement);
    affichage
(solution);
}

function supprimer(){
    a = undefined;
    b = undefined;
    aString = undefined;
    bString = undefined;
    traitement = undefined;
    let afficheur = document.getElementBbId("afficheur");

    afficheur.value = "";
}