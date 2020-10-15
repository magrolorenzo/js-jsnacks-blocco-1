// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

var array_numeri =[];
var numero_inserito;
var somma = 0;

for (var i = 0; i < 5; i++) {
    numero_inserito = parseInt( prompt('Inserisci il numero alla posizione ' + i ) );
    if( isNaN(numero_inserito) ){
        alert('Input non valido');
    } else{
        array_numeri.push(numero_inserito);
        console.log(array_numeri);
    }
}

for (var i = 0; i < array_numeri.length; i++) {
    somma = somma + array_numeri[i];
}

console.log('La somma totale dei numeri nel array è: ' + somma);
