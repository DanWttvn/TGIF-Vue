class Game {
	constructor() {
		this.inProgress = true;
		this.winner = null; // "O" or "X"
		this.currentTurn = Game.O; // "O" starts
		this.movesMode = 0; //counter
		this.squares = new Array(9).fill().map(s => new Square()); //del square del otro archivo. hace el tablero


		this.makeMove = function (i) {
			if (this.inProgress && !this.squares[i].value) { // si estamos jugando y el cuadradito no tiene ya algo
				this.squares[i].value = this.currentTurn; //que va a ser O or X
	
				this.movesMode++;
				this.checkForWinner();
				this.currentTurn = (this.currentTurn === Game.O) ? Game.X : Game.O; //cambiar turno			
			}
		}
	
		this.checkForWinner = function() {
			const winningCombinations = [
				[0, 1, 2],
				[3, 4, 5], // [a, b, c]
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6]
			];
	
			winningCombinations.forEach((wc) => {
				const [a, b, c] = wc;
				const sqA = this.squares[a];
				const sqB = this.squares[b];
				const sqC = this.squares[c];
	
				if (sqA.value && sqA.value === sqB.value && sqA.value === sqC.value) { // en esa combinacion hay tres del mismo simbolo
					this.inProgress = false;
					this.winner = sqA.value; // O or X
					sqA.isHighlighted = sqB.isHighlighted = sqC.isHighlighted = true;
				}
			});
	
			//Check for tie
			if (this.movesMode === this.squares.length) { // i ha habido 9 movs, y no ha habido ganador
				this.inProgress = false;
			}
	
		}
	}

	
}

Game.O = "O";
Game.X = "X";


let activeGame = new Game();

let gameVue = new Vue({
	el: "#game-view",
	data: activeGame, 
	computed: {
		infoMessage: function() {
			if (this.inProgress) { //this es el data, en este caso activeGame
				return "It is " + this.currentTurn + '\'s turn!';
			}

			if (this.winner) {
				return this.winner + " wins!";
			}

			if (!this.winner && !this.inProgress) {
				return "tie!!"
			}
		}
	}
});