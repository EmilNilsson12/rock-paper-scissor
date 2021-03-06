const scoreBoardDiv = document.getElementById('scoreBoard');
let scoreBoard = {
    player: 0,
    computer: 0
}

const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', startNewGame);

function startNewGame() {
    startBtn.classList.add('hide');
    renderGamePieces();
    resetScore();
}

function resetScore() {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
}


function renderGamePieces() {
    const gameBtns = document.getElementById('gameBtns');

    gameBtns.innerHTML = `
        <button class="weapon">Rock</button>
        <button class="weapon">Paper</button>
        <button class="weapon">Scissors</button>
    `;

    const weapons = document.querySelectorAll('.weapon');
    weapons.forEach(weapon => {
        weapon.addEventListener('click', playRound);
    });

    scoreBoardDiv.innerHTML = `
        <h2>Scoreboard</h2>
        <div>
            <span>Player</span>
            <span id="scorePlayer">0</span>
        </div>
        <div>
            <span>Computer</span>
            <span id="scoreComputer">0</span>
        </div>
    `;
}


function playRound(evt) {
    // Generate computers hand
    const computerHand = getComputerHand();

    // Find player hand by evt.target
    let playerHand = evt.target.innerText;
    playerHand = getPlayerHand(playerHand);

    // Compare computerhand with playerhand
    const roundWinner = declareRoundWinner(playerHand, computerHand);

    if (scoreBoard.player == 5 || scoreBoard.computer == 5) {
        announceGameWinner(roundWinner);
    }
}


function announceGameWinner(winner) {
    scoreBoardDiv.innerHTML = `<h2>Congratulations to <em>${winner}</em> for winning the game!</h2>`;

    const playAgain = document.createElement('button');
    playAgain.innerText = 'Play again?'
    playAgain.addEventListener('click', startNewGame);
    gameBtns.innerHTML = "";
    scoreBoardDiv.appendChild(playAgain);
}


function declareRoundWinner(player, computer) {
    const playerHandDiv = document.getElementById('playerHand');
    const computerHandDiv = document.getElementById('computerHand');

    playerHandDiv.classList.remove('roundWinner');
    computerHandDiv.classList.remove('roundWinner');
    playerHandDiv.classList.remove('roundLoser');
    computerHandDiv.classList.remove('roundLoser');

    // 1: Rock
    // 2: Paper
    // 3: Scissors
    switch (true) {
        case (player === computer):
            // It's a tie
            break;

        case (player == 1 && computer == 3 || player == 2 && computer == 1 || player == 3 && computer == 2):
            playerHandDiv.classList.add('roundWinner');
            computerHandDiv.classList.add('roundLoser');
            updateScore('player');
            return 'player'
            break;

        case (computer == 1 && player == 3 || computer == 2 && player == 1 || computer == 3 && player == 2):
            computerHandDiv.classList.add('roundWinner');
            playerHandDiv.classList.add('roundLoser');
            updateScore('computer');
            return 'computer'
            break;

        default:
            break;
    }
}


function updateScore(winner) {
    const scorePlayer = document.getElementById('scorePlayer');
    const scoreComputer = document.getElementById('scoreComputer');

    // Update global object
    scoreBoard[winner]++;

    // Update DOM with new scores
    scorePlayer.innerText = scoreBoard.player;
    scoreComputer.innerText = scoreBoard.computer;
}


function getComputerHand() {
    const computerHand = Math.floor(Math.random() * 3 + 1);
    const computerHandDiv = document.getElementById('computerHand');

    switch (computerHand) {
        case 1:
            computerHandDiv.innerText = 'Rock';
            break;

        case 2:
            computerHandDiv.innerText = 'Paper';
            break;

        case 3:
            computerHandDiv.innerText = 'Scissors';
            break;

        default:
            break;
    }
    return computerHand
}


function getPlayerHand(playerHand) {
    const playerHandDiv = document.getElementById('playerHand');

    switch (playerHand) {
        case 'Rock':
            playerHandDiv.innerText = 'Rock';
            return 1

        case 'Paper':
            playerHandDiv.innerText = 'Paper';
            return 2

        case 'Scissors':
            playerHandDiv.innerText = 'Scissors';
            return 3

        default:
            break;
    }
}
