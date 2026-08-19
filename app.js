// ---------------------------------------------------------------------------
// helpers
// ---------------------------------------------------------------------------

// Builds a soft placeholder image (as an inline SVG) so the app looks right
// even before you've added real photos to /images, and so a broken image
// path never shows a browser "broken image" icon.
function placeholderDataUri(label) {
  const initial = (label || "?").trim().charAt(0).toUpperCase();
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
      <rect width="100%" height="100%" fill="#2C4B4B"/>
      <text x="50%" y="53%" font-family="Georgia, serif" font-size="90"
            fill="#E4A93A" text-anchor="middle" dominant-baseline="middle">${initial}</text>
    </svg>`.trim();
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

// Attaches a fallback so any <img> quietly swaps to the placeholder on error,
// instead of showing a broken-image icon. No-op if there's no image path.
function withFallback(imgEl, label) {
  imgEl.addEventListener("error", () => {
    imgEl.onerror = null;
    imgEl.src = placeholderDataUri(label);
  });
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// ---------------------------------------------------------------------------
// state
// ---------------------------------------------------------------------------

let activeTag = "all";

const grid = document.getElementById("recipe-grid");
const filterBar = document.getElementById("filter-bar");
const emptyMsg = document.getElementById("empty-msg");

const browseView = document.getElementById("browse-view");
const detailView = document.getElementById("detail-view");
const backBtn = document.getElementById("back-btn");

// ---------------------------------------------------------------------------
// filter bar
// ---------------------------------------------------------------------------

function allTags() {
  const set = new Set();
  RECIPES.forEach(r => r.tags.forEach(t => set.add(t)));
  return ["all", ...Array.from(set).sort()];
}

function renderFilterBar() {
  filterBar.innerHTML = "";
  allTags().forEach(tag => {
    const pill = el("button", "filter-pill", tag === "all" ? "Sve" : tag);
    pill.type = "button";
    pill.setAttribute("aria-pressed", String(tag === activeTag));
    if (tag === activeTag) pill.classList.add("is-active");
    pill.addEventListener("click", () => {
      activeTag = tag;
      renderFilterBar();
      renderGrid();
    });
    filterBar.appendChild(pill);
  });
}

// ---------------------------------------------------------------------------
// grid / cards
// ---------------------------------------------------------------------------

function renderGrid() {
  grid.innerHTML = "";
  const list = activeTag === "all"
    ? RECIPES
    : RECIPES.filter(r => r.tags.includes(activeTag));

  emptyMsg.hidden = list.length !== 0;

  list.forEach(recipe => {
    const card = el("button", "card");
    card.type = "button";
    card.setAttribute("aria-label", `Otvori recept: ${recipe.title}`);

    const photo = el("img", "card-photo");
    photo.alt = recipe.title;
    photo.loading = "lazy";
    photo.src = recipe.image || placeholderDataUri(recipe.title);
    withFallback(photo, recipe.title);

    const body = el("div", "card-body");
    const title = el("h3", "card-title", recipe.title);
    const tagRow = el("div", "tag-row");
    recipe.tags.forEach(t => tagRow.appendChild(el("span", "tag-stamp", t)));

    body.appendChild(title);
    body.appendChild(tagRow);
    card.appendChild(photo);
    card.appendChild(body);

    card.addEventListener("click", () => openRecipe(recipe.id));

    grid.appendChild(card);
  });
}

// ---------------------------------------------------------------------------
// detail view
// ---------------------------------------------------------------------------

const detailHero = document.getElementById("detail-hero");
const detailTags = document.getElementById("detail-tags");
const detailTitle = document.getElementById("detail-title");
const detailDesc = document.getElementById("detail-desc");
const ingredientsHeading = document.getElementById("ingredients-heading");
const detailIngredients = document.getElementById("detail-ingredients");
const detailSteps = document.getElementById("detail-steps");

function renderDetail(recipe) {
  detailHero.innerHTML = "";
  const heroImg = el("img");
  heroImg.alt = recipe.title;
  heroImg.src = recipe.image || placeholderDataUri(recipe.title);
  withFallback(heroImg, recipe.title);
  detailHero.appendChild(heroImg);

  detailTags.innerHTML = "";
  recipe.tags.forEach(t => detailTags.appendChild(el("span", "tag-stamp", t)));

  detailTitle.textContent = recipe.title;

  detailDesc.textContent = recipe.description || "";
  detailDesc.hidden = !recipe.description;

  const ingredients = recipe.ingredients || [];
  detailIngredients.innerHTML = "";
  ingredientsHeading.hidden = ingredients.length === 0;
  detailIngredients.hidden = ingredients.length === 0;
  ingredients.forEach(item => {
    // an entry ending in ":" is a section label (e.g. "Podloga:"), not an ingredient
    const isLabel = /:\s*$/.test(item);
    const li = el("li", isLabel ? "section-label" : "", item);
    detailIngredients.appendChild(li);
  });

  detailSteps.innerHTML = "";
  recipe.steps.forEach(step => {
    const li = el("li", "step");
    const text = el("p", "step-text", step.text);
    li.appendChild(text);
    if (step.image) {
      const img = el("img", "step-photo");
      img.alt = "";
      img.loading = "lazy";
      img.src = step.image;
      // if a step photo is missing, just hide it rather than showing a
      // placeholder — a placeholder per step would get noisy.
      img.addEventListener("error", () => img.remove());
      li.appendChild(img);
    }
    detailSteps.appendChild(li);
  });
}

// ---------------------------------------------------------------------------
// tajmer
// ---------------------------------------------------------------------------

let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    audioCtx = new Ctx();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

// retro kuhinjsko zvonce: par tonova sa brzim opadanjem, ponovljeno 3x
function playBellSound() {
  try {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    const ringOnce = (startTime) => {
      [[1000, 0.5], [2600, 0.15]].forEach(([freq, peak]) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, startTime);
        gain.gain.setValueAtTime(0.0001, startTime);
        gain.gain.exponentialRampToValueAtTime(peak, startTime + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.8);
        osc.connect(gain).connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.85);
      });
    };
    ringOnce(now);
    ringOnce(now + 0.35);
    ringOnce(now + 0.7);
  } catch (err) {
    console.warn("Zvuk tajmera nije dostupan:", err);
  }
}

const timerMinutesInput = document.getElementById("timer-minutes");
const timerToggleBtn = document.getElementById("timer-toggle");
const timerDisplay = document.getElementById("timer-display");
const alarmWidget = document.getElementById("alarm-widget");

let timerIntervalId = null;
let timerRemainingSeconds = 0;
let timerRingTimeoutId = null;

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function tickTimer() {
  timerRemainingSeconds -= 1;
  if (timerRemainingSeconds <= 0) {
    timerDisplay.textContent = formatTime(0);
    stopTimerInterval();
    ringAlarm();
    return;
  }
  timerDisplay.textContent = formatTime(timerRemainingSeconds);
}

function stopTimerInterval() {
  if (timerIntervalId !== null) {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
  }
}

function ringAlarm() {
  alarmWidget.classList.add("is-ringing");
  playBellSound();
  clearTimeout(timerRingTimeoutId);
  timerRingTimeoutId = setTimeout(resetTimer, 2400);
}

function startTimer() {
  const minutes = parseFloat((timerMinutesInput.value || "").replace(",", "."));
  if (!minutes || minutes <= 0) {
    timerMinutesInput.focus();
    return;
  }
  getAudioCtx(); // pokreni audio kontekst dok imamo gest korisnika

  timerRemainingSeconds = Math.round(minutes * 60);
  timerDisplay.textContent = formatTime(timerRemainingSeconds);

  timerMinutesInput.disabled = true;
  timerToggleBtn.textContent = "■";
  timerToggleBtn.classList.add("is-running");
  timerToggleBtn.setAttribute("aria-label", "Zaustavi tajmer");

  stopTimerInterval();
  timerIntervalId = setInterval(tickTimer, 1000);
}

function resetTimer() {
  clearTimeout(timerRingTimeoutId);
  stopTimerInterval();
  timerRemainingSeconds = 0;
  timerDisplay.textContent = "--:--";
  timerMinutesInput.disabled = false;
  timerMinutesInput.value = "";
  timerToggleBtn.textContent = "▶";
  timerToggleBtn.classList.remove("is-running");
  timerToggleBtn.setAttribute("aria-label", "Pokreni tajmer");
  alarmWidget.classList.remove("is-ringing");
}

timerToggleBtn.addEventListener("click", () => {
  if (timerIntervalId !== null) {
    resetTimer(); // u toku je — klik zaustavlja i vraća na početak
  } else {
    startTimer();
  }
});

// ---------------------------------------------------------------------------
// ekran ostaje uključen dok je recept otvoren
// ---------------------------------------------------------------------------

let wakeLock = null;
const wakelockStatus = document.getElementById("wakelock-status");

async function requestWakeLock() {
  if (!("wakeLock" in navigator)) return;
  try {
    wakeLock = await navigator.wakeLock.request("screen");
    wakelockStatus.hidden = false;
    wakeLock.addEventListener("release", () => {
      wakelockStatus.hidden = true;
    });
  } catch (err) {
    // odbijeno ili nepodržano — tiho nastavi bez indikatora
    console.warn("Wake Lock nije dostupan:", err);
  }
}

function releaseWakeLock() {
  if (wakeLock) {
    wakeLock.release().catch(() => {});
    wakeLock = null;
  }
  wakelockStatus.hidden = true;
}

// mnogi browseri automatski otpuštaju wake lock kad se tab sakrije —
// ponovo ga zatraži kad se recept vrati u fokus
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && !detailView.hidden) {
    requestWakeLock();
  }
});

// ---------------------------------------------------------------------------
// rutiranje (hash-bazirano, da linkovi ka konkretnom receptu rade i da
// dugme "nazad" u browseru radi normalno — i dalje potpuno statično, bez servera)
// ---------------------------------------------------------------------------

function openRecipe(id) {
  window.location.hash = `recipe/${id}`;
}

function closeRecipe() {
  window.location.hash = "";
}

function showBrowse() {
  detailView.hidden = true;
  browseView.hidden = false;
  resetTimer();
  releaseWakeLock();
}

function showDetail(recipe) {
  renderDetail(recipe);
  browseView.hidden = true;
  detailView.hidden = false;
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  resetTimer();
  requestWakeLock();
}

function route() {
  const hash = window.location.hash.replace(/^#/, "");
  const match = hash.match(/^recipe\/(.+)$/);
  if (match) {
    const recipe = RECIPES.find(r => r.id === match[1]);
    if (recipe) {
      showDetail(recipe);
      return;
    }
  }
  showBrowse();
}

backBtn.addEventListener("click", closeRecipe);
window.addEventListener("hashchange", route);

// ---------------------------------------------------------------------------
// init
// ---------------------------------------------------------------------------

renderFilterBar();
renderGrid();
route();
