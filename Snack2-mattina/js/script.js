const persone = [
    { nome: "Alice", cognome: "Smith", eta: 28 },
    { nome: "Bob", cognome: "Johnson", eta: 35 },
    { nome: "Charlie", cognome: "Williams", eta: 12 },
    { nome: "Diana", cognome: "Brown", eta: 15 },
    { nome: "Ethan", cognome: "Taylor", eta: 31 }
  ];
  let newArray=[];
for (let i = 0; i < persone.length; i++) {
   if(persone[i].eta<18){
    let result = persone[i].nome + " " + persone[i].cognome + " di età " + persone[i].eta + " non è idonea alla guida"
    newArray.push(result);
   }else{
        let result = persone[i].nome + " " + persone[i].cognome + " di età " + persone[i].eta + " è idonea alla guida"
        newArray.push(result);
   }
    
}
console.log(newArray)