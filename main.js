const pokemon = [
    "MILOTIC",
    // "TINKATON",
    // "VOLCARONA",
    // "GENGAR",
    // "AERODACTYL",
    "CRADILY",
    // "WEEZING"
]

const letters = document.querySelectorAll("button");

let randomPokemon = [];
let answerPokemon = [];
let mistakes = 0;

function initialize() {
    pokemonToGuess();
    gameLoop();
    
    }
    
initialize();

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


function gameLoop() {
letters.forEach(letter => {
    letter.addEventListener("click", () => {
        console.log(letter)      
        letter = letter.innerHTML;
        console.log(letter)
        disable(letter);
//set the text of the button clicked to its respective letter        
        

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
}

function disable(letter) {
    let buttons = document.getElementById(letter);
    for(let a = 0; a < randomPokemon.length; a++){
        if(randomPokemon[a] === letter) {
            buttons.disabled = true;  
            buttons.style.background = "#AEFD9D";            
       } else if (randomPokemon[a] !== letter) {
        buttons.disabled = true; 
        buttons.style.color = "gray"; 
       }
    }
}


function checkLoose (letter) {
    for (let k = 0; k < randomPokemon.length; k++) {
        if(randomPokemon[k] === letter) {        
            return;                                             
        }
    } 
    
    mistakes ++; 
     console.log(mistakes);
    if (mistakes === 1) {
        document.getElementById("man").src="/images/2.png";
    }

    if (mistakes === 2) {
        document.getElementById("man").src="/images/3.png";
    }

    if (mistakes === 3) {
        document.getElementById("man").src="/images/4.png";
    } 
    
     if (mistakes === 4) {
        document.getElementById("man").src="/images/5.png";
    }     
    
     if (mistakes === 5) {
        document.getElementById("man").src="/images/6.png";
    }

    if (mistakes === 6) {
        document.getElementById("man").src="/images/7.png";
        document.getElementById("pokemonName").innerHTML = "The answer was: " + randomPokemon;
        document.getElementById("gameStatus").innerHTML = "You Lost!";
        disableAllButtons();
       
    } 
}   

function checkWin() {
    let x = answerPokemon.join('');
        if (x === randomPokemon) {
            document.getElementById("gameStatus").innerHTML = 'You Won!!!'
            document.getElementById("pokemonName").innerHTML = "The answer was: " + randomPokemon;   
            disableAllButtons();
        }  
}

function enableButtons() {
    let buton = document.getElementsByClassName("button");
    for (let c = 0; c < buton.length; c++) {
        buton[c].disabled =false;
        buton[c].style.background = "white";  
        buton[c].style.color = "#444"; 
}
}

function disableAllButtons() {
    let buuton = document.getElementsByClassName("button");
    for (let d = 0; d < buuton.length; d++) {
        buuton[d].disabled =true;
        buuton[d].style.color = "gray"; 
    }    
}


restartButton.addEventListener("click", restart);

function restart() {
    initialize();
    
    enableButtons();
    document.getElementById("man").src="/images/1.png";    
    mistakes = 0;
    document.getElementById("gameStatus").innerHTML = "";
    
}


