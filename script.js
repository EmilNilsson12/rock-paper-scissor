const gameBoard = document.getElementById('gameBoard');
const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', startNewGame);

let scoreBoard = [
    {
        name: "player",
        score: 0
    },
    {
        name: "computer",
        score: 0
    }
]

function startNewGame() {
    startBtn.classList.add('hide');
    renderGamePieces();



    //updateScoreBoard();
}



function renderGamePieces() {
    const gameField = `
        <div id="opponentHand" class="hand"></div>
        <div id="gameBtns">
            <button>Rock</button>
            <button>Paper</button>
            <button>Scissors</button>
        </div>
        <div id="playerHand" class="hand"></div>
    `;

    gameBoard.innerHTML = gameField;
    
    const gameBtns = document.getElementById('gameBtns');
    gameBtns.addEventListener('click', playRound)
}

function playRound(evt) {
    // Generate computers hand
    
    // Find player hand by evt.target

    // Display round winner

    // Update score
}



// when player clicks on a gamepiece: rock paper or scissors
// Create random choice for the computer as well
// Then display both
// Then compare both and declade a winner





/*
function updateScoreBoard() {
    for (player of scoreBoard) {
        console.log(player.name);
        console.log(player.score);
        const currentScore = player.score;

        
    }
}
*/

