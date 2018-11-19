/*	pawn: 1
	bishop: 2
	knight: 3
	rook: 4
	queen: 5
	king: 6

	black: 0
	white: 1

	a piece object can be represented on the board by [type, color]
	ex: white pawn = [1,1]
	ex: black queen = [5,0]
*/

let board = [[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0]];
let playerTurn;
let player1;
let player2;
function drawBoard() {
	$('#real_board').html('');
	var father = document.getElementById('real_board')
	for(var i in board){
		var row = document.createElement('div');
		row.className = 'row';
		for(var v in board[i]){
			var col = document.createElement('div');
			col.className = 'col'
			col.setAttribute('id', 'space')
			col.style.width = 'auto'
			col.style.height = '100px'
			if(board[i][v] instanceof Rook){
				if (board[i][v].color == 'white') {
					let rook =  document.createElement('img')
					rook.setAttribute('src', 'img/white_rook.png')
					col.appendChild(rook)
				} else if (board[i][v].color == 'black') {
					let rook =  document.createElement('img')
					rook.setAttribute('src', 'img/black_rook.png')
					col.appendChild(rook)
				}
			}
			if(board[i][v] instanceof Pawn){
				if (board[i][v].color == 'white') {
					let pawn =  document.createElement('img')
					pawn.setAttribute('src', 'img/white_pawn.png')
					col.appendChild(pawn)
				} else if (board[i][v].color == 'black') {
					let pawn =  document.createElement('img')
					pawn.setAttribute('src', 'img/black_pawn.png')
					col.appendChild(pawn)
				}
			}
			if(board[i][v] instanceof Knight){
				if (board[i][v].color == 'white') {
					let knight =  document.createElement('img')
					knight.setAttribute('src', 'img/white_knight.png')
					col.appendChild(knight)
				} else if (board[i][v].color == 'black') {
					let knight =  document.createElement('img')
					knight.setAttribute('src', 'img/black_knight.png')
					col.appendChild(knight)
				}
			}
			if(board[i][v] instanceof Bishop){
				if (board[i][v].color == 'white') {
					let bishop =  document.createElement('img')
					bishop.setAttribute('src', 'img/white_bishop.png')
					col.appendChild(bishop)
				} else if (board[i][v].color == 'black') {
					let bishop =  document.createElement('img')
					bishop.setAttribute('src', 'img/black_bishop.png')
					col.appendChild(bishop)
				}
			}
			if(board[i][v] instanceof Queen){
				if (board[i][v].color == 'white') {
					let queen =  document.createElement('img')
					queen.setAttribute('src', 'img/white_queen.png')
					col.appendChild(queen)
				} else if (board[i][v].color == 'black') {
					let queen =  document.createElement('img')
					queen.setAttribute('src', 'img/black_queen.png')
					col.appendChild(queen)
				}
			}
			if(board[i][v] instanceof King){
				if (board[i][v].color == 'white') {
					let king =  document.createElement('img')
					king.setAttribute('src', 'img/white_king.png')
					col.appendChild(king)
				} else if (board[i][v].color == 'black') {
					let king =  document.createElement('img')
					king.setAttribute('src', 'img/black_king.png')
					col.appendChild(king)
				}
			}

			if(i%2 == v%2) {
            	col.style.backgroundColor = "white";
        	}
            else {
            	col.style.backgroundColor = "grey";
        	}
        	row.appendChild(col)
        	row.style.width = '100%'
        	row.style.margin = '0px'
		}
		father.appendChild(row)

	}
}
function showBoard() {
	console.log('\n=========================================\n\n')
	for (let i=0; i< board.length; i++) {
		console.log('' + board[i][0] + board[i][1] + board[i][2] + board[i][3] + board[i][4] + board[i][5] + board[i][6] + board[i][7])
	}
	console.log('player1: ' + player1.name + '\tpieces taken: ' + player1.piecesTaken);
	console.log('player2: ' + player2.name + '\tpieces taken: ' + player2.piecesTaken);
}

function makeBoard() {
	board = [[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0]];
	bk1 = new Knight(0,0,'black');
	br1 = new Rook(1,0,'black');
	bb1 = new Bishop(2,0,'black');
	bq = new Queen(3,0,'black');
	bk = new King(4,0,'black');
	bb2 = new Bishop(5,0,'black');
	br2 = new Rook(6,0,'black');
	bk2 = new Knight(7,0,'black');
	bp1 = new Pawn(0,1,'black');
	bp2 = new Pawn(1,1,'black');
	bp3 = new Pawn(2,1,'black');
	bp4 = new Pawn(3,1,'black');
	bp5 = new Pawn(4,1,'black');
	bp6 = new Pawn(5,1,'black');
	bp7 = new Pawn(6,1,'black');
	bp8 = new Pawn(7,1,'black');

	wp1 = new Pawn(0,6,'white');
	wp2 = new Pawn(1,6,'white');
	wp3 = new Pawn(2,6,'white');
	wp4 = new Pawn(3,6,'white');
	wp5 = new Pawn(4,6,'white');
	wp6 = new Pawn(5,6,'white');
	wp7 = new Pawn(6,6,'white');
	wp8 = new Pawn(7,6,'white');
	wk1 = new Knight(0,7,'white');
	wr1 = new Rook(1,7,'white');
	wb1 = new Bishop(2,7,'white');
	wq = new Queen(3,7,'white');
	wk = new King(4,7,'white');
	wb2 = new Bishop(5,7,'white');
	wr2 = new Rook(6,7,'white');
	wk2 = new Knight(7,7,'white');
}

