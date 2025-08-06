// Global variables for DOM elements
const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector("#letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaningGuessesParagraph = document.querySelector (".remaining");
const remainingGuessesSpan = document.querySelector ("remaining span");
const message = document.querySelector (".message");
const playAgainButton = document.querySelector ("play-again");

// Word to guess
let word = "magnolia";

// Function to display placeholders (●) for each letter 
const placeholder = function (word) {
    const placeholders = []
    for (let letter of word) {
        console.log(letter);
        placeholders.push ("●");
    }
wordInProgress.innerText = placeholders.join ("");
};

// Calll the function to initialize placeholders
placeholder(word);

// Add event listener to the Guess button
guessButton.addEventListener("click", function (e) {
    e.preventDefault();

    const inputValue = letterInput.value;
    console.log(inputValue);
    letterInput.value = "";

});
