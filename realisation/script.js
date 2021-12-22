// Variables
let a
let b
let aString
let bString;
let result;
let typeOperation;



// Enter a number
function OnClickNumber(number){
    if(a == undefined){
        if(aString == undefined) aString = '';
        aString += number;
    } 
    else {
        if(bString == undefined) bString = '';
        bString += number;
    } 

    display();
}


//afficher 
function display(number){

    let afficheur = document.getElementById("afficheur");
    afficheur.value = "";

    if(a != undefined && b != undefined && typeOperation != undefined){

        afficheur.value = number;
    }else{
        if(aString != undefined)
        afficheur.value += aString 
        if(typeOperation != undefined)
            afficheur.value += typeOperation
        if(bString != undefined)
            afficheur.value += bString 

        }
 

}


//operation 
 function Operation(operationParam){
    if(typeOperation == undefined){
        typeOperation = operationParam;
        a = parseFloat(aString);
        display();
    }else{
        alert("Vous avez déjà choisi l'opération " + typeOperation);
    }
}


// calculation
function Calculer(a,b,typeOperation){
    let _solution = undefined;
    switch (typeOperation) {
        case '+':
            _solution = a + b;
            break;
        case '-':
            _solution = a-b;
                break;
         case '*':
             _solution=a*b;
         break
         case '/':
             _solution=a/b;
         break
         
        default:
            break;
    }
    return _solution;
}








function Equal(){
    a = parseFloat(aString);
    b = parseFloat(bString);
    result = Calculer(a,b,typeOperation);
    display(result);
    
        
}
//remove all

function claire(){
    a = undefined;
    b = undefined;
    aString = undefined;
    bString = undefined;
    typeOperation = undefined;
    let afficheur = document.getElementById("afficheur");

    afficheur.value = "";
}