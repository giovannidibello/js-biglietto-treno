// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// INPUT

// chiede all'utente il numero di chilometri che vuole percorrere
let numeroKm = parseInt(prompt("Inserisci il numero di km che vuoi percorrere"));

// chiede all'utente l'età del passeggero
let eta = parseInt(prompt("Inserisci l'età del passeggero"));

console.log("Numero di Km: ", numeroKm, "Età: ", eta);

// ELABORAZIONE

// definizione prezzo base del biglietto
let prezzo = numeroKm * 0.21;

// definizione var
let messaggio;

// SE l'utente è minorenne 
if (eta < 18) {
    // applica uno sconto del 20%
    prezzo = prezzo * 0.80;  
    messaggio = "Hai avuto uno sconto del 20%";

    // SE l'utente è over 65     
} else if (eta > 65) {
    // applica uno sconto del 40%
    prezzo = prezzo * 0.60; 
    messaggio = "Hai avuto uno sconto del 40%";     
} 

messaggio = "Non hai diritto a nessun sconto";

// OUTPUT

// restituisci il prezzo finale con massimo due decimali
console.log(messaggio);
console.log("Prezzo finale: ", parseFloat(prezzo.toFixed(2)), "€");