// Calcola la somma e la media dei numeri da 1 a 10.

var min = 1;
var max = 10;

var somma = 0;
var media = 0;

for (var i = 1; i <= max; i++) {
    somma = somma + i;
    console.log(somma);
}

console.log('La somma di tutti i numeri da ' + min +' a ' + max + ' è ' + somma);
media = somma / max;
console.log(media);
