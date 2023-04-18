let choices = ['rock', 'paper', 'scissors']
let playerSelection;
let computerSelection;
const restartBtn = document.querySelector('.btn');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#pcScore');
const text = document.querySelector('#text');
const cards = document.querySelectorAll('.cards__card');

function getComputerChoice() {
	let randomChoice = Math.floor(Math.random() * 3);
	return choices[randomChoice];
}

let playerScore = 0;
let computerScore = 0;

playerPoints.textContent = playerScore;
computerPoints.textContent = computerScore;

cards.forEach(card => {
	card.addEventListener('click', (e) => {
		playerSelection = e.currentTarget.dataset.value;
	})
})


function playRound(playerSelection, computerSelection) {
	computerSelection = getComputerChoice();

	if (playerSelection === computerSelection) {
		console.log('')
		console.log('PS: ', playerScore);
		console.log('PcS: ', computerScore);
		text.textContent = 'It\'s a tie!';
	}

	if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'scissors' && computerSelection === 'paper') ||
		(playerSelection === 'paper' && computerSelection === 'rock')
	) {
		console.log('------')
		if (playerScore > 4) {
			console.log(11)
			text.textContent = 'Great! You won the game!';
		}
		++playerScore;
		console.log('Your score: ', playerScore);
		console.log('Computer score: ', computerScore);
		text.textContent = `You won, ${playerSelection} beats ${computerSelection}!`
	}

	if (
		(playerSelection === 'rock' && computerSelection === 'paper') ||
		(playerSelection === 'paper' && computerSelection === 'scissors') ||
		(playerSelection === 'scissors' && computerSelection === 'rock')
	) {
		console.log('------')
		if (computerScore > 4) {
			console.log(12)
			text.textContent = 'Sorry! Yoy lost the game!';
		}
		++computerScore;
		console.log('Your score: ', playerScore);
		console.log('Computer score: ', computerScore);
		text.textContent = `You've lost this round, ${computerSelection} beats ${playerSelection}!`
	}

	playerPoints.textContent = playerScore;
	computerPoints.textContent = computerScore;
}

function game() {
	cards.forEach(card => {
		card.addEventListener('click', function () {
			if (playerScore > 4 || computerScore > 4) {
				return;
			} else {
				playRound(playerSelection, computerSelection)
			}
		});
	})
}

game();

restartBtn.addEventListener('click', restart)

function restart() {
	console.log('11')
	playerScore = 0;
	computerScore = 0;

	playerPoints.textContent = playerScore;
	computerPoints.textContent = computerScore;
	text.textContent = 'Let\'s start our game! Make a choice.'
}
