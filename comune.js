/* Parti comuni a tutte le pagine: testata, piede, tema chiaro/scuro, icone.
   Non serve modificare questo file. */

(function () {
  try {
    var t = localStorage.getItem("tema");
    if (t) document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}
})();

var ICONE = {
  mappa: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>',
  riassunto: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 6h16M4 11h16M4 16h10"/></svg>',
  lezione: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 5c3-1.5 7-1.5 10 1 3-2.5 7-2.5 10-1v14c-3-1.5-7-1.5-10 1-3-2.5-7-2.5-10-1z"/><path d="M12 6v14"/></svg>',
  pdf: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>',
  esercizi: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
  video: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M10 9l5 3-5 3z"/></svg>',
  link: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
};
var NOMI_TIPO = { mappa: "Mappa", riassunto: "Riassunto", lezione: "Lezione", pdf: "PDF", esercizi: "Esercizi", video: "Video", link: "Link" };

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function materiaDa(id) {
  for (var i = 0; i < MATERIE.length; i++) if (MATERIE[i].id === id) return MATERIE[i];
  return null;
}

function dataLeggibile(d) {
  if (!d) return "";
  var p = d.split("-");
  var mesi = ["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];
  return parseInt(p[2], 10) + " " + mesi[parseInt(p[1], 10) - 1] + " " + p[0];
}

function voceMateriale(m, conMateria) {
  var mat = materiaDa(m.materia);
  var colore = mat ? mat.colore : "";
  var tipo = ICONE[m.tipo] ? m.tipo : "riassunto";
  var esterno = /^https?:/.test(m.file);
  return '<li><a class="voce" style="--colore:' + esc(colore) + '" href="' + esc(m.file) + '"' + (esterno ? ' target="_blank" rel="noopener"' : "") + ">" +
    '<span class="icona">' + ICONE[tipo] + "</span>" +
    '<span class="testo"><span class="titolo">' + esc(m.titolo) + "</span>" +
    '<span class="descr" style="display:block"><span class="etichetta">' + NOMI_TIPO[tipo] + "</span>" +
    (conMateria && mat ? esc(mat.nome) + " · " + esc(m.unita) : esc(m.descrizione || "")) + "</span></span></a></li>";
}

function testataEPiede() {
  var t = document.getElementById("testata");
  if (t) {
    t.className = "testata";
    t.innerHTML = '<div class="contenitore"><a class="marchio" href="index.html">' +
      '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>' +
      esc(NOME_SITO) + "</a>" +
      '<button class="tema" type="button" id="tema" aria-label="Cambia tema chiaro o scuro">' +
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button></div>';
    document.getElementById("tema").addEventListener("click", function () {
      var r = document.documentElement;
      var scuro = r.getAttribute("data-theme") === "dark" ||
        (!r.getAttribute("data-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
      var nuovo = scuro ? "light" : "dark";
      r.setAttribute("data-theme", nuovo);
      try { localStorage.setItem("tema", nuovo); } catch (e) {}
    });
  }
  var p = document.getElementById("piede");
  if (p) {
    p.className = "piede";
    p.innerHTML = '<div class="contenitore"><span>' + esc(NOME_SITO) + " · materiali di potenziamento a libri e lezioni</span>" +
      '<a href="index.html">Torna all\'inizio</a></div>';
  }
}
document.addEventListener("DOMContentLoaded", testataEPiede);

/* =====================================================================
   MATERIALI AUTOMATICI
   Ogni file caricato su GitHub il cui nome comincia con il nome di una materia
   (es. "Matematica - Equazioni di secondo grado.pdf") compare da solo
   nella pagina di quella materia. Non serve modificare materiali.js.
   ===================================================================== */
var ESTENSIONI = { pdf: "pdf", png: "mappa", jpg: "mappa", jpeg: "mappa", html: "mappa", docx: "pdf", pptx: "pdf" };

function normalizza(s) {
  return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function indirizzoRepo() {
  var h = location.hostname;
  if (!/\.github\.io$/.test(h)) return null;
  var proprietario = h.split(".")[0];
  var primo = location.pathname.split("/")[1] || "";
  var repo = primo && !/\.html?$/.test(primo) ? decodeURIComponent(primo) : h;
  return "https://api.github.com/repos/" + proprietario + "/" + encodeURIComponent(repo) + "/contents/";
}

function materialeDaFile(nome) {
  var punto = nome.lastIndexOf(".");
  if (punto < 0) return null;
  var est = nome.slice(punto + 1).toLowerCase();
  if (!ESTENSIONI[est]) return null;
  var base = nome.slice(0, punto);
  var nb = normalizza(base);
  for (var i = 0; i < MATERIE.length; i++) {
    var m = MATERIE[i];
    var chiavi = [normalizza(m.id), normalizza(m.nome)];
    for (var k = 0; k < chiavi.length; k++) {
      var c = chiavi[k];
      if (nb.indexOf(c) === 0 && (nb.length === c.length || /[\s_\-–—.]/.test(nb.charAt(c.length)))) {
        var titolo = base.slice(c.length).replace(/^[\s_\-–—.]+/, "").replace(/_/g, " ").trim() || m.nome;
        titolo = titolo.charAt(0).toUpperCase() + titolo.slice(1);
        return { materia: m.id, unita: "Documenti", titolo: titolo, tipo: ESTENSIONI[est],
                 file: encodeURIComponent(nome), descrizione: "", data: "", auto: true };
      }
    }
  }
  return null;
}

/* Restituisce (tramite callback) i materiali di materiali.js + quelli trovati su GitHub */
function tuttiIMateriali(fatto) {
  var base = MATERIALI.slice();
  var noti = {};
  base.forEach(function (m) { noti[decodeURIComponent(m.file)] = true; });
  var url = indirizzoRepo();
  if (!url || !window.fetch) { fatto(base); return; }
  fetch(url, { headers: { Accept: "application/vnd.github+json" } })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (lista) {
      var auto = [];
      (lista || []).forEach(function (f) {
        if (f.type !== "file" || noti[f.name]) return;
        var m = materialeDaFile(f.name);
        if (m) auto.push(m);
      });
      auto.sort(function (a, b) { return a.titolo.localeCompare(b.titolo, "it"); });
      fatto(auto.concat(base));
    })
    .catch(function () { fatto(base); });
}
