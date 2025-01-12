let playerScore = 0;
let computerScore = 0;

function updateScore() {
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('compscore').textContent = compScore;
}

function playRound(playerSelection, computerSelection){

    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
    } else if (playerSelection === computerSelection) {
        // It's a tie, no score update
    } else {
        computerScore++;
    }
    
    updateScore();
}

const compchoiceDisp = document.getElementById ('comp-choice');
const userchoiceDisp = document.getElementById ('user-choice');
const resultDisp = document.getElementById ('result');

const choice = document.querySelectorAll ('button');


choice.forEach(choice => choice.addEventListener('click', (e) => {
    userchoice = e.target.id;
    userchoiceDisp.innerHTML = userchoice;
    generatecompchoice();

}));

function generatecompchoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const compchoice = choices[Math.floor(Math.random() * 3)];
    compchoiceDisp.innerHTML = compchoice;
    checkWinner(compchoice);
}
   
function checkWinner(compchoice) {
    if (userchoice === compchoice) {
        resultDisp.innerHTML = 'It is a tie!';
    } else if (userchoice === 'rock') {
        if (compchoice === 'scissors') {
            resultDisp.innerHTML = 'You win!';
        } else {
            resultDisp.innerHTML = 'Computer wins!';
        }
    } else if (userchoice === 'paper') {
        if (compchoice === 'rock') {
            resultDisp.innerHTML = 'You win!';
        } else {
            resultDisp.innerHTML = 'Computer wins!';
        }
    } else if (userchoice === 'scissors') {
        if (compchoice === 'paper') {
            resultDisp.innerHTML = 'You win!';
        } else {
            resultDisp.innerHTML = 'Computer wins!';
        }
    }
}

