const main = document.querySelector("main");
const numerals = document.querySelectorAll(".numeral");
const erase = document.querySelector('.erase')
let limit = 9;
let numberCell = 0;
const cells = [];
let selectedCell;

// Building cells
const createElement = (name) => {
    const div = document.createElement('div')
    div.className = `${name}`;
    return div;
}

const buildSquad = (i) => {
    const squad = createElement(`squad ${i}`);
    main.appendChild(squad);
    buildCell(squad);
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
    for(let i = 0; i < limit; i++) {
        const cell = createElement(`cell ${numberCell}`);
        squad.appendChild(cell);
        numberCell = numberCell + 1;
        cells.push(cell)

        cell.onclick = () => {handleClick(cell)}
    }
}

numerals.forEach (numeral => {
    numeral.onclick = () => {
        if(selectedCell) {
            const number = Number(numeral.textContent)
            selectedCell.textContent = number
        } else {
            alert("Você precisa selecionar uma célula primeiro!")
        }
    }
});

document.addEventListener('keypress', (value) => {
    if(selectedCell != undefined) {
        number = Number(value.key)

        // see if the value is a number different of 0
        if(!isNaN(number) && number != 0) {
            selectedCell.textContent = number
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
