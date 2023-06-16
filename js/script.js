const buttons = document.querySelectorAll('button');

const resultEl = document.getElementById("result");

const playScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

let playScore = 0;
let computerScore = 0;


buttons.forEach(button => {
    button.addEventListener('click', () => {
     const result =  playRound(button.id, computerPlay());
     resultEl.textContent = result;
    });
});

function computerPlay() {
    const choices = ["pedra", "papel", "tesoura"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Empate";
    } else if (
        (playerSelection === "pedra" && computerSelection === "tesoura") ||
        (playerSelection === "papel" && computerSelection === "pedra") ||
        (playerSelection === "tesoura" && computerSelection === "papel")
    ) {
        playScore++;
        playScoreEl.textContent = playScore;
        return "Você venceu, " + playerSelection + " vence  da " + computerSelection + "!";
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return " Você perdeu, " + computerSelection + " perde para " + playerSelection+ "!";
    }
}