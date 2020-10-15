// Stampa le potenze di 2 senza superare il numero 1000.

var base = 2;
var esponente = 0;

for (var potenza = 1; potenza < 1000; esponente++) {

    if (esponente == 0) {
        // Se è elevato alla 0 risulta 1
        console.log(' Il numero ' + base + ' elevato alla potenza di ' + esponente + ' è ' + potenza );
    } else {
        // Devo moltiplicare la base a se stessa tante qualte volte è indicatlo dall esponente
        potenza = potenza  * base;
        if (potenza <= 1000) {
            console.log(' Il numero ' + base + ' elevato alla potenza di ' + esponente + ' è ' + potenza );
        }
    }
}
