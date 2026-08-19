// ---------------------------------------------------------------------------
// PODACI O RECEPTIMA
// ---------------------------------------------------------------------------
// Dodaj svoj recept tako što ćeš kopirati jedan od objekata ispod.
//
// Polja:
//   id          jedinstveni kratak identifikator (slova, brojevi, crtice)
//   title       naziv recepta, prikazan na kartici i na strani recepta
//   tags        niz tagova, npr. "doručak" | "ručak" | "večera" | "užina" | "dezert"
//               (možeš dodati i svoje tagove — traka za filtriranje se sama
//               gradi na osnovu tagova koje koristiš)
//   image       putanja do slike za karticu i naslovnu sliku recepta, npr. "images/palacinke.jpg"
//               ostavi "" ako još nemaš sliku — umesto nje se crta zamenska sličica
//   description opcioni kratak opis ispod naslova. Ostavi "" da ga preskočiš.
//   ingredients opcioni niz stringova. Izostavi (ili []) da preskočiš sekciju.
//               stavka koja se završava sa ":" (npr. "Podloga:") prikazuje se
//               kao naslov grupe umesto kao sastojak — korisno za recepte sa delovima.
//   steps       niz { text, image } — slika je opciona za svaki korak, ostavi "" ako je nema
// ---------------------------------------------------------------------------

