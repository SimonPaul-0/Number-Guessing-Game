function guessingGame() {
    console.log("Welcome to the Guessing Game!");

    // Set the range for the random number
    const lowerLimit = parseInt(prompt("Enter the lower limit of the range: "));
    const upperLimit = parseInt(prompt("Enter the upper limit of the range: "));

    // Generate a random number within the specified range
    const secretNumber = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;

    // Initialize variables
    let attempts = 0;
    const maxAttempts = 10; // You can adjust the maximum number of attempts

    // Start the game loop
    while (attempts < maxAttempts) {
        const guess = parseInt(prompt(`Guess the number between ${lowerLimit} and ${upperLimit}: `));

        // Check the guess
        if (guess === secretNumber) {
            console.log(`Congratulations! You guessed the correct number ${secretNumber} in ${attempts + 1} attempts.`);
            break;
        } else if (guess < secretNumber) {
            console.log("Too low! Try again.");
        } else {
            console.log("Too high! Try again.");
        }

        attempts++;
    }

    // If the player runs out of attempts
    if (attempts === maxAttempts) {
        console.log(`Sorry, you've run out of attempts. The correct number was ${secretNumber}.`);
    }
}

// Run the guessingGame function
guessingGame();
