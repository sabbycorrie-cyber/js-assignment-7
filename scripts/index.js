// Variables for the DOM elements
const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const settingsBtn = document.getElementById("settings-btn");
const difficultySelect = document.getElementById("difficulty");

let difficulty = 
localStorage.getItem("difficulty") !== null 
? localStorage.getItem("difficulty") 
: "easy";

difficultySelect.value = difficulty;

//Initializing time
let time = 10;

difficultySelect.value = difficulty;

if (difficulty === "easy") {
  time = 10;
} else if (difficulty === "medium") {
  time = 7;
} else {
  time = 5;
}

timeEl.innerText = time;

// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

//Initializing word
let randomWord;

//Initializing score
let score = 0;

// Functions
function addWordToDOM() {
  const randomIndex = Math.floor(Math.random() * words.length);
  randomWord = words[randomIndex];
  word.innerText = randomWord;
}

function updateScore() {
  score++;
  scoreEl.innerText = score;
}

function updateTime() {
  time--;
  timeEl.innerText = time ;
  if (time === 0) {
    clearInterval(timeInterval);
    endGame();
  }
}

function endGame() {
  endgameEl.innerHTML = `
    <h2>Game Over</h2>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
  `;
  endgameEl.style.display = "flex";
}

// Start game
addWordToDOM();

// Start timer
const timeInterval = setInterval(updateTime, 1000);

// Input event
text.addEventListener("input", (e) => {
  console.log(e.target.value);

  if (text.value === randomWord) {
    updateScore();

    time += 5;
    timeEl.innerText = time;

    addWordToDOM();
    text.value = "";
  }
});

// Difficulty change
settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
  location.reload();
});