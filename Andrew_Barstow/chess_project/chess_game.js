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
	br1 = new Rook(0,0,'black');
	bk1 = new Knight(1,0,'black');
	bb1 = new Bishop(2,0,'black');
	bq = new Queen(3,0,'black');
	bk = new King(4,0,'black');
	bb2 = new Bishop(5,0,'black');
	bk2 = new Knight(6,0,'black');
	br2 = new Rook(7,0,'black');
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
	wr1 = new Rook(0,7,'white');
	wk1 = new Knight(1,7,'white');
	wb1 = new Bishop(2,7,'white');
	wq = new Queen(3,7,'white');
	wk = new King(4,3,'white');
	wb2 = new Bishop(5,7,'white');
	wk2 = new Knight(6,7,'white');
	wr2 = new Rook(7,7,'white');
	whitePieces = [wp1,wp2,wp3,wp4,wp5,wp6,wp7,wp8,wk1,wk2,wr1,wr2,wb1,wb2,wq,wk];
	blackPieces = [bp1,bp2,bp3,bp4,bp5,bp6,bp7,bp8,bk1,bk2,br1,br2,bb1,bb2,bq,bk];
}

function isValidBoardLocation(x, y) {
	if (x < 0 || y < 0) {
		console.log('Error: invalid movement parameter, Location offstage');
		return false;
	} else if (y >= board.length || x >= board[y].length) {
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

function isCheck(player) {
	console.log('checking isCheck');
	if (player == player1) {
		var color = 'white';	//color of the player who is being checked for isCheck
		var pieces = whitePieces;
	}	else if(player == player2) {
		var color = 'black';
		var pieces = blackPieces;
	}
	var king = pieces[15];
	//console.log(`king is ${king} x:${king.x} y:${king.y}`);

	for (let y=0; y<board.length; y++) {
		for (let x=0; x<board[y].length; x++) {
			if (isPiece(x,y)) {
				piece = board[y][x];
				if (piece.color == player.color) {
					continue;
				}
				if (piece instanceof Pawn) {
					//console.log('checking pawn, x:' + piece.x + ' y: ' + piece.y);
					if (piece.color == 'white') {
						if (isValidBoardLocation(x+1,y-1)) {
							if (board[y-1][x+1] == king) {
								return true;
							}
						} 
						if (isValidBoardLocation(x-1,y-1)) {
							if (board[y-1][x-1] == king) {
								return true;
							}
						}
					} else if(piece.color == 'black') {
						if (isValidBoardLocation(x+1,y+1)) {
							if (board[y+1][x+1] == king) {
								return true;
							}
						} 
						if (isValidBoardLocation(x-1,y+1)) {
							if (board[y+1][x-1] == king) {
								return true;
							}
						}
					}
				} else if (piece instanceof Bishop) {
					//console.log('checking bishop');
					let i = 1;
					while(isValidBoardLocation(x+i,y+i)) {
						if (board[y+i][x+i] == king) {
							return true;
						} else {
							break;
						}
						i++;
					}
					i = 1;
					while(isValidBoardLocation(x+i,y-i)) {
						if (board[y-i][x+i] == king) {
							return true;
						} else {
							break;
						}
						i++;
					}
					i = 1;
					while(isValidBoardLocation(x-i,y+i)) {
						if (board[y+i][x-i] == king) {
							return true;
						} else {
							break;
						}
						i++;
					}
					i = 1;
					while(isValidBoardLocation(x-i,y-i)) {
						if (board[y-i][x-i] == king) {
							return true;
						} else {
							break;
						}
						i++;
					}
				} else if(piece instanceof Knight) {
					//console.log('checking knight');
					if (Math.abs(king.x - piece.x) == 2 && Math.abs(king.y - piece.y) == 1) {
						return true;
					}
					if (Math.abs(king.x - piece.x) == 1 && Math.abs(king.y - piece.y) == 2) {
						return true;
					}
				} else if(piece instanceof Rook) {
					//console.log('checking rook, x:' + piece.x + ' y: ' + piece.y);
					let i=1;
					while(isValidBoardLocation(x+i,y)) {
						if (isPiece(x+i, y)) {
							if(board[y][x+i] == king) {
								return true;
							} else {
								break;
							}
						}
						i++;
					}
					i = 1;
					while(isValidBoardLocation(x-i, y)) {
						if (isPiece(x-i, y)) {
							if (board[y][x-i] == king) {
								return true;
							} else {
								break;
							}
						}
						i--;
					}
					i = 1;
					while(isValidBoardLocation(x, y+i)) {
						if (isPiece(x,y+i)) {
							if (board[y+i][x] == king) {
								return true;
							} else {
								break;
							}
						}
						i++;
					}
					i = 1;
					while(isValidBoardLocation(x, y-1)) {
						if (isPiece(x, y-i)) {
							if (board[y-i][x] == king) {
								return true;
							} else {
								break;
							}
						}
						i--;
					}
				} else if(piece instanceof Queen) {
					//console.log('checking queen');
					let i = 1;
					while(isValidBoardLocation(x+i,y+i)) {
						if (board[y+i][x+i] == king) {
							return true;
						} else {
							break;
						}
						i++;
					}
					i = 1;
					while(isValidBoardLocation(x+i,y-i)) {
						if (board[y-i][x+i] == king) {
							return true;
						} else {
							break;
						}
						i++;
					}
					i = 1;
					while(isValidBoardLocation(x-i,y+i)) {
						if (board[y+i][x-i] == king) {
							return true;
						} else {
							break;
						}
						i++;
					}
					i = 1;
					while(isValidBoardLocation(x-i,y-i)) {
						if (board[y-i][x-i] == king) {
							return true;
						} else {
							break;
						}
						i++;
					}
					i = 1;
					while(isValidBoardLocation(x+i,y)) {
						if (isPiece(x+i, y)) {
							if(board[y][x+i] == king) {
								return true;
							} else {
								break;
							}
						}
						i++;
					}
					i = 1;
					while(isValidBoardLocation(x-i, y)) {
						if (isPiece(x-i, y)) {
							if (board[y][x-i] == king) {
								return true;
							} else {
								break;
							}
						}
						i--;
					}
					i = 1;
					while(isValidBoardLocation(x, y+i)) {
						if (isPiece(x,y+i)) {
							if (board[y+i][x] == king) {
								return true;
							} else {
								break;
							}
						}
						i++;
					}
					i = 1;
					while(isValidBoardLocation(x, y-1)) {
						if (isPiece(x, y-i)) {
							if (board[y-i][x] == king) {
								return true;
							} else {
								break;
							}
						}
						i--;
					}
				} else if(piece instanceof King) {
					//console.log('checking king');
					if (Math.abs(king.x - x) == 1 && Math.abs(king.y - y ==1)) {
						return true;
					} else if (Math.abs(king.x - x) == 1 && king.y == y) {
						return true;
					} else if (king.x == x && Math.abs(king.y == y)) {
						return true;
					}
				}
			}
		}
	}
	return false;
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
		this.self = this;
	}

	movePiece(piece, x, y) {
		console.log('player turn is: ' + playerTurn);
		if (this.playerNumber != playerTurn) {
			console.log('please wait your turn, ' + this.name);
			return;
		}
		if (piece.color == this.color) {
			piece.move(x, y, this.self);
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
		this.self = this;
		board[y][x] = this.self;
	}

	move(x, y, player) {
		if (this.x == x && this.y == y) {
			console.log('Error: invalid movement parameter, unit cannot stand still');
		} else if (isValidBoardLocation(x, y)) {
			if (isPiece(x,y)) {
				player.piecesTaken.push(board[y][x]);
			}
			board[y][x] = this.self;
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
player1.movePiece(wp1, 0,5);
showBoard();
player2.movePiece(bp1, 0,2);
showBoard();
console.log(`player1 is ${isCheck(player1)}`);
console.log(`player2 is ${isCheck(player2)}`);