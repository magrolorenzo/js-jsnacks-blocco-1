// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

var array_dispari = [];
var numero_inserito;

for (var i = 0; i < 6; i++) {
    numero_inserito = parseInt( prompt('Inserisci un numero') );
    if( isNaN(numero_inserito) ){
        alert('Input non valido');
    } else {
        if (numero_inserito % 2 != 0) {
            array_dispari.push(numero_inserito);
            console.log('Numero dispari Inserito --> ' + numero_inserito);
        } else {
            console.log('Numero pari NON Inserito --> ' + numero_inserito);
        }
    }
}

console.log(array_dispari);
