# Shackleton Consulting — Landing provvisoria

Pagina "stay tuned" in attesa del nuovo sito. Statica, nessuna build necessaria.

## Struttura del progetto

```
Landing Provvisoria/
├── index.html              ← pagina live attuale (direzione "Esploratore Celeste")
├── styles.css
├── site.js
├── images/                 ← sorgenti immagine (usate sia da index.html che da deploy/)
├── deploy/                 ← copia pronta per il caricamento sul server: carica SOLO questo
│   ├── index.html
│   ├── styles.css
│   ├── site.js
│   └── images/
├── previews/                ← varianti scartate/di confronto, non online
│   ├── preview-rotta.html      (v1 — fedele al mockup, animazione rotta essenziale)
│   ├── preview-rotta-v2.html   (v2 — rotta con bagliore, radar, scia)
│   └── preview-rotta-v3.html   (v3 — attuale, "Esploratore Celeste")
├── LANDING PAGE SITO.pdf    ← mockup originale del grafico (non versionato, resta solo in locale)
└── .claude/launch.json      ← avvia un server locale di anteprima (uso interno)
```

## Deploy

1. Prendi tutto il **contenuto** della cartella `deploy/` (non la cartella stessa) e caricalo
   nella root del dominio/hosting via FTP o pannello di controllo.
2. Nessuna configurazione server richiesta: è HTML/CSS/JS statico, funziona su qualsiasi hosting.
3. Se il dominio ha già un sito, questo va caricato al suo posto (fai un backup del sito attuale
   prima di sovrascrivere, se presente).

Per rigenerare `deploy/` dopo una modifica a `index.html` / `styles.css` / `site.js` / `images/`,
copia semplicemente gli stessi file aggiornati dentro `deploy/` (la struttura è identica).

## Cronologia versioni (git)

Il progetto è tracciato con git. Le versioni principali:

- **Base** — prima versione, fedele al mockup del grafico, nessuna animazione a tema nautico.
- **v3 "Esploratore Celeste"** (attuale) — sfondo atmosferico, rotta stellare luminosa,
  rosa dei venti interattiva, card in vetro smerigliato.

Per tornare alla versione base:

```bash
git log --oneline
git checkout <hash-del-commit-base> -- index.html styles.css site.js
```

oppure per vedere le differenze tra le due versioni:

```bash
git diff <hash-base> <hash-v3> -- index.html styles.css
```

Le anteprime scartate restano comunque consultabili in `previews/` in qualsiasi momento.
