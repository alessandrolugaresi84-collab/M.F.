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
  { id: "italiano",   nome: "Italiano",   colore: "#9A3B2A", descrizione: "Letteratura, testi, lingua" },
  { id: "storia",     nome: "Storia",     colore: "#1E6A73", descrizione: "Eventi, epoche, cause e conseguenze" },
  { id: "inglese",    nome: "Inglese",    colore: "#3A4A8F", descrizione: "Grammatica, lessico, comprensione" },
  { id: "matematica", nome: "Matematica", colore: "#4E6A2C", descrizione: "Regole, procedimenti, esercizi guidati" },
];

const MATERIALI = [
  {
    materia: "italiano",
    unita: "Dante e la Divina Commedia",
    titolo: "Introduzione alla Divina Commedia",
    tipo: "lezione",
    file: "dante-introduzione.html",
    descrizione: "Il testo della lezione, diviso in paragrafi, con le parole chiave spiegate.",
    data: "2026-10-06",
  },
  {
    materia: "italiano",
    unita: "Dante e la Divina Commedia",
    titolo: "Mappa concettuale dell'introduzione",
    tipo: "mappa",
    file: "dante-mappa.html",
    descrizione: "Quattro domande, i passaggi logici tra un'idea e l'altra e ciò che la lezione dà per scontato.",
    data: "2026-10-06",
  },
];
