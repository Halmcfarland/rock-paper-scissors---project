function getUserChoice(userInput) {
    userInput = userInput.toLowerCase(); 
    if (userInput === 'rock' || userInput === 'paper'|| userInput === 'scissors' || userInput === 'bomb') {
        return userInput
    } else {
        console.log('Error.');
    };
};

// so far so good!
// console.log(getUserChoice('RoCk'));
// prints "rock"   (As it should)
// console.log(getUserChoice('rockeroni'));
// prints "Error."     (As it should)

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    };
};

// so far so good! 
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// prints a bunch of randomly generated 'rock', 'paper', and 'scissors' 

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'We have a tie!';
    } if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer won.';
        } else {
            return 'User won!';
        }
    } if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer won.';
        } else {
            return 'User won!';
        }
    } if (userChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'User won!';
        } else {
            return 'Computer won!';
        }
    } if (userChoice === 'bomb') {
        return 'User won!';
    }

};

// so far so good! well, kinda..

// console.log(determineWinner('paper', getComputerChoice()));

/* I ran into an issue here. I fixed it indepently, 
but I feel it should be noted for other tutorial 
takers(learners) that the tutorial instructions do 
not explicitly ask the learner to DEFINE userChoice 
and computerChoice. Up to this point in the tutorial, 
the JS engine does not know what value these two 
variables are supposed to hold, thus resulting in the 
console throwing an 'Uncaught ReferenceError'. 
I remedied this by calling 'getComputerChoice' instead
of 'computerChoice', but I'd like to know how other 
learners feel about it. If you come across this and
have a better solution, please reach out! */

function playGame(userChoice, computerChoice) {
   userChoice = getUserChoice('rock', 'paper', 'scissors') 
   userChoice = ('scissors');
//    change USER INPUT in line above !!!
    console.log(`User threw ${userChoice}.`);
   computerChoice = getComputerChoice(); {
    console.log(`Computer threw ${computerChoice}.`); 
    console.log(determineWinner(userChoice, computerChoice));
    };
};


playGame();
