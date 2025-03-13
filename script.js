const main = document.querySelector("main");
let limit = 9;
let numberCell = 0;

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

const buildCell = (squad) => {
    for(let i = 0; i < limit; i++) {
        const cell = createElement(`cell "${numberCell}"`);
        squad.appendChild(cell);
        numberCell = numberCell + 1;
    }
}

for(let i = 0; i < limit; i++) {
    buildSquad();
}

// apenas um teste
// apenas um teste
// apenas um teste