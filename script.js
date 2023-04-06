const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
	let randomChoice = Math.floor(Math.random() * 3);
	console.log(randomChoice);
	return choices[randomChoice];
}

// getComputerChoice();
alert(getComputerChoice());