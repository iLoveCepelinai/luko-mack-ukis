// ==========================================
// 1. BENDRI SKLYPO NUSTATYMAI
// ==========================================
const SKLYPO_NUSTATYMAI = {
  pavadinimas: "Luko Mack ūkis",
  // Sklypo centras [Platuma (Lat), Ilguma (Lng)] - čia žemėlapis atsidarys pagal nutylėjimą
  centras: [54.874422, 23.781956],
  pradinisPriartinimas: 19, // 18-19 idealu 2ha sklypui

  // (NEPRIVALOMA) Drono nuotraukos arba maps.lt iškarpos užklijavimas ant žemėlapio
  dronoNuotrauka: {
    aktyvuota: false, // Pakeisk į true, kai turėsi savo drono foto
    failas: "foto/drono-ortofoto.jpg",
    // Viršutinis-kairys ir apatinis-dešinys nuotraukos kampai (GPS koordinatės)
    kampai: [
      [54.9035, 23.9080], // Šiaurės-Vakarų kampas
      [54.9019, 23.9112]  // Pietų-Rytų kampas
    ]
  }
};

// ==========================================
// 2. KATEGORIJOS (Galima laisvai keisti/pildyti)
// ==========================================
const KATEGORIJOS = {
  medis:      { pavadinimas: "Medžiai",           ikona: "🌳", spalva: "#16a34a" },
  vaiskrumis: { pavadinimas: "Vaiskrūmiai",       ikona: "🫐", spalva: "#9333ea" },
  vanduo:     { pavadinimas: "Vandens telkiniai", ikona: "💧", spalva: "#0284c7" },
  pastatas:   { pavadinimas: "Pastatai",          ikona: "🏠", spalva: "#d97706" },
  ukis:       { pavadinimas: "Ūkis ir gėrybės",   ikona: "🐝", spalva: "#eab308" },
  trauka: { pavadinimas: "Traukos objektai",  ikona: "⭐", spalva: "#F3F494" }
};

// ==========================================
// 3. SKLYPO OBJEKTAI (Medžiai, prūdai, aviliai...)
// ==========================================
// PRIVALOMI LAUKAI: id, coords, title, category, coverPhoto
// NEPRIVALOMI LAUKAI (gali būti null arba praleisti): year, desc, audio, gallery, wiki
const OBJEKTAI = [
  {
    id: "mato-azuolas",
    coords: [54.873923, 23.781248],
    title: "Mato ąžuolas",
    category: "medis",
    coverPhoto: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80",
    year: 2000,
    desc: "Ąžuolas pasodintas gimus anūkui Matui A.",
    audio: null, // Pvz: "audio/senelis-azuolas.mp3"
    gallery: [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80"
    ],
    wiki: "https://lt.wikipedia.org/wiki/Paprastasis_%C4%85%C5%BEuolas"
  },
  {
    id: "prudas",
    coords: [54.874365, 23.782109],
    title: "Prūdas",
    category: "vanduo",
    coverPhoto: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    year: null,
    desc: "Iškastas nežinau kada. Gyvena karpiai (paršiukai).",
    audio: null,
    gallery: null,
    wiki: null
  },
  {
    id: "bitynas",
    coords: [54.873991, 23.781251],
    title: "Bičių aviliai",
    category: "ukis",
    coverPhoto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2023%2F09%2F22%2F00%2F14%2Fbees-8267791_1280.png&f=1&nofb=1&ipt=3d267b50b4e9bda25fe3134d95e5078dddfdcd91672f393e6595c8c749a6f849&ipo=images",
    year: null,
    desc: "Bakfasto ir kitos bitės. Nelabai prisimenu :(. Neša skanų medutį",
    audio: null,
    gallery: null,
    wiki: "https://lt.wikipedia.org/wiki/Bitininkyst%C4%97"
  },
  {
    id: "silauoges",
    coords: [54.874552, 23.781186],
    title: "Šilauogės",
    category: "vaiskrumis",
    coverPhoto: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=800&q=80",
    year: null,
    desc: "X krūmų eilė. Noksta liepos pabaigoje – rugpjūčio pradžioje.",
    audio: null,
    gallery: null,
    wiki: null
  },
  {
    id: "pirtis",
    coords: [54.874320, 23.782500],
    title: "Pirtis",
    category: "pastatas",
    coverPhoto: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    year: null,
    desc: "Nors originaliai statyta kaip pirtis, dabar naudojama kaip užuovėja nuo agresyvių bičių ir saulės spindulių.",
    audio: null,
    gallery: null,
    wiki: null
  },
  {
	  id: "namas",
	  coords: [54.874433, 23.782777],
	  title: "Namas",
	  category: "pastatas",
	  coverPhoto: "https://raw.githubusercontent.com/iLoveCepelinai/luko-mack-ukis/refs/heads/main/foto/senelio_namas_main.png",
	  year: null,
	  desc: "Luko antri namai, jaukūs ir šilti.",
	  audio: null,
	  gallery: null,
	  wiki: null
	},
	{
	  id: "lukakalnis",
	  coords: [54.874131, 23.781976],
	  title: "Lukakalnis",
	  category: "trauka",
	  coverPhoto: "foto/nuotrauka.jpg",
	  year: null,
	  desc: "Vienas įspūdingiausių kalnų apylinkėse. Dažnai galima girdėti Maironio ir J. Naujelio Lietuva brangi.",
	  audio: null,
	  gallery: null,
	  wiki: null
	},
	{
	  id: "pasiure",
	  coords: [54.874638, 23.781961],
	  title: "Pašiūrė",
	  category: "pastatas",
	  coverPhoto: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.yetrac.com%2Fwp-content%2Fuploads%2F2023%2F10%2FIseki-Co.-Ltd.-Japanese-Agricultural-Machinery-Manufacturing-Excellence-Since-1926-2048x1366.jpg&f=1&nofb=1&ipt=cfe4a8b389cf7d9a8c995d9fdf577d215bb4eeee81886fb3d2d664cbed0d90dd&ipo=images",
	  year: null,
	  desc: "Pašiūrė ūkio reikmėms.",
	  audio: null,
	  gallery: null,
	  wiki: null
	},
];