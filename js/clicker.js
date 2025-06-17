const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const startBtn = document.getElementById('start-btn');
const difficultySelect = document.getElementById('difficulty');
const timerDisplay = document.getElementById('timer');

// Sonido al acertar
const hitSound = new Audio('media/sounds/hit.mp3');

let score = 0;
let gameInterval;
let gameTimeout;
let countdownInterval;

function createTarget() {
  const target = document.createElement('img');
  target.src = 'media/images/objetivo.webp'; // Asegúrate de tener esta imagen
  target.classList.add('target');

  const size = 90;
  const maxX = gameArea.clientWidth - size;
  const maxY = gameArea.clientHeight - size;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  target.style.width = `${size}px`;
  target.style.height = `${size}px`;

  target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    hitSound.currentTime = 0;
    hitSound.play();
    target.remove();
  });

  gameArea.appendChild(target);

  setTimeout(() => {
    if (gameArea.contains(target)) {
      target.remove();
    }
  }, 1000);
}

function stopGame() {
  clearInterval(gameInterval);
  clearTimeout(gameTimeout);
  clearInterval(countdownInterval);
  alert(`¡Tiempo terminado! Tu puntuación final fue: ${score}`);
}

function startGame() {
  const difficulty = difficultySelect.value;
  let intervalTime;

  switch (difficulty) {
    case 'facil':
      intervalTime = 1200;
      break;
    case 'medio':
      intervalTime = 800;
      break;
    case 'dificil':
      intervalTime = 500;
      break;
    default:
      intervalTime = 800;
  }

  score = 0;
  scoreDisplay.textContent = score;
  timerDisplay.textContent = 30;
  clearInterval(gameInterval);
  clearTimeout(gameTimeout);
  clearInterval(countdownInterval);
  gameArea.innerHTML = '';

  gameInterval = setInterval(createTarget, intervalTime);

  let timeLeft = 30;
  countdownInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);

  gameTimeout = setTimeout(stopGame, 30000);
}

startBtn.addEventListener('click', startGame);
