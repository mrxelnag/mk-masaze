// Massage services data
export const massageServices = [
  {
    id: "klasicka-masaz",
    fav: true,
    title: "Klasická masáž",
    description:
      "Klasická masáž, někdy označována také jako švédská masáž, je výborný způsob jak uvolnit nejen ztuhlé svalstvo, ale také mysl. Patří proto mezi nejoblíbenější a nejžádanější procedury.",
    icon: "",
    image: "~/assets/images/masaze/klasicka-masaz.webp",
    pricing: [
      {
        price: "800 Kč",
        duration: "60 minut",
        reservioUrl: "https://masaze-kopecka.reservio.com/services/b746a9cc-2297-4625-a188-f54b8b6dca11",
      },
      {
        price: "1250 Kč",
        duration: "90 minut",
        reservioUrl: "https://masaze-kopecka.reservio.com/services/205f4445-ae77-42db-bb5f-ad9ae06ce712",
      },
    ],
    benefits: [
      "Uvolnění ztuhlého svalstva",
      "Relaxace mysli",
      "Zlepšení krevního oběhu",
      "Zmírnění napětí v zádech a šíji",
    ],
    longDescription: `
      Klasická masáž může být prováděna na celém těle nebo pouze na problematických částech, 
      kterými bývají zejména záda a šíje. Tato masáž kombinuje různé techniky pro dosažení 
      maximálního uvolnění a relaxace.
    `,
  },
  {
    id: "masaz-lavovymi-kameny",
    fav: true,
    title: "Masáž lávovými kameny",
    description:
      "Masáž lávovými kameny je hluboce relaxační procedura, která využívá horké kameny k uvolnění svalového napětí, podpoře prokrvení a celkové harmonizaci těla i mysli.",
    icon: "",
    image: "~/assets/images/masaze/masaz-lavovymi-kameny.webp",
    pricing: [
      {
        price: "800 Kč",
        duration: "60 minut",
            reservioUrl: "https://masaze-kopecka.reservio.com/services/b826bc41-c469-4344-b738-607a7fd5de64",
      },
    ],
    benefits: [
      "Hluboké uvolnění svalů",
      "Zlepšení cirkulace",
      "Podpora detoxikace organismu",
      "Zmírnění stresu",
      "Obnovení energetické rovnováhy",
    ],
    longDescription: `
      Teplo přírodních lávových kamenů proniká hluboko do svalů, pomáhá zmírnit stres, 
      zlepšuje cirkulaci a podporuje detoxikaci organismu. Masáž kombinuje jemné tahy 
      a tlakové techniky, které přinášejí intenzivní uvolnění a obnovují energetickou rovnováhu. 
      Ideální volba pro všechny, kteří hledají hlubokou relaxaci, zmírnění svalového napětí 
      a regeneraci po fyzické či psychické zátěži.
    `,
  },
  {
    id: "masaz-bankami",
    fav: false,
    title: "Masáž baňkami",
    description:
      "Principem masáže baňkami je metoda baňkování a její využití jako masážní techniky. Tato reflexní metoda je založena na překrvení, které se vytvoří po přiložení baňky.",
    icon: "",
    image: "~/assets/images/masaze/masaz-bankami.webp",
    pricing: [
      {
        price: "800 Kč",
        duration: "60 minut",
            reservioUrl: "https://masaze-kopecka.reservio.com/services/f71c17e9-9cfd-467c-981b-18f115c04d70",
      },
    ],
    benefits: [
      "Zlepšení lymfatického oběhu",
      "Rychlejší látková výměna",
      "Očista těla",
      "Rozmasírování zatvrdlin",
      "Uvolnění zatuhlého svalstva",
    ],
    longDescription: `
      Přiloženou baňkou provádíme přímočarými a krouživými pohyby masáž v oblasti celých zad 
      a zadní části stehen. Vlivem masáže se zlepšuje lymfatický oběh. Tím, že při této masáži 
      dochází k hlubokému prokrvení, následuje rychlejší látková výměna a očista těla. 
      Jde o intenzivní metodu jak rozmasírovat zatvrdliny a zatuhlé svalstvo. Po masáži baňkami 
      dochází u některých lidí k zčervenání masírované tkání, což je způsobeno právě intenzivním 
      prokrvením tkáně. Tento efekt, pokud se dostaví, odeznívá do 24 hodin.
    `,
  },
  {
    id: "maderoterapie",
    fav: false,
    title: "Maderoterapie + zábal",
    description:
      "Maderoterapie je přírodní masážní metoda, která pomáhá formovat tělo, zrychluje metabolismus a podporuje odplavování toxinů.",
    icon: "",
    image: "~/assets/images/masaze/maderoterapie.webp",
    pricing: [
      {
        price: "1500 Kč",
        duration: "90 min + 20 min",
            reservioUrl: "https://masaze-kopecka.reservio.com/services/ed0df434-1b40-4fb6-8314-b8b3f48919a0",
      },
    ],
    benefits: [
      "Formování těla",
      "Zrychlení metabolismu",
      "Odplavování toxinů",
      "Redukce celulitidy",
      "Pevnější a hladší pokožka",
    ],
    longDescription: `
      Tato účinná a bezbolestná technika využívá speciálně navržené dřevěné válečky, 
      které stimulují krevní oběh a odbourávají tukové usazeniny. Výsledkem je pevnější, 
      hladší a zdravější pokožka už po několika procedurách. Maderoterapie je vhodná 
      pro ženy, které chtějí účinně redukovat celulitidu a vytvarovat svou postavu.
    `,
  },
  {
    id: "relaxacni-masaz",
    fav: true,
    title: "Relaxační masáž celého těla",
    description:
      "Relaxační masáž celého těla je typ masáže, který se zaměřuje na uvolnění svalů, zlepšení krevního oběhu a celkovou relaxaci.",
    icon: "",
    image: "~/assets/images/masaze/relaxacni-masaz.webp",
    pricing: [
      {
        price: "1200 Kč",
        duration: "90 minut",
            reservioUrl: "https://masaze-kopecka.reservio.com/services/2bee50fe-b8e5-497a-8b53-9bc6597b58f7",
      },
    ],
    benefits: [
      "Uvolnění svalů",
      "Zlepšení krevního oběhu",
      "Zmírnění únavy",
      "Redukce stresu",
      "Zmírnění bolesti a napětí",
    ],
    longDescription: `
      Relaxační masáž celého těla je vhodná pro zmírnění únavy, stresu, bolesti a napětí. 
      Během této procedury se zaměřujeme na celkové uvolnění organismu a dosažení 
      hlubokého stavu relaxace.
    `,
  },
  {
    id: "lymfaticka-masaz",
    fav: false,
    title: "Lymfatická masáž",
    description:
      "Lymfatická masáž, lépe řečeno lymfatická drenáž je velmi jemná masážní technika, kterou můžeme zařadit mezi detoxikační terapie.",
    icon: "",
    image: "~/assets/images/masaze/lymfaticka-masaz.webp",
    pricing: [
      {
        price: "1500 Kč",
        duration: "120 minut",
            reservioUrl: "https://masaze-kopecka.reservio.com/services/90993274-a246-4911-939e-161065b6317f",
      },
    ],
    benefits: [
      "Optimalizace průtoku lymfy",
      "Posílení imunitního systému",
      "Redukce otoků",
      "Odplavení škodlivin",
      "Detoxikace organismu",
    ],
    longDescription: `
      Touto technikou optimalizujeme průtok lymfy organizmem a zvyšujeme její resorpci. 
      Lymfatické masáže obnovují a posilují funkci kapilární mízní pumpy a stimulují 
      imunitní systém. Tím, že příznivě ovlivňují likvidaci nadbytečné vody v organizmu 
      redukují otoky a odplavují z těla škodliviny a odpadní látky.
    `,
  },
  {
    id: "arosha-zabaly",
    fav: false,
    title: "Arosha zábaly",
    description:
      "Arosha zábaly jsou specifická tělová ošetření, která se používají k dosažení zeštíhlení, zpevnění a vyhlazení pleti.",
    icon: "",
    image: "~/assets/images/masaze/arosha-zabaly.webp",
    pricing: [
      {
        price: "1500 Kč",
        duration: "120 minut",
            reservioUrl: "https://masaze-kopecka.reservio.com/services/522bdccb-fb81-4b4a-afc3-24fb17e99ae4",
      },
    ],
    benefits: [
      "Redukce celulitidy",
      "Odvodňování těla",
      "Snížení nechtěných centimetrů",
      "Zeštíhlení",
      "Zpevnění pleti",
    ],
    longDescription: `
      Ošetření Arosha zábaly probíhají za pomocí speciální bandáže, které jsou napuštěné 
      aktivními složkami, které se zaměřují na specifické oblasti těla. Tyto zábaly jsou 
      klinicky testovány a obsahují směsi účinných látek. Ošetření je jednoduché a neinvazivní. 
      Zábaly se zaměřují na zeštíhlení, odvodnění, tvarování, zpevnění a redukci celulitidy.
    `,
  },
];

