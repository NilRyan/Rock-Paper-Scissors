const playerChoice = document.querySelector('.player-choices')
const computerChoice = document.querySelector('.comp-choices')
const h2 = document.querySelector('h2');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');




playerChoice.addEventListener('click', function play(e, computerChoice) {
    e.stopPropagation();
    let playerChoice = e.target.getAttribute('class');
    computerChoice = computerPlay();
    let result = resultString(playerChoice, computerChoice);
    let winLose = winCheck(result);
    h2.textContent = result;
    score(winLose);
    compStyle(computerChoice);
    gameCheck();


});






//Updates the score 
function score(winLose) {
    if (winLose === 'win') {
        playerScore.textContent = Number(playerScore.textContent) + 1;
    } else if (winLose === 'lose') {
        computerScore.textContent = Number(computerScore.textContent) + 1;
    }
}

//Checks if 5 wins is achieved and resets after 1 sec
function gameCheck() {
    if (playerScore.textContent == 5) {
        h2.textContent = 'CONGRATS! YOU WIN!';
        setTimeout(function () {
            playerScore.textContent = '0';
            computerScore.textContent = '0';
        }, 1000)
    } else if (computerScore.textContent == 5) {
        h2.textContent = 'YOU LOSE! TRY AGAIN!';
        setTimeout(function () {
            playerScore.textContent = '0';
            computerScore.textContent = '0';
        }, 1000)
    }
}
//Check's if win, lose, draw 
function winCheck(result) {
    if (result.includes('win')) {
        return 'win';
    } else if (result.includes('lose')) {
        return 'lose';
    } else if (result.includes('draw')) {
        return 'draw';
    }

}
//Check's who wins the round and returns a string with result
function resultString(playerChoice, computerChoice) {
    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {
            return 'It\'s a draw!';
        } else if (computerChoice === 'scissors') {

            return 'You win! Rock beats Scissors.';

        } else if (computerChoice === 'paper') {

            return 'You lose! Paper beats Rock.';
        }

    } else if (playerChoice === 'paper') {
        if (computerChoice === 'paper') {
            return 'It\'s a draw!';
        } else if (computerChoice === 'scissors') {

            return 'You lose! Scissors beats Paper.';

        } else if (computerChoice === 'rock') {

            return 'You win! Paper beats Rock.';
        }

    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'scissors') {
            return 'It\'s a draw!';
        } else if (computerChoice === 'rock') {

            return 'You lose! Rock beats Scissors.';

        } else if (computerChoice === 'paper') {

            return 'You win! Scissors beats Paper.';
        }
    }

}


//Generates  a string value of the computer's choice
function computerPlay() {
    let rockPaperScissor = ['rock', 'paper', 'scissors'];
    return rockPaperScissor[Math.floor(Math.random() * rockPaperScissor.length)];
}

//Styles the computer choice after a click
function compStyle(computerChoice) {
    const choice = document.querySelector(`div.comp-choices img[class='${computerChoice}']`);
    choice.style.border = '0.5rem solid rgb(156, 73, 86)';
    choice.style.borderRadius = '50%';
    choice.style.transform = 'scale(1.1)';

    setTimeout(function () {
        choice.style.border = '0.5rem solid transparent';
        choice.style.borderRadius = '50%';
        choice.style.transform = 'scale(1)';
    }, 500)
}
