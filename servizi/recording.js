/**
 * ===================================================================
 * ARCHIVIO LAVORI: REGISTRAZIONE (recording.js)
 * ===================================================================
 * ISTRUZIONI PER IL CLIENTE:
 * Puoi inserire i blocchi nell'ordine che preferisci:
 * 
 * 1. TESTO:
 *    { tipo: "testo", testo: "Scrivi qui la descrizione..." }
 * 
 * 2. AUDIO (con didascalia facoltativa):
 *    { tipo: "audio", file: "audio/canzone.mp3", nome: "Titolo", dettagli: "Info", didascalia: "Nota facoltativa" }
 * 
 * 3. VIDEO YOUTUBE:
 *    - Singolo (occupa il 100% dello spazio su PC):
 *      { tipo: "video", id: "ID_YOUTUBE", didascalia: "Didascalia del video" }
 *    - Multiplo (affiancati in griglia su PC):
 *      { tipo: "video", id: ["ID_YOUTUBE_1", "ID_YOUTUBE_2"], didascalia: "Didascalia della coppia" }
 * 
 * 4. IMMAGINE:
 *    - Singola (occupa il 100% dello spazio su PC):
 *      { tipo: "immagine", url: "img/foto.jpg", didascalia: "Didascalia della foto" }
 *    - Multipla (affiancate in griglia su PC):
 *      { tipo: "immagine", url: ["img/foto1.jpg", "img/foto2.jpg"], didascalia: "Didascalia della galleria" }
 * ===================================================================
 */

const listaProgetti = [

    // ============================================================
    // PROGETTO 1: Video singolo a tutto schermo, Audio e Foto
    // ============================================================
    {
        tag: "Sessione Acustica • R&B / Soul",
        titolo: "Sessione di mezzanotte (Vocal & Piano)",
        blocchi: [
            { 
                tipo: "testo", 
                testo: "Registrazione in presa diretta con pianoforte a coda Steinway in sala ripresa grande e voce solista ripresa con microfono valvolare Neumann U67." 
            },
            // Video SINGOLO: prende il 100% dello spazio anche su desktop
            { 
                tipo: "video", 
                id: "4Tr0otuiQuU", 
                didascalia: "Ripresa multicamera integrale della sessione notturna." 
            },
            // Audio con didascalia
            { 
                tipo: "audio", 
                nome: "Midnight Session (Take #03 - Master)", 
                dettagli: "Voce & Pianoforte • Master Raw",
                file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                didascalia: "Ascolto del take grezzo senza compressioni digitali." 
            },
            // Immagine SINGOLA: prende il 100% dello spazio su desktop
            { 
                tipo: "immagine", 
                url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
                didascalia: "Posizionamento stereo Blumlein sopra la cordiera del pianoforte." 
            }
        ]
    },

    // ============================================================
    // PROGETTO 2: Due Video Affiancati in Griglia + Audio
    // ============================================================
    {
        tag: "Vocal Booth • Urban / Hip-Hop",
        titolo: "Urban Raw Takes",
        blocchi: [
            { 
                tipo: "testo", 
                testo: "Tracciamento vocale ad alta definizione con outboard valvolare analogico Tube-Tech CL1B per voce solista e cori." 
            },
            // DUE VIDEO AFFIANCATI: su PC si dispongono in 2 colonne
            { 
                tipo: "video", 
                id: ["SlUfsrgaetI", "4Tr0otuiQuU"], 
                didascalia: "A sinistra: sessione di tracking voce. A destra: back-to-back con il produttore in regia." 
            },
            { 
                tipo: "audio", 
                nome: "Urban Raw Takes (Main & Adlibs)", 
                dettagli: "Studio Recording Session",
                file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
                didascalia: "Traccia isolata della voce prima del mixaggio." 
            }
        ]
    },

    // ============================================================
    // PROGETTO 3: Minimale (Solo descrizione + Audio, nessun video/foto)
    // ============================================================
    {
        tag: "Acustico & Ensemble • Indie Folk",
        titolo: "Acoustic Sessions Vol. 1",
        blocchi: [
            { 
                tipo: "testo", 
                testo: "Microfonazione stereo XY per chitarre Martin acustiche e contrabbasso in presa diretta combinata (microfono a nastro Coles + D.I.)." 
            },
            { 
                tipo: "audio", 
                nome: "Acoustic Sessions (Guitar & Strings)", 
                dettagli: "Live Room Session • Multi-track",
                file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
            }
        ]
    },

    // ============================================================
    // PROGETTO 4: Galleria Foto affiancate + Audio + Video
    // ============================================================
    {
        tag: "Full Band Live • Modern Rock",
        titolo: "Electric Overdrive Takes",
        blocchi: [
            { 
                tipo: "testo", 
                testo: "Tracking di batteria a 16 canali con microfoni d'ambiente room in sala grande e amplificatori isolati in cabina." 
            },
            // DUE FOTO AFFIANCATE
            { 
                tipo: "immagine", 
                url: [
                    "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=900&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=900&auto=format&fit=crop"
                ],
                didascalia: "Set up microfonico della batteria e visuale dal banco mixer." 
            },
            { 
                tipo: "audio", 
                nome: "Electric Overdrive (Drums & Bass Stems)", 
                dettagli: "Band Session • Tracking",
                file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
            },
            // Video Singolo
            { 
                tipo: "video", 
                id: "4Tr0otuiQuU", 
                didascalia: "Sessione di ascolto in regia a fine riprese." 
            }
        ]
    }


// ============================================================
    // PROGETTO 5: prova
    // ============================================================
    {
        tag: "provaaaaa",
        titolo: "Secondo me fa cagare",
        blocchi: [
           {tipo:"video",
            id:"4Tr0otuiQuU",
            didascalia:"Questo Beethoven fa schifo"},

            {tipo:"testo",
            testo:"Ma boh chissa se funzionerà"},

            {tipo:"immagine",
            url:"prova.jpg",
            didascalia:"Baaaaaaaaaaaa" }
    
        ]
    }






    
];
