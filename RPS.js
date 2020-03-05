
let playerScore = 0;
let computerScore = 0;
const body = document.querySelector('body');

function computerPlay() {
    let Rock = 'rock';
    let Paper = 'paper';
    let Scissors = 'scissors';

    let rand = Math.ceil(Math.random() * 3);

    switch(rand) {
        case 1: return Rock; break;
        case 2: return Paper; break;
        case 3: return Scissors; break;
    }
}

function playRound(body, stuff) {
    const result = document.createElement('div');

    let computerSelection = computerPlay();
    let playerSelection = stuff;
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == 'rock' && computerSelection == 'rock') {
        result.textContent = `Счёт ${playerScore} : ${computerScore}. Ничья!`;
        result.style.textAlign = 'center';
        body.appendChild(result);
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
        result.textContent = `Счёт ${playerScore} : ${computerScore}. Компьютер победил!`;
        result.style.textAlign = 'center';
        body.appendChild(result);
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        result.textContent = `Счёт ${playerScore} : ${computerScore}. Ты победил!`;
        result.style.textAlign = 'center';
        body.appendChild(result);
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        result.textContent = `Счёт ${playerScore} : ${computerScore}. Ты победил!`;
        result.style.textAlign = 'center';
        body.appendChild(result);
    } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        result.textContent = `Счёт ${playerScore} : ${computerScore}. Ничья!`;
        result.style.textAlign = 'center';
        body.appendChild(result);
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        result.textContent = `Счёт ${playerScore} : ${computerScore}. Компьютер победил!`;
        result.style.textAlign = 'center';
        body.appendChild(result);
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        result.textContent = `Счёт ${playerScore} : ${computerScore}. Компьютер победил!`;
        result.style.textAlign = 'center';
        body.appendChild(result);
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        result.textContent = `Счёт ${playerScore} : ${computerScore}. Ты победил!`;
        result.style.textAlign = 'center';
        body.appendChild(result);
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        result.textContent = `Счёт ${playerScore} : ${computerScore}. Ничья!`;
        result.style.textAlign = 'center';
        body.appendChild(result);
    }
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', (e) => { playRound(body, 'rock')
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', (e) => { playRound(body, 'paper') });

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', (e) => { playRound(body, 'scissors') });

