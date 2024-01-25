function guessNumberGame() {
    console.log("Welcome to the Number Guessing Game!");
    console.log("I'm thinking of a number between 1 and 100. Can you guess it?");

    const secretNumber = Math.floor(Math.random() * 100) + 1;
    const maxAttempts = 10;
    let attempts = 0;

    while (attempts < maxAttempts) {
        const userGuess = parseInt(prompt("Your guess:"));

        if (userGuess === secretNumber) {
            console.log(`Congratulations! You guessed the correct number ${secretNumber} in ${attempts + 1} attempts.`);
            break;
        } else if (userGuess < secretNumber) {
            console.log("Too low! Try again.");
        } else {
            console.log("Too high! Try again.");
        }

        attempts++;
    }

    if (attempts === maxAttempts) {
        console.log(`Sorry, you've run out of attempts. The correct number was ${secretNumber}.`);
    }
}

// Run the game
guessNumberGame();
