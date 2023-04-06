const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
	let randomChoice = Math.floor(Math.random() * 3);
	return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
	// console.log(playerSelection)
	if (playerSelection.trim().toLowerCase() === computerSelection) {
		return 'Draw!';
	}

	if (playerSelection.trim().toLowerCase() === 'rock' && computerSelection === 'paper') {
		return 'You loose! Papper beats rock!'
	}

	if (playerSelection.trim().toLowerCase() === 'rock' && computerSelection === 'scissors') {
		return 'You won! Rock beats scissors!'
	}

	if (playerSelection.trim().toLowerCase() === 'scissors' && computerSelection === 'rock') {
		return 'You loose! Rock beats scissors!'
	}

	if (playerSelection.trim().toLowerCase() === 'scissors' && computerSelection === 'paper') {
		return 'You won! Scissors beat paper'
	}

	if (playerSelection.trim().toLowerCase() === 'paper' && computerSelection === 'scissors') {
		return 'You loose! Scissors beat paper!'
	}

	if (playerSelection.trim().toLowerCase() === 'paper' && computerSelection === 'rock') {
		return 'You won! Paper beats rock!'
	}
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log('p',playerSelection);
console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));

