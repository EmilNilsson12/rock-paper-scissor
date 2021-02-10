const gameBoard = document.getElementById('gameBoard');
const startBtn = document.getElementById('startBtn');
const computerHandDiv = document.getElementById('computerHand');
const playerHandDiv = document.getElementById('playerHand');
const gameBtns = document.getElementById('gameBtns');

startBtn.addEventListener('click', startNewGame);

let scoreBoard = {
    player: 0,
    computer: 0
}

function startNewGame() {
    startBtn.classList.add('hide');
    renderGamePieces();



    //updateScoreBoard();
}



function renderGamePieces() {
    const gameField = `
        <button>Rock</button>
        <button>Paper</button>
        <button>Scissors</button>
    `;

    gameBtns.innerHTML = gameField;
    gameBtns.addEventListener('click', playRound)
}

function playRound(evt) {
    // Generate computers hand
    const computerHand = getComputerHand();

    // Find player hand by evt.target
    let playerHand = evt.target.innerText;
    playerHand = getPlayerHand(playerHand);

    // Compare computerhand with playerhand
    declareWinner(playerHand, computerHand);

    // Display round winner

    // Update score
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

function declareWinner(player, computer) {
    computerHandDiv.classList.remove('roundWinner');
    playerHandDiv.classList.remove('roundLoser');
    playerHandDiv.classList.remove('roundWinner');
    computerHandDiv.classList.remove('roundLoser');

    // 1: Rock
    // 2: Paper
    // 3: Scissors
    switch (true) {
        case (player === computer):
            // It's a tie
            console.log("It's a tie");
            break;

        case (computer == 1 && player == 3 || computer == 2 && player == 1 || computer == 3 && player == 2):
            computerHandDiv.classList.add('roundWinner');
            playerHandDiv.classList.add('roundLoser');
            updateScore('computer');
            break;

        case (player == 1 && computer == 3 || player == 2 && computer == 1 || player == 3 && computer == 2):
            playerHandDiv.classList.add('roundWinner');
            computerHandDiv.classList.add('roundLoser');
            updateScore('player');
            break;

        default:
            break;
    }
}

const scorePlayer = document.getElementById('scorePlayer');
const scoreComputer = document.getElementById('scoreComputer');

function updateScore(winner) {
    // Update global object
    scoreBoard[winner]++;

    // Update DOM with new scores
    scorePlayer.innerText = scoreBoard.player;
    scoreComputer.innerText = scoreBoard.computer;
}
