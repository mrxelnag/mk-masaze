// Massage services data
export const massageServices = [
  {
    id: "klasicka-masaz",
    fav: true,
    title: "Klasická masáž",
    description:
      "Klasická masáž, někdy označována také jako švédská masáž, je výborný způsob jak uvolnit nejen ztuhlé svalstvo, ale také mysl. Patří proto mezi nejoblíbenější a nejžádanější procedury.",
    icon: "",
    image: "/src/assets/images/bg-hero.jpeg",
    pricing: [
      {
        price: "800 Kč",
        duration: "60 minut",
      },
      {
        price: "1250 Kč",
        duration: "90 minut",
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
    image: "/images/masaz-lavove-kameny.svg",
    pricing: [
      {
        price: "800 Kč",
        duration: "60 minut",
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
    image: "/images/masaz-bankami.svg",
    pricing: [
      {
        price: "800 Kč",
        duration: "60 minut",
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
    image: "/images/maderoterapie.svg",
    pricing: [
      {
        price: "1500 Kč",
        duration: "90 min + 20 min",
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
    image: "/images/relaxacni-masaz.svg",
    pricing: [
      {
        price: "1200 Kč",
        duration: "90 minut",
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
    image: "/images/lymfaticka-masaz.svg",
    pricing: [
      {
        price: "1500 Kč",
        duration: "120 minut",
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
    image: "/images/arosha-zabaly.svg",
    pricing: [
      {
        price: "1500 Kč",
        duration: "120 minut",
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
    icon: "",
    image: "/images/zakladni-osetreni.svg",
    pricing: [
      {
        price: "1200 Kč",
        duration: "60 minut",
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
    icon: "",
    image: "/images/osetreni-na-miru.svg",
    pricing: [
      {
        price: "1800 Kč",
        duration: "90 minut",
      },
    ],
    benefits: [
      "Individuální přístup",
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
    icon: "",
    image: "/images/hydratacni-osetreni.svg",
    pricing: [
      {
        price: "1800 Kč",
        duration: "90 minut",
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
    icon: "",
    image: "/images/omlazujici-pece.svg",
    pricing: [
      {
        price: "1800 Kč",
        duration: "90 minut",
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
    icon: "",
    image: "/images/mezoterapie.svg",
    pricing: [
      {
        price: "3700 Kč",
        duration: "90 minut",
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
    icon: "",
    image: "/images/barveni-ras-oboci.svg",
    pricing: [
      {
        price: "350 Kč",
        duration: "samostatně",
      },
      {
        price: "230 Kč",
        duration: "k ošetření pleti",
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
    icon: "",
    image: "/images/laminace-ras-oboci.svg",
    pricing: [
      {
        price: "450 Kč",
        duration: "laminace",
      },
      {
        price: "300 Kč",
        duration: "ke kosmetice",
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
