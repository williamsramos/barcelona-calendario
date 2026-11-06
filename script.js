/* ===========================================================
   Calendário Blaugrana — Lógica da aplicação unificada
   Dados salvos via localStorage e estatísticas completas
   =========================================================== */

function cryptoId() { return 'g_' + Math.random().toString(36).slice(2, 10); }

// Dados iniciais padrão caso o localStorage esteja vazio
const defaultGames = [
  // ---------------- LA LIGA · 1º TURNO (Rodadas 1ª a 19ª) ----------------
  { id: cryptoId(), comp: "laliga", round: "Rodada 1ª", date: "2026-08-23", time: "16:30", team1: "elche", team2: "barcelona", stadium: "Manuel Martínez Valero", score: "0x5" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 2ª", date: "2026-08-27", time: "16:00", team1: "barcelona", team2: "athletic-club", stadium: "Camp Nou", score: "2x0" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 3ª", date: "2026-08-31", time: "16:30", team1: "barcelona", team2: "rayo-vallecano", stadium: "Camp Nou", score: "5x2" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 4ª", date: "2026-09-06", time: "11:15", team1: "valencia", team2: "barcelona", stadium: "Mestalla", score: "0x5" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 5ª", date: "2026-09-13", time: "11:15", team1: "levante", team2: "barcelona", stadium: "Ciudad de Valencia", score: "2x4" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 6ª", date: "2026-09-16", time: "16:30", team1: "barcelona", team2: "racing-santander", stadium: "Camp Nou", score: "7x2" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 7ª", date: "2026-09-20", time: "16:00", team1: "sevilla", team2: "barcelona", stadium: "Ramón Sánchez Pizjuán", score: "1x3" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 8ª", date: "2026-10-10", time: "13:30", team1: "barcelona", team2: "getafe", stadium: "Camp Nou", score: "3x0" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 9ª", date: "2026-10-17", time: "13:30", team1: "real-betis", team2: "barcelona", stadium: "La Cartuja de Sevilla", score: "2x5" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 10ª · El Clásico", date: "2026-10-25", time: "17:00", team1: "barcelona", team2: "real-madrid", stadium: "Camp Nou", score: "1x2" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 11ª", date: "2026-11-01", time: "14:00", team1: "barcelona", team2: "alaves", stadium: "Camp Nou", score: "6x1" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 12ª", date: "2026-11-08", time: "14:00", team1: "atletico-de-madrid", team2: "barcelona", stadium: "Cívitas Metropolitano", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 13ª", date: "2026-11-22", time: "14:00", team1: "barcelona", team2: "villarreal", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 14ª", date: "2026-11-29", time: "14:00", team1: "deportivo-a-coruna", team2: "barcelona", stadium: "Riazor", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 15ª", date: "2026-12-06", time: "14:00", team1: "barcelona", team2: "celta-vigo", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 16ª", date: "2026-12-13", time: "14:00", team1: "malaga", team2: "barcelona", stadium: "La Rosaleda", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 17ª", date: "2026-12-20", time: "14:00", team1: "barcelona", team2: "real-sociedad", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 18ª", date: "2027-01-03", time: "14:00", team1: "espanyol", team2: "barcelona", stadium: "RCDE Stadium", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 19ª", date: "2027-01-10", time: "14:00", team1: "osasuna", team2: "barcelona", stadium: "El Sadar", score: "x" },

  // ---------------- LA LIGA · 2º TURNO (Rodadas 20ª a 38ª) ----------------
  { id: cryptoId(), comp: "laliga", round: "Rodada 20ª", date: "2027-01-17", time: "14:00", team1: "barcelona", team2: "elche", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 21ª", date: "2027-01-24", time: "14:00", team1: "alaves", team2: "barcelona", stadium: "Mendizorroza", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 22ª", date: "2027-01-31", time: "14:00", team1: "barcelona", team2: "valencia", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 23ª", date: "2027-02-07", time: "14:00", team1: "barcelona", team2: "atletico-de-madrid", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 24ª", date: "2027-02-14", time: "14:00", team1: "villarreal", team2: "barcelona", stadium: "Estadio de la Cerámica", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 25ª", date: "2027-02-21", time: "14:00", team1: "barcelona", team2: "levante", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 26ª", date: "2027-02-28", time: "14:00", team1: "athletic-club", team2: "barcelona", stadium: "San Mamés", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 27ª", date: "2027-03-07", time: "14:00", team1: "barcelona", team2: "real-betis", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 28ª", date: "2027-03-14", time: "14:00", team1: "barcelona", team2: "deportivo-a-coruna", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 29ª", date: "2027-03-21", time: "14:00", team1: "rayo-vallecano", team2: "barcelona", stadium: "Vallecas", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 30ª", date: "2027-04-04", time: "14:00", team1: "barcelona", team2: "sevilla", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 31ª", date: "2027-04-11", time: "14:00", team1: "racing-santander", team2: "barcelona", stadium: "El Sardinero", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 32ª", date: "2027-04-18", time: "14:00", team1: "barcelona", team2: "espanyol", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 33ª", date: "2027-04-21", time: "14:00", team1: "celta-vigo", team2: "barcelona", stadium: "Balaídos", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 34ª", date: "2027-05-02", time: "14:00", team1: "barcelona", team2: "osasuna", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 35ª · El Clásico", date: "2027-05-09", time: "14:00", team1: "real-madrid", team2: "barcelona", stadium: "Santiago Bernabéu", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 36ª", date: "2027-05-16", time: "14:00", team1: "real-sociedad", team2: "barcelona", stadium: "Anoeta", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 37ª", date: "2027-05-23", time: "14:00", team1: "barcelona", team2: "malaga", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 38ª", date: "2027-05-30", time: "14:00", team1: "getafe", team2: "barcelona", stadium: "Coliseum Alfonso Pérez", score: "x" },

  // ---------------- CHAMPIONS LEAGUE · FASE DE LIGA ----------------
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 1", date: "2026-09-09", time: "13:45", team1: "barcelona", team2: "feyenoord", stadium: "Camp Nou", score: "5x1" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 2", date: "2026-10-13", time: "16:00", team1: "galatasaray", team2: "barcelona", stadium: "Rams Park", score: "1x4" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 3", date: "2026-10-20", time: "16:00", team1: "paris-saint-germain", team2: "barcelona", stadium: "Parc des Princes", score: "4x2" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 4", date: "2026-11-03", time: "17:00", team1: "barcelona", team2: "aston-villa", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 5", date: "2026-11-24", time: "14:45", team1: "sabah", team2: "barcelona", stadium: "Bank Respublika Arena", score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 6", date: "2026-12-08", time: "17:00", team1: "barcelona", team2: "manchester-city", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 7", date: "2027-01-20", time: "17:00", team1: "sporting-cp", team2: "barcelona", stadium: "José Alvalade", score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 8", date: "2027-01-27", time: "17:00", team1: "barcelona", team2: "como", stadium: "Camp Nou", score: "x" },

  // ---------------- AMISTOSOS / OUTROS ----------------
  { id: cryptoId(), comp: "amistoso", round: "Troféu Joan Gamper", date: "2026-08-19", time: "", team1: "barcelona", team2: "al-ahly", stadium: "Camp Nou", score: "2x1" },
];

let games = JSON.parse(localStorage.getItem("blaugrana_games")) || defaultGames;

function saveGames() {
  localStorage.setItem("blaugrana_games", JSON.stringify(games));
}

