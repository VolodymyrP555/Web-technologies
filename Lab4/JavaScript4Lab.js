document.addEventListener("DOMContentLoaded", function () {

    const startScreen = document.getElementById("startScreen");
    const gameScreen = document.getElementById("gameScreen");

    const difficultySelect = document.getElementById("difficulty");
    const colorSelect = document.getElementById("color");

    const startButton = document.getElementById("startButton");
    const restartButton = document.getElementById("restartButton");

    const gameArea = document.getElementById("gameArea");
    const target = document.getElementById("target");

    const scoreText = document.getElementById("score");
    const timerText = document.getElementById("timer");

    const levels = {
        easy: { time: 4, size: 60, movement: 100 },
        medium: { time: 2, size: 50, movement: 250 },
        hard: { time: 1, size: 40, movement: Infinity }
    };

    let currentLevel;
    let score = 0;
    let timeLeft = 0;
    let timerId = null;
    let gameActive = false;

    function moveTarget() {
        const maxX = Math.max(0, gameArea.clientWidth - target.offsetWidth);
        const maxY = Math.max(0, gameArea.clientHeight - target.offsetHeight);

        const currentX = parseFloat(target.style.left) || 0;
        const currentY = parseFloat(target.style.top) || 0;

        const range = currentLevel.movement;

        const minX = Math.max(0, currentX - range);
        const minY = Math.max(0, currentY - range);

        const limitX = Math.min(maxX, currentX + range);
        const limitY = Math.min(maxY, currentY + range);

        const newX = minX + Math.random() * (limitX - minX);
        const newY = minY + Math.random() * (limitY - minY);

        target.style.left = newX + "px";
        target.style.top = newY + "px";
    }

    function stopTimer() {
        if (timerId !== null) {
            clearInterval(timerId);
            timerId = null;
        }
    }

    function gameOver() {
        stopTimer();
        gameActive = false;
        restartButton.classList.remove("hidden");

        alert("Гру завершено! Ви набрали " + score + " очок.");
    }

    function startTimer() {
        stopTimer();

        timeLeft = currentLevel.time;
        timerText.textContent = timeLeft;

        timerId = setInterval(function () {
            timeLeft--;
            timerText.textContent = timeLeft;

            if (timeLeft <= 0) {
                gameOver();
            }
        }, 1000);
    }

    function startGame() {
        const difficulty = difficultySelect.value;
        const color = colorSelect.value;

        if (!difficulty || !color) {
            return;
        }

        currentLevel = levels[difficulty];
        score = 0;
        gameActive = true;

        scoreText.textContent = score;

        target.style.width = currentLevel.size + "px";
        target.style.height = currentLevel.size + "px";
        target.style.backgroundColor = color;

        target.style.left = "0px";
        target.style.top = "0px";

        startScreen.classList.add("hidden");
        gameScreen.classList.remove("hidden");
        restartButton.classList.add("hidden");

        moveTarget();
        startTimer();
    }

    startButton.addEventListener("click", startGame);

    target.addEventListener("click", function () {
        if (!gameActive) {
            return;
        }

        score++;
        scoreText.textContent = score;

        moveTarget();
        startTimer();
    });

    restartButton.addEventListener("click", function () {
        stopTimer();
        gameActive = false;

        gameScreen.classList.add("hidden");
        startScreen.classList.remove("hidden");
    });

});
