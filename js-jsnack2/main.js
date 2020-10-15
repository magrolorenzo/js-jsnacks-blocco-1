
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

var stringa1 =  prompt('Inserire la prima stringa') ;
var stringa2 =  prompt('Inserire la seconda stringa' );

var lunghezza1 = stringa1.length;
var lunghezza2 = stringa2.length;

if (lunghezza1 < lunghezza2) {
    alert(stringa1);
    alert(stringa2);
} else if (lunghezza2 < lunghezza1) {
    alert(stringa2);
    alert(stringa1);
} else {
    alert('Le stringhe sono lunghe uguali');
}