function isValidBoardLocation(x, y) {
	if (x < 0 || y < 0) {
		console.log('Error: invalid movement parameter, Location offstage');
		return false;
	} else if (y > board.length || x > board[y].length) {
		console.log('Error: invalid movement parameter, Location offstage');
		return false;
	} else if (board[y][x].color != undefined) {
		if (board[y][x].color == this.color) {
			console.log('Error: invalid movement parameter, cannot overtake ally pieces');
		return false;
		}
	}
	return true;
}

function isPiece(x, y) {
	if (board[y][x] != 0) {
		return true;
	} else {
		return false;
	}
}

function makeGame(player1Name, player2Name) {
	makeBoard();
	playerTurn = 1;
	player1 = new Player('white', player1Name, 1);
	player2 = new Player('black', player2Name, 2);
}

class Player {
	constructor(col, name, playerNumber) {
		this.playerNumber = playerNumber;
		this.name = name;
		this.color = col;
		this.piecesTaken = [];
	}

	movePiece(piece, x, y) {
		console.log('player turn is: ' + playerTurn);
		if (this.playerNumber != playerTurn) {
			console.log('please wait your turn, ' + this.name);
			return;
		}
		if (piece.color == this.color) {
			piece.move(x, y, this);
			if (playerTurn == 1) {playerTurn ++;}
			else if(playerTurn == 2) {playerTurn --;}
		} else {
			console.log('Error: player ' + this.name + ' is not allowed to move ' + piece.color + ' pieces.');
		}
	}
}

class ChessPiece {
	constructor(x, y, col) {
		this.x = x;
		this.y = y;
		this.color = col;
		board[y][x] = this;
	}

	move(x, y, player) {
		if (this.x == x && this.y == y) {
			console.log('Error: invalid movement parameter, unit cannot stand still');
		} else if (isValidBoardLocation(x, y)) {
			if (isPiece(x,y)) {
				player.piecesTaken.push(board[y][x]);
			}
			board[y][x] = this;
			board[this.y][this.x] = 0;
			this.y = y;
			this.x = x;
		}
	}

	toString() {
		return `|${this.color}`;
	}
}

class Pawn extends ChessPiece {
	constructor(x, y, col) {
		super(x, y, col)
	}

	move(x, y, player) {
		if (!isValidBoardLocation(x, y)) {
			return;
		}
		if (this.color == 'black') {
			if ((y - this.y) == 1 && x == this.x && !isPiece(x,y)) {
				super.move(x,y, player);
			} else if (y - this.y && (x == this.x-1 || x == this.x+1) && isPiece(x,y)) {
				super.move(x,y, player);
			} else {
			console.log('Error: invalid movemenet paramater, illegal move');
			}
		} else if (this.color == 'white') {
			if ((this.y - y) == 1 && x == this.x && !isPiece(x,y)) {
				super.move(x,y, player);
			} else if ((this.y - y) == 1 && (x == this.x-1 || x == this.x+1) && isPiece(x,y)) {
				super.move(x,y, player);
			} else {
			console.log('Error: invalid movemenet paramater, illegal move');
			}
		}
	}

	toString() {
		return `${super.toString()} Pawn`;
	}
}

class Bishop extends ChessPiece {
	constructor(x, y, col) {
		super(x, y, col)
	}

	move(x, y, player) {
		if (Math.abs(this.x - x) == Math.abs(y - this.y)) {
			super.move(x,y,player);
		} else {
			console.log('Error: invalid movement parameter, illegal move');
		}
	}

	toString() {
		return `${super.toString()} Bishop`;
	}
}

class Knight extends ChessPiece {
	constructor(x, y, col) {
		super(x, y, col)
	}

	move(x, y, player) {
		if (this.x == x) {
			super.move(x,y,player);
		} else if (this.y == y) {
			super.move(x,y,player);
		} else {
			console.log('Error: invalid movement parameter, illegal move');
		}
	}

	toString() {
		return `${super.toString()} Knight`;
	}
}

class Rook extends ChessPiece {
	constructor(x, y, col) {
		super(x, y, col)
	}

	move(x, y, player) {
		if (isValidBoardLocation(x, y)) {
			if (Math.abs(this.x - x) == 1 && Math.abs(this.y - y) == 2) {
				super.move(x, y, player);
			} else if (Math.abs(this.x -x) == 2 && Math.abs(this.y - y) == 1) {
				super.move(x, y, player);
			} else {
				console.log('Error: invalid movement parameter, illegal move');
			}
		}
	}

	toString() {
		return `${super.toString()} Rook`;
	}
}

class Queen extends ChessPiece {
	constructor(x, y, col) {
		super(x, y, col)
	}

	move(x, y, player) {
		if (Math.abs(this.x - x) == Math.abs(y - this.y)) {
			super.move(x,y,player);
		} else if (this.x == x) {
			super.move(x,y,player);
		} else if (this.y == y) {
			super.move(x,y,player);
		} else {
			console.log('Error: invalid movement parameter, illegal move');
		}
	}

	toString() {
		return `${super.toString()} Queen`;
	}
}

class King extends ChessPiece {
	constructor(x, y, col) {
		super(x, y, col)
	}

	move(x, y, player) {
		if (Math.abs(x - this.x) <= 1 && Math.abs(y - this.y) <= 1) {
			super.move(x, y, player);
		} else {
			console.log('Error: invalid movement paramenter, illegal move');
		}
	}

	toString() {
		return `${super.toString()} King`;
	}
}


makeGame('Andrew', 'Daniel');
showBoard();
player1.movePiece(board[6][0], 0, 5);
drawBoard();
