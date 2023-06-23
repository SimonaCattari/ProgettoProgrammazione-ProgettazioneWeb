/**/var nodoNumeroDomanda;
/**/var nodoTestoDomanda;
/**/var nodoRisposta0;
/**/var nodoTestoRisposta0;
/**/var nodoRisposta1;
/**/var nodoTestoRisposta1;
/**/var nodoRisposta2;
/**/var nodoTestoRisposta2;
/**/var nodoAvanti;
/**/var nodoRisultato;
/**/var nodoInizia;
/**/var numeroDomande;
/**/var numeroDomandaCorrente;
/**/var risposteDate;
/**/var quiz = [
  {
    domanda : "1. Chi, tra questi attori, interpreta il ruolo di Archie?",
    risposte : [
                "a. Cole Sprouse",
                "b. Dylan Sprouse",
                "c. KjApa"
               ],
    rispostaEsatta : 2
 },
{
    domanda : "2. Fino al 2020 quante stagioni sono uscite?",
    risposte : [
                "a. 3",
                "b. 5",
                "c. 6"
               ],
    rispostaEsatta : 1
 },
{
    domanda : "3. Jughead ha una relazione con una protagonista, chi? ",
    risposte : [
                "a. Veronica Lodge",
                "b. Cheryl Blossom",
                "c. Betty Cooper"
               ],
    rispostaEsatta : 2
 },
{
    domanda : "4. Betty Cooper ha : ",
    risposte : [
                "a. Un fratello ed una sorella",
                "b. Due sorelle",
                "c. Un fratello"
               ],
    rispostaEsatta : 0
 },
{
    domanda : "5. Veronica Lodge intraprende una relazione con : ",
    risposte : [
                "a. Jughead",
                "b. Archie",
                "c. Nessuno"
               ],
   rispostaEsatta : 1
 },
{
   domanda : "6. Il personaggio di Cheryl Blossom è interpretata da : ",
   risposte : [
               "a. Camilla Mendes",
               "b. Lili Reinhart",
               "c. Madelaine Petsch"
              ],
   rispostaEsatta : 2
 },
{
   domanda : "7. La tranquilla cittadina di Riverdale viene sconvolta dalla morte di : ",
   risposte : [
               "a. Hal Cooper",
               "b. Jason Blossom",
               "c. Clifford Blossom"
              ],
   rispostaEsatta : 1
 },
{
   domanda : "8. La Fattoria è : ",
   risposte : [
               "a. Il nome di una banda di criminali",
               "b. Il posto in cui è cresciuta Betty",
               "c. Una setta"
              ],
   rispostaEsatta : 2
 },
{
   domanda : "9. Archie finisce in carcere, perché? ",
   risposte : [
               "a. Viene incastrato da Hiram Lodge",
               "b. Commette un omicidio",
               "c. Viene incastrato da Cheryl Blossom"
              ],
   rispostaEsatta : 0
 },
{
   domanda : "10. Dopo il diploma, Archie : ",
   risposte : [
               "a. Resta a Riverdale",
               "b. Si trasferisce insieme a Veronica a New York",
               "c. Si arruola nell'esercito"
              ],
   rispostaEsatta : 2
  },
];
/**/function nuovoQuiz () {
  /**/numeroDomandaCorrente = 0;
  /**/aggiornaDomanda(numeroDomandaCorrente);
  /**/scriviMessaggio(nodoRisultato, "");
  /**/risposteDate = [];
/**/}
/**/function aggiornaDomanda (i) {
  /**/scriviMessaggio(nodoNumeroDomanda,
  /**/"Domanda " + (i + 1) + " di " + numeroDomande);
  /**/var parte = quiz[i];
  /**/scriviMessaggio(nodoTestoDomanda, parte.domanda)
  /**/scriviMessaggio(nodoTestoRisposta0, parte.risposte[0]);
  /**/scriviMessaggio(nodoTestoRisposta1, parte.risposte[1]);
  /**/scriviMessaggio(nodoTestoRisposta2, parte.risposte[2]);
  /**/nodoRisposta0.checked = false;
  /**/nodoRisposta1.checked = false;
  /**/nodoRisposta2.checked = false;
/**/}
/**/function scriviMessaggio (nodo, messaggio) {
  /**/var nodoTesto = document.createTextNode(messaggio);
  /**/if (nodo.childNodes.length == 0) {
    /**/nodo.appendChild(nodoTesto);
  /**/} else {
      /**/nodo.replaceChild(nodoTesto, nodo.firstChild);
  /**/}
/**/}
/**/function gestoreClickAvanti () {
  /**/try {
    /**/if (numeroDomandaCorrente == numeroDomande) {
      /**/return;
    /**/}
    /**/if (nodoRisposta0.checked) {
      /**/risposteDate[numeroDomandaCorrente] = 0;
    /**/} else if (nodoRisposta1.checked) {
      /**/risposteDate[numeroDomandaCorrente] = 1;
    /**/} else if (nodoRisposta2.checked) {
      /**/risposteDate[numeroDomandaCorrente] = 2;
    /**/} else {
      /**/return;
    /**/}
    /**/numeroDomandaCorrente++;
    /**/if (numeroDomandaCorrente == numeroDomande) {
      /**/var esito = calcolaEsito();
      /**/var s;
      if (esito < 2) {
        s = "Così non va bene, riprova " + esito + " risposte esatte su " + numeroDomande;
      } else if (esito < 5) {
        s = "Quasi sufficiente! " + esito + " risposte esatte su " + numeroDomande;
      } else if (esito < 8) {
        s = "È andata bene! " + esito + " risposte esatte su " + numeroDomande;
      } else if (esito < 10) {
        s = "Sei stato molto bravo, congratulazioni! " + esito + " risposte esatte su " + numeroDomande;
      } else if (esito == 10) {
        s = "Sei un mito! " + esito + " risposte esatte su " + numeroDomande;
    }
    /**/scriviMessaggio(nodoRisultato, s);
  /**/} else {
    /**/aggiornaDomanda(numeroDomandaCorrente);
  /**/}
/**/} catch ( e ) {
  /**/alert("gestoreClickAvanti " + e);
/**/}
/**/}
/**/function calcolaEsito () {
  /**/var numeroRisposteEsatte = 0;
  /**/for (var i = 0; i < quiz.length; i++) {
  /**/var parte = quiz[i];
  /**/if (parte.rispostaEsatta == risposteDate[i]) {
    /**/numeroRisposteEsatte++;
  /**/}
/**/}
/**/return numeroRisposteEsatte;
/**/}
/**/function gestoreClickInizia () {
  /**/try {
    /**/nuovoQuiz();
  /**/}
  /**/catch ( e ) {
    /**/alert("gestoreClickInizia " + e);
  /**/}
/**/}
/**/function gestoreLoad () {
  /**/try {
    /**/nodoNumeroDomanda = document.getElementById("numeroDomanda");
    /**/nodoTestoDomanda = document.getElementById("testoDomanda");
    /**/nodoRisposta0 = document.getElementById("risposta0");
    /**/nodoTestoRisposta0 = document.getElementById("testoRisposta0");
    /**/nodoRisposta1 = document.getElementById("risposta1");
    /**/nodoTestoRisposta1 = document.getElementById("testoRisposta1");
    /**/nodoRisposta2 = document.getElementById("risposta2");
    /**/nodoTestoRisposta2 = document.getElementById("testoRisposta2");
    /**/nodoAvanti = document.getElementById("avanti");
    /**/nodoRisultato = document.getElementById("risultato");
    /**/nodoInizia = document.getElementById("inizia");
    /**/nodoAvanti.onclick = gestoreClickAvanti;
    /**/nodoInizia.onclick = gestoreClickInizia;
    /**/numeroDomande = quiz.length;
    /**/nuovoQuiz();
  /**/}
  /**/catch ( e ) {
    /**/alert("gestoreLoad " + e);
  /**/}
/**/}
/**/window.onload = gestoreLoad;
