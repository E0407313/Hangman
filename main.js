const pokemon = [
    "MILOTIC",
    // "TINKATON",
    // "VOLCARONA",
    // "GENGAR",
    // "AERODACTYL",
    // "CRADILY",
    // "WEEZING"
]

const letters = document.querySelectorAll("button");

let randomPokemon = [];
let answerPokemon = [];
let mistakes = null;

function pokemonToGuess() {
randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
//get a random pokemon out of the array of pokemons

for (let i = 0; i < randomPokemon.length; i++) {
    answerPokemon[i] = " _ ";
    
};
document.getElementById("pokemonName").innerHTML = answerPokemon;
console.log(answerPokemon);
//set the indexes of the answer to be "_"
}

// function getLetter() {
letters.forEach(letter => {
    letter.addEventListener("click", () => {
        console.log(letter)
        console.log(letter.innerHTML)
        letter = letter.innerHTML;
        
//set the text of the button clicked to its respective letter        
        // disable(letter);

            for (let j = 0; j < randomPokemon.length; j++) {
            if(randomPokemon[j] === letter) {
                answerPokemon[j] = letter;
                console.log(answerPokemon);
                document.getElementById("pokemonName").innerHTML = answerPokemon;
                console.log(randomPokemon)
                                                     
            } 
            
        }
        checkWin();
        checkLoose(letter);
        
    })
    
})
// }


function initialize() {
pokemonToGuess();

}

//to disable the button on click, I need eventlistener to select it 
// function disable(letter) {
//     let buttons = document.getElementsByClassName('button');
//     for(let a = 0; a < buttons.length; a++){
//         if(randomPokemon[a] === letter) {
//             buttons[a].disabled = true;
//             return;
//        }
//     }    
// }


function checkLoose (letter) {
    for (let k = 0; k < randomPokemon.length; k++) {
        if(randomPokemon[k] === letter) {        
            return;                                             
        }
    } 
    
    mistakes ++; 
     console.log(mistakes);
    if (mistakes === 1) {
        document.getElementById("man").src="/images/Untitled-Artwork 2.png";
    }

    if (mistakes === 2) {
        document.getElementById("man").src="/images/Untitled-Artwork 3.png";
    }

    if (mistakes === 3) {
        document.getElementById("man").src="/images/Untitled-Artwork 4.png";
    } 
    
     if (mistakes === 4) {
        document.getElementById("man").src="/images/Untitled-Artwork 5.png";
    }     
    
     if (mistakes === 5) {
        document.getElementById("man").src="/images/Untitled-Artwork 6.png";
    }

    if (mistakes === 6) {
        document.getElementById("man").src="/images/Untitled-Artwork 7.png";
        document.getElementById("pokemonName").innerHTML = "The answer was: " + randomPokemon;
        document.getElementById("gameStatus").innerHTML = "You Lost!";
    } 
}   

function checkWin() {
    let x = answerPokemon.join('');
        if (x === randomPokemon) {
            document.getElementById("gameStatus").innerHTML = 'You Won!!!';
        }  
}

initialize();

restartButton.addEventListener("click", restart);

function restart() {
    document.getElementById("man").src="/images/Untitled-Artwork 1.png";
    initialize();
    mistakes = null;
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