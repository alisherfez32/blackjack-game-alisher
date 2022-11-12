// let firstCard = getRandomCard() //11 
// let secondCard = getRandomCard() // 10
// // Array 
// let cards = [firstCard, secondCard] /* array - ordered list of items*/


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false // true 
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// Let's use query selectors to grab the element
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


// let playerName = "Alisher" Use it on object
// let playerChips = 145

let player = { //Object
    name: "Alisher",
    chips: 145
    // sayHello: function() {
    //     console.log("Heisann")
    // }
}

// player.sayHello() //invoking 

// 3. Grab ahold of the player-el paragraph and store it in a variable called playerEl
let playerEl = document.getElementById("player-el")
// Render the player's name and chips in playerEl
playerEl.textContent = player.name + ": $" + player.chips

console.log(cards)



function getRandomCard() { // its called function declaration. Its hoisted 
    let randomNumber = Math.floor( Math.random() * 13 ) + 1 //0.000 - 12.999 | 0 - 12

    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    // render out firstCard and secondCard
    // cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;

    // render out ALL the cards we have
    // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];

     // Create a for loop that renders out all the cards instead of just two
     cardsEl.textContent = "Cards: "

     for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
     }
    sumEl.textContent = "Sum: " + sum
if (sum <= 20 /*false*/) {
    // console.log("Do you want to draw a new card?🙂")
    // instead 
    message = "Do you want to draw a new card?"
} else if (sum === 21 /*true*/) {
    // console.log("Whohooo! You've got Blackjack!🥳")
    // instead 
    message = "Whohooo! You've got Blackjack!"
    hasBlackJack = true 
} else /*if (sum > 21)*/ {
    // console.log("You're out of the game!😭")
    // instead 
    message = "You're out of the game!"
    isAlive = false
}

messageEl.textContent = message

// console.log(message)
}

function newCard() {
    if (isAlive === true && hasBlackJack === false ) {
            // console.log("Drawing")
        let card = getRandomCard() // 5 
        sum += card
        // Push the card to the cards array
        cards.push(card)
        console.log(cards)
        renderGame() 
    }
}


//  Cash out 
// console.log(hasBlackJack)







// Test 

// let age = 22 
//  can not enter the club!")
// } else (age = > 21) 
// if (age < 21) {
//     console.log("You{
//     console.log("Welcome to the club!")
//     // This is more correct, because any number
//     // rather than less than 21 would be correct
//     else {
//         console.log("Welcome!")
//     }
// }


//  Ecample 2 
// let age = 100 

// if (age < 100) {
//     console.log("Not Eligible yet")
// } else if (age === 100) {
//     console.log("Here's your card form the King!")
// } else {
//     console.log("You've already gotten your card!")
// }


// ======================================
// Loops

// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
// for ( let count = 1;  count < 11;  count += 1 )  {
    
//     console.log(count)

// }


// for (let count = 1; count <21; count += 1)

// for (let count = 10; count <21; count += 1)
// // i = count 
// for (let i = 0; i < 6; i += 1)

// for (let i = 10; count < 101; count += 10) {
//     console.log()
// }


// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!"
// ]
// // Bad way of doing it DRY - dont repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

// // Instead 

// for (let i = 0; i < 5; i += 1) {
//     console.log(messages[i])
// }

// // What if we get a new message. here is 
// // the solution that is scalable 
// for (let i = 0; i < message.length; i += 1) {
//     console.log(messages[i])
// }
