const automobili = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
    { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "Audi", modello: "A3", alimentazione: "diesel" },
    { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
];
const benzina = [];
const diesel = [];
const altreAlimentazioni = [];
for (let i = 0; i < automobili.length; i++) {
    
    if(automobili[i].alimentazione==="benzina"){
        benzina.push(automobili[i]);
    }else if (automobili[i].alimentazione==="diesel"){
        diesel.push(automobili[i]);
    }else{
        altreAlimentazioni.push(automobili[i]);
    }

}
console.log(benzina)
console.log(diesel)
console.log(altreAlimentazioni)