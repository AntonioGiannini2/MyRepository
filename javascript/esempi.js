
// Funzione per stampare la data
function displayDate() {
    document.getElementById("demo").innerHTML = `Current Date and Time: ${Date()}`;
}

// Visualizza un messaggio che dipende dall'ora del giorno usando If ed Else
var d = new Date();
var time = d.getHours();
if (time < 10) {
    document.write(`<p><strong>Good morning!</strong></p>`);
}
else if (time >= 10 && time < 16) {
    document.write(`<p><strong>Good day!</strong></p>`);
}
else {
    document.write(`<p><strong>Hello World!</strong></p>`);
}

// Modo per usare condizioni in javascript
var semaforo = `rosso`;
var azione = (semaforo == `rosso`) ? `<p>stop</p>` : `<p>avanti</p>`;
document.write(azione);

// Visualizza un messaggio che dipende dal giorno della settimana usando switch
var theDay = d.getDay();
switch (theDay) {
    case 5: {
        document.write(`<p><strong>Finally Friday!</strong></p>`);
        break;
    }
    case 6: {
        document.write(`<p><strong>Super Saturday!</strong></p>`);
        break;
    }
    case 0: {
        document.write(`<p><strong>Sleepy Sunday</strong></p>`);
        break;
    }
    default: {
        document.write(`<p><strong>I'm really looking forward to the weekend!</strong></p>`);
    }
}

// Ciclo for che elenca i valori della variabile i
var i;
document.write(`<p>`);
for (i = 0; i <= 5; i++) {
    document.write(`The number is ${i} <br />`);
}
document.write(`</p>`);

// Ciclo while che elenca i valori della variabile i
document.write(`<p>`);
i = 0;
while (i <= 5) {
    document.write(`The number is ${i} <br />`);
    i++;
}
document.write(`</p>`);

// Funzione che fa il prodotto tra due numeri dichiarata in due modi diversi
function prodotto(a, b) {
    return (a * b);
}

var per = new Function(`a`, `b`, `return (a*b);`);
document.write(`<p> ${per(4, 3)} <br />`);
document.write(`${prodotto(4, 3)} </p>`);

// Array di oggetti in cui ogni oggetto contiene nome, cognome ed età
var studente = new Array(
    {
        nome: `Antonio`,
        cognome: `Giannini`,
        età: 27
    },
    {
        nome: `Gianluca`,
        cognome: `Stella`,
        età: 19
    },
    {
        nome: `Giorgio`,
        cognome: `Rossi`,
        età: 25
    }
);

console.log(studente[1].nome);
studente.push({nome: `Michele`, cognome: `Micheli`, età: 23});
