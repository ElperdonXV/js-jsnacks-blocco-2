//Generatore di “nomi cognomi” casuali: 
//prendendo una lista di nomi e una lista di cognomi, 
//Gatsby vuole generare una falsa lista di invitati.

const nomi = ['Carmelo', 'Andrea', 'Gianni', 'Davide', 'Gennaro', 'Michele', 'Sara', 'Anna', 'Rosita'];
const cognomi = ['De Martino', 'Di Lucca', 'Di Francesco', 'Cundari', 'Pennisi', 'Testina', 'Snack', 'John', 'Depp'];
let invitati = [];
function randomRangeNumber(number) {
    number = parseInt(Math.floor(Math.random() * (max - min) + min));
    return number;
}
const min = 0;
const max = 9;
for (let i=0; i<9; i++){
    let randomPull = randomRangeNumber(min, max);
    invitati.push(nomi[i] + ' ' + cognomi[randomPull]);
}
console.log(invitati);