const RECIPES = [
  {
    id: "spaghetti-carbonara",
    title: "Spaghetti Carbonara",
    tags: ["ručak", "večera"],
    image: "images/carbonara.jpg",
    description: "",
    ingredients: [
      "jaja 3",
      "testenina 250g",
      "parmezan 40g",
      "slanina 150g",
      "pavlaka za kuvanje (može i bez)",
      "šareni biber",
      "peršun",
      "maslinovo ulje"
    ],
    steps: [
      { text: "U kipuću, prethodno posoljenu vodu, sa malo maslinovog ulja, staviti špagete da se kuvaju.", image: "" },
      { text: "U isto vreme, na dve kašike maslinovog ulja propržiti sitno seckanu slaninu dok ne porumeni i ne postane blago hrskavo (oko 5 minuta). Pred sam kraj dodati propasiran čen belog luka i promešati.", image: "" },
      { text: "U posebnoj posudi dobro izmešati žumanca sa pavlakom, malo vode iz špageta, parmezanom, peršunom, mlevenim biberom i malo soli.", image: "" },
      { text: "Kad su špagete gotove, procediti ih i sipati u tiganj sa slaninom. Preliti smesom od jaja i dobro izmešati dok se ne sjedine, zatim skloniti sa vatre.", image: "" },
      { text: "Gotove špagete pospite mlevenim biberom i malo peršuna.", image: "" }
    ]
  },
  {
    id: "keto-sos-pavlaka-parmezan",
    title: "Keto sos od pavlake i parmezana",
    tags: ["ručak", "večera"],
    image: "",
    description: "",
    ingredients: [
      "200 ml pavlake za kuvanje",
      "50–70 g rendanog parmezana (po ukusu)",
      "1 kašika putera ili masti (za bogatiju teksturu)",
      "so i biber po ukusu",
      "1 čen belog luka, sitno iseckan (opciono)",
      "malo muškatnog oraščića ili italijanskih začina (opciono)"
    ],
    steps: [
      { text: "U tiganju na laganoj vatri otopiti puter.", image: "" },
      { text: "Ako se koristi beli luk, prvo ga propržiti 20–30 sekundi da zamiriše (ne sme da potamni).", image: "" },
      { text: "Dodati pavlaku za kuvanje i mešati da se sjedini sa puterom.", image: "" },
      { text: "Dodati rendani parmezan, polako uz mešanje, dok se ne istopi.", image: "" },
      { text: "Krčkati 3–5 minuta na srednjoj vatri, dok se sos ne zgusne.", image: "" },
      { text: "Dodati so i biber po ukusu (parmezan je već slan, pažljivo sa solju).", image: "" },
      { text: "Opciono, ubaciti malo dodatnih začina za jači ukus.", image: "" }
    ]
  },
  {
    id: "gulas",
    title: "Gulaš",
    tags: ["ručak", "večera"],
    image: "",
    description: "",
    ingredients: [
      "1 kg svinjskog ili junećeg mesa",
      "1 kg crnog luka",
      "2 kašičice alеve paprike",
      "4–5 listova lorbera",
      "10-ak zrna bibera",
      "10-ak zrna kima",
      "tucana ljuta paprika",
      "so, biber, suvi začin po ukusu",
      "2–3 dl kuvanog paradajza",
      "1 svež paradajz",
      "2 sveže paprike",
      "1 ljuta paprika",
      "6–7 dl vruće vode",
      "1 dl ulja"
    ],
    steps: [
      { text: "Crni luk sitno iseckati i pržiti u većoj šerpi na malo ulja. Kad postane staklast i dobro ispržen, dodati meso isečeno na kockice podjednake veličine i nastaviti prženje. Nakon desetak minuta dodati čašu vrele vode, poklopiti i ostaviti da se polako dinsta i krčka.", image: "" },
      { text: "Posle oko pola sata dodati začine: lorber, biber u zrnu, kim, alevu i ljutu papriku, kao i svežu papriku, papričicu i svež paradajz isečen na četvrtine. Doliti još malo vrele vode, poklopiti i ostaviti još oko pola sata, povremeno mešajući.", image: "" },
      { text: "Kad se proverom utvrdi da je meso kuvano, dodati kuvani paradajz i doterati ukus začinima. Kuvanu papriku i paradajz izvaditi, prohladiti, kašikom odvojiti ljuske i vratiti povrće u šerpu.", image: "" },
      { text: "Nakon ukupnog kuvanja od oko 2 sata, gulaš bi trebalo da bude gotov. Ako je čorba retka, razmutiti kašiku brašna u malo vode, dodati u šerpu i kuvati još 5–10 minuta.", image: "" }
    ]
  },
  {
    id: "zapeceni-spanac-mleveno-meso",
    title: "Zapečeni spanać sa mlevenim mesom",
    tags: ["ručak", "večera"],
    image: "",
    description: "",
    ingredients: [
      "500 g mlevene govedine ili svinjetine",
      "500 g svežeg spanaća (ili 250 g smrznutog, oceđenog)",
      "200 ml pavlake za kuvanje",
      "150 g kačkavalja (može i trapist ili mocarela)",
      "1 glavica crnog luka",
      "2 čena belog luka (ili suvi beli luk začin)",
      "2 kašike maslinovog ulja (ili putera)",
      "so, biber, muškatni oraščić po ukusu"
    ],
    steps: [
      { text: "Na ulju propržiti sitno seckani crni luk dok ne omekša. Dodati mlevenu govedinu, začiniti solju i biberom i pržiti dok ne porumeni.", image: "" },
      { text: "Spanać oprati i kratko obariti 2–3 minuta pa ocediti (ili odmrznuti i ocediti ako je smrznut). Na malo ulja propržiti beli luk, dodati spanać, posoliti, pobiberiti i po želji dodati malo muškatnog oraščića.", image: "" },
      { text: "U vatrostalnu posudu staviti sloj mlevenog mesa, preko njega spanać, preliti pavlakom i posuti izrendanim sirom.", image: "" },
      { text: "Peći u rerni zagrejanoj na 200°C, 15–20 minuta, dok se sir ne zarumeni.", image: "" }
    ]
  },
  {
    id: "francuski-tart-borovnice",
    title: "Francuski tart sa borovnicama i krem sirom",
    tags: ["dezert"],
    image: "",
    description: "",
    ingredients: [
      "Podloga:",
      "250–300 g mlevenog keksa (Plazma ili Digestive)",
      "100–125 g putera (otopljenog)",
      "2–3 kašike mleka (po potrebi, da se poveže)",
      "Krem:",
      "400 g krem sira (ili maskarponea)",
      "200 ml slatke pavlake (umućene)",
      "100–150 g šećera u prahu (po ukusu)",
      "1 kašičica arome vanile",
      "100 g otopljene bele čokolade (opciono)",
      "Preliv:",
      "300–400 g zamrznutih ili svežih borovnica",
      "3–4 kašike šećera",
      "1 kašika gustina (razmućena u malo vode)",
      "sok od pola limuna"
    ],
    steps: [
      { text: "Podloga: pomešati mleveni keks i otopljeni puter. Utisnuti smesu u kalup (24–26 cm) i staviti u frižider dok se pravi krem.", image: "" },
      { text: "Krem: umutiti slatku pavlaku. U drugoj posudi umutiti krem sir sa šećerom u prahu i vanilom, pa lagano špatulom spojiti sa umućenom pavlakom (i otopljenom belom čokoladom, ako se koristi). Naneti krem preko keksa.", image: "" },
      { text: "Preliv: u šerpici zagrejati borovnice, šećer i sok od limuna par minuta da puste sok. Dodati gustin razmućen u vodi i mešati dok se ne zgusne — borovnice treba da ostanu cele.", image: "" },
      { text: "Ostaviti preliv da se potpuno ohladi, pa ga rasporediti preko belog krema.", image: "" },
      { text: "Tart ostaviti u frižideru bar 3–4 sata, najbolje preko noći, da se stegne.", image: "" },
      { text: "Savet: poslužiti sa malo umućene slatke pavlake sa strane (chantilly).", image: "" }
    ]
  },
  {
    id: "zobena-kasa-preko-noci",
    title: "Zobena kaša preko noći",
    tags: ["doručak", "užina"],
    image: "images/overnight-oats.jpg",
    description: "Doručak koji se priprema unapred i samo čeka u frižideru dok spavaš. Jedva da je recept, a uvek dobrodošao.",
    steps: [
      { text: "U teglu sipati ovsene pahuljice, mleko i jogurt.", image: "images/overnight-oats-1.jpg" },
      { text: "Umešati med, seme chia i prstohvat soli.", image: "" },
      { text: "Zatvoriti i ostaviti u frižideru bar 6 sati, najbolje preko noći.", image: "images/overnight-oats-3.jpg" },
      { text: "Pred jelo dodati voće ili orašaste plodove po želji.", image: "" }
    ]
  },
  {
    id: "sakshuka",
    title: "Šakšuka",
    tags: ["doručak", "ručak"],
    image: "images/shakshuka.jpg",
    description: "Jaja poširana u začinjenom sosu od paradajza i paprike. Jedan tiganj, najbolje jesti direktno iz njega uz hleb.",
    steps: [
      { text: "Zagrejati maslinovo ulje u tiganju i propržiti luk i papriku dok ne omekšaju.", image: "images/shakshuka-1.jpg" },
      { text: "Dodati beli luk, kim i alevu papriku; propržiti dok ne zamiriše.", image: "" },
      { text: "Dodati zgnječeni paradajz i krčkati 10 minuta.", image: "images/shakshuka-3.jpg" },
      { text: "Napraviti udubljenja u sosu, razbiti jaja u njih, poklopiti i kuvati dok se ne stegnu.", image: "images/shakshuka-4.jpg" },
      { text: "Posuti peršunom i poslužiti uz topao hleb.", image: "" }
    ]
  },
  {
    id: "tortilja-piletina-cezar",
    title: "Tortilja sa piletinom i Cezar prelivom",
    tags: ["ručak"],
    image: "images/caesar-wrap.jpg",
    description: "",
    steps: [
      { text: "Iseckati kuvane pileće grudi na trakice.", image: "" },
      { text: "Izmešati zelenu salatu, piletinu, parmezan i preliv.", image: "images/caesar-wrap-2.jpg" },
      { text: "Smesu poređati po sredini tople tortilje i čvrsto zamotati.", image: "" },
      { text: "Preseći po dijagonali i poslužiti.", image: "" }
    ]
  },
  {
    id: "losos-i-povrce-iz-pleha",
    title: "Losos i povrće iz jednog pleha",
    tags: ["večera"],
    image: "images/salmon.jpg",
    description: "Losos i povrće se peku zajedno na jednom plehu, pa je pranje sudova gotovo nikakvo.",
    steps: [
      { text: "Zagrejati rernu na 220°C.", image: "" },
      { text: "Na pleh staviti brokoli i čeri paradajz, začiniti uljem, solju i biberom.", image: "images/salmon-1.jpg" },
      { text: "Peći 8 minuta, zatim povrće pomeriti na stranu.", image: "" },
      { text: "Na pleh staviti filete lososa, začiniti i peći još 10–12 minuta.", image: "images/salmon-3.jpg" },
      { text: "Pred serviranje preliti limunovim sokom.", image: "" }
    ]
  },
  {
    id: "rizoto-sa-pecurkama",
    title: "Rižoto sa pečurkama",
    tags: ["večera"],
    image: "images/risotto.jpg",
    description: "Sporo, uz stalno mešanje, ali vredi svakog minuta provedenog uz šporet.",
    steps: [
      { text: "Propržiti pečurke dok ne porumene; skloniti sa strane.", image: "images/risotto-1.jpg" },
      { text: "U istom loncu propržiti luk, zatim kratko propržiti pirinač.", image: "" },
      { text: "Dodavati toplu supu kutlačom po kutlačom, mešajući dok se ne upije.", image: "images/risotto-3.jpg" },
      { text: "Posle otprilike 20 minuta umešati pečurke, puter i parmezan.", image: "" },
      { text: "Ostaviti da odstoji 2 minuta van vatre pre serviranja.", image: "" }
    ]
  },
  {
    id: "humus-za-pet-minuta",
    title: "Humus za pet minuta",
    tags: ["užina", "ručak"],
    image: "images/hummus.jpg",
    description: "Umuti se za onoliko vremena koliko treba da se iseče povrće za umakanje.",
    steps: [
      { text: "U multipraktik staviti slanutak, tahini, limunov sok i beli luk.", image: "" },
      { text: "Mešati uz postepeno dodavanje maslinovog ulja dok smesa ne postane glatka.", image: "images/hummus-2.jpg" },
      { text: "Po potrebi dodati kašiku vode da se razblaži, posoliti po ukusu.", image: "" },
      { text: "Razmazati na tanjir, preliti uljem i poslužiti.", image: "" }
    ]
  }
];
