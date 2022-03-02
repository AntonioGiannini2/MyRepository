//console.log("Hello World!!!");
//alert("Ciao Mondo");

function visualizzaMessaggio(nome, cognome) {
    let saluto = `Ciao ${nome} ${cognome}`;
    return saluto;
}

console.log(visualizzaMessaggio("Juan", "Rossi"));


function cambiaTesto() {
    let testoVariato = prompt("Inserisci il testo da variare");
    document.getElementById("terzoParagrafo").innerHTML = testoVariato;
}

function ripristina() {
    document.getElementById("terzoParagrafo").innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Facere dolor dolore, nisi iste facilis rem veniam saepe veritatis illum neque quibusdam nam debitis ad!
    Sapiente illo id earum repellendus. Deserunt!`;
    document.getElementById("terzoParagrafo").style.color = "black";
    document.getElementById("terzoParagrafo").style.background = "white";
}

function cambiaColore(coloreTesto, coloreSfondo) {
    document.getElementById("terzoParagrafo").style.color = coloreTesto;
    document.getElementById("terzoParagrafo").style.background = coloreSfondo;
}

function scegliColore() {
    let coloreLettere = prompt("Inserisci il colore del testo che vuoi visualizzare");
    let coloreBackground = prompt("Inserisci il colore di sfondo che vuoi visualizzare");
    document.getElementById("terzoParagrafo").style.color = coloreLettere;
    document.getElementById("terzoParagrafo").style.background = coloreBackground;
}

function mousePassaggio() {
    document.getElementById("secondoParagrafo").innerHTML = "pass U Maus <br> statt attind";
}

function mouseUscita() {
    document.getElementById("secondoParagrafo").innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Facere dolor dolore, nisi iste facilis rem veniam saepe veritatis illum neque quibusdam nam debitis ad!
    Sapiente illo id earum repellendus. Deserunt!`;
}

function apriFinestra() {

    document.open("https://www.uniba.it", "" , "noopener=true");

   /* document.open();
    document.write("<h1>Hello!!</h1><p>Ciao</p>");
    document.write("<p>Paragrafo</p>");
    document.write("<p>Paragrafo</p>");
    document.write("<p>Paragrafo</p>");
    document.write("<p>Paragrafo</p>");
    document.close(); */
}

