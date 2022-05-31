let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let player = {
    name: "Justine",
    chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let randomNumber =  Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10){
        return 10;
    } else if (randomNumber === 1){
        return 11;
    } else {
        return randomNumber;
    }
}


function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();

}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "sum: " + sum;
    if (sum <= 20){
        message = "Do you want a new card?";
        messageEl.textContent = message;
    } else if (sum === 21) {
        message = "WooHoo!! You've got a blackJack";
        messageEl.textContent = message;
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        messageEl.textContent = message;
        isAlive = false;
    }
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
}   }
