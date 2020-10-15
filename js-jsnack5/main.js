// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

var numeroMax = parseInt ( prompt('Inserisci un numero') );
console.log(numeroMax);
var cubo = 0;

if ( !isNaN(numeroMax) ){
    for (var i = 1; i <= numeroMax; i++) {
        cubo = i*i;
        console.log('Il cubo di ' + i + '  uguale a: ' + cubo);
    }
} else {
    alert('Input non valido');
}
