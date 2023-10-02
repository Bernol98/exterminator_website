const gameContainer = document.querySelector('.game-container');
const insect = document.querySelector('.insect');
const spray = document.querySelector('.spray');
const startButton = document.getElementById('start-button');
const scoreDisplay = document.getElementById('score');

let score = 0;
let gameInterval;

function moveInsect() {
    const maxX = gameContainer.clientWidth - insect.clientWidth;
    const maxY = gameContainer.clientHeight - insect.clientHeight;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    insect.style.left = `${newX}px`;
    insect.style.top = `${newY}px`;
}

function sprayInsect() {
    score++;
    scoreDisplay.innerText = `Score: ${score}`;
    if (score >= 20) {
        clearInterval(gameInterval);
        scoreDisplay.innerText = 'WOW! YOU CAN BE AN EXTERMINATOR ONE DAY!';
        insect.style.display = 'none'; 
        musicPlayer.pause();
        gameContainer.style.cursor = 'default';
    } else {
        moveInsect();
    }
}

startButton.addEventListener('click', () => {
    gameContainer.style.visibility = 'visible';
    startButton.style.display = 'none';
    insect.style.display = 'block';
    spray.style.display = 'block';
    scoreDisplay.style.display = 'block';
    score = 0;
    musicPlayer.play();
    scoreDisplay.innerText = 'Score: 0';
    gameInterval = setInterval(moveInsect, 1000);
    gameContainer.style.cursor = 'url("32px_spray.png"), pointer';
});

insect.addEventListener('click', sprayInsect);
