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
    for (let i = 1; i <= 100; i++){
        //dichiaro la variabile n che farà da contatore aLLe interazioni
        let n = i;
        //dichiaro la funzione che crea i quadrati
        const newElement = creaElem('div', 'square');
        //creo la variabile che contiene il numero della casella iterata
        let nCasella = document.createTextNode(`${n}`);
        //e lo appendo alla casella generata
        newElement.append(nCasella);
        //evento click sulla casella iterata
        newElement.addEventListener('click',
        function() {
            console.log('Hai cliccato la casella n°' + i);
            newElement.classList.add('clicked');
        }
        
       );
       //appendo alla griglia 100 volte la funzione che crea i quadratini
       grid.append(newElement);
       
    }

    //funzione crea quadratimi
    function creaElem(tagType, classname) {
        const elementoCorrente = document.createElement(tagType);
        elementoCorrente.classList.add(classname);
        

        return elementoCorrente;
    }
    }
);