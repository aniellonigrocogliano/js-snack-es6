biciclette = [
    {
        nome: "Mountain Bike",
        peso: 12
    },
    {
        nome: "Bici da Corsa",
        peso: 9
    },
    {
        nome: "BMX",
        peso: 10,
    },
    {
        nome: "Bici da città",
        peso: 15,
    },
    {
        nome: "Bici pieghevole",
        peso: 7,
    },
    {
        nome: "Bici da montagna",
        peso: 11,
    },
    {
        nome: "Bici da viaggio",
        peso: 13,
    },
    {
        nome: "Bici da trekking",
        peso: 14,
    },
    {
        nome: "Bici da cicloturismo",
        peso: 12,
    },
    {
        nome: "Bici da pista",
        peso: 8,
    }
];
function CercaBiciMinore(bici) {
    let pesoFinale=bici[0].peso; // creo variabile di appoggio dove salvare il peso minore e l'inizializzo con il valore della prima bici
    let biciFinale=bici[0].nome; // creo variabile di appoggio dove salvare il nome della bici col peso minore e l'inizializzo con il valore della prima bici
    bici.forEach((curBici) => {
        const {nome, peso,} = curBici; // prelevo nome e peso dall'oggetto
        if(peso<pesoFinale){ // verifico che il peso della bici della corrente iterazione sia minore della variabile di appoggio se si sostituisco entrambe le variabili di apppogio con il valore corrente
            pesoFinale=peso;
            biciFinale=nome;
        }
    });   
    console.log(pesoFinale, biciFinale) // stampo in console
    document.getElementById("result").innerHTML = `Nome bici: ${biciFinale} - Peso bici: ${pesoFinale} Kg` // stampo a video
}
CercaBiciMinore(biciclette); // richiamo funzione