// Cosmetic services data
export const cosmeticServices = [
  {
    id: "zakladni-osetreni-pleti",
    fav: true,
    title: "Základní ošetření pleti",
    description:
      "Zaměřuje se na hloubkové čištění, hydrataci a vyživení pleti, a to dle konkrétního typu a potřeb pleti.",
    icon: "material-symbols-light:massage-outline",
    pricing: [
      {
        price: "1200 Kč",
        duration: "60 minut",
            reservioUrl: "https://masaze-kopecka.reservio.com/services/c83344ff-2495-45c7-b83b-789c01c71c9e",
      },
    ],
    benefits: ["Hloubkové čištění pleti", "Hydratace pokožky", "Vyživení pleti", "Přizpůsobení typu pleti"],
    longDescription: `
      Základní kosmetické ošetření je ideální pro udržení zdravé a krásné pleti. 
      Procedura je přizpůsobena konkrétnímu typu a potřebám vaší pleti.
    `,
  },
  {
    id: "kosmeticke-osetreni-na-miru",
    fav: true,
    title: "Kosmetické ošetření na míru",
    description:
      "Sama vám doporučím a vyberu typ kosmetického ošetření podle potřeb vaší pleti. Péče zaměřená na vrásky, akné, pigmentové skvrny, hydrataci, rozjasnění.",
    icon: "material-symbols-light:clean-hands-outline",
    // image: "~/assets/images/masaze/osetreni-na-miru.webp",
    pricing: [
      {
        price: "1800 Kč",
        duration: "90 minut",
            reservioUrl: "https://masaze-kopecka.reservio.com/services/c1e858f8-6b7a-492d-ae64-99782518bb59",
      },
    ],
    benefits: [
      "Péče o vrásky",
      "Ošetření akné",
      "Redukce pigmentových skvrn",
      "Hydratace a rozjasnění",
    ],
    longDescription: `
      Kosmetické ošetření přizpůsobené konkrétním potřebám vaší pleti. Zaměřujeme se 
      na specifické problémy jako jsou vrásky, akné, pigmentové skvrny nebo potřebu 
      hydratace a rozjasnění pleti.
    `,
  },
  {
    id: "hydratacni-osetreni",
    fav: false,
    title: "Hydratační ošetření pleti",
    description:
      "Revoluční kosmetická péče za použití španělské kosmetiky Germaine de Capuccini pro šťavnatou, hydratovanou a viditelně plnější pleť.",
    icon: "material-symbols-light:water-drop-outline",
    // image: "~/assets/images/masaze/hydratacni-osetreni.webp",
    pricing: [
      {
        price: "1800 Kč",
        duration: "90 minut",
            reservioUrl: "https://masaze-kopecka.reservio.com/services/08b56f40-8c2e-4c80-9dcd-012c7ade561e",
      },
    ],
    benefits: [
      "Optimalizace hydratace",
      "Posílení bariérových funkcí",
      "Zvýšení pružnosti pleti",
      "Maximální komfort pleti",
      "Viditelně plnější pleť",
    ],
    longDescription: `
      Optimalizuje úroveň hydratace a posiluje bariérové funkce, pro zajištění pružnosti 
      pleti a jejího maximálního komfortu. Vhodné pro všechny typy dehydratované pleti, 
      ať už normální, suché nebo mastné.
    `,
  },
  {
    id: "omlazujici-pece",
    fav: true,
    title: "Omlazující péče (MCCM)",
    description:
      "Ošetření pleti za pomoci profesionální kosmetiky Mesosystem, vyráběná firmou MCCM, jejichž přípravky přináší okamžité viditelné účinky na pleť.",
    icon: "material-symbols-light:avg-time-outline-rounded",
    // image: "~/assets/images/masaze/omlazujici-pece.webp",
    pricing: [
      {
        price: "1800 Kč",
        duration: "90 minut",
            reservioUrl: "https://masaze-kopecka.reservio.com/services/079aca60-c777-4c1f-b49c-583f2e66d1ee",
      },
    ],
    benefits: [
      "Okamžité viditelné účinky",
      "Profesionální kosmetika MCCM",
      "Omlazení pleti",
      "Zlepšení struktury pleti",
    ],
    longDescription: `
      Pro viditelné výsledky doporučuji podstoupit alespoň 5 ošetření každé 3 týdny. 
      Používáme profesionální kosmetiku Mesosystem od firmy MCCM, která přináší 
      okamžité a dlouhodobé účinky.
    `,
    recommendations: "Pro viditelné výsledky doporučujeme alespoň 5 ošetření každé 3 týdny",
  },
  {
    id: "mezoterapie",
    fav: false,
    title: "Mezoterapie (MCCM)",
    description:
      "Metoda omlazení pleti, při které se pomocí jemných jehliček (Dermapen) vpravují do pokožky účinné látky.",
    icon: "material-symbols-light:cleaning-bucket-outline",
    // image: "~/assets/images/masaze/mezoterapie.webp",
    pricing: [
      {
        price: "3700 Kč",
        duration: "90 minut",
            reservioUrl: "https://masaze-kopecka.reservio.com/services/06dc6af3-b03f-4f13-b142-cc06de6d1f7c",
      },
    ],
    benefits: [
      "Hydratace a revitalizace pleti",
      "Redukce jemných vrásek",
      "Zlepšení celkového vzhledu",
      "Řešení jizviček po akné",
      "Redukce pigmentových skvrn",
    ],
    longDescription: `
      Tato metoda se používá k hydrataci a revitalizaci pleti, redukci jemných vrásek 
      a zlepšení jejího celkového vzhledu. Ošetření je stanoveno na míru stavu vaší pleti, 
      ať už řešíte jizvičky po akné, pigmentové skvrny, vrásky.
    `,
    contraindications: "Nedoporučuje se při aktivním akné!",
    recommendations: "Pro viditelné výsledky doporučujeme ošetření opakovat každé 3 týdny, alespoň 4-5 sezení",
  },
];

