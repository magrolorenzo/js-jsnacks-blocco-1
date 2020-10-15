// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var n1 = parseInt( prompt('Inserire il primo numero') );

var n2 = parseInt( prompt('Inserire il secondo numero') );


if(isNaN(n1) == false){
    if(isNaN(n2) == false){
        if ( n1 > n2){
            alert('Il PRIMO numero è più grande del secondo --> ' + n1);
        } else if ( n2 > n1){
            alert('Il SECONDO numero è più grande del secondo --> ' + n2);
        } else {
            alert('Hai inserito due volte il numero ' + n1);
        }
    } else {
        alert('Il SECONDO input non è un numero --> ' + n2);
    }
} else {
    alert('Il PRIMO input non è un numero --> ' + n1);
}
