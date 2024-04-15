const arrayEsempio = [ 23, 56, 87, 12, 45, 78, 34, 91, 67, 20, 5, 68, 33, 79, 14, 61, 99, 42, 77, 18, 37, 82, 11, 65, 28, 73, 50, 94, 39, 84, 9, 52, 25, 70, 16, 63, 88, 47, 81, 36, 7, 60, 31, 76, 22, 69, 96, 43, 75, 30
];
function troncamento(array, x, y) {
    let newArray = []; // creo il nuovo array
    if(x>y){
        return "Errore, il secondo parametro deve essere minore del terzo parametro"; // verifico che il primo numero sia minore rispetto il secondo
    }
    array.forEach((items, index) => {
        if (x <= index && y >= index) { // verifico che l'elemento sia nel range stabilito
            newArray.push(items); //se si lo inserisco nel nuovo array
        }
    })
    return newArray; // ritorno il nuovo array
}

let ex = troncamento(arrayEsempio, 5, 25);
console.log(ex);