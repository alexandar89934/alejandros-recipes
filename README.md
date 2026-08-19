# Aleksandrov Recepturar

Statična aplikacija za pregled recepata — čist HTML/CSS/JS, bez servera, bez build koraka.

## Fajlovi

- `index.html` — struktura stranice
- `style.css` — sav izgled (mediteranska paleta boja)
- `app.js` — prikaz kartica, filtriranje, prikaz recepta, tajmer i "ekran ostaje uključen"
- `data.js` — **ovde se čuvaju tvoji recepti**
- `images/` — ovde idu tvoje slike

## Dodavanje recepta

Otvori `data.js` i kopiraj jedan od postojećih objekata u nizu `RECIPES`. Popuni:

- `title` — naziv, prikazan na kartici i na strani recepta
- `tags` — npr. `"doručak"`, `"ručak"`, `"večera"`, `"užina"`, `"dezert"` (možeš izmisliti i svoje tagove — traka za filtriranje se sama gradi na osnovu tagova koje koristiš)
- `image` — putanja poput `"images/palacinke.jpg"`, ili ostavi `""` za zamensku sličicu
- `description` — opciono, ostavi `""` da preskočiš
- `ingredients` — niz sastojaka. Stavka koja se završava sa `":"` (npr. `"Podloga:"`) prikazuje se kao naslov grupe umesto sastojka
- `steps` — niz `{ text, image }`. `image` je opciona za svaki korak — ostavi `""` ako je nemaš

Ako slika nedostaje ili je putanja pogrešna, kartica/naslovna slika tiho prelazi na zamensku sličicu umesto da prikaže "slomljenu" ikonicu. Slika koraka se jednostavno preskače ako nedostaje.

## Dodavanje slika

Ubaci slike u `images/` i referenciraj ih iz `data.js` kao `images/tvoj-fajl.jpg`. Radi bilo koji format koji browser prikazuje (`.jpg`, `.png`, `.webp`).

## Tajmer

Pored naslova recepta nalazi se malo dugme sa ikonicom sata. Klik na njega otvara mali retro budilnik koji lebdi preko ekrana (uvek se prvo pojavi u gornjem desnom uglu) — možeš ga prevući bilo gde tako što ga uhvatiš za ručku (⠿) na vrhu panela. Upiši broj minuta ispod sata (dozvoljene su i decimale, npr. `2.5`) i klikni na dugme ▶. Kad odbrojavanje dođe do nule, budilnik se "zatrese" i oglasi kratko retro zvonce (generisano direktno u browseru — nije potrebna nikakva audio datoteka), a zatim se sam zatvori. Klik na ✕ ili na dugme sa satom ga zatvara ručno. Panel se automatski zatvara i resetuje kad odeš na drugi recept ili se vratiš u pregled.

## Ekran ostaje uključen

Dok je stranica recepta otvorena, aplikacija traži od browsera da ne gasi ekran (Screen Wake Lock API), pa možeš da pratiš korake bez stalnog dodirivanja telefona. Kad se vratiš na pregled recepata, to se automatski isključuje. Ovo radi u novijim verzijama Chrome/Edge/Android browsera i novijem Safariju — ako browser ne podržava ovu funkciju, aplikacija normalno radi dalje, samo bez tog efekta.

## Pokretanje lokalno

Samo otvori `index.html` u browseru — sve je statično, ništa nije potrebno instalirati.

## Objavljivanje preko GitHub Pages

1. Napravi novi repozitorijum na GitHub-u i otpremi ove fajlove u njega (sadržaj foldera `recipe-app` direktno u koren repozitorijuma, ne u dodatni podfolder).
2. U repozitorijumu idi na **Settings → Pages**.
3. Pod **Build and deployment** postavi **Source** na `Deploy from a branch`, granu `main`, folder `/ (root)`.
4. Sačuvaj. GitHub daje URL poput `https://tvoje-ime.github.io/ime-repozitorijuma/` — to je tvoja živa aplikacija.
5. Svaki put kad izmeniš `data.js` (novi recept, nova slika) i pošalješ (push), sajt se automatski osveži za minut-dva.
