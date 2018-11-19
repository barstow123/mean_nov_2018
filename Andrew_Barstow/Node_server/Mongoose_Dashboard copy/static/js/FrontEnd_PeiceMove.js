
var board = [
['8a','8b','8c','8d','8e','8f','8g','8h'],
['7a','7b','7c','7d','7e','7f','7g','7h'],
['6a','6b','6c','6d','6e','6f','6g','6h'],
['5a','5b','5c','5d','5e','5f','5g','5h'],
['4a','4b','4c','4d','4e','4f','4g','4h'],
['3a','3b','3c','3d','3e','3f','3g','3h'],
['2a','2b','2c','2d','2e','2f','2g','2h'],
['1a','1b','1c','1d','1e','1f','1g','1h']
];

function drawBoard() {
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
			if(i == 0 && v == 3){
				white_king = document.createElement('img')
				white_king.setAttribute('src', 'img/white_king.png')
				col.appendChild(white_king)
			}
			if(i == 7 && v == 3){
				black_king = document.createElement('img')
				black_king.setAttribute('src', 'img/black_king.png')
				col.appendChild(black_king)
			}
			if(i == 0 && v == 4){
				white_queen = document.createElement('img')
				white_queen.setAttribute('src', 'img/white_queen.png')
				col.appendChild(white_queen)
			}
			if(i == 7 && v == 4){
				black_queen = document.createElement('img')
				black_queen.setAttribute('src', 'img/black_queen.png')
				col.appendChild(black_queen)
			}
			if(i == 0 && v == 2 || i == 0 && v == 5){
				white_bishop = document.createElement('img')
				white_bishop.setAttribute('src', 'img/white_bishop.png')
				col.appendChild(white_bishop)
			}
			if(i == 7 && v == 2 || i == 7 && v == 5){
				black_bishop = document.createElement('img')
				black_bishop.setAttribute('src', 'img/black_bishop.png')
				col.appendChild(black_bishop)
			}
			if(i == 0 && v == 1 || i == 0 && v == 6){
				white_knight = document.createElement('img')
				white_knight.setAttribute('src', 'img/white_knight.png')
				col.appendChild(white_knight)
			}
			if(i == 7 && v == 1 || i == 7 && v == 6){
				black_knight = document.createElement('img')
				black_knight.setAttribute('src', 'img/black_knight.png')
				col.appendChild(black_knight)
			}
			if(i == 0 && v == 0 || i == 0 && v == 7){
				white_rook = document.createElement('img')
				white_rook.setAttribute('src', 'img/white_rook.png')
				col.appendChild(white_rook)
			}
			if(i == 7 && v == 0 || i == 7 && v == 7){
				black_rook = document.createElement('img')
				black_rook.setAttribute('src', 'img/black_rook.png')
				col.appendChild(black_rook)
			}
			if(i == 1){
				white_pawn = document.createElement('img')
				white_pawn.setAttribute('src', 'img/white_pawn.png')
				col.appendChild(white_pawn)
			}
			if(i == 6){
				black_pawn = document.createElement('img')
				black_pawn.setAttribute('src', 'img/black_pawn.png')
				col.appendChild(black_pawn)
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

drawBoard()
