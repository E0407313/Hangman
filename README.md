# Hangman Game

Try out the game here on Varcel:
[[Hangman](hangman-e3zbdp9ow-e0407313.vercel.app)](https://hangman-nu-seven.vercel.app/)


## Introduction

This game is the first project I made using HTML, Javascript and CSS during my software immersive course in General Assembly. I chose to make Hangman as it is one of my favourite games to play back when I was a child. What appealed to me about this game is the suspense and tension created from guesssing each letter of the hidden word. Weather it be getting the right or wrong word, there is that dread and fear that the letter you pick might be wrong. This intensifies as you are down to your last few guesses and that makes for a thrilling and tense ending to the game.

## Timeframe

1 week

## Game Description

The rules of hangman:

1. Get a random word from a random word pool.
2. Set the selected word to "_" to hide it from the player.
3. Guess the words by pressing letters using the onscreen keyboard.
4. If letter is wrong, update the hangman graphic. If letter is correct reveal the letter.
5. If player guessed wrong 6 times, the game is over and the word will be revealed. If the word is guessed within 6 turns the player has won.
6. Once the game ends, players can click on the restart button to try to guess another word.

## My Approach

1. Create the template and layout (1 day)
2. Think of the game logic (4 days)
3. Debugging + add extra features (2 day)

I made this game with a strong emphasize on for loops as I realised that hangman is all about searching for the right letters. Hence I could do a functions that use for loop and go through all these letters to determine if they match the hidden word or not. Within that understanding in mind, Why can't I do it to the buttons as well to disable and enable them? Thus with this mindset, almost all functions in my code utilized this mechanic.

From the core game loop....
```JavaScript
function gameLoop() {
letters.forEach(letter => {
    letter.addEventListener("click", () => {
        console.log(letter)      
        letter = letter.innerHTML;
        console.log(letter)
        disable(letter); 
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
```
To disabling the letter buttons...
```JavaScript
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
```
As well as the enabling of the letter buttons...
```JavaScript
function enableButtons() {
    let buton = document.getElementsByClassName("button");
    for (let c = 0; c < buton.length; c++) {
        buton[c].disabled =false;
        buton[c].style.background = "white";  
        buton[c].style.color = "#444"; 
}
}
```
And to checking the loose condition.
```JavaScript
function checkLoose (letter) {
    for (let k = 0; k < randomPokemon.length; k++) {
        if(randomPokemon[k] === letter) {        
            return;                                             
        }
    } 
    mistakes ++;
    and more....
    }
```
## Game Screenshots
Starting screen
![Screenshot (181)](https://github.com/E0407313/Hangman/assets/60163831/30f8566b-0660-46e9-9925-bc6aff0c1db6)
Guessing the correct word
![Screenshot (182)](https://github.com/E0407313/Hangman/assets/60163831/db03c278-0d5f-4e31-8752-d53454749bea)
Win
![Screenshot (183)](https://github.com/E0407313/Hangman/assets/60163831/3c774691-7222-46a8-ac63-d05e157784eb)
Loose
![Screenshot (184)](https://github.com/E0407313/Hangman/assets/60163831/665bf8ba-3bc5-4b85-bde4-2e44d9b0bbb2)

## Review
I went into this blind without any video reference apart from the function that gets the random word out of an array, so to get it to work it is a win in my books. With that being said, I still think it was a bit bare so I plan to add more features which I will put in the future development section. Initially all my functions were also grouped together which made troubleshooting it difficult. Once I split them up, it became easier to do so. It also taught me that I have to be clear on what I want the function to do and not just stuff everything into one big main function.

## Future Developments
1. Adding a category section so that players can select the words by a categories that they are comfortable with to make it easier to guess.
2. Adding hints in as well.
3. fix my style.



