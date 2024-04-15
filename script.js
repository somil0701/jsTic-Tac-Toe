const p1Symbol = 'X';
var p2Symbol;
var noError = true;
var gameOver = false;

var cells = document.querySelectorAll('.boxes');

function updateCell(cell, pSymbol) {
    cell.innerText = pSymbol;
}

function resetGame() {
    for (let cell of cells) {
        cell.innerText = '';
    }
}

function checkVictoryCondition(pSymbol) {
    if (cells[0].innerText === pSymbol && cells[1].innerText === pSymbol && cells[2].innerText === pSymbol) {
        return true;
    }
    if (cells[3].innerText === pSymbol && cells[4].innerText === pSymbol && cells[5].innerText === pSymbol) {
        return true;
    }
    if (cells[6].innerText === pSymbol && cells[7].innerText === pSymbol && cells[8].innerText === pSymbol) {
        return true;
    }
    if (cells[0].innerText === pSymbol && cells[3].innerText === pSymbol && cells[6].innerText === pSymbol) {
        return true;
    }
    if (cells[1].innerText === pSymbol && cells[4].innerText === pSymbol && cells[7].innerText === pSymbol) {
        return true;
    }
    if (cells[2].innerText === pSymbol && cells[5].innerText === pSymbol && cells[8].innerText === pSymbol) {
        return true;
    }
    if (cells[0].innerText === pSymbol && cells[4].innerText === pSymbol && cells[8].innerText === pSymbol) {
        return true;
    }
    if (cells[2].innerText === pSymbol && cells[4].innerText === pSymbol && cells[6].innerText === pSymbol) {
        return true;
    }
    return false;
}

do {
    if (p1Symbol === 'X') {
        p2Symbol = 'O';
    }
    else if (p1Symbol === 'O') {
        p2Symbol = 'X';
    }
    else {
        alert("Invalid symbol. Please choose X or O.");
        noError = false;
    }
} while (!noError);

for (let cell of cells) {
    var count = 0
    cell.addEventListener('click', () => {
        if (cell.innerText === '') {
            if (count % 2 === 0) {
                updateCell(cell, p1Symbol);
            }
            else {
                updateCell(cell, p2Symbol);
            }
            count++;
            if (checkVictoryCondition(p1Symbol)) {
                alert("Player 1 wins!");
                gameOver = true;
                setTimeout(() => {
                    resetGame();
                }, 3000);
            }
            else if (checkVictoryCondition(p2Symbol)) {
                alert("Player 2 wins!");
                gameOver = true;
                setTimeout(() => {
                    resetGame();
                }, 3000);
            }
            else if (count === 9) {
                alert("It's a draw!");
                gameOver = true;
                setTimeout(() => {
                    resetGame();
                }, 3000);
            }
        }
        else {
            alert("This cell is already taken. Please choose another cell.");
        }
    })
}

