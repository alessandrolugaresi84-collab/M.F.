/* =====================================================================
   ELENCO DEI MATERIALI — è l'unico file da modificare per aggiornare il sito.

   Per AGGIUNGERE UNA MATERIA: copia una riga dentro MATERIE e cambia i valori.
     id     → parola breve, minuscola, senza spazi né accenti (es. "scienze")
     nome   → come appare sul sito
     colore → colore della materia (codice esadecimale)

   Per AGGIUNGERE UN MATERIALE: copia un blocco { ... } dentro MATERIALI.
     materia → l'id della materia (deve esistere qui sopra)
     unita   → il capitolo/argomento: i materiali con la stessa unità stanno insieme
     tipo    → "mappa", "riassunto", "lezione", "pdf", "esercizi", "video", "link"
     file    → il nome del file caricato su GitHub (o un indirizzo https://...)
     data    → anno-mese-giorno: serve a mostrare i più recenti in home

   Attenzione alle virgole: ogni blocco finisce con }, e i testi stanno tra "virgolette".
   ===================================================================== */

const NOME_SITO = "Quaderno di studio";

const MATERIE = [
  { id: "meccanica",  nome: "Meccanica",  colore: "#1E6A73", descrizione: "" },
  { id: "sistemi",    nome: "Sistemi",    colore: "#3A4A8F", descrizione: "" },
  { id: "tecnologia", nome: "Tecnologia", colore: "#8A4B12", descrizione: "" },
  { id: "matematica", nome: "Matematica", colore: "#4E6A2C", descrizione: "" },
  { id: "inglese",    nome: "Inglese",    colore: "#6B3A7A", descrizione: "" },
  { id: "italiano",   nome: "Italiano",   colore: "#9A3B2A", descrizione: "" },
  { id: "storia",     nome: "Storia",     colore: "#5A5F6E", descrizione: "" },
  { id: "disegno",    nome: "Disegno",    colore: "#1F5F99", descrizione: "" },
];

const MATERIALI = [
  {
    materia: "italiano",
    unita: "Dante e la Divina Commedia",
    titolo: "La Divina Commedia: mappe (1 Introduzione · 2 Il capolavoro dantesco)",
    tipo: "mappa",
    file: "dante-mappa.html",
    descrizione: "Due mappe con frecce e spiegazioni in parole semplici. Nella parte 2: terzina, due Dante, lingua, fonti, universo di Dante, numeri, parole difficili e ripasso.",
    data: "2026-10-14",
  },
  {
    materia: "meccanica",
    unita: "Appunti fino al 1° ottobre",
    titolo: "Appunti di Meccanica",
    tipo: "pdf",
    file: "meccanica-appunti-1-ottobre.pdf",
    descrizione: "La forza e le sue caratteristiche; funzioni trigonometriche: seno, coseno, tangente, cotangente.",
    data: "2026-10-06",
  },
  {
    materia: "sistemi",
    unita: "Appunti fino al 1° ottobre",
    titolo: "Appunti di Sistemi",
    tipo: "pdf",
    file: "sistemi-appunti-1-ottobre.pdf",
    descrizione: "Grandezze e unità di misura, formule inverse, elettrizzazione, legge di Coulomb, corrente elettrica.",
    data: "2026-10-06",
  },
  {
    materia: "storia",
    unita: "Dalla fine dell'Impero romano all'Islam",
    titolo: "Capitolo 1 · La fine dell'Impero romano e i regni barbarici",
    tipo: "lezione",
    file: encodeURIComponent("Storia - La fine dell'Impero romano e i regni barbarici.html"),
    descrizione: "Vandali, Attila, il 476, perché l'Occidente cade; invasioni, regni barbarici, Teoderico.",
    data: "2026-10-14",
  },
  {
    materia: "storia",
    unita: "Dalla fine dell'Impero romano all'Islam",
    titolo: "Capitolo 2 · Il Regno franco e l'Impero di Giustiniano",
    tipo: "lezione",
    file: encodeURIComponent("Storia - Il Regno franco e l'Impero di Giustiniano.html"),
    descrizione: "Clodoveo e i Merovingi, i nuovi popoli, Costantinopoli, Giustiniano, la guerra greco-gotica.",
    data: "2026-10-14",
  },
  {
    materia: "storia",
    unita: "Dalla fine dell'Impero romano all'Islam",
    titolo: "Capitolo 3 · I Longobardi, la Chiesa e il monachesimo",
    tipo: "lezione",
    file: encodeURIComponent("Storia - I Longobardi, la Chiesa e il monachesimo.html"),
    descrizione: "Alboino, l'Editto di Rotari, vescovi e papa, Benedetto da Norcia e i monasteri.",
    data: "2026-10-19",
  },
  {
    materia: "storia",
    unita: "Dalla fine dell'Impero romano all'Islam",
    titolo: "Capitolo 4 · Gli Arabi e l'Islam",
    tipo: "lezione",
    file: encodeURIComponent("Storia - Gli Arabi e l'Islam.html"),
    descrizione: "L'Arabia, Maometto, l'Egira e il Corano, l'Impero islamico, i cinque pilastri, la civiltà araba.",
    data: "2026-10-19",
  },
];
