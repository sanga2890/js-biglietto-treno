// chiedere quanti km dovrà percorrere
var kilometer = prompt('Quanti Km devi percorrere?');
// chiedere l'età per capire se si può avere diritto ad uno sconto
var eta = prompt('Quanti anni hai?');
// prezzo fisso al Km
var prezzo_km = 0.21;
// prezzo Biglietto minorenne
var sconto20 = kilometer * (prezzo_km - ((20 / 100) * prezzo_km));
// prezzo Biglietto Over 65
var sconto40 = kilometer * (prezzo_km - ((40 / 100) * prezzo_km));
// prezzo Biglietto intero
var intero = kilometer * prezzo_km
// se è minore di 18 anni sconto20, inserito il .toFixed per stampare solo 2 cifre dopo la virgola e Math.rounded per arrotondare
if (eta < 18){
    console.log('Prezzo del biglietto per minorenne: € ' + (Math.round(sconto20 * 100)/100).toFixed(2));
    // altrimenti se ha 65 o più anni sconto40
} else if (eta >= 65){
    console.log('Prezzo del biglietto per Over 65: € ' + (Math.round(sconto40 * 100)/100).toFixed(2));
    // altrimenti prezzo intero tra i 18 e i 64 anni
} else {
    console.log('Prezzo del biglietto intero: € ' + (Math.round(intero * 100)/100).toFixed(2));
}
