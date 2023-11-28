/*
Consegna)
    1   -   L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
    2   -   Ogni cella ha un numero progressivo, da 1 a 100.
    3   -   Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    4   -   Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/
// dichiarazione della variabile bottone
const playButton = document.getElementById('play');
console.log(playButton);

const playArea = document.querySelector('.bg-acquamarine');
console.log(playArea);

// event listener al bottone
playButton.addEventListener('click', function(){

    // dichiarazione della variabile grid
    let grid = document.createElement('div');
    // gli aggiungo la calsse grid
    grid.classList.add('grid');
    console.log(grid);
    //al click si aggancia l'elemento creato
    playArea.append(grid);

    //creazione quadratini nella griglia principale
    //ciclo 100 volte la creazione del quadratino
    for (let i = 0; i < 100; i++){
        
    }


    function creaElem(tagType, classname) {

    }
    }
);