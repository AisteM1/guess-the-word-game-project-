const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector("#letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remaningGuessesElement = document.querySelector (".remaining");
const remainingGuessesSpan = document.querySelector ("remaining span");
const message = document.querySelector (".message");
const playAgainButton = document.querySelector ("play-again");

const word = "magnolia";
const guessedLetters = [];

// Display our symbols as placeholders for the chosen word's letters
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholders.push ("●");
    }
wordInProgress.innerText = placeholders.join ("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    // Empty message paragraph
    message.innerText = "";
    // Let's grab what was entered in the input
    const guess = letterInput.value;
    // Let's make sure that it is a single letter
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        // We've got a letter! LEt's guess!
        makeGuess(guess);
    }
    letterInput.value = "";

});
const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if  (input.length === 0) {
        // Is this input empty?
        message.innerText = "Please enter a letter";
    } else if (input.length > 1) {
        // Did you type more than one letter?
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        // Did you type a number, a special character or some other non letter thing?
        message.innerText = "Please enter a letter from A to Z";
    } else {
        // We finally got a single letter, omg yay
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessedthat letter, silly. Try again";
    } else {
        guessedLetters.push(guess);
        console.log(guesedLetters);
    }
};
