function getDateOfBirth() {
    var dataNascita = prompt(`Inserisci la tua data di nascita nel formato gg/mm/aaaa`);
    return dataNascita;
}

function calculateAge(dataNascita, annoAttuale, meseAttuale, giornoAttuale) {
    var annoNascita = dataNascita.substring(6,10);
    var meseNascita = dataNascita.substring(3,5);
    var giornoNascita = dataNascita.substring(0,2);
    var etàAttuale = annoAttuale - annoNascita;
    if ((meseAttuale == meseNascita) && (giornoAttuale <= giornoNascita)) {
        etàAttuale = etàAttuale - 1;
    }
    else if (meseAttuale < meseNascita) {
        etàAttuale = etàAttuale - 1;
    }
    return etàAttuale;
}

var dataNascita;
var date = new Date();
var annoAttuale = date.getFullYear();
var meseAttuale = date.getMonth()+1;
var giornoAttuale = date.getDay();
var etàAttuale;
