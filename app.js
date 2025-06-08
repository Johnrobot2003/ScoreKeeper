const displayP1 = document.querySelector('#displayScoreP1');
const displayP2 = document.querySelector('#displayScoreP2');
const btnP1 = document.querySelector('#AddScoreP1')
const btnP2 = document.querySelector('#AddScoreP2')
const resetBtn = document.querySelector('#resetGame');
const winningScoreSelect = document.querySelector('#winningScore');


let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;


btnP1.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            isGameOver = true;
            displayP1.classList.add('winner');
            displayP2.classList.add('loser');
             btnP1.disabled = true;
            btnP2.disabled = true;
        }
        displayP1.textContent = p1Score;
    }

});
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetGame();
    console.log(winningScore);
});
btnP2.addEventListener('click', function () {

    if (!isGameOver) {
        p2Score++;
        displayP2.textContent = p2Score;
        if (p2Score === winningScore) {
            isGameOver = true;
            displayP2.classList.add('winner');
            displayP1.classList.add('loser');
            btnP1.disabled = true;
            btnP2.disabled = true;
        }
    }
});
resetBtn.addEventListener('click', resetGame);


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
}