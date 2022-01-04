// Présentation
let aString, bString;
let calculatrice = new CalculatriceBLO();

function ClickNumber(number){
    if(calculatrice.a == undefined){
        if(aString == undefined) aString = '';
        aString += number;
    } 
    else {
        if(bString == undefined) bString = '';
        bString += number;
    } 
    Afficher();
}

function Afficher(number){

    let afficheur = document.getElementById("afficheur");
    afficheur.value = "";
    
    if(calculatrice.a != undefined && calculatrice.b != undefined && calculatrice.typeOperation != undefined){

        afficheur.value = number;
    }else{
        if(aString != undefined)
        afficheur.value += aString 
        if(calculatrice.typeOperation != undefined)
            afficheur.value += calculatrice.typeOperation     
        if(bString != undefined)
            afficheur.value += bString 

        }
 
   
}

function Operation(operationParam){
    if(calculatrice.typeOperation == undefined){
        calculatrice.typeOperation = operationParam;
        calculatrice.a = parseFloat(aString);
        Afficher();
    }else{
        alert("Vous avez déjà choisi l'opération " + calculatrice.typeOperation);
    }
}





function Egale(){
    calculatrice.a = parseFloat(aString);
    calculatrice.b = parseFloat(bString);
    calculatrice.Calculer();
    Afficher(calculatrice.result);
}

function Init(){
    calculatrice.Init();
    aString = undefined;
    bString = undefined;
    let afficheur = document.getElementById("afficheur");
    afficheur.value = "";
}