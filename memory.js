const cards= document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false

//
function flipcard(){
    if(this === flipcard) return;
    if(lockBoard)
        return;
    
    this.classList.add("flip");
    if(hasFlippedCard){
        hasFlippedCard=true;
        firstCard =this;
        return;
    }

    secondCard=this;
    hasFlippedCard=false;
    checkForMath();
}
	//quando as duas cartas iguais forem viradas, elas ficam desviradas.
function checkForMath(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards(); 
        return;
        
    } 
    unflipCard();
   
}
//duas cartas iguais viradas, o evento click com  flipcard é desativado
function  disableCards(){
    firstCard.removeEventListener('Click' , flipcard);
    secondCard.removeEventListener('Click' , flipcard);
}

function unflipCard(){
    lockBoard=true;

    //quando duas cartas foram escolhidas é preciso esperar um tempo para escolhar outras.(evita 'filar' as outras)
   setTimeout( ()=>{
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

        lockBoard= false;
   }, 1500);
}

//quando o jogo é reiniciado(f5), as cartas não voltam no mesmo lugar(são embaralhadas)
function resetBoard(){
    [hasFlippedCard ,lockBoard] =[false , false];
    [firstCard , secondCard]=[null , null]
}

//percorre toda a lista e add um evento click fazendo um flipcard
cards.forEach(card =>
    card.addEventListener('Click' , flipcard));