// Additional services data
export const additionalServices = [
  {
    id: "barveni-ras-oboci",
    fav: false,
    title: "Barvení řas a obočí",
    description: "Profesionální barvení řas a obočí pro zvýraznění vašeho pohledu.",
    // image: "~/assets/images/masaze/barveni-ras-oboci.webp",
    pricing: [
      {
        price: "350 Kč",
        duration: "samostatně",
            reservioUrl: "https://masaze-kopecka.reservio.com/services/950bcf12-027a-4823-9abb-392fadfb78ce",
      },
      {
        price: "230 Kč",
        duration: "k ošetření pleti",
        reservioUrl: "https://masaze-kopecka.reservio.com/services/950bcf12-027a-4823-9abb-392fadfb78ce",
      },
    ],
    benefits: ["Zvýraznění pohledu", "Dlouhodobý efekt", "Úspora času při líčení", "Přirozený vzhled"],
    longDescription: `
      Profesionální barvení řas a obočí pro dokonalé zvýraznění vašeho pohledu. 
      Používáme kvalitní barvy, které jsou šetrné k pokožce.
    `,
  },
  {
    id: "laminace-ras-oboci",
    fav: false,
    title: "Laminace řas a obočí",
    description: "Laminace pro krásně tvarované a upravené řasy a obočí.",
    // image: "~/assets/images/masaze/laminace-ras-oboci.webp",
    pricing: [
      {
        price: "450 Kč",
        duration: "laminace",
        reservioUrl: "https://masaze-kopecka.reservio.com/services/950bcf12-027a-4823-9abb-392fadfb78ce",
      },
      {
        price: "300 Kč",
        duration: "ke kosmetice",
        reservioUrl: "https://masaze-kopecka.reservio.com/services/950bcf12-027a-4823-9abb-392fadfb78ce",
      },
    ],
    benefits: ["Tvarování řas a obočí", "Dlouhodobý efekt", "Přirozený vzhled", "Zlepšení struktury chloupků"],
    longDescription: `
      Laminace řas a obočí pro dokonale tvarované a upravené řasy a obočí. 
      Procedura zajistí dlouhodobý efekt a přirozený vzhled.
    `,
  },
];

// Export all services together
export const allServices = {
  massage: massageServices,
  cosmetic: cosmeticServices,
  additional: additionalServices,
};
