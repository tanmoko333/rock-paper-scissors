
// Set player selection
// Set computer random
// Compare player selection and comp. random
// Set number of rounds
// Update Score and message per round
// Reset gaame if over and declare game winner
let playerscore = 0;
let computerscore = 0;
let roundWinner = "";
let section = document.querySelector(".section");
let mainBtn = document.querySelector("#mainBtn");
let rockBtn = document.querySelector("#Rock");
let paperBtn = document.querySelector("#Paper");
let sciBtn = document.querySelector("#Scissors");
let player = document.querySelector("#player");
let computer = document.querySelector("#computer");
let message = document.querySelector("#para");
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#compScore");
playerScore.innerHTML = `Player : ${playerscore}`;
computerScore.innerHTML = `Computer : ${computerscore}`;
let footer = document.querySelector(".footer");
const popUp = document.querySelector(".popUp");
const modal = document.querySelector(".modal");
const mbutton = document.querySelector(".mbutton");
const overlay = document.querySelector(".overlay");
let mtext = document.querySelector(".mtext");
mbutton.addEventListener("click",playAgain);
mainBtn.addEventListener("click",resultEvent);
function resultEvent(e) {
    if (e.target.id !== e.currentTarget.id) {

        let playerSelection = e.target.id;
        let computerSelection = computerPlay();
        if ((playerSelection === "Rock" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Scissors") || (playerSelection === "Scissors" && computerSelection === "Rock")) {
            message.innerHTML = `You Lose! <br> ${playerSelection} beats ${computerSelection}`;
            computerWin();
        }
        if ((playerSelection === "Scissors" && computerSelection === "Paper") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Rock" && computerSelection === "Scissors")) {
            message.innerHTML = `You Win! <br> ${playerSelection} beats ${computerSelection}`;
            playerWin();
        }
        if (playerSelection === computerSelection) {
            roundWinner = "";
            message.innerHTML = "Tie";
        }
        if (computerSelection === "Rock") {
            computer.innerHTML = "✊";
        }
        else if (computerSelection === "Paper") {
            computer.innerHTML = "✋";
        }
        else {
            computer.innerHTML = "✌️";
        }
    player.innerHTML = e.target.innerHTML;
    e.stopPropagation();    
    }
    if (gameOver()) {
        openModal();
    }
}

function computerPlay(getComputerSelection) {
  let select = ["Rock","Paper","Scissors"];
  let rndNum = Math.floor(Math.random() * select.length);
  
  return getComputerSelection = select[rndNum];
  }

// Header Typing Effect  
let i = 0;
let text = "Rock - Paper - Scissors";
let text1 = document.getElementById("text");
function typing() {
 if (i < text.length) {
         text1.innerHTML += text.charAt(i);i++;
         setTimeout(typing, 200);
  }
  } 
 typing();
 
function playerWin() {
     playerscore ++;
     playerScore.innerHTML = `Player : ${playerscore}`;
 }
function computerWin() {
     computerscore ++;
     computerScore.innerHTML = `Computer : ${computerscore}`;
}
function gameOver() {
return playerscore === 5 || computerscore === 5
}
function openModal() {
     modal.classList.add("active");
     overlay.classList.add("active");
     endMessage();
}
function endMessage() {
    if (playerscore > computerscore) {
        mtext.innerHTML = "Congratulations! <br><br>You Win!"
    } else {
        mtext.innerHTML = "Why so stupid?<br><br>You Lose!"
    }
}
function playAgain() {
    playerscore = 0;
    computerscore = 0;
    player.innerHTML = "?";
    computer.innerHTML = "?";
    message.innerHTML = "";
    modal.classList.remove("active");
    overlay.classList.remove("active");
    playerScore.innerHTML = `Player : ${playerscore}`;
    computerScore.innerHTML = `Computer : ${computerscore}`;
}