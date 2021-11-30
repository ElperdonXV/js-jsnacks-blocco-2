//Crea un array di numeri interi e fai la somma 
//di tutti gli elementi che sono in posizione dispari
const num = ['2', '4', '6', '8', '10', '12'];
let somma = parseInt(0);
for (let i=0; i<num.length; i++){
    if(i % 2 != 0){
        num[i] = parseInt(num[i]);
        somma = somma + num[i];
    }
}
console.log(somma);