let choices = ['rock', 'paper', 'scissors']
let playerSelection;
let computerSelection;

function getComputerChoice() {
	let randomChoice = Math.floor(Math.random() * 3);
	return choices[randomChoice];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
	computerSelection = getComputerChoice();
	playerSelection = prompt('Rock, paper, scissors ?');
	if (playerSelection.trim().toLowerCase() === computerSelection) {
		console.log('')
		console.log('PS: ', playerScore);
		console.log('PcS: ', computerScore);
		return 'Draw!';
	}

	if (
		(playerSelection.trim().toLowerCase() === 'rock' && computerSelection === 'scissors') ||
		(playerSelection.trim().toLowerCase() === 'scissors' && computerSelection === 'paper') ||
		(playerSelection.trim().toLowerCase() === 'paper' && computerSelection === 'rock')
		) {
		console.log('------')
		++playerScore;
		console.log('Your score: ', playerScore);
		console.log('Computer score: ', computerScore);
		return `You won, ${playerSelection} beats ${computerSelection}!`
	}

	if (
		(playerSelection.trim().toLowerCase() === 'rock' && computerSelection === 'paper') ||
		(playerSelection.trim().toLowerCase() === 'paper' && computerSelection === 'scissors') ||
		(playerSelection.trim().toLowerCase() === 'scissors' && computerSelection === 'rock')
		) {
		console.log('------')
		++computerScore;
		console.log('Your score: ', playerScore);
		console.log('Computer score: ', computerScore);
		return `You've lost this round, ${computerSelection} beats ${playerSelection}!`
	}
}

function game() {
	for (let i = 0; playerScore < 3 && computerScore < 3; i++) {
		console.log(playRound(playerSelection, computerSelection))
	}

	playerScore > computerScore ? console.log('Great! You won the game!') : console.log('Sorry! Yoy lost the game!');
}

game();