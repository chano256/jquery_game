/*
$('h1').click(function() {
	$(this).text("Learning JQuery")
})
$('input').eq(0).keypress(function(event) {
	if(event.which === 13) {
		$('h1').toggleClass('turnBlue');
	}
})
$('input').eq(1).on('click', function() {
	$('container').slideUp(3000);
})
*/

var player1 = prompt("(Blue color), Player 1 Enter Name: ");
var player1color = 'rgb(86, 151, 255)';

var player2 = prompt("(Red color), Player 2 Enter Name: ");
var player2color = 'rgb(237, 45, 73)';

var game_on = true;
var table = $('table tr');

function reportWin(rowNum, colNum) {
	console.log("You won starting at this row, col");
	console.log(rowNum)
	console.log(colNum)
}
function changeColor(rowIndex, colIndex, color) {
	return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}
function returnColor(rowIndex, colIndex) {
	return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}
function checkBottom(colIndex) {
	var colorReport = returnColor(5, colIndex);
	
	for(var row = 5; row > -1; row--) {
		colorReport = returnColor(row, colIndex);
		if(colorReport === 'rgb(128, 128, 128)') {
			return row
		}
	}
}

function colorMatchCheck(one, two, three, four) {
	return(one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one!== undefined)
}

function horizontalWinCheck() {
	for(var row = 0; row < 6; row++) {
		for(var col = 0; col < 4; col++) {
			if(colorMatchCheck(returnColor(row, col), returnColor(row, col+1), returnColor(row, col+2))) {
				console.log("horizontal");
				reportWin(row, col);
				return true;
			} else {
				continue;
			}
		}
	}
}

function verticalWinCheck() {
	for(var row = 0; row < 7; row++) {
		for(var col = 0; col < 3; col++) {
			if(colorMatchCheck(returnColor(row, col), returnColor(row, col+1), returnColor(row, col+2))) {
				console.log("vertical");
				reportWin(row, col);
				return true;
			} else {
				continue;
			}
		}
	}
}

function diagonalWinCheck() {
	for(var row = 0; row < 5; row++) {
		for(var col = 0; col < 7; col++) {
			if(colorMatchCheck(returnColor(row, col), returnColor(row+1, col+1), returnColor(row+2, col+2))) {
				console.log("diagonal");
				reportWin(row, col);
				return true;
			} if(colorMatchCheck(returnColor(row, col), returnColor(row-1, col+1), returnColor(row-1, col+2))) {
				console.log("diagonal");
				reportWin(row, col);
				return true;
			} else {
				continue;
			}
		}
	}
}

var currentPlayer = 1;
var currentName = player1;
var currentColor = player1Color;

$('h3').text(player1+" it is your turn, pick a column")

$('.board button').on('click', function() {
	var col = $(this).closest('td').index();
	var bottomAvail = checkBottom(col);
	changeColor(bottomAvail, col, currentColor);
	if(horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
		$('h1').text(currentName+"You have won");
		$('h3').fadeOut('fast');
		$('h3').fadeOut('fast');
	}
	
	currentPlayer = currentPlayer * -1;
	
	if(currentPlayer === 1) {
		currentPlayer = player1;
		$('h3').text(currentName+" it is your turn");
		currentColor = player1Color;
	} else {
		currentPlayer = player2;
		$('h3').text(currentName+" it is your turn");
		currentColor = player2Color;
	}
})







