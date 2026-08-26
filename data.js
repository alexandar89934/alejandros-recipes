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
    id: "gibanica-sa-sirom",
    title: "Gibanica sa sirom",
    tags: ["doručak", "ručak", "večera"],
    image: "images/gibanica.jpg",
    description: "Sočna i hrskava gibanica sa sirom, jajima i kiselom pavlakom.",
    ingredients: [
      "deblje kore 600g",
      "sir 500g",
      "jaja 4-5",
      "kisela voda 2dl",
      "ulje 1/2 čaše",
      "prašak za pecivo 1 kesica",
      "kisela pavlaka 1 čaša",
      "so 1-1,5 kašičica"
    ],
    steps: [
      { text: "Umutite jaja žicom, izgnječite sir i pomešajte. Dodajte kiselu vodu, ulje, prašak za pecivo, so i kiselu pavlaku. Dobro sjedinite sve sastojke.", image: "" },
      { text: "Nauljite tepsiju i stavite jednu i po koru tako da prekrije dno i malo viri sa svih strana tepsije.", image: "" },
      { text: "Ostavite jednu celu koru sa strane za prekrivanje pite, a ostale kore isecite na pola. Svaku polovinu umočite u fil, zgužvajte i ređajte u tepsiju dok ne prekrijete celo dno.", image: "" },
      { text: "Nastavite da umačete, gužvate i ređate kore dok ne potrošite sve kore i fil. Ako vam ostane malo fila, prelijte ga preko zgužvanih kora.", image: "" },
      { text: "Kore koje vire iz pleha savijte prema unutra, a zatim preostalom celom korom prekrijte celu pitu tako što ćete je malo zavući sa svih strana.", image: "" },
      { text: "Poprskajte gibanicu sa malo ulja i kisele vode, pa pecite oko 40 minuta u prethodno zagrejanoj rerni na 200°C.", image: "" },
      { text: "Kada izvadite gibanicu iz rerne, možete je prekriti čistom krpom kako bi se malo opustila. Prohlađenu gibanicu isecite na parčad.", image: "" }
    ]
  },
  {
    id: "sos-pavlaka-parmezan",
    title: "Sos od pavlake i parmezana",
    tags: ["ručak", "večera", "sos"],
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
    tags: ["ručak"],
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
    image: "images/francuski-tart-borovnice.png",
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
    id: "cokoladni-sufle",
    title: "Čokoladni sufle (Lava kolač)",
    tags: ["dezert", "slatko"],
    image: "images/cokoladni-sufle.jpg",
    description: "Najbolji i najjednostavniji recept za čokoladni sufle gotov je za samo 15 minuta. Savršeno pečen sufle ima čvrste ivice i toplu, tečnu čokoladnu sredinu. Ključ uspeha je u preciznom vremenu pečenja.",
    ingredients: [
      "čokolada za kuvanje 200g",
      "puter 150g (ili margarin)",
      "jaja 4",
      "šećer 100g",
      "brašno 5 kašika (oko 100g)",
      "puter za premazivanje kalupa",
      "prah šećer ili kakao prah za posipanje kalupa"
    ],
    steps: [
      { text: "Na pari ili na tihoj vatri istopite čokoladu i puter uz lagano mešanje dok ne dobijete glatku i sjajnu smesu. Ostavite da se malo prohladi.", image: "" },
      { text: "U posebnoj posudi penasto umutite cela jaja sa šećerom. Nema potrebe da odvajate belanca od žumanaca.", image: "" },
      { text: "U umućena jaja postepeno dodajte prohlađenu smesu od čokolade i putera, lagano mešajući dok se sve ne sjedini. Na kraju dodajte brašno i umešajte ga dok ne dobijete ujednačenu smesu.", image: "" },
      { text: "Kalupe za sufle premažite sa malo putera, a zatim ih pospite šećerom u prahu ili kakao prahom kako se kolač ne bi zalepio. Napunite kalupe smesom do oko 3/4 njihove visine.", image: "" },
      { text: "Rernu prethodno zagrejte na 220°C. Pecite sufle tačno 7 do 10 minuta. Ivice treba da budu čvrste i pečene, dok sredina treba da ostane mekana i tečna.", image: "" },
      { text: "Izvadite sufle iz rerne i ostavite ga kratko da odmori. Pažljivo ga prebacite na tanjir i pospite prah šećerom ili kakaom pre serviranja.", image: "" }
    ]
  },
  {
    id: "tart-sa-borovnicama-i-orasima",
    title: "Tart sa borovnicama i orasima",
    tags: ["dezert", "slatko"],
    image: "images/tart-borovnice.jpg",
    description: "Sočan tart sa hrskavom koricom od oraha, finim poslastičarskim kremom i osvežavajućim sosom od borovnica. Najbolji je dobro ohlađen, nakon nekoliko sati u frižideru ili preko noći.",
    ingredients: [
      "orah 90g, tostiran i samleven",
      "brašno 100g",
      "šećer 50g",
      "vanilin šećer 1 kesica",
      "hladan puter 75g, isečen na kockice",
      "žumanca 2",
      "cimet 1 kašičica",

      "zamrznute borovnice 500g",
      "šećer 2-3 kašike",
      "skrob 2 pune kašičice",

      "žumanca 5",
      "šećer 5 kašika",
      "vanilin šećer 1 kesica",
      "brašno 3 kašike",
      "mleko 400ml",
      "puter 100g"
    ],
    steps: [
      { text: "Za koricu pomešajte brašno, tostirane i samlevene orahe, šećer, vanilin šećer i cimet. Dodajte hladan puter isečen na kockice i utrljajte ga u smesu dok ne dobijete teksturu nalik mokrom pesku.", image: "" },
      { text: "Dodajte žumanca i kratko promešajte viljuškom. Zatim mesite od spolja ka sredini, samo dok se svi sastojci ne sjedine i formiraju kuglu.", image: "" },
      { text: "Testo oblikujte u disk, zavijte u foliju i stavite u frižider na oko sat vremena. Ako želite da ubrzate proces, možete ga staviti u zamrzivač na kraće vreme.", image: "" },
      { text: "Zagrejte rernu na 180°C. Ohlađeno testo istanjite u krug i njime obložite podmazan kalup za tart. Prekrijte testo papirom za pečenje i napunite ga pirinčem, naročito uz ivice, kako bi korica zadržala oblik.", image: "" },
      { text: "Stavite kalup još 5 minuta u zamrzivač, a zatim pecite koricu 10 minuta. Izvadite pirinač i papir za pečenje, pa nastavite da pečete još 15 minuta. Izvadite koricu iz rerne i ostavite je da se potpuno ohladi pre vađenja iz kalupa.", image: "" },
      { text: "Za sos od borovnica stavite zamrznute borovnice i šećer u šerpicu i zagrevajte na tihoj vatri. Kada smesa provri, dodajte skrob razmućen u malo vode i mešajte oko 2 minuta.", image: "" },
      { text: "Skinite sos sa ringle, prekrijte ga prijanjajućom folijom i ostavite da se potpuno ohladi.", image: "" },
      { text: "Za poslastičarski krem pomešajte žumanca, šećer, vanilin šećer i brašno. Postepeno dodajte mleko, kašiku po kašiku, uz neprestano mešanje žicom dok ne dobijete glatku i tečnu smesu.", image: "" },
      { text: "Ostatak mleka stavite u šerpu i zagrejte do ključanja. Skinite sa ringle i lagano sipajte smesu od jaja uz neprestano mešanje. Vratite šerpu na vatru i kuvajte uz mešanje dok krem ne proključa i ne zgusne se.", image: "" },
      { text: "Prekrijte krem prijanjajućom folijom i ostavite ga da se ohladi na sobnoj temperaturi. Dodajte omekšali puter i umutite dok ne dobijete gladak i fin krem. Ako koristite margarin, prvo ga posebno umutite, a zatim postepeno dodajte puding, po jednu kašiku.", image: "" },
      { text: "Ohlađeni poslastičarski krem ravnomerno rasporedite preko ohlađene korice od oraha. Preko krema pažljivo rasporedite potpuno ohlađen sos od borovnica.", image: "" },
      { text: "Tart stavite u frižider na najmanje 2 sata, a najbolje preko noći, kako bi se lepo ohladio i stegao pre služenja.", image: "" }
    ]
  },
  {
    id: "njoke-u-paradajz-sosu",
    title: "Njoke u paradajz sosu",
    tags: ["ručak", "brzo", "sos"],
    image: "images/njoke-paradajz-sos.jpg",
    description: "Brz i jednostavan obrok sa njokama u ukusnom paradajz sosu, začinjenim origanom i svežim bosiljkom.",
    ingredients: [
      "bosiljak 5g",
      "brašno 10g",
      "njoke 400g",
      "crni luk 100g",
      "paradajz sos 150g",
      "origano 5g",
      "šećer 10g",
      "so po ukusu",
      "biber po ukusu",
      "maslinovo ulje za dinstanje"
    ],
    steps: [
      { text: "Na nauljenom tiganju izdinstajte sitno iseckan crni luk dok ne omekša i postane staklast.", image: "" },
      { text: "Dodajte iseckan paradajz, posolite i pobiberite. Kuvajte uz povremeno mešanje, naročito kada paradajz počne da ključa.", image: "" },
      { text: "Dodajte kašičicu šećera i kašiku brašna, pa dobro promešajte kako bi se sos zgusnuo i dobio željenu gustinu.", image: "" },
      { text: "Dok se sos kuva, u posebnoj šerpi stavite vodu da proključa. Kada voda provri, ubacite njoke i kuvajte ih nekoliko minuta, odnosno prema uputstvu sa pakovanja.", image: "" },
      { text: "Kuvane njoke ocedite i dodajte ih u pripremljeni paradajz sos. Pažljivo promešajte kako bi se njoke ravnomerno obložile sosom.", image: "" },
      { text: "Začinite origanom i svežim bosiljkom, kratko promešajte i poslužite dok je toplo.", image: "" }
    ]
  },
]
