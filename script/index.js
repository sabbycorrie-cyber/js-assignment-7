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

//Initializing time
let time = 10;

function addWordToDOM() {
    const randomIndex = Math.floor(Math.random() * words.length);
    randomWord = words[randomIndex];
    word.innerText = randomWord;
}

addWordToDOM();

text.addEventListener("input", () => {
    if (text.value === randomWord) {
        score++;
        scoreEl.innerText = score;

        time += 5;
        timeEl.innerText = time;

        addWordToDOM();
        text.value = "";
    }
});

function updateTime() {
    time--;
    timeEl.innerText = time;

    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}

function gameOver() {
    endgameEl.innerHTML = `
    <h1>Game Over</h1>
    <p>Your score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
    `;

    endgameEl.style.display = "flex";
}
