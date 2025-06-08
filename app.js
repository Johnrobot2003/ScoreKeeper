const displayP1 = document.querySelector('#displayScoreP1');
const displayP2 = document.querySelector('#displayScoreP2');
const btnP1 = document.querySelector('#AddScoreP1')
const btnP2 = document.querySelector('#AddScoreP2')
const resetBtn = document.querySelector('#resetGame');
const delBtn = document.querySelector('.delete')
const notifHeader = document.querySelector('.notification')
const popup = document.querySelector('.popup-message');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-popup');
const gameStatusMess = document.querySelector('#game-status');
const winningScoreSelect = document.querySelector('#winningScore');


let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;
let clickCount = 0;
let clickTimer;
let deuceStatus = false;

delBtn.addEventListener('click', function () {
    popup.style.display = 'none';
    overlay.style.display = 'none';
})
closeBtn.addEventListener('click', function () {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});
btnP1.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score++;
        displayP1.textContent = p1Score;
        if (p1Score === winningScore - 1 && p2Score === winningScore - 1) {
            deuceStatus = true;
            console.log('Deuce!');
            gameStatusMess.style.display = 'block';
             gameStatusMess.classList.add('warning');
            gameStatusMess.textContent = 'Deuce!';
           
        }
        if (deuceStatus) {
            if (p1Score >= p2Score + 2) {
                gameStatusMess.style.display = 'block';
                 gameStatusMess.textContent = 'End of Game!';
                gameStatusMess.classList.remove('warning');
                gameStatusMess.classList.add('winner');
                isGameOver = true;
                displayP1.classList.add('winner');
                displayP2.classList.add('loser');
                btnP1.disabled = true;
                btnP2.disabled = true;
            }
        } else {
            if (p1Score === winningScore) {
                gameStatusMess.style.display = 'block';
                 gameStatusMess.textContent = 'End of Game!';
                gameStatusMess.classList.remove('warning');
                gameStatusMess.classList.add('winner');
                isGameOver = true;
                displayP1.classList.add('winner');
                displayP2.classList.add('loser');
                btnP1.disabled = true;
                btnP2.disabled = true;

            }
        }

    }
}

);
btnP2.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score++;
        displayP2.textContent = p2Score;
        if (p2Score === winningScore - 1 && p1Score === winningScore - 1) {
            deuceStatus = true;
            console.log('Deuce!');
            gameStatusMess.style.display = 'block';
            gameStatusMess.classList.add('warning');
            gameStatusMess.textContent = 'Deuce!';
        }
        if (deuceStatus) {
            if (p2Score >= p1Score + 2) {
                gameStatusMess.style.display = 'block';
                 gameStatusMess.textContent = 'End of Game!';
                gameStatusMess.classList.remove('warning');
                gameStatusMess.classList.add('winner');
                isGameOver = true;
                displayP2.classList.add('winner');
                displayP1.classList.add('loser');
                btnP1.disabled = true;
                btnP2.disabled = true;
            }
        } else {
            if (p2Score === winningScore) {
                gameStatusMess.style.display = 'block';
                 gameStatusMess.textContent = 'End of Game!';
                gameStatusMess.classList.remove('warning');
                gameStatusMess.classList.add('winner');
                isGameOver = true;
                displayP2.classList.add('winner');
                displayP1.classList.add('loser');
                btnP1.disabled = true;
                btnP2.disabled = true;
            }
        }
    }
});
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetGame();
    console.log(winningScore);
});

resetBtn.addEventListener('click', function () {


    if (p1Score !== 0 || p2Score !== 0) {
        resetGame();
    } else {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    }


});

function resetGame() {
    p1Score = 0;
    p2Score = 0;
    displayP1.textContent = p1Score;
    displayP2.textContent = p2Score;
    isGameOver = false;
    displayP1.classList.remove('winner', 'loser');
    displayP2.classList.remove('winner', 'loser');
    btnP1.disabled = false;
    btnP2.disabled = false;
    gameStatusMess.style.display = 'none';
    deuceStatus = false;
}