/* ======================= TIMES ======================= */
const TEAMS = {
  "barcelona":         { name: "Barcelona",         abbr: "BAR", color: "#A50044" },
  "elche":             { name: "Elche",             abbr: "ELC", color: "#00753C" },
  "athletic-club":     { name: "Athletic Club",     abbr: "ATH", color: "#EE2523" },
  "rayo-vallecano":    { name: "Rayo Vallecano",    abbr: "RAY", color: "#E30613" },
  "valencia":          { name: "Valencia",          abbr: "VAL", color: "#F49B00" },
  "levante":           { name: "Levante",           abbr: "LEV", color: "#00206A" },
  "racing-santander":  { name: "Racing Santander",  abbr: "RAC", color: "#079046" },
  "sevilla":           { name: "Sevilla",           abbr: "SEV", color: "#D9012C" },
  "getafe":            { name: "Getafe",            abbr: "GET", color: "#005999" },
  "real-betis":        { name: "Real Betis",        abbr: "BET", color: "#00954C" },
  "real-madrid":       { name: "Real Madrid",       abbr: "RMA", color: "#4B4B4B" },
  "alaves":            { name: "Alavés",            abbr: "ALA", color: "#0057A8" },
  "atletico-de-madrid":{ name: "Atlético de Madrid",abbr: "ATM", color: "#CB3524" },
  "villarreal":        { name: "Villarreal",        abbr: "VIL", color: "#FFE667" },
  "deportivo-a-coruna":{ name: "Deportivo A Coruña",abbr: "DEP", color: "#0067B1" },
  "celta-vigo":        { name: "Celta de Vigo",     abbr: "CEL", color: "#8AC3EE" },
  "malaga":            { name: "Málaga",            abbr: "MAL", color: "#0072CE" },
  "real-sociedad":     { name: "Real Sociedad",     abbr: "RSO", color: "#0067B1" },
  "espanyol":          { name: "Espanyol",          abbr: "ESP", color: "#0A5EA8" },
  "osasuna":           { name: "Osasuna",           abbr: "OSA", color: "#D2001C" },
  "manchester-city":   { name: "Manchester City",   abbr: "MCI", color: "#6CABDD" },
  "paris-saint-germain":{ name: "Paris Saint-Germain",abbr: "PSG", color: "#004170" },
  "aston-villa":       { name: "Aston Villa",       abbr: "AVL", color: "#95BFE5" },
  "sporting-cp":       { name: "Sporting CP",       abbr: "SCP", color: "#1B7A3D" },
  "feyenoord":         { name: "Feyenoord",         abbr: "FEY", color: "#EE1C25" },
  "galatasaray":       { name: "Galatasaray",       abbr: "GAL", color: "#A90432" },
  "como":              { name: "Como 1907",         abbr: "COM", color: "#0057A0" },
  "sabah":             { name: "Sabah FK",          abbr: "SAB", color: "#C9A227" },
  "al-ahly":           { name: "Al Ahly",           abbr: "AA",  color: "#9E5F2E" },
  "bayern":            { name: "Bayern München",    abbr: "BAY", color: "#DC052D" },
  "stuttgart":         { name: "Stuttgart",         abbr: "VFB", color: "#E32219" },
  "dortmund":          { name: "B. Dortmund",       abbr: "BVB", color: "#FDE100" },
  "liverpool":         { name: "Liverpool",         abbr: "LIV", color: "#C8102E" },
  "arsenal":           { name: "Arsenal",           abbr: "ARS", color: "#EF0107" },
  "aek":               { name: "AEK Athens",        abbr: "AEK", color: "#FFD200" },
  "roma":              { name: "Roma",              abbr: "ROM", color: "#8E1F2F" },
  "shakhtar":          { name: "Shakhtar",          abbr: "SHK", color: "#FF7900" },
  "psv":               { name: "PSV",               abbr: "PSV", color: "#ED1C24" },
  "brugge":            { name: "Club Brugge",       abbr: "CLB", color: "#0057A8" },
  "lille":             { name: "Lille",             abbr: "LIL", color: "#E2001A" },
  "slavia":            { name: "Slavia Praha",      abbr: "SLA", color: "#B90E12" },
  "inter":             { name: "Inter",             abbr: "INT", color: "#010E80" },
  "lask":              { name: "LASK",              abbr: "LAS", color: "#000000" },
  "napoli":            { name: "Napoli",            abbr: "NAP", color: "#12A0D7" },
  "porto":             { name: "Porto",             abbr: "POR", color: "#00539F" },
  "leipzig":           { name: "Leipzig",           abbr: "RBL", color: "#DD0741" },
  "bratislava":        { name: "S. Bratislava",     abbr: "SLB", color: "#05308A" },
  "bodo":              { name: "Bodø/Glimt",        abbr: "BOD", color: "#FDB913" },
  "lens":              { name: "Lens",              abbr: "LEN", color: "#FFD100" },
  "man-utd":           { name: "Manchester Utd",    abbr: "MUN", color: "#DA291C" },
  "viking":            { name: "Viking FK",         abbr: "VIK", color: "#003399" },
  "fenerbahce":        { name: "Fenerbahçe",        abbr: "FEN", color: "#FFED00" }
};

function getTeam(slug) {
  if (TEAMS[slug]) return TEAMS[slug];
  const name = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const abbr = name.replace(/[^A-Za-z ]/g, "").split(" ").map(w => w[0]).join("").slice(0, 3).toUpperCase() || "???";
  let hash = 0; for (const c of slug) hash = c.charCodeAt(0) + ((hash << 5) - hash);
  const hue = Math.abs(hash) % 360;
  return { name, abbr, color: `hsl(${hue} 55% 40%)` };
}

function badge(slug) {
  if (slug === "barcelona") {
    return `<div class="w-80 h-80 sm:w-11 sm:h-11 rounded-full flex items-center justify-center "><img src="logo_barça.svg" alt="Barcelona" class="w-full h-full object-contain"></div>`; //shrink-0 bg-white/10 p-1 shadow-inner
  }
  const t = getTeam(slug);
  return `<div class="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-display font-bold text-[11px] sm:text-xs text-white shrink-0 shadow-inner" style="background:${t.color}">${t.abbr}</div>`;
}

function slugify(str) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

/* ======================= COMPETIÇÕES / ABAS ======================= */
const COMPS = [
  { id: "todos",     label: "Todos" },
  { id: "laliga",    label: "La Liga" },
  { id: "champions", label: "Champions League" },
  { id: "copas",     label: "Copas", match: ["copadelrey", "supercopa"] },
  { id: "amistoso",  label: "Amistosos" },
];
let activeTab = "todos";
let activeSub = "todos";
let editingId = null;

function renderClassificacao() {}

/* ======================= DATAS CORRIGIDAS ======================= */
function parseDate(dstr) {
  if (!dstr) return new Date();
  if (dstr.includes("-")) {
    const [year, m, d] = dstr.split("-").map(Number);
    return new Date(year, m - 1, d);
  }
  const parts = dstr.split("/").map(Number);
  const d = parts[0];
  const m = parts[1];
  const year = parts[2] ? (parts[2] < 100 ? 2000 + parts[2] : parts[2]) : (m >= 7 ? 2026 : 2027);
  return new Date(year, m - 1, d);
}

function fmtLongDate(dstr) {
  const dt = parseDate(dstr);
  return dt.toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "short" }).replace(".", "");
}

function fmtInputDate(dstr) {
  const dt = parseDate(dstr);
  const yyyy = dt.getFullYear();
  const mm = String(dt.getMonth() + 1).padStart(2, '0');
  const dd = String(dt.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function gamesForTab(tabId) {
  if (tabId === "todos") return games;
  const comp = COMPS.find(c => c.id === tabId);
  if (comp && comp.match) return games.filter(g => comp.match.includes(g.comp));
  return games.filter(g => g.comp === tabId);
}

/* ======================= CONTADOR REGRESSIVO ======================= */
let countdownInterval = null;

function startCountdown(nextGameDate, timeStr) {
  if (countdownInterval) clearInterval(countdownInterval);

  const timerEl = document.getElementById("heroCountdown");
  if (!timerEl) return;

  const dt = parseDate(nextGameDate);
  const [hh, mm] = (timeStr || "20:00").split(":").map(Number);
  const targetTime = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), hh, mm, 0).getTime();

  function update() {
    const now = new Date().getTime();
    const diff = targetTime - now;

    if (diff <= 0) {
      timerEl.innerHTML = `<span class="text-gold font-bold">Jogo em andamento!</span>`;
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    timerEl.innerHTML = `
      <div class="flex items-center gap-1.5 font-mono text-xs sm:text-sm text-gold">
        <span class="bg-navy-950/80 px-2 py-1 rounded border border-white/10 font-bold">${days}d</span>:
        <span class="bg-navy-950/80 px-2 py-1 rounded border border-white/10 font-bold">${String(hours).padStart(2, '0')}h</span>:
        <span class="bg-navy-950/80 px-2 py-1 rounded border border-white/10 font-bold">${String(minutes).padStart(2, '0')}m</span>:
        <span class="bg-navy-950/80 px-2 py-1 rounded border border-white/10 font-bold">${String(seconds).padStart(2, '0')}s</span>
      </div>`;
  }

  update();
  countdownInterval = setInterval(update, 1000);
}

/* ======================= HERO / PRÓXIMO JOGO ======================= */
function isGamePlayed(score) {
  if (!score) return false;
  const s = score.trim().toLowerCase();
  return s !== "" && s !== "x" && s !== "-";
}

function getNextGame() {
  const pendentes = games
    .filter(g => !isGamePlayed(g.score))
    .sort((a, b) => parseDate(a.date) - parseDate(b.date));
  return pendentes[0] || null;
}

function renderHero() {
  const box = document.getElementById("heroNext");
  if (!box) return;
  const next = getNextGame();
  
  if (!next) { 
    box.innerHTML = ""; 
    box.classList.add("hidden"); 
    if (countdownInterval) clearInterval(countdownInterval);
    return; 
  }
  
  box.classList.remove("hidden");
  const t1 = getTeam(next.team1), t2 = getTeam(next.team2);

  box.innerHTML = `
    <div class="ticket next-game rise-in rounded-2xl border border-navy-600/60 px-4 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
      <div class="flex flex-col items-center sm:items-start gap-1 shrink-0">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-gold pulse-dot"></span>
          <span class="text-[11px] font-bold tracking-[0.2em] text-gold uppercase">Próximo jogo</span>
        </div>
        <div id="heroCountdown" class="mt-1"></div>
      </div>
      <div class="flex items-center gap-3 sm:gap-6 flex-1 justify-center w-full min-w-0">
        <div class="flex items-center gap-2 flex-1 min-w-0 justify-end">
          <span class="font-display text-xs sm:text-lg text-slate-200 truncate text-right">${t1.name}</span>
          ${badge(next.team1)}
        </div>
        <span class="font-display text-slate-500 text-sm shrink-0">vs</span>
        <div class="flex items-center gap-2 flex-1 min-w-0">
          ${badge(next.team2)}
          <span class="font-display text-xs sm:text-lg text-slate-200 truncate">${t2.name}</span>
        </div>
      </div>
      <div class="text-center sm:text-right shrink-0">
        <p class="font-mono text-xs text-slate-400">${fmtLongDate(next.date)} · ${next.time || "--:--"}</p>
        <p class="text-[11px] text-slate-500 mt-0.5">${next.stadium || "Estádio a definir"}</p>
      </div>
    </div>`;

  startCountdown(next.date, next.time);
}

/* ======================= ESTATÍSTICAS ======================= */
function computeStats(list = []) {
  const jogados = Array.isArray(list) 
    ? list.filter(g => g && isGamePlayed(g.score))
    : [];
  
  let v = 0, e = 0, d = 0, gp = 0, gc = 0;
  let jogosSemSofrerGols = 0;
  let vCasa = 0, eCasa = 0, dCasa = 0;
  let vFora = 0, eFora = 0, dFora = 0;
  let streakVitoriasAtual = 0, maxVitorias = 0;
  let streakInvencivelAtual = 0, maxInvencivel = 0;
  const resultados = [];

  const ordenados = [...jogados].sort((a, b) => parseDate(a.date) - parseDate(b.date));

  ordenados.forEach(g => {
    if (!g.score) return;
    const cleanScore = g.score.split("(")[0].trim();
    const scores = cleanScore.toLowerCase().split("x").map(s => parseInt(s.trim(), 10));

    if (scores.length === 2 && !isNaN(scores[0]) && !isNaN(scores[1])) {
      const [s1, s2] = scores;
      const barEmCasa = g.team1 === "barcelona";
      const golsBar = barEmCasa ? s1 : s2;
      const golsAdv = barEmCasa ? s2 : s1;

      gp += golsBar; 
      gc += golsAdv;

      if (golsAdv === 0) jogosSemSofrerGols++;

      if (golsBar > golsAdv) {
        v++;
        resultados.push("V");
        if (barEmCasa) vCasa++; else vFora++;
        streakVitoriasAtual++;
        if (streakVitoriasAtual > maxVitorias) maxVitorias = streakVitoriasAtual;
        streakInvencivelAtual++;
        if (streakInvencivelAtual > maxInvencivel) maxInvencivel = streakInvencivelAtual;
      } else if (golsBar === golsAdv) {
        e++;
        resultados.push("E");
        if (barEmCasa) eCasa++; else eFora++;
        streakVitoriasAtual = 0;
        streakInvencivelAtual++;
        if (streakInvencivelAtual > maxInvencivel) maxInvencivel = streakInvencivelAtual;
      } else {
        d++;
        resultados.push("D");
        if (barEmCasa) dCasa++; else dFora++;
        streakVitoriasAtual = 0;
        streakInvencivelAtual = 0;
      }
    }
  });

  const totalJogados = jogados.length;
  const pontos = (v * 3) + e;
  const saldoGols = gp - gc;
  const aproveitamento = totalJogados ? Math.round((pontos / (totalJogados * 3)) * 100) : 0;

  const totalCasa = vCasa + eCasa + dCasa;
  const pontosCasa = (vCasa * 3) + eCasa;
  const aproveitamentoCasa = totalCasa ? Math.round((pontosCasa / (totalCasa * 3)) * 100) : 0;

  const totalFora = vFora + eFora + dFora;
  const pontosFora = (vFora * 3) + eFora;
  const aproveitamentoFora = totalFora ? Math.round((pontosFora / (totalFora * 3)) * 100) : 0;

  const ultimos5 = resultados.slice(-5);

  return { 
    v, e, d, gp, gc, pontos, aproveitamento, totalJogados,
    posLaLiga: "1º", posChampions: "5º", posCopaDelRey: "-", posSupercopa: "-",
    saldoGols, mediaGolsPro: totalJogados ? (gp / totalJogados).toFixed(2) : "0.00", jogosSemSofrerGols,
    ultimos5, maxVitorias, maxInvencivel,
    aproveitamentoCasa, aproveitamentoFora
  };
}

function renderFormaRecente(ultimos5) {
  if (!ultimos5 || ultimos5.length === 0) return '<span class="text-slate-500 text-sm">-</span>';
  return `
    <div class="flex items-center justify-center gap-1 mt-1">
      ${ultimos5.map(res => {
        let bgClass = "bg-slate-700 text-slate-300";
        if (res === "V") bgClass = "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
        if (res === "E") bgClass = "bg-slate-500/20 text-slate-300 border border-slate-500/30";
        if (res === "D") bgClass = "bg-red-500/20 text-red-400 border border-red-500/30";
        return `<span class="w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center ${bgClass}">${res}</span>`;
      }).join("")}
    </div>
  `;
}

function statCard(label, value, colorClass) {
  return `
    <div class="stat-card bg-navy-900/60 border border-white/5 rounded-xl px-3 sm:px-4 py-3.5 text-center flex flex-col justify-center items-center">
      <p class="text-[10px] uppercase tracking-wider text-slate-400 mb-1.5">${label}</p>
      <div class="font-display text-xl sm:text-2xl font-semibold ${colorClass}">${value}</div>
    </div>`;
}

function renderDashboard() {
  const tabAtual = activeTab;
  const list = gamesForTab(tabAtual);
  const s = computeStats(list);
  const compLabel = COMPS.find(c => c.id === tabAtual)?.label || "Geral";

  const titleEl = document.getElementById("dashboardTitle");
  if (titleEl) titleEl.textContent = `Desempenho · ${compLabel}`;

  const saldoFormatado = s.saldoGols > 0 ? `+${s.saldoGols}` : s.saldoGols;
  const corSaldo = s.saldoGols > 0 ? "text-emerald-400" : (s.saldoGols < 0 ? "text-red-400" : "text-slate-300");

  const gridEl = document.getElementById("statGrid");
  if (gridEl) {
    gridEl.innerHTML = `
      ${statCard("Posição La Liga", s.posLaLiga, "text-gold")}
      ${statCard("Posição Champions", s.posChampions, "text-gold")}
      ${statCard("Jogos", s.totalJogados, "text-slate-200")}
      ${statCard("Aproveitamento Geral", s.aproveitamento + "%", "text-gold")}
      ${statCard("Aprov. Casa (Camp Nou)", s.aproveitamentoCasa + "%", "text-emerald-400")}
      ${statCard("Aprov. Fora", s.aproveitamentoFora + "%", "text-blue-400")}
      ${statCard("Vitórias", s.v, "text-emerald-400")}
      ${statCard("Empates", s.e, "text-slate-300")}
      ${statCard("Derrotas", s.d, "text-red-400")}
      ${statCard("Forma Recente", renderFormaRecente(s.ultimos5), "")}
      ${statCard("Gols Pró / Contra", `${s.gp} <span class="text-slate-500 text-sm">/</span> ${s.gc}`, "text-blue-400")}
      ${statCard("Saldo de Gols", saldoFormatado, corSaldo)}
      ${statCard("Clean Sheets", s.jogosSemSofrerGols, "text-emerald-400")}
      ${statCard("Maior Seq. Vitórias", `${s.maxVitorias} <span class="text-xs text-slate-400">jogos</span>`, "text-emerald-400")}
      ${statCard("Maior Invencibilidade", `${s.maxInvencivel} <span class="text-xs text-slate-400">jogos</span>`, "text-gold")}
    `;
  }
}

function renderProgress() {
  const list = gamesForTab(activeTab);
  const total = list.length;
  const jogados = list.filter(g => isGamePlayed(g.score)).length;
  const pct = total ? Math.round((jogados / total) * 100) : 0;

  const lbl = document.getElementById("progressLabel");
  const pctEl = document.getElementById("progressPct");
  const fill = document.getElementById("progressFill");
  const wrap = document.getElementById("progressWrap");

  if (lbl) lbl.textContent = `${jogados} de ${total} jogos disputados`;
  if (pctEl) pctEl.textContent = `${pct}%`;
  if (fill) fill.style.width = `${pct}%`;
  if (wrap) wrap.classList.toggle("hidden", total === 0);
}

function renderTabs() {
  const bar = document.getElementById("tabBar");
  if (!bar) return;
  bar.innerHTML = "";
  COMPS.forEach(c => {
    const count = gamesForTab(c.id).length;
    const btn = document.createElement("button");
    btn.className = `relative shrink-0 pb-1 text-sm font-semibold font-display tracking-wide transition-colors ${activeTab === c.id ? "tab-active" : "text-slate-500 hover:text-slate-300"}`;
    btn.innerHTML = `${c.label} <span class="text-[11px] font-mono ${activeTab === c.id ? 'text-gold' : 'text-slate-600'}">${count}</span>`;
    btn.onclick = () => { activeTab = c.id; render(); };
    bar.appendChild(btn);
  });
}

function renderSubFilters() {
  const bar = document.getElementById("subFilterBar");
  if (!bar) return;
  const opts = [
    { id: "todos", label: "Todos" },
    { id: "recentes", label: "Resultados" },
    { id: "proximos", label: "Próximos" },
  ];
  bar.innerHTML = "";
  opts.forEach(o => {
    const btn = document.createElement("button");
    const isActive = activeSub === o.id;
    btn.className = `text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-colors ${isActive ? "bg-gold text-navy-950 border-gold" : "border-navy-600 text-slate-400 hover:border-slate-500"}`;
    btn.textContent = o.label;
    btn.onclick = () => { activeSub = o.id; render(); };
    bar.appendChild(btn);
  });
}

function renderCard(g, isNext) {
  const played = isGamePlayed(g.score);
  const [s1, s2] = played ? g.score.split("x") : ["", ""];
  const t1 = getTeam(g.team1), t2 = getTeam(g.team2);
  const compLabel = COMPS.find(c => c.id === g.comp || (c.match && c.match.includes(g.comp)))?.label ?? g.comp;

  return `
  <div class="ticket ${isNext ? "next-game" : ""} rise-in rounded-xl overflow-hidden flex border border-navy-600/60 group mb-3">
    <div class="w-20 sm:w-28 shrink-0 flex flex-col items-center justify-center py-4 bg-navy-950/40">
      <span class="font-mono text-[10px] text-slate-500 uppercase">${fmtLongDate(g.date).split(" ")[0]}</span>
      <span class="font-display text-xl sm:text-2xl text-white font-semibold leading-none mt-0.5">${parseDate(g.date).getDate()}</span>
      <span class="font-mono text-[10px] text-slate-500 uppercase mt-0.5">${fmtLongDate(g.date).split(" ").slice(1).join(" ")}</span>
    </div>
    <div class="perforation my-3"></div>
    <div class="flex-1 px-3 sm:px-5 py-4 min-w-0">
      <div class="flex items-center justify-between mb-3">
        <p class="text-[10px] sm:text-[11px] font-semibold text-gold uppercase tracking-wider truncate mr-1">
          ${compLabel} <span class="text-slate-500 font-normal">• ${g.round}</span>
          ${isNext ? '<span class="ml-1 sm:ml-2 text-gold">★ próximo</span>' : ""}
        </p>
        <div class="flex items-center gap-2 shrink-0 ml-1 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
          <button data-edit="${g.id}" class="edit-btn text-slate-500 hover:text-gold p-1" title="Editar jogo">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
          </button>
          <button data-del="${g.id}" class="del-btn text-slate-500 hover:text-garnet-400 p-1" title="Remover jogo">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m2 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>
          </button>
        </div>
      </div>
      <div class="flex items-center gap-2 sm:gap-3">
        <div class="flex items-center gap-2 flex-1 min-w-0 justify-end">
          <span class="text-xs sm:text-sm font-medium text-slate-200 truncate text-right">${t1.name}</span>
          ${badge(g.team1)}
        </div>
        <div class="shrink-0 px-1 sm:px-2">
          ${played
            ? `<div class="font-display text-sm sm:text-xl font-bold text-white bg-navy-950/60 rounded-lg px-2 sm:px-3 py-1 border border-navy-600">${s1} <span class="text-slate-500">x</span> ${s2}</div>`
            : `<div class="font-mono text-[10px] sm:text-xs text-slate-500 border border-dashed border-navy-600 rounded-lg px-2 py-1.5">${g.time || "--:--"}</div>`}
        </div>
        <div class="flex items-center gap-2 flex-1 min-w-0">
          ${badge(g.team2)}
          <span class="text-xs sm:text-sm font-medium text-slate-200 truncate">${t2.name}</span>
        </div>
      </div>
      <p class="text-[10px] sm:text-[11px] text-slate-500 mt-3 flex items-center gap-1.5 truncate">
        <svg class="shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
        <span class="truncate">${g.stadium || "Estádio a definir"} ${g.time && played ? "• " + g.time : ""}</span>
      </p>
    </div>
  </div>`;
}

/* ===========================================================
   BUSCA E JOGOS DE INTERESSE (La Liga & Champions League)
   =========================================================== */

let searchTerm = "";

function normalizarTexto(str) {
  return String(str || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function datasParaBusca(dstr) {
  if (!dstr) return "";
  const dt = parseDate(dstr);
  const dd = String(dt.getDate()).padStart(2, "0");
  const mm = String(dt.getMonth() + 1).padStart(2, "0");
  return `${dd}/${mm} ${dd}/${mm}/${dt.getFullYear()} ${fmtLongDate(dstr)}`;
}

function jogoCombinaComBusca(g) {
  const termos = normalizarTexto(searchTerm).split(/\s+/).filter(Boolean);
  if (!termos.length) return true;

  const compObj = COMPS.find(c => c.id === g.comp || (c.match && c.match.includes(g.comp)));
  const texto = normalizarTexto([
    getTeam(g.team1).name, g.team1,
    getTeam(g.team2).name, g.team2,
    compObj ? compObj.label : g.comp,
    g.round, g.stadium, datasParaBusca(g.date), g.score
  ].join(" "));

  return termos.every(t => texto.includes(t));
}

function initBuscaJogos() {
  if (document.getElementById("buscaJogos")) return;

  const ref = document.getElementById("subFilterBar");
  if (!ref || !ref.parentElement) return;

  const box = document.createElement("div");
  box.className = "my-4";
  box.innerHTML = `
    <input id="buscaJogos" type="search" autocomplete="off"
      placeholder="Buscar jogo do Barça (adversário, rodada, estádio, data...)"
      class="w-full px-4 py-2.5 rounded-xl bg-navy-950/50 border border-slate-700/60 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-gold transition-colors">`;
  ref.parentElement.insertBefore(box, ref.nextSibling);

  document.getElementById("buscaJogos").addEventListener("input", (e) => {
    searchTerm = e.target.value;
    render();
  });
}

const INTERESSE_VERSAO = "2026-11-06-r16";
const CHAVE_INTERESSE = "blaugrana_jogos_interesse";
const CHAVE_INTERESSE_VERSAO = "blaugrana_jogos_interesse_versao";
const RODADAS_EXIBIDAS = 3;

const CLUBES_INTERESSE = Array.from(new Set([
  ...Object.keys(TEAMS)
])).filter(slug => slug !== "barcelona").sort((a, b) => getTeam(a).name.localeCompare(getTeam(b).name, 'pt-BR'));

const CHAMPIONS_TARGET_TEAMS = new Set([
  "paris-saint-germain", "arsenal", "real-madrid", "como", "aston-villa",
  "manchester-city", "liverpool", "brugge", "sporting-cp", "real-betis",
  "dortmund", "bayern", "stuttgart", "feyenoord", "galatasaray", "sabah",
  "man-utd", "lens", "aek", "roma", "shakhtar", "fenerbahce", "psv",
  "lille", "slavia", "inter", "lask", "napoli", "viking", "porto",
  "leipzig", "bratislava", "bodo"
]);

const ESTADIOS_INTERESSE = {
  "real-madrid": "Santiago Bernabéu",
  "atletico-de-madrid": "Cívitas Metropolitano",
  "valencia": "Mestalla",
  "celta-vigo": "Balaídos",
  "alaves": "Mendizorroza",
  "athletic-club": "San Mamés",
  "osasuna": "El Sadar",
  "deportivo-a-coruna": "Riazor",
  "getafe": "Coliseum Alfonso Pérez",
  "levante": "Ciudad de Valencia",
  "malaga": "La Rosaleda",
  "real-betis": "La Cartuja de Sevilla",
  "rayo-vallecano": "Vallecas",
  "real-sociedad": "Anoeta",
  "sevilla": "Ramón Sánchez Pizjuán",
  "villarreal": "Estadio de la Cerámica",
  "espanyol": "RCDE Stadium",
  "elche": "Manuel Martínez Valero",
  "racing-santander": "El Sardinero",
  "paris-saint-germain": "Parc des Princes",
  "arsenal": "Emirates Stadium",
  "manchester-city": "Etihad Stadium",
  "liverpool": "Anfield",
  "dortmund": "Signal Iduna Park",
  "bayern": "Allianz Arena",
  "stuttgart": "MHPArena",
  "sporting-cp": "Estádio José Alvalade",
  "como": "Stadio Giuseppe Sinigaglia",
  "aston-villa": "Villa Park",
  "galatasaray": "Rams Park",
  "psv": "Philips Stadion",
  "inter": "San Siro",
  "roma": "Stadio Olimpico",
  "bodo": "Aspmyra Stadion",
  "shakhtar": "Arena Lviv",
  "slavia": "Fortuna Arena",
  "lille": "Decathlon Arena",
  "lens": "Stade Bollaert-Delelis",
  "bratislava": "Tehelné pole",
  "aek": "OPAP Arena",
  "viking": "SR-Bank Arena",
  "fenerbahce": "Ülker Stadium",
  "lask": "Raiffeisen Arena",
  "porto": "Estádio do Dragão",
  "leipzig": "Red Bull Arena",
  "sabah": "Bank Respublika Arena"
};

const InteresseStorage = {
  get(key, def = null) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; }
    catch (e) { return def; }
  },
  set(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  },
  remove(key) {
    try { localStorage.removeItem(key); } catch (e) {}
  }
};

function normalizarJogoInteresse(j) {
  const mr = /^r(\d+)_/.exec(j.id || "");
  return {
    id: j.id || cryptoId(),
    comp: j.comp || "laliga",
    rodada: Number(j.rodada) || (mr ? Number(mr[1]) : 1),
    mandante: j.mandante,
    visitante: j.visitante,
    date: j.date || "",
    hora: j.hora || "",
    estadio: j.estadio || "",
    m: j.m != null ? String(j.m) : "",
    v: j.v != null ? String(j.v) : ""
  };
}

const JOGOS_INTERESSE_SEED = [
  // ---------------- LA LIGA: REAL MADRID & ATLÉTICO DE MADRID ----------------
  [12, "2026-11-07", "17:00", "valencia", "real-madrid", "laliga"],
  [13, "2026-11-21", "17:00", "real-madrid", "celta-vigo", "laliga"],
  [14, "2026-11-29", "", "real-madrid", "alaves", "laliga"],
  [15, "2026-12-06", "", "athletic-club", "real-madrid", "laliga"],
  [16, "2026-12-13", "", "real-madrid", "osasuna", "laliga"],
  [17, "2026-12-20", "", "deportivo-a-coruna", "real-madrid", "laliga"],
  [18, "2027-01-03", "", "real-madrid", "getafe", "laliga"],
  [19, "2027-01-10", "", "real-madrid", "levante", "laliga"],
  [20, "2027-01-17", "", "malaga", "real-madrid", "laliga"],
  [21, "2027-01-24", "", "real-madrid", "real-betis", "laliga"],
  [22, "2027-01-31", "", "rayo-vallecano", "real-madrid", "laliga"],
  [23, "2027-02-07", "", "real-sociedad", "real-madrid", "laliga"],
  [24, "2027-02-14", "", "real-madrid", "athletic-club", "laliga"],
  [25, "2027-02-21", "", "sevilla", "real-madrid", "laliga"],
  [26, "2027-02-28", "", "real-madrid", "valencia", "laliga"],
  [27, "2027-03-07", "", "villarreal", "real-madrid", "laliga"],
  [28, "2027-03-14", "", "real-madrid", "espanyol", "laliga"],
  [29, "2027-03-21", "", "celta-vigo", "real-madrid", "laliga"],
  [30, "2027-04-04", "", "real-madrid", "atletico-de-madrid", "laliga"],
  [31, "2027-04-11", "", "osasuna", "real-madrid", "laliga"],
  [32, "2027-04-18", "", "getafe", "real-madrid", "laliga"],
  [33, "2027-04-21", "", "real-madrid", "elche", "laliga"],
  [34, "2027-05-02", "", "levante", "real-madrid", "laliga"],
  [36, "2027-05-16", "", "real-madrid", "racing-santander", "laliga"],
  [37, "2027-05-23", "", "alaves", "real-madrid", "laliga"],
  [38, "2027-05-30", "", "real-madrid", "deportivo-a-coruna", "laliga"],

  [13, "2026-11-22", "17:00", "getafe", "atletico-de-madrid", "laliga"],
  [14, "2026-11-29", "", "elche", "atletico-de-madrid", "laliga"],
  [15, "2026-12-06", "", "atletico-de-madrid", "real-betis", "laliga"],
  [16, "2026-12-13", "", "atletico-de-madrid", "valencia", "laliga"],
  [17, "2026-12-20", "", "celta-vigo", "atletico-de-madrid", "laliga"],
  [18, "2027-01-03", "", "rayo-vallecano", "atletico-de-madrid", "laliga"],
  [19, "2027-01-10", "", "atletico-de-madrid", "racing-santander", "laliga"],
  [20, "2027-01-17", "", "atletico-de-madrid", "real-sociedad", "laliga"],
  [21, "2027-01-24", "", "deportivo-a-coruna", "atletico-de-madrid", "laliga"],
  [22, "2027-01-31", "", "atletico-de-madrid", "espanyol", "laliga"],
  [24, "2027-02-14", "", "osasuna", "atletico-de-madrid", "laliga"],
  [25, "2027-02-21", "", "atletico-de-madrid", "elche", "laliga"],
  [26, "2027-02-28", "", "malaga", "atletico-de-madrid", "laliga"],
  [27, "2027-03-07", "", "atletico-de-madrid", "celta-vigo", "laliga"],
  [28, "2027-03-14", "", "racing-santander", "atletico-de-madrid", "laliga"],
  [29, "2027-03-21", "", "atletico-de-madrid", "getafe", "laliga"],
  [31, "2027-04-11", "", "atletico-de-madrid", "levante", "laliga"],
  [32, "2027-04-18", "", "atletico-de-madrid", "sevilla", "laliga"],
  [33, "2027-04-21", "", "villarreal", "atletico-de-madrid", "laliga"],
  [34, "2027-05-02", "", "atletico-de-madrid", "alaves", "laliga"],
  [35, "2027-05-09", "", "valencia", "atletico-de-madrid", "laliga"],
  [36, "2027-05-16", "", "atletico-de-madrid", "rayo-vallecano", "laliga"],
  [37, "2027-05-23", "", "atletico-de-madrid", "athletic-club", "laliga"],
  [38, "2027-05-30", "", "real-betis", "atletico-de-madrid", "laliga"],

     // ---------------- CHAMPIONS LEAGUE (Fase de Liga - Jornadas 5 a 8) ----------------
  // Jornada 5 (24/11/2026)
  [5, "2026-11-24", "14:45", "bodo", "lask", "champions"],
  [5, "2026-11-24", "14:45", "galatasaray", "aston-villa", "champions"],
  [5, "2026-11-24", "17:00", "real-madrid", "psv", "champions"],
  [5, "2026-11-24", "17:00", "manchester-city", "napoli", "champions"],
  [5, "2026-11-24", "17:00", "arsenal", "dortmund", "champions"],
  [5, "2026-11-24", "17:00", "feyenoord", "porto", "champions"],
  [5, "2026-11-24", "17:00", "leipzig", "lens", "champions"],
  [5, "2026-11-24", "17:00", "bratislava", "real-betis", "champions"],
  [5, "2026-11-24", "17:00", "como", "aek", "champions"],

  // Jornada 5 (25/11/2026)
  [5, "2026-11-25", "14:45", "slavia", "villarreal", "champions"],
  [5, "2026-11-25", "14:45", "sabah", "barcelona", "champions"],
  [5, "2026-11-25", "17:00", "paris-saint-germain", "roma", "champions"],
  [5, "2026-11-25", "17:00", "inter", "stuttgart", "champions"],
  [5, "2026-11-25", "17:00", "atletico-de-madrid", "viking", "champions"],
  [5, "2026-11-25", "17:00", "sporting-cp", "man-utd", "champions"],
  [5, "2026-11-25", "17:00", "brugge", "liverpool", "champions"],
  [5, "2026-11-25", "17:00", "lille", "bayern", "champions"],
  [5, "2026-11-25", "17:00", "shakhtar", "fenerbahce", "champions"],

  // Jornada 6 (08/12/2026)
  [6, "2026-12-08", "14:45", "viking", "feyenoord", "champions"],
  [6, "2026-12-08", "14:45", "villarreal", "sabah", "champions"],
  [6, "2026-12-08", "17:00", "bayern", "slavia", "champions"],
  [6, "2026-12-08", "17:00", "barcelona", "manchester-city", "champions"],
  [6, "2026-12-08", "17:00", "roma", "sporting-cp", "champions"],
  [6, "2026-12-08", "17:00", "aston-villa", "paris-saint-germain", "champions"],
  [6, "2026-12-08", "17:00", "man-utd", "leipzig", "champions"],
  [6, "2026-12-08", "17:00", "napoli", "brugge", "champions"],
  [6, "2026-12-08", "17:00", "aek", "galatasaray", "champions"],

  // Jornada 6 (09/12/2026)
  [6, "2026-12-09", "14:45", "real-betis", "como", "champions"],
  [6, "2026-12-09", "14:45", "bratislava", "shakhtar", "champions"],
  [6, "2026-12-09", "17:00", "liverpool", "porto", "champions"],
  [6, "2026-12-09", "17:00", "arsenal", "real-madrid", "champions"],
  [6, "2026-12-09", "17:00", "dortmund", "inter", "champions"],
  [6, "2026-12-09", "17:00", "psv", "atletico-de-madrid", "champions"],
  [6, "2026-12-09", "17:00", "stuttgart", "lille", "champions"],
  [6, "2026-12-09", "17:00", "lask", "fenerbahce", "champions"],
  [6, "2026-12-09", "17:00", "lens", "bodo", "champions"],

  // Jornada 7 (19/01/2027)
  [7, "2027-01-19", "14:45", "bodo", "atletico-de-madrid", "champions"],
  [7, "2027-01-19", "14:45", "galatasaray", "feyenoord", "champions"],
  [7, "2027-01-19", "17:00", "real-madrid", "lask", "champions"],
  [7, "2027-01-19", "17:00", "inter", "liverpool", "champions"],
  [7, "2027-01-19", "17:00", "aston-villa", "dortmund", "champions"],
  [7, "2027-01-19", "17:00", "porto", "slavia", "champions"],
  [7, "2027-01-19", "17:00", "lille", "bratislava", "champions"],
  [7, "2027-01-19", "17:00", "stuttgart", "brugge", "champions"],
  [7, "2027-01-19", "17:00", "aek", "roma", "champions"],

  // Jornada 7 (20/01/2027)
  [7, "2027-01-20", "14:45", "sabah", "napoli", "champions"],
  [7, "2027-01-20", "14:45", "fenerbahce", "villarreal", "champions"],
  [7, "2027-01-20", "17:00", "sporting-cp", "barcelona", "champions"],
  [7, "2027-01-20", "17:00", "man-utd", "bayern", "champions"],
  [7, "2027-01-20", "17:00", "real-betis", "arsenal", "champions"],
  [7, "2027-01-20", "17:00", "leipzig", "shakhtar", "champions"],
  [7, "2027-01-20", "17:00", "como", "paris-saint-germain", "champions"],
  [7, "2027-01-20", "17:00", "lens", "manchester-city", "champions"],
  [7, "2027-01-20", "17:00", "viking", "psv", "champions"],

  // Jornada 8 (27/01/2027)
  [8, "2027-01-27", "17:00", "bayern", "real-betis", "champions"],
  [8, "2027-01-27", "17:00", "paris-saint-germain", "galatasaray", "champions"],
  [8, "2027-01-27", "17:00", "liverpool", "lens", "champions"],
  [8, "2027-01-27", "17:00", "manchester-city", "sporting-cp", "champions"],
  [8, "2027-01-27", "17:00", "arsenal", "sabah", "champions"],
  [8, "2027-01-27", "17:00", "barcelona", "como", "champions"],
  [8, "2027-01-27", "17:00", "atletico-de-madrid", "fenerbahce", "champions"],
  [8, "2027-01-27", "17:00", "dortmund", "aek", "champions"],
  [8, "2027-01-27", "17:00", "roma", "lille", "champions"],
  [8, "2027-01-27", "17:00", "brugge", "bodo", "champions"],
  [8, "2027-01-27", "17:00", "psv", "stuttgart", "champions"],
  [8, "2027-01-27", "17:00", "feyenoord", "leipzig", "champions"],
  [8, "2027-01-27", "17:00", "napoli", "viking", "champions"],
  [8, "2027-01-27", "17:00", "villarreal", "man-utd", "champions"],
  [8, "2027-01-27", "17:00", "shakhtar", "real-madrid", "champions"],
  [8, "2027-01-27", "17:00", "slavia", "aston-villa", "champions"],
  [8, "2027-01-27", "17:00", "bratislava", "inter", "champions"],
  [8, "2027-01-27", "17:00", "lask", "porto", "champions"]
].map(([rodada, date, hora, mandante, visitante, comp]) => normalizarJogoInteresse({
  id: `r${rodada}_${mandante}_${visitante}`,
  rodada, date, hora, mandante, visitante, comp,
  estadio: ESTADIOS_INTERESSE[mandante] || ""
}));

function carregarJogosInteresse() {
  if (InteresseStorage.get(CHAVE_INTERESSE_VERSAO) !== INTERESSE_VERSAO) {
    InteresseStorage.set(CHAVE_INTERESSE_VERSAO, INTERESSE_VERSAO);
    InteresseStorage.remove(CHAVE_INTERESSE);
  }
  const salvo = InteresseStorage.get(CHAVE_INTERESSE, null);
  return salvo ? salvo.map(normalizarJogoInteresse) : JOGOS_INTERESSE_SEED.map(j => ({ ...j }));
}

let jogosInteresse = carregarJogosInteresse();
let jogoInteresseEditando = null;
let interesseMostrarTodas = false;

function salvarJogosInteresse() {
  InteresseStorage.set(CHAVE_INTERESSE, jogosInteresse);
}

function rodadaAtualLaLiga() {
  const prox = games
    .filter(g => g.comp === "laliga" && !isGamePlayed(g.score))
    .sort((a, b) => parseDate(a.date) - parseDate(b.date))[0];
  const m = prox ? /(\d+)/.exec(prox.round || "") : null;
  return m ? Math.min(38, Number(m[1])) : 1;
}

function rodadasVisiveisInteresse() {
  const ini = rodadaAtualLaLiga();
  return Array.from({ length: RODADAS_EXIBIDAS }, (_, i) => ini + i);
}

function rotuloRodadas(rodadas) {
  if (rodadas.length === 1) return `Rodada ${rodadas[0]}`;
  return `Rodadas ${rodadas.slice(0, -1).join(", ")} e ${rodadas[rodadas.length - 1]}`;
}

function renderCardInteresse(j) {
  const t1 = getTeam(j.mandante), t2 = getTeam(j.visitante);
  const temPlacar = j.m !== "" && j.v !== "";
  const longa = j.date ? fmtLongDate(j.date) : "";
  const diaSemana = longa.split(" ")[0] || "";
  const mes = longa.split(" ").slice(1).join(" ");
  const dia = j.date ? parseDate(j.date).getDate() : "--";
  const compRotulo = j.comp === "champions" ? "Champions League" : "La Liga";

  const centro = temPlacar
    ? `<div class="font-display text-sm sm:text-xl font-bold text-white bg-navy-950/60 rounded-lg px-2 sm:px-3 py-1 border border-navy-600">${j.m} <span class="text-slate-500">x</span> ${j.v}</div>`
    : `<div class="font-mono text-[10px] sm:text-xs text-slate-500 border border-dashed border-navy-600 rounded-lg px-2 py-1.5">${j.hora || "--:--"}</div>`;

  return `
  <div class="ticket rise-in rounded-xl overflow-hidden flex border border-navy-600/60 group mb-3">
    <div class="w-20 sm:w-28 shrink-0 flex flex-col items-center justify-center py-4 bg-navy-950/40">
      <span class="font-mono text-[10px] text-slate-500 uppercase">${diaSemana}</span>
      <span class="font-display text-xl sm:text-2xl text-white font-semibold leading-none mt-0.5">${dia}</span>
      <span class="font-mono text-[10px] text-slate-500 uppercase mt-0.5">${mes}</span>
    </div>
    <div class="perforation my-3"></div>
    <div class="flex-1 px-3 sm:px-5 py-4 min-w-0">
      <div class="flex items-center justify-between mb-3">
        <p class="text-[10px] sm:text-[11px] font-semibold text-gold uppercase tracking-wider truncate mr-1">
          ${compRotulo} <span class="text-slate-500 font-normal">• ${j.comp === "champions" ? "Jornada" : "Rodada"} ${j.rodada}ª</span>
        </p>
        <div class="flex items-center gap-2 shrink-0 ml-1 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
          <button onclick="abrirModalInteresse('${j.id}')" class="text-slate-500 hover:text-gold p-1" title="Editar jogo">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
          </button>
          <button onclick="removerJogoInteresse('${j.id}')" class="text-slate-500 hover:text-garnet-400 p-1" title="Remover jogo">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m2 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>
          </button>
        </div>
      </div>
      <div class="flex items-center gap-2 sm:gap-3">
        <div class="flex items-center gap-2 flex-1 min-w-0 justify-end">
          <span class="text-xs sm:text-sm font-medium text-slate-200 truncate text-right">${getTeam(j.mandante).name}</span>
          ${badge(j.mandante)}
        </div>
        <div class="shrink-0 px-1 sm:px-2">${centro}</div>
        <div class="flex items-center gap-2 flex-1 min-w-0">
          ${badge(j.visitante)}
          <span class="text-xs sm:text-sm font-medium text-slate-200 truncate">${getTeam(j.visitante).name}</span>
        </div>
      </div>
      <p class="text-[10px] sm:text-[11px] text-slate-500 mt-3 flex items-center gap-1.5 truncate">
        <svg class="shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
        <span class="truncate">${j.estadio || "Estádio a definir"}${temPlacar && j.hora ? " • " + j.hora : ""}</span>
      </p>
    </div>
  </div>`;
}

function renderJogosInteresse() {
  const ref = document.getElementById("section-proximos") || document.getElementById("section-recentes");
  if (!ref || !ref.parentElement) return;

  let sec = document.getElementById("jogosInteresse");
  if (!sec) {
    sec = document.createElement("section");
    sec.id = "jogosInteresse";
    sec.className = "mt-6";
    ref.parentElement.appendChild(sec);
  }

  const abaCompativel = activeTab === "todos" || activeTab === "laliga" || activeTab === "champions";
  if (searchTerm.trim() || !abaCompativel) {
    sec.classList.add("hidden");
    sec.innerHTML = "";
    return;
  }

  const visiveis = rodadasVisiveisInteresse();
  const outros = jogosInteresse
    .filter(j => j.mandante !== "barcelona" && j.visitante !== "barcelona")
    .filter(j => activeTab === "todos" ? true : j.comp === activeTab)
    .filter(j => {
      if (j.comp === "champions") {
        return CHAMPIONS_TARGET_TEAMS.has(j.mandante) || CHAMPIONS_TARGET_TEAMS.has(j.visitante);
      }
      return interesseMostrarTodas || visiveis.includes(j.rodada);
    })
    .sort((a, b) => {
      const da = a.date ? parseDate(a.date) : 0, db = b.date ? parseDate(b.date) : 0;
      return (da - db) || String(a.hora).localeCompare(String(b.hora));
    });

  const titulo = activeTab === "champions" 
    ? "Champions League · Jogos em Destaque" 
    : (interesseMostrarTodas ? "Temporada completa" : rotuloRodadas(visiveis));

  sec.classList.remove("hidden");
  sec.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
      <h3 class="text-[11px] font-bold tracking-[0.2em] text-gold uppercase">${titulo} · jogos que interessam ao Barça</h3>
      <div class="flex items-center gap-3 shrink-0">
        ${activeTab === "laliga" ? `<button onclick="alternarInteresseTodas()" class="text-[11px] font-semibold text-slate-400 hover:text-white transition-colors">${interesseMostrarTodas ? "Ver só as próximas" : "Ver todas"}</button>` : ""}
        <button onclick="abrirModalInteresse()" class="text-[11px] font-semibold text-gold hover:text-white transition-colors">+ Adicionar jogo</button>
      </div>
    </div>
    ${outros.length ? outros.map(renderCardInteresse).join("") : '<p class="text-xs text-slate-500">Nenhum jogo cadastrado nesta categoria.</p>'}`;
}

function alternarInteresseTodas() {
  interesseMostrarTodas = !interesseMostrarTodas;
  renderJogosInteresse();
}

function removerJogoInteresse(id) {
  if (!confirm("Remover este jogo da lista?")) return;
  jogosInteresse = jogosInteresse.filter(j => j.id !== id);
  salvarJogosInteresse();
  renderJogosInteresse();
}

function garantirModalInteresse() {
  let ov = document.getElementById("modalInteresse");
  if (ov) return ov;

  const opts = CLUBES_INTERESSE.map(s => `<option value="${s}">${getTeam(s).name}</option>`).join("");
  const optsRodada = Array.from({ length: 38 }, (_, i) => `<option value="${i + 1}">${i + 1}ª Rodada / Jornada</option>`).join("");
  const campo = "w-full px-3 py-2 rounded-lg bg-navy-950/60 border border-slate-700/60 text-sm text-slate-200 focus:outline-none focus:border-gold";
  const rotulo = "block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1";

  ov = document.createElement("div");
  ov.id = "modalInteresse";
  ov.style.display = "none";
  ov.className = "fixed inset-0 z-50 items-center justify-center p-4 bg-black/70";
  ov.innerHTML = `
    <form class="w-full max-w-md rounded-2xl border border-white/10 bg-navy-900 p-5 max-h-full overflow-y-auto">
      <h3 id="iTitulo" class="font-display text-lg text-white mb-4">Editar jogo</h3>
      <div class="mb-3">
        <label class="${rotulo}">Competição</label>
        <select id="iComp" class="${campo}">
          <option value="laliga">La Liga</option>
          <option value="champions">Champions League</option>
        </select>
      </div>
      <div class="mb-3"><label class="${rotulo}">Rodada / Jornada</label><select id="iRodada" class="${campo}">${optsRodada}</select></div>
      <div class="grid grid-cols-2 gap-3 mb-3">
        <div><label class="${rotulo}">Mandante</label><select id="iMandante" class="${campo}">${opts}</select></div>
        <div><label class="${rotulo}">Visitante</label><select id="iVisitante" class="${campo}">${opts}</select></div>
      </div>
      <div class="grid grid-cols-2 gap-3 mb-3">
        <div><label class="${rotulo}">Data</label><input id="iData" type="date" class="${campo}"></div>
        <div><label class="${rotulo}">Hora</label><input id="iHora" type="time" class="${campo}"></div>
      </div>
      <div class="mb-3"><label class="${rotulo}">Estádio</label><input id="iEstadio" type="text" class="${campo}"></div>
      <div class="mb-2">
        <label class="${rotulo}">Resultado (deixe vazio se não jogou)</label>
        <div class="flex items-center gap-2">
          <input id="iGolsM" type="text" inputmode="numeric" maxlength="2" placeholder="-" class="${campo} text-center">
          <span class="text-slate-500">x</span>
          <input id="iGolsV" type="text" inputmode="numeric" maxlength="2" placeholder="-" class="${campo} text-center">
        </div>
      </div>
      <p id="iErro" class="text-xs text-red-400 min-h-[1rem] mb-2"></p>
      <div class="flex gap-2">
        <button type="button" id="iCancelar" class="flex-1 py-2 rounded-xl text-xs font-semibold border border-slate-700/60 bg-navy-950/50 text-slate-300 hover:text-white">Cancelar</button>
        <button type="submit" class="flex-1 py-2 rounded-xl text-xs font-semibold bg-gold text-navy-950">Salvar jogo</button>
      </div>
    </form>`;
  document.body.appendChild(ov);

  ov.addEventListener("click", (e) => { if (e.target === ov) fecharModalInteresse(); });
  ov.querySelector("#iCancelar").addEventListener("click", fecharModalInteresse);

  ov.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const q = id => ov.querySelector("#" + id);
    const mandante = q("iMandante").value, visitante = q("iVisitante").value;

    if (mandante === visitante) {
      q("iErro").textContent = "Escolha dois times diferentes.";
      return;
    }
    q("iErro").textContent = "";

    const jogo = {
      id: jogoInteresseEditando || cryptoId(),
      comp: q("iComp").value,
      rodada: Number(q("iRodada").value),
      mandante, visitante,
      date: q("iData").value,
      hora: q("iHora").value,
      estadio: q("iEstadio").value.trim(),
      m: q("iGolsM").value,
      v: q("iGolsV").value
    };

    const i = jogosInteresse.findIndex(x => x.id === jogoInteresseEditando);
    if (i !== -1) jogosInteresse[i] = jogo; else jogosInteresse.push(jogo);

    salvarJogosInteresse();
    fecharModalInteresse();
    renderJogosInteresse();
  });

  return ov;
}

function abrirModalInteresse(id) {
  const ov = garantirModalInteresse();
  const q = sel => ov.querySelector("#" + sel);

  const j = id ? jogosInteresse.find(x => x.id === id) : null;
  jogoInteresseEditando = j ? j.id : null;

  q("iTitulo").textContent = j ? "Editar jogo" : "Adicionar jogo";
  q("iErro").textContent = "";
  q("iComp").value = j ? j.comp : (activeTab === "champions" ? "champions" : "laliga");
  q("iRodada").value = String(j ? j.rodada : rodadaAtualLaLiga());
  q("iMandante").value = j ? j.mandante : CLUBES_INTERESSE[0];
  q("iVisitante").value = j ? j.visitante : CLUBES_INTERESSE[1];
  q("iData").value = j ? j.date : "";
  q("iHora").value = j ? j.hora : "";
  q("iEstadio").value = j ? j.estadio : "";
  q("iGolsM").value = j ? j.m : "";
  q("iGolsV").value = j ? j.v : "";

  ov.style.display = "flex";
}

function fecharModalInteresse() {
  jogoInteresseEditando = null;
  const ov = document.getElementById("modalInteresse");
  if (ov) ov.style.display = "none";
}

/* ======================= RENDER: LISTAS ======================= */
function renderLists() {
  const list = gamesForTab(activeTab).filter(jogoCombinaComBusca);
  const nextGame = getNextGame();

  const recentes = list.filter(g => isGamePlayed(g.score)).sort((a, b) => parseDate(b.date) - parseDate(a.date));
  const proximos = list.filter(g => !isGamePlayed(g.score)).sort((a, b) => parseDate(a.date) - parseDate(b.date));

  const secRecentes = document.getElementById("section-recentes");
  const secProximos = document.getElementById("section-proximos");
  const containerRecentes = document.getElementById("listRecentes");
  const containerProximos = document.getElementById("listProximos");
  const emptyState = document.getElementById("emptyState");

  if (containerRecentes) {
    containerRecentes.innerHTML = recentes.map(g => renderCard(g, false)).join("");
    if (secRecentes) secRecentes.classList.toggle("hidden", activeSub === "proximos" || recentes.length === 0);
  }

  if (containerProximos) {
    containerProximos.innerHTML = proximos.map(g => renderCard(g, nextGame && g.id === nextGame.id)).join("");
    if (secProximos) secProximos.classList.toggle("hidden", activeSub === "recentes" || proximos.length === 0);
  }

  if (emptyState) {
    const totalVisible = (activeSub === "recentes" ? recentes.length : activeSub === "proximos" ? proximos.length : list.length);
    emptyState.classList.toggle("hidden", totalVisible > 0);
  }

  renderJogosInteresse();
  renderClassificacao();
}

/* ======================= RENDER PRINCIPAL ======================= */
function render() {
  renderHero();
  renderDashboard();
  renderProgress();
  renderTabs();
  renderSubFilters();
  renderLists();

  document.querySelectorAll(".del-btn").forEach(btn => {
    btn.onclick = () => {
      if (confirm("Remover este jogo do calendário?")) {
        games = games.filter(g => g.id !== btn.dataset.del);
        saveGames();
        render();
      }
    };
  });

  document.querySelectorAll(".edit-btn").forEach(btn => {
    btn.onclick = () => openModalForEdit(btn.dataset.edit);
  });
}

/* ======================= MODAL PRINCIPAL ======================= */
const overlay = document.getElementById("modalOverlay");
let mandoSelecionado = "casa";

function openModal() {
  if (!overlay) return;
  overlay.classList.remove("hidden");
  overlay.classList.add("flex");
  document.body.style.overflow = "hidden";
  document.getElementById("formError")?.classList.add("hidden");
}

function closeModal() {
  if (!overlay) return;
  overlay.classList.add("hidden");
  overlay.classList.remove("flex");
  document.body.style.overflow = "";
  document.getElementById("gameForm")?.reset();
  editingId = null;
  const title = document.getElementById("modalTitle");
  const lbl = document.getElementById("submitLabel");
  if (title) title.textContent = "Novo jogo";
  if (lbl) lbl.textContent = "Salvar jogo";
}

function setMando(val) {
  mandoSelecionado = val;
  document.querySelectorAll(".mando-btn").forEach(b => {
    const active = b.dataset.mando === val;
    b.classList.toggle("border-garnet", active);
    b.classList.toggle("bg-garnet/20", active);
    b.classList.toggle("text-white", active);
    b.classList.toggle("text-slate-400", !active);
  });
}

function openModalForEdit(id) {
  const g = games.find(x => x.id === id);
  if (!g) return;
  editingId = id;
  openModal();
  
  const title = document.getElementById("modalTitle");
  const lbl = document.getElementById("submitLabel");
  if (title) title.textContent = "Editar jogo";
  if (lbl) lbl.textContent = "Atualizar jogo";

  const isBarcaHome = g.team1 === "barcelona";
  setMando(isBarcaHome ? "casa" : "fora");

  const advSlug = isBarcaHome ? g.team2 : g.team1;
  const advTeam = getTeam(advSlug);

  if (document.getElementById("fRival")) document.getElementById("fRival").value = advTeam.name;
  if (document.getElementById("fComp")) document.getElementById("fComp").value = g.comp;
  if (document.getElementById("fRound")) document.getElementById("fRound").value = g.round || "";
  if (document.getElementById("fDate")) document.getElementById("fDate").value = fmtInputDate(g.date);
  if (document.getElementById("fTime")) document.getElementById("fTime").value = g.time || "";
  if (document.getElementById("fStadium")) document.getElementById("fStadium").value = g.stadium || "";
  if (document.getElementById("fScore")) document.getElementById("fScore").value = !isGamePlayed(g.score) ? "" : g.score;
}

document.addEventListener("DOMContentLoaded", () => {
  render();
  initBuscaJogos();

  document.querySelectorAll(".mando-btn").forEach(b => {
    b.onclick = () => setMando(b.dataset.mando);
  });

  document.getElementById("btnAddGameDesktop")?.addEventListener("click", () => {
    editingId = null;
    openModal();
  });

  document.getElementById("btnAddGameMobile")?.addEventListener("click", () => {
    editingId = null;
    openModal();
  });

  document.getElementById("btnCloseModal")?.addEventListener("click", closeModal);

  document.getElementById("gameForm")?.addEventListener("submit", (e) => {
    e.preventDefault();

    const oppName = document.getElementById("fRival")?.value.trim();
    const comp = document.getElementById("fComp")?.value;
    const round = document.getElementById("fRound")?.value.trim();
    const date = document.getElementById("fDate")?.value.trim();
    const time = document.getElementById("fTime")?.value.trim();
    const stadium = document.getElementById("fStadium")?.value.trim();
    let score = document.getElementById("fScore")?.value.trim();

    if (!oppName || !date) {
      const err = document.getElementById("formError");
      if(err) {
        err.textContent = "Preencha o adversário e a data.";
        err.classList.remove("hidden");
      }
      return;
    }

    const oppSlug = slugify(oppName);
    const team1 = mandoSelecionado === "casa" ? "barcelona" : oppSlug;
    const team2 = mandoSelecionado === "casa" ? oppSlug : "barcelona";

    if (!score) score = "x";

    if (editingId) {
      const idx = games.findIndex(g => g.id === editingId);
      if (idx !== -1) {
        games[idx] = { ...games[idx], comp, round, date, time, team1, team2, stadium, score };
      }
    } else {
      games.push({
        id: cryptoId(),
        comp,
        round,
        date,
        time,
        team1,
        team2,
        stadium,
        score
      });
    }

    saveGames();
    closeModal();
    render();
  });
});