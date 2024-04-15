const squadre = [
    { nome: "Draghi Volanti", punti: 0, falli: 0 },
    { nome: "Leoni Rampanti", punti: 0, falli: 0 },
    { nome: "Tigri Saltanti", punti: 0, falli: 0 },
    { nome: "Pantere Veloci", punti: 0, falli: 0 },
    { nome: "Falchi Feroci", punti: 0, falli: 0 },
    { nome: "Lupi Selvaggi", punti: 0, falli: 0 },
    { nome: "Orsi Giganti", punti: 0, falli: 0 },
    { nome: "Aquile Imperiali", punti: 0, falli: 0 },
    { nome: "Squali Assassini", punti: 0, falli: 0 },
    { nome: "Puma Agili", punti: 0, falli: 0 },
    { nome: "Coccodrilli Distruttori", punti: 0, falli: 0 },
    { nome: "Ragni Velenosi", punti: 0, falli: 0 },
    { nome: "Lucci Argentati", punti: 0, falli: 0 },
    { nome: "Gufi Silenziosi", punti: 0, falli: 0 },
    { nome: "Cavalli Impetuosi", punti: 0, falli: 0 },
    { nome: "Elefanti Difensori", punti: 0, falli: 0 },
    { nome: "Unicorno Incantato", punti: 0, falli: 0 },
    { nome: "Grifoni Maestosi", punti: 0, falli: 0 },
    { nome: "Fenici Ardenti", punti: 0, falli: 0 },
    { nome: "Ippogrifi Volanti", punti: 0, falli: 0 }
];
function generaValoriRandom(squadre) {
    for (let i = 0; i < squadre.length; i++) {
        squadre[i].punti = Math.floor(Math.random() * 100); // aggiungo un valore random ai punti
        squadre[i].falli = Math.floor(Math.random() * 100); // aggiungo un valore random ai falli
    }      
}
generaValoriRandom(squadre);
console.log(squadre)