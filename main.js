//RULES OF HANGMAN GAME

//1. Guess the hideen pokemon defined with underscores ("_").

// --> how to get hidden pokemon? 
//Define the hidden pokemons. (array) 
//Retreive Hidden pokemon from list. (function)

//2. From the keyboard, start clicking letters to see if they are in the hidden word.

//--> create a keyboard (buttons/div)
// Define each letter for each button/div
// --> create a function to check if after clicking button, letters contains the same letters within hidden pokemon (.indexOf) (if...else)
// --> If letter picked wrong, update wrong guess (disable button), if letter picked right update "pokemonName"


//3. check if game is won or lost after 6 turns
//--> function checkifgamewon / checkifgamelost
//reset function


let pokemon = [
    "MILOTIC",
    "TINKATON",
    // "VOLCARONA",
    // "GENGAR",
    // "AERODACTYL",
    // "CRADILY",
    // "WEEZING"
]

const letters = document.querySelectorAll("button");
let randomPokemon = [];
let answerPokemon = [];

let mistakes = 0;

randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
// document.getElementById("pokemonName").innerHTML = randomPokemon.replace(/[a-z]/gi, ' _ ');
let maxMistakes = (randomPokemon.length + 3);
console.log(maxMistakes)

for (let i = 0; i < randomPokemon.length; i++) {
    answerPokemon[i] = " _ ";
    
};

document.getElementById("pokemonName").innerHTML = answerPokemon;
console.log(answerPokemon);


// letters.forEach(letter => {
//     letter.addEventListener("click", () => {
//         letter = letter.innerHTML;
//         console.log(letter);
//         for (let j = 0; j < randomPokemon.length; j++) {
//         if(randomPokemon[j] === letter) {
//             answerPokemon[j] = letter;
//             console.log(answerPokemon);
//             document.getElementById("pokemonName").innerHTML = answerPokemon;
//             // randomPokemon.innerHTML = randomPokemon.replace(/[a-z]/gi, ' _ ');
//             // for ( i = 0; i < randomPokemon.length; i++) {}
            
//         } else {
//             console.log("false");
//             mistakes ++;
            
//             console.log(mistakes);
//             if (mistakes === maxMistakes) {
//                 document.getElementById("pokemonName").innerHTML = "The answer was: " + randomPokemon;
//                 document.getElementById("gameStatus").innerHTML = "You Lost!";
//               }
//         }}}
// )})


letters.forEach(letter => {
    letter.addEventListener("click", () => {
        letter = letter.innerHTML;
        console.log(letter);
        console.log(maxMistakes);
        for (let j = 0; j < randomPokemon.length; j++) {
            if(randomPokemon[j] === letter) {
                answerPokemon[j] = letter;
                console.log(answerPokemon);
                document.getElementById("pokemonName").innerHTML = answerPokemon;
                console.log(randomPokemon)
                let x = answerPokemon.join('');
                console.log(x)
                if (x === randomPokemon) {
                    document.getElementById("gameStatus").innerHTML = 'You Won!!!';
                   }
                   

            }
          
            
        }
       

    })
    
})

           
    if (maxMistakes === 0) {
        document.getElementById("pokemonName").innerHTML = "The answer was: " + randomPokemon;
        document.getElementById("gameStatus").innerHTML = "You Lost!";
      }
    





// function checkIfGameWon() {
//     if (guessedPokemon === correctPokemon) {
//       document.getElementById("gameStatus").innerHTML = 'You Won!!!';
//     }
//   }
  


//   function checkIfGameLost() {
//     if (mistakes === maxMistakes) {
//       document.getElementById("pokemonName").innerHTML = "The answer was: " + randomPokemon;
//       document.getElementById("gameStatus").innerHTML = "You Lost!";
//     }
//   }



// function restart() {
//     restartButton.addEventListener("click", restart);
//     mistakes = 0;
//     guessedPokemon = [];
    
//   }

// getPokemon();  
// checkIfGameLost();