const main = document.querySelector("main");
const numerals = document.querySelectorAll(".numeral");
const erase = document.querySelector('.erase');
let limit = 9;
let numberCell = 0;
const cells = [];
const squads = [];
let selectedCell;
let column = 1;
let line = 1;

// Building cells
const createElement = (name) => {
    const div = document.createElement('div');
    div.className = `${name}`;
    return div;
}

const buildSquad = (i) => {
    const squad = createElement(`squad ${i + 1}`);
    main.appendChild(squad);
    buildCell(squad);
    squads.push(squad);
}

// function clicking on cells
const handleClick = (element) => {
    // select or unselect the same cell
    if(element == selectedCell) {
        element.classList.remove("selected");
        selectedCell = undefined;
    } else {
        cells.forEach(c => c.classList.remove("selected"));
        element.classList.toggle("selected");
        selectedCell = element;
    }
}

const buildCell = (squad) => {
    const numbSquad = Number(squad.classList[1]);
    // columns variable
    if(numbSquad == 1 || numbSquad == 4 || numbSquad == 7) {column = 1}
    if(numbSquad == 2 || numbSquad == 5 || numbSquad == 8) {column = 4}
    if(numbSquad == 3 || numbSquad == 6 || numbSquad == 9) {column = 7}
    // lines variable
    if(numbSquad == 1 || numbSquad == 2 || numbSquad == 3) {line = 1}
    if(numbSquad == 4 || numbSquad == 5 || numbSquad == 6) {line = 4}
    if(numbSquad == 7 || numbSquad == 8 || numbSquad == 9) {line = 7}

    for(let i = 0; i < limit; i++) {
        const cell = createElement(`cell cell${numberCell + 1}`);
        squad.appendChild(cell);
        numberCell = numberCell + 1;
        cells.push(cell);

        // numbering columns of cells
            if(numbSquad == 1 || numbSquad == 4 || numbSquad == 7) {
                cell.classList.add(`column${column}`);
                column++;
                if(column % 4 == 0) column = 1;
            }
            if(numbSquad == 2 || numbSquad == 5 || numbSquad == 8) {
                cell.classList.add(`column${column}`);
                column++;
                if(column % 7 == 0) column = 4;
            }
            if(numbSquad == 3 || numbSquad == 6 || numbSquad == 9) {
                cell.classList.add(`column${column}`);
                column++;
                if(column % 10 == 0) column = 7;
            }

            // numbering lines of cells
            if(numbSquad == 1 || numbSquad == 2 || numbSquad == 3) {
                cell.classList.add(`line${line}`);
                if(numberCell % 3 == 0) line++;
            }
            if(numbSquad == 4 || numbSquad == 5 || numbSquad == 6) {
                cell.classList.add(`line${line}`);
                if(numberCell % 3 == 0) line++;
            }
            if(numbSquad == 7 || numbSquad == 8 || numbSquad == 9) {
                cell.classList.add(`line${line}`);
                if(numberCell % 3 == 0) line++;
            }
        

        cell.onclick = () => {handleClick(cell)}
    }
}

numerals.forEach (numeral => {
    numeral.onclick = () => {
        if(selectedCell) {
            const number = Number(numeral.textContent);
            selectedCell.textContent = number;
        } else {
            alert("Você precisa selecionar uma célula primeiro!");
        }
    }
});

document.addEventListener('keypress', (value) => {
    if(selectedCell != undefined) {
        number = Number(value.key);

        // see if the value is a number different of 0
        if(!isNaN(number) && number != 0) {
            selectedCell.textContent = number;
        }
    }
})

erase.onclick = () => {
    selectedCell.textContent = null;
}

// start of all functions
for(let i = 0; i < limit; i++) {
    buildSquad(i);
}


// build the game
// sort some squad to start the game
const sort = (element) => {
    const sortedNumber =Math.floor(Math.random() * 10);
    const sortedElement = element[sortedNumber];
    return sortedElement;
}

const sortedSquad = sort(squads);
console.log(sortedSquad);