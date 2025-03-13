const main = document.querySelector("main");
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

const buildSquad = () => {
    const squad = createElement("squad");
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

// start of all functions
for(let i = 0; i < limit; i++) {
    buildSquad();
}