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
    id: "domaca-proja-sa-sirom",
    title: "Domaća proja sa sirom",
    tags: ["doručak", "slano", "brzo", "tradicionalno"],
    image: "images/proja-sa-sirom.jpg",
    description: "Mekana i ukusna domaća proja sa kukuruznim brašnom i sirom, lepo zapečena spolja i mekana iznutra. Brzo se priprema i odlična je uz jogurt ili kiselo mleko.",
    ingredients: [
      "kukuruzno (projino) brašno 2 čaše",
      "belo (pšenično) brašno 1 čaša",
      "jaja 3",
      "jogurt 200ml",
      "kisela voda 200ml",
      "ulje 1/2 čaše",
      "beli sir 200–250g, usitnjen",
      "prašak za pecivo 1 kesica",
      "so po ukusu"
    ],
    steps: [
      { text: "Rernu prethodno zagrejte na 200°C.", image: "" },
      { text: "U većoj posudi pomešajte kukuruzno brašno, belo brašno i prašak za pecivo.", image: "" },
      { text: "U drugoj posudi kratko umutite jaja, pa dodajte jogurt, kiselu vodu, ulje i malo soli. Količinu soli prilagodite slanoći sira.", image: "" },
      { text: "Sipajte tečne sastojke u posudu sa suvim sastojcima i sve dobro sjedinite žicom dok ne dobijete ujednačenu smesu bez grudvica.", image: "" },
      { text: "Na kraju lagano umešajte usitnjeni beli sir kako bi se ravnomerno rasporedio kroz smesu.", image: "" },
      { text: "Smesu izlijte u podmazanu tepsiju ili rasporedite u kalup za mafine. Pecite oko 30 minuta, odnosno dok proja ne dobije lepu zlatno-smeđu koricu.", image: "" },
      { text: "Gotovu proju poprskajte sa malo vode i pokrijte čistom krpom. Ostavite je nekoliko minuta da odmori i omekša.", image: "" },
      { text: "Proju isecite i poslužite toplu uz jogurt ili kiselo mleko.", image: "" }
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
    id: "lazanje",
    title: "Lazanje",
    tags: ["ručak", "italijansko", "testenina"],
    image: "images/lazanje.jpg",
    description: "Sočne i bogate lazanje sa kombinacijom svinjskog i junećeg mesa, paradajz sosom, kremastim bešamelom, mocarelom i parmezanom. Ključ je da lazanje ostanu sočne i bogato prelivene sosom.",
    ingredients: [
      "maslinovo ulje malo",
      "crni luk 1 veći",
      "beli luk 4 čena",
      "šargarepa 100g, narendana",
      "svinjsko mleveno meso 250g",
      "juneće mleveno meso 250g",
      "sos od paradajza 1 tegla",
      "Vegeta po ukusu",
      "peršunov list malo, sitno iseckan",

      "ulje 4 kašike",
      "puter 3 kašike",
      "brašno 2 kašike",
      "mleko 3 šolje ili po potrebi",
      "so po ukusu",
      "mocarela ili kačkavalj 2 šolje, narendan",
      "sveža mocarela 300g",
      "parmezan 1/2 šolje, narendan",

      "listovi za lazanje po potrebi"
    ],
    steps: [
      { text: "U većoj šerpi zagrejte malo maslinovog ulja. Dodajte sitno seckan crni i beli luk i propržite dok ne omekšaju.", image: "" },
      { text: "Dodajte svinjsko i juneće mleveno meso, kao i narendanu šargarepu. Sve dobro propržite uz povremeno mešanje dok meso ne bude potpuno termički obrađeno.", image: "" },
      { text: "Dodajte sos od paradajza, začinite Vegetom i po želji dodajte sitno seckan peršun. Kuvajte na laganoj vatri oko 30 minuta kako bi se ukusi lepo sjedinili.", image: "" },
      { text: "Za bešamel sos zagrejte ulje i puter na veoma niskoj temperaturi. Dodajte brašno i kratko ga propržite uz neprestano mešanje, pazeći da ne potamni.", image: "" },
      { text: "Postepeno dodajte mleko uz stalno mešanje kako se ne bi stvorile grudvice. Začinite solju i kuvajte dok se sos ne zgusne.", image: "" },
      { text: "Kada se bešamel zgusne, dodajte narendanu mocarelu ili kačkavalj i mešajte dok se sir ne otopi i potpuno sjedini sa sosom.", image: "" },
      { text: "U pleh za pečenje prvo stavite sloj crvenog sosa. Preko njega poređajte listove za lazanje tako da se ne preklapaju.", image: "" },
      { text: "Preko listova rasporedite sloj belog sosa, zatim ponovo listove za lazanje i sloj crvenog sosa.", image: "" },
      { text: "Svežu mocarelu isecite na kolutove i rasporedite preko crvenog sosa. Preko mocarele stavite još jedan sloj listova za lazanje.", image: "" },
      { text: "Premažite sve preostalim bešamel sosom. Odozgo dodajte malo crvenog sosa i viljuškom ga lagano prošarajte kroz beli sos kako površina ne bi izgorela tokom pečenja.", image: "" },
      { text: "Pleh dobro prekrijte aluminijumskom folijom i pecite u prethodno zagrejanoj rerni na 180°C oko 1 sat.", image: "" },
      { text: "Skinite aluminijumsku foliju, pospite lazanje narendanim parmezanom i vratite u rernu još oko 10 minuta, dok površina ne dobije lepu zlatnu boju.", image: "" },
      { text: "Izvadite lazanje iz rerne i ostavite ih nekoliko minuta da odmore pre sečenja. Lazanje treba da budu sočne i kremaste, a ne previše čvrste. Buon appetito!", image: "" }
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
  },{
    id: "zapeceni-spanac-mleveno-meso",
    title: "Zapečeni spanać sa mlevenim mesom",
    tags: ["ručak", "večera"],
    image: "images/zapeceni-spanac-mleveno-meso.jpg",
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
    id: "gulas",
    title: "Gulaš",
    tags: ["ručak"],
    image: "images/gulas.jpg",
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
    id: "cokoladni-tart",
    title: "Čokoladni tart",
    tags: ["dezert", "slatko", "čokolada"],
    image: "images/cokoladni-tart.jpg",
    description: "Bogat i kremast čokoladni tart sa hrskavom podlogom od čokoladnog keksa i glatkim ganache punjenjem od tamne čokolade. Najbolji je dobro ohlađen, nakon nekoliko sati u frižideru ili preko noći.",
    ingredients: [
      "čokoladni keks 600g, mleven",
      "maslac bez laktoze 190g, otopljen",

      "tamna čokolada 70% 600g, sitno seckana",
      "slatko vrhnje bez laktoze (30% m.m.) 500ml",
      "šećer u prahu 5-10g",
      "ekstrakt vanilije 10ml",
      "so 2-3 prstohvata",

      "tamna čokolada 30-50g, za strugotine (opciono, za dekoraciju)"
    ],
    steps: [
      { text: "Sameljite čokoladni keks i pomešajte ga sa otopljenim maslacem bez laktoze dok se dobro ne sjedine.", image: "" },
      { text: "Smesu utisnite u kalup od 28 cm, dobro pritiskajući dno i stranice (najlakše dnom čaše). Stavite u frižider na 30-45 minuta da se potpuno stegne.", image: "" },
      { text: "Ako želite čvršću, hrskaviju podlogu, možete je peći oko 10 minuta na 175°C, pa je potpuno ohladiti pre nego što nastavite sa ganacheom.", image: "" },
      { text: "Nasečkajte tamnu čokoladu na sitne komadiće i stavite je u veliku zdelu.", image: "" },
      { text: "U lončiću zagrevajte vrhnje sa šećerom u prahu i solju na srednjoj temperaturi. Nemojte dozvoliti da jako proključa - čim je vrhnje vrlo vruće i počnu da se pojavljuju sitni mehurići uz ivicu, sklonite ga sa vatre.", image: "" },
      { text: "Dodajte ekstrakt vanilije u vruće vrhnje.", image: "" },
      { text: "Vruće vrhnje prelijte preko nasečkane čokolade. Ne mešajte odmah - pustite da odstoji oko 2 minuta kako bi se čokolada rastopila.", image: "" },
      { text: "Nakon toga, mešajte pjenjačom polako od sredine ka spolja dok ganache ne postane potpuno gladak i sjajan.", image: "" },
      { text: "Gotov ganache sipajte preko ohlađene podloge i poravnajte površinu.", image: "" },
      { text: "Tart stavite u frižider na najmanje 2 sata, a najbolje preko noći, dok se ganache potpuno ne stegne.", image: "" },
      { text: "Pre serviranja, po želji ukrasite strugotinama tamne čokolade.", image: "" }
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
    id: "cizkejk-sa-sumskim-vocem",
    title: "Čizkejk sa šumskim voćem",
    tags: ["dezert", "slatko", "čizkejk"],
    image: "images/cizkejk-sa-sumskim-vocem.jpg",
    description: "Kremasti čizkejk sa hrskavom koricom od Plazme, laganim filom od Ella sira i slatke pavlake i osvežavajućim prelivom od šumskog voća. Najbolji je dobro ohlađen, nakon nekoliko sati u frižideru ili preko noći.",
    ingredients: [
      "mlevena Plazma 300g",
      "maslac 125g",
      "šećer u prahu 2 kašike",

      "Ella sir 450g",
      "slatka pavlaka 500ml",
      "šećer u prahu 250g",
      "želatin 1 kesica",

      "mix šumskog voća 400g",
      "voda 100ml",
      "kristal šećer 4 kašike",
      "želatin 1 kesica"
    ],
    steps: [
      { text: "Za koricu maslac isečen na kockice pomešajte sa mlevenom Plazmom i šećerom u prahu. Rukama dobro sjedinite sastojke dok ne dobijete kompaktnu smesu.", image: "" },
      { text: "Smesu ravnomerno rasporedite u okrugli kalup za torte i dobro utisnite ka dnu kako biste formirali čvrstu koricu. Ostavite je sa strane dok pripremate fil.", image: "" },
      { text: "Za fil umutite slatku pavlaku dok ne postane čvrsta. U drugoj posudi kašikom sjedinite Ella sir i šećer u prahu.", image: "" },
      { text: "Dodajte umućenu slatku pavlaku u smesu od Ella sira i šećera, pa sve zajedno kratko umutite mikserom dok ne dobijete ujednačen i kremast fil.", image: "" },
      { text: "Želatin pripremite i rastopite prema uputstvu sa kesice. Dodajte ga u fil uz neprestano mućenje mikserom kako bi se ravnomerno rasporedio.", image: "" },
      { text: "Gotov fil sipajte preko Plazma korice i ravnomerno ga rasporedite po celoj površini. Stavite kalup u frižider dok pripremate preliv.", image: "" },
      { text: "Za preliv stavite šumsko voće, vodu i kristal šećer u šerpicu. Zagrevajte dok smesa ne provri, a zatim kuvajte oko 5 minuta uz povremeno mešanje.", image: "" },
      { text: "Sklonite šerpicu sa ringle i dok je voćna masa još vrela dodajte želatin. Mešajte dok se želatin potpuno ne rastopi i sjedini sa voćem.", image: "" },
      { text: "Ostavite voćni preliv da se prohladi. Kada više nije vruć, ali je još uvek dovoljno tečan, pažljivo ga sipajte preko ohlađenog fila i ravnomerno rasporedite.", image: "" },
      { text: "Čizkejk stavite u frižider i ostavite ga da se dobro ohladi i stegne, najbolje preko noći.", image: "" },
      { text: "Ohlađeni čizkejk pažljivo izvadite iz kalupa, isecite na parčiće i poslužite dobro rashlađen.", image: "" }
    ]
  },
  {
    id: "kolac-sa-makom-i-plazma-keksom",
    title: "Kolač sa makom i Plazma keksom za 15 minuta",
    tags: ["dezert", "slatko"],
    image: "images/kolac-sa-makom-i-plazma-keksom.jpg",
    description: "Brz i sočan kolač sa makom i Plazma keksom koji se priprema za samo 15 minuta, bez brašna, maslaca i pečenja. Jednostavna smesa se skuva, oblikuje u plehu i po želji preliva čokoladnom glazurom. Najbolji je dobro ohlađen.",
    ingredients: [
      "mleko 500ml",
      "pšenični griz 2 pune kašike",
      "šećer 150g",
      "mleveni mak 200g",
      "mleveni Plazma keks 300g",
      "čokolada po izboru 100g",
      "ulje 1-3 kašike, u zavisnosti od vrste čokolade"
    ],
    steps: [
      { text: "U manju šerpu sipajte mleko i dodajte šećer. Stavite na šporet i zagrevajte dok mleko ne provri.", image: "" },
      { text: "Dok se mleko zagreva, pripremite manji kalup ili pleh, približno 28 x 18 cm, i obložite ga papirom za pečenje. Pripremite griz, mleveni mak i mleveni Plazma keks kako bi vam svi sastojci bili spremni za dodavanje.", image: "" },
      { text: "Kada mleko provri, dodajte mleveni mak i pšenični griz. Mešajte na vatri 2-3 minuta, dok se smesa malo ne zgusne.", image: "" },
      { text: "Sklonite šerpu sa vatre, dodajte mleveni Plazma keks i dobro promešajte dok se svi sastojci potpuno ne sjedine i ne dobijete kompaktnu smesu.", image: "" },
      { text: "Celu smesu odmah prebacite u pripremljeni kalup ili pleh. Rasporedite je ravnomerno i poravnajte površinu.", image: "" },
      { text: "Ako koristite drugačiji, čist mleveni mak, obratite pažnju na gustinu smese pre dodavanja Plazma keksa. U zavisnosti od vrste maka, možda će biti potrebno malo više mleka ili nešto manje griza kako bi se dobila odgovarajuća gustina.", image: "" },
      { text: "Za čokoladnu glazuru otopite čokoladu na pari ili u mikrotalasnoj. Za belu čokoladu dodajte oko 1 kašiku ulja, za mlečnu oko 1,5 kašiku, a za crnu čokoladu sa više od 50% kakao delova oko 3 kašike ulja.", image: "" },
      { text: "Otopljenu čokoladu prelijte preko kolača i ravnomerno razmažite po celoj površini. Blago protresite pleh kako bi se glazura dodatno ujednačila.", image: "" },
      { text: "Ostavite kolač da se ohladi, a zatim ga stavite u frižider kako bi se potpuno stegao. Po želji, umesto čokoladne glazure možete nakon hlađenja staviti šlag.", image: "" },
      { text: "Ohlađeni kolač isecite na kocke ili štanglice i poslužite.", image: "" }
    ]
  },
  {
    id: "rezanci-sa-makom",
    title: "Rezanci sa makom",
    tags: ["dezert", "slatko", "brzo"],
    image: "images/rezanci-sa-makom.jpg",
    description: "Jednostavan i brz tradicionalni desert od širokih rezanaca, maka, maslaca i vanilin šećera.",
    ingredients: [
      "široki rezanci 500g",
      "mleveni mak 150g",
      "mleko 100ml",
      "maslac 100g",
      "šećer 150g",
      "vanilin šećer 1 kesica"
    ],
    steps: [
      { text: "Rezance skuvajte u vreloj vodi prema uputstvu na pakovanju, procedite i prelijte hladnom vodom.", image: "" },
      { text: "Maslac stavite u posudu i rastopite. Dodajte oceđene rezance, kratko ih propržite na maslacu, pa sklonite sa vatre.", image: "" },
      { text: "U mleko dodajte šećer, vanilin šećer i mleveni mak. Stavite na šporet i kuvajte uz neprestano mešanje.", image: "" },
      { text: "Kada mleko sa makom provri, sklonite sa vatre i dodajte pripremljene rezance.", image: "" },
      { text: "Sve dobro promešajte kako bi se rezanci ravnomerno obložili smesom od maka i odmah poslužite.", image: "" }
    ]
  },
  {
    id: "rolat",
    title: "Rolat",
    tags: ["dezert", "slatko"],
    image: "images/rolat.jpg",
    description: "Lagani i vazdušasti biskvit idealan za pripremu rolata. Nakon pečenja se pažljivo uvija u kuhinjsku krpu kako bi zadržao oblik i bio spreman za filovanje.",
    ingredients: [
      "jaja 6",
      "belance 1",
      "šećer 6 velikih kašika",
      "brašno 6 velikih kašika",
      "prašak za pecivo 1 kašičica"
    ],
    steps: [
      { text: "Odvojite belanca od žumanaca dok su jaja još hladna i ostavite ih oko 20 minuta na sobnoj temperaturi da se temperiraju.", image: "" },
      { text: "Žumanca umutite sa 3 kašike šećera dok ne dobijete gustu smesu svetložute boje.", image: "" },
      { text: "Belanca umutite dok dobro ne zapene, zatim postepeno dodajte preostali šećer, kašiku po kašiku. Povećajte brzinu miksera i mutite dok ne dobijete čvrstu i stabilnu penu.", image: "" },
      { text: "U umućena žumanca dodajte 3 do 4 velike kašike umućenih belanaca i lagano promešajte. Zatim celu smesu od žumanaca prebacite u preostala belanca i pažljivo mešajte varjačom odozdo prema gore dok se smese skoro potpuno ne sjedine.", image: "" },
      { text: "Pomešajte brašno i prašak za pecivo, pa ih prosejte. Postepeno ih dodajte smesi od jaja i lagano mešajte varjačom odozdo prema gore, samo dok se brašno potpuno ne sjedini sa smesom.", image: "" },
      { text: "Smesu ravnomerno rasporedite u plitku tepsiju dimenzija oko 37 x 25 cm obloženu papirom za pečenje. Poravnajte površinu kako bi biskvit svuda bio iste debljine.", image: "" },
      { text: "Pecite u prethodno zagrejanoj rerni na 180°C oko 15 do 20 minuta, odnosno dok biskvit ne dobije blagu zlatnu boju i bude pečen.", image: "" },
      { text: "Pečeni biskvit odvojite nožem od ivica tepsije, izvadite ga i pažljivo skinite papir za pečenje.", image: "" },
      { text: "Dok je još topao, uvijte biskvit zajedno sa čistom kuhinjskom krpom. Nakon oko 5 minuta kratko ga odmotajte, pa ponovo uvijte u krpu. Po želji ponovite postupak još jednom.", image: "" },
      { text: "Ostavite rolat da se potpuno ohladi. Ohlađeni biskvit je spreman za filovanje i dekoraciju po želji.", image: "" }
    ]
  },
  {
    id: "tiramisu",
    title: "Tiramisu",
    tags: ["dezert", "slatko", "italijansko"],
    image: "images/tiramisu.jpg",
    description: "Kremasti tiramisu sa mascarpone sirom, piškotama natopljenim jakom crnom kafom i blagom aromom ruma, završen slojem kakao praha.",
    ingredients: [
      "šećer u prahu 100g",
      "mascarpone sir 500g",
      "slatka pavlaka 250ml",
      "piškote 48 komada",
      "jaka crna kafa 250ml",
      "rum malo",
      "žumanca 4",
      "kakao prah za posipanje"
    ],
    steps: [
      { text: "Žumanca umutite sa šećerom u prahu, pa stavite smesu da se kuva na pari uz povremeno mešanje. Kuvajte oko 15 do 20 minuta, odnosno dok se smesa ne zgusne.", image: "" },
      { text: "Skuvanu smesu od žumanaca i šećera ostavite da se potpuno ohladi. Zatim dodajte mascarpone sir i kratko umutite mikserom dok se sastojci ne sjedine.", image: "" },
      { text: "U posebnoj posudi umutite slatku pavlaku, pa je dodajte smesi sa mascarpone sirom. Sve zajedno kratko umutite dok ne dobijete čvrst i kremast fil.", image: "" },
      { text: "Skuvajte jaku crnu kafu, procedite je i ostavite da se malo ohladi. Dodajte malo ruma i promešajte.", image: "" },
      { text: "Piškote kratko umakajte u kafu sa rumom, pazeći da ne upiju previše tečnosti i ne postanu gnjecave. Ređajte polovinu piškota na tacnu, u dva reda po 12 komada.", image: "" },
      { text: "Preko prvog sloja piškota ravnomerno rasporedite polovinu pripremljenog krema.", image: "" },
      { text: "Preko krema poređajte drugu polovinu piškota, takođe prethodno kratko umočenih u kafu sa rumom.", image: "" },
      { text: "Preko drugog sloja piškota rasporedite ostatak krema i poravnajte površinu.", image: "" },
      { text: "Tiramisu obilno pospite kakao prahom i stavite u frižider da se dobro ohladi i stegne pre služenja.", image: "" },
      { text: "Ako pravite duplu meru, krem pripremajte i mutite odvojeno za svaku meru. Veća količina odjednom može rezultirati mekšim kremom koji se neće dovoljno čvrsto umutiti.", image: "" }
    ]
  },
  {
    id: "tres-leches-sa-karamelom",
    title: "Tres Leches sa karamelom",
    tags: ["dezert", "slatko", "kremasto"],
    image: "images/tres-leches-karamel.jpg",
    description: "Sočan i kremast kolač sa mekanim pandispanom natopljenim mešavinom mleka i kondenzovanog mleka, slatkom pavlakom i bogatim slojem karamel krema. Najbolji je dobro ohlađen.",
    ingredients: [
      "jaja 6",
      "šećer 100g",
      "brašno 200g",
      "prašak za pecivo 1/2 kesice",
      "vanilin šećer 1 kesica",
      "slatka pavlaka 400ml",
      "kondenzovano mleko 300ml",
      "mleko 800ml",
      "karamel krem 300g"
    ],
    steps: [
      { text: "Umutite belanca, pa postepeno dodajte šećer i vanilin šećer. Kada dobijete čvrst sneg, dodajte jedno po jedno žumance i lagano umutite nakon svakog.", image: "" },
      { text: "Brašno pomešajte sa praškom za pecivo. Postepeno ga dodajte u umućena jaja i lagano mešajte na najmanjoj brzini miksera, samo dok se sastojci ne sjedine.", image: "" },
      { text: "Smesu sipajte u tepsiju dimenzija oko 20x30 cm obloženu papirom za pečenje. Pecite u prethodno zagrejanoj rerni na 180°C oko 20 do 25 minuta, odnosno dok pandispan ne bude pečen.", image: "" },
      { text: "Pečeni pandispan ostavite da se malo ohladi, zatim ga izvadite iz tepsije i izbodite nožem ili viljuškom na više mesta kako bi bolje upio preliv.", image: "" },
      { text: "U tepsiju sipajte slatku pavlaku, a zatim pandispan okrenite naopako i vratite ga u tepsiju tako da strana koja je tokom pečenja bila na vrhu sada bude okrenuta nadole. Ostavite oko 10 minuta.", image: "" },
      { text: "Pomešajte mleko i kondenzovano mleko, pa ravnomerno prelijte pandispan. Ostavite kolač da odstoji kako bi pandispan dobro upio mlečni preliv.", image: "" },
      { text: "Preko natopljenog pandispana pažljivo rasporedite karamel krem i ravnomerno ga zagladite.", image: "" },
      { text: "Kolač dobro ohladite u frižideru pre služenja. Najbolje je da odstoji nekoliko sati kako bi se ukusi sjedinili, a pandispan potpuno upio preliv.", image: "" }
    ]
  },
  {
    id: "pavlova-sa-vocem",
    title: "Pavlova sa vanila kremom i voćem",
    tags: ["dezert", "slatko", "voćno"],
    image: "images/pavlova.jpg",
    description: "Lagani i elegantni desert sa hrskavom korom od beze mase, kremastim vanila filom, slatkom pavlakom i svežim voćem. Kora je spolja hrskava, a iznutra mekana i vazdušasta.",
    ingredients: [
      "belanca 6",
      "so prstohvat",
      "šećer 250g",
      "sirće 1 kašika",

      "mleko 500ml",
      "žumanca 4",
      "šećer 4 kašike ili po ukusu",
      "gustin 50g",
      "maslac 100g",
      "ekstrakt vanile 1 kašičica",

      "mlečna slatka pavlaka 250ml",
      "kremfiks 1 kesica (nije obavezno)",
      "vanilin šećer 1 kesica (10g)",

      "voće po želji",
      "sveža menta za dekoraciju"
    ],
    steps: [
      { text: "Rernu zagrejte na 150°C. Belanca umutite sa prstohvatom soli dok ne postanu čvrsta. Postepeno dodajte šećer i mutite dok ne dobijete gustu, sjajnu i potpuno glatku beze masu. Pred kraj dodajte sirće i mutite još kratko.", image: "" },
      { text: "Na papiru za pečenje nacrtajte krug prečnika oko 22 cm, okrenite papir tako da nacrtana strana bude okrenuta nadole i stavite ga na pleh. Rasporedite beze masu unutar kruga i u sredini napravite udubljenje za fil.", image: "" },
      { text: "Stavite koru u rernu i odmah smanjite temperaturu na 100°C. Sušite oko 1 sat i 30 minuta, dok kora ne dobije blago zlatastu boju. Ako je rerna slabija, koru možete sve vreme sušiti na 150°C.", image: "" },
      { text: "Kada je kora gotova, isključite rernu i ostavite je unutra još oko 15 minuta kako bi postala hrskavija. Zatim je izvadite i potpuno ohladite.", image: "" },
      { text: "Za prvi fil umutite žumanca sa šećerom, dodajte gustin i oko 2 dcl hladnog mleka, pa dobro promešajte da nema grudvica. Preostalih 3 dcl mleka stavite da provri.", image: "" },
      { text: "Kada mleko provri, smanjite temperaturu i uz neprestano mešanje dodajte smesu sa žumancima. Kuvajte dok ponovo ne provri, a zatim još 1 do 2 minuta uz mešanje.", image: "" },
      { text: "Skinite fil sa ringle i odmah umešajte maslac i ekstrakt vanile. Prekrijte površinu providnom folijom i ostavite da se potpuno ohladi. Ohlađeni fil kratko umutite mikserom.", image: "" },
      { text: "Slatku pavlaku dobro ohladite pre mućenja. Po želji je možete staviti u zamrzivač oko 10 minuta, zajedno sa posudom i žicama miksera, ali pazite da se pavlaka ne zaledi.", image: "" },
      { text: "U hladnoj, dubokoj posudi kratko umutite slatku pavlaku na najmanjoj, a zatim na srednjoj brzini. Dodajte kremfiks i vanilin šećer i mutite još kratko na srednjoj brzini, samo dok se pavlaka ne zgusne. Pazite da je ne premutite.", image: "" },
      { text: "Na potpuno ohlađenu beze koru prvo rasporedite vanila fil, zatim preko njega nanesite umućenu slatku pavlaku.", image: "" },
      { text: "Preko pavlake rasporedite voće po želji i ukrasite listićima sveže mente.", image: "" },
      { text: "Pavlovu možete odmah poslužiti ili je pre služenja kratko ohladiti u frižideru.", image: "" }
    ]
  },
  {
    id: "sos-pavlaka-parmezan",
    title: "Sos od pavlake i parmezana",
    tags: ["ručak", "večera", "sos"],
    image: "images/sos-pavlaka-parmezan.jpg",
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
    id: "pesto-sos",
    title: "Pesto sos",
    tags: ["sos", "brzo", "vegetarijansko"],
    image: "images/pesto-sos.jpg",
    description: "Klasičan pesto sos od svežeg bosiljka, pinjola, parmezana, belog luka i maslinovog ulja. Idealan je uz testeninu, njoke, sendviče ili kao dodatak različitim jelima.",
    ingredients: [
      "svež bosiljak 100g",
      "beli luk 4 čena",
      "pinjoli 100g",
      "parmezan 100g",
      "maslinovo ulje 200ml",
      "so po ukusu"
    ],
    steps: [
      { text: "Svež bosiljak operite i dobro osušite. Odvojite listove od stabljika.", image: "" },
      { text: "U blender ili secko stavite listove bosiljka, čenove belog luka i pinjole.", image: "" },
      { text: "Dodajte narendani parmezan i kratko izmiksajte sve sastojke.", image: "" },
      { text: "Postepeno dodajte maslinovo ulje uz miksanje dok ne dobijete gust, kremast sos željene teksture.", image: "" },
      { text: "Probajte pesto i dodajte so po ukusu. Kratko još jednom izmiksajte kako bi se svi sastojci sjedinili.", image: "" },
      { text: "Gotov pesto sos možete odmah koristiti uz testeninu, njoke ili drugo jelo. Čuvajte ga u frižideru u zatvorenoj posudi.", image: "" }
    ]
  },
]
