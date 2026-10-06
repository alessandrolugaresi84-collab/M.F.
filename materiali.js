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
];

const MATERIALI = [
  {
    materia: "italiano",
    unita: "Dante e la Divina Commedia",
    titolo: "Mappa: introduzione alla Divina Commedia",
    tipo: "mappa",
    file: "dante-mappa.html",
    descrizione: "Concetti chiari collegati da frecce, ognuno con una spiegazione in parole semplici.",
    data: "2026-10-06",
  },
];
