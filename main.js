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
if (eta < 18){
    console.log('Prezzo del biglietto per minorenne: € ' + sconto20.toFixed(2));
} else if (eta >= 65){
    console.log('Prezzo del biglietto per Over 65: € ' + sconto40.toFixed(2));
} else {
    console.log('Prezzo del biglietto intero: € ' + intero.toFixed(2));
}
