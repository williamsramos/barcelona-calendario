/* ===========================================================
   Calendário Blaugrana — lógica da aplicação
   Dados salvos via localStorage e responsividade corrigida
   =========================================================== */

function cryptoId() { return 'g_' + Math.random().toString(36).slice(2, 10); }

// Dados iniciais padrão caso o localStorage esteja vazio
const defaultGames = [
  // ---------------- LA LIGA · 1º TURNO (Rodadas 1ª a 19ª) ----------------
  { id: cryptoId(), comp: "laliga", round: "Rodada 1ª",                     date: "23/08", time: "16:30", team1: "elche",                 team2: "barcelona",           stadium: "Manuel Martínez Valero",    score: "0x5" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 2ª",                     date: "27/08", time: "16:00", team1: "barcelona",             team2: "athletic-club",       stadium: "Camp Nou",                  score: "2x0" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 3ª",                     date: "31/08", time: "16:30", team1: "barcelona",             team2: "rayo-vallecano",      stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 4ª",                     date: "06/09", time: "11:15", team1: "valencia",              team2: "barcelona",           stadium: "Mestalla",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 5ª",                     date: "13/09", time: "16:00", team1: "levante",               team2: "barcelona",           stadium: "Ciudad de Valencia",        score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 6ª",                     date: "16/09", time: "16:00", team1: "barcelona",             team2: "racing-santander",    stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 7ª",                     date: "20/09", time: "16:00", team1: "sevilla",               team2: "barcelona",           stadium: "Ramón Sánchez Pizjuán",     score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 8ª",                     date: "11/10", time: "16:00", team1: "barcelona",             team2: "getafe",              stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 9ª",                     date: "18/10", time: "16:00", team1: "real-betis",            team2: "barcelona",           stadium: "Benito Villamarín",         score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 10ª · El Clásico",     date: "25/10", time: "16:00", team1: "barcelona",             team2: "real-madrid",         stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 11ª",                    date: "01/11", time: "14:00", team1: "barcelona",             team2: "alaves",              stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 12ª",                    date: "08/11", time: "14:00", team1: "atletico-de-madrid",    team2: "barcelona",           stadium: "Cívitas Metropolitano",     score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 13ª",                    date: "22/11", time: "14:00", team1: "barcelona",             team2: "villarreal",          stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 14ª",                    date: "29/11", time: "14:00", team1: "deportivo-a-coruna",    team2: "barcelona",           stadium: "Riazor",                    score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 15ª",                    date: "06/12", time: "14:00", team1: "barcelona",             team2: "celta-vigo",          stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 16ª",                    date: "13/12", time: "14:00", team1: "malaga",                team2: "barcelona",           stadium: "La Rosaleda",               score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 17ª",                    date: "20/12", time: "14:00", team1: "barcelona",             team2: "real-sociedad",       stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 18ª",                    date: "03/01", time: "14:00", team1: "espanyol",              team2: "barcelona",           stadium: "RCDE Stadium",              score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 19ª",                    date: "10/01", time: "14:00", team1: "osasuna",               team2: "barcelona",           stadium: "El Sadar",                  score: "x" },

  // ---------------- LA LIGA · 2º TURNO (Rodadas 20ª a 38ª) ----------------
  { id: cryptoId(), comp: "laliga", round: "Rodada 20ª",                    date: "17/01", time: "14:00", team1: "barcelona",             team2: "elche",               stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 21ª",                    date: "24/01", time: "14:00", team1: "alaves",                team2: "barcelona",           stadium: "Mendizorroza",              score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 22ª",                    date: "31/01", time: "14:00", team1: "barcelona",             team2: "valencia",            stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 23ª",                    date: "07/02", time: "14:00", team1: "barcelona",             team2: "atletico-de-madrid",  stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 24ª",                    date: "14/02", time: "14:00", team1: "villarreal",            team2: "barcelona",           stadium: "Estadio de la Cerámica",    score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 25ª",                    date: "21/02", time: "14:00", team1: "barcelona",             team2: "levante",             stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 26ª",                    date: "28/02", time: "14:00", team1: "athletic-club",         team2: "barcelona",           stadium: "San Mamés",                 score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 27ª",                    date: "07/03", time: "14:00", team1: "barcelona",             team2: "real-betis",          stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 28ª",                    date: "14/03", time: "14:00", team1: "barcelona",             team2: "deportivo-a-coruna",  stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 29ª",                    date: "21/03", time: "14:00", team1: "rayo-vallecano",        team2: "barcelona",           stadium: "Vallecas",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 30ª",                    date: "04/04", time: "14:00", team1: "barcelona",             team2: "sevilla",             stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 31ª",                    date: "11/04", time: "14:00", team1: "racing-santander",      team2: "barcelona",           stadium: "El Sardinero",              score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 32ª",                    date: "18/04", time: "14:00", team1: "barcelona",             team2: "espanyol",            stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 33ª",                    date: "21/04", time: "14:00", team1: "celta-vigo",            team2: "barcelona",           stadium: "Balaídos",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 34ª",                    date: "02/05", time: "14:00", team1: "barcelona",             team2: "osasuna",             stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 35ª · El Clásico",     date: "09/05", time: "14:00", team1: "real-madrid",           team2: "barcelona",           stadium: "Santiago Bernabéu",         score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 36ª",                    date: "16/05", time: "14:00", team1: "real-sociedad",         team2: "barcelona",           stadium: "Anoeta",                    score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 37ª",                    date: "23/05", time: "14:00", team1: "barcelona",             team2: "malaga",              stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 38ª",                    date: "30/05", time: "14:00", team1: "getafe",                team2: "barcelona",           stadium: "Coliseum Alfonso Pérez",    score: "x" },

  // ---------------- CHAMPIONS LEAGUE · FASE DE LIGA 2026-27 ----------------
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 1", date: "09/09", time: "13:45", team1: "barcelona",             team2: "feyenoord",       stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 2", date: "13/10", time: "16:00", team1: "galatasaray", team2: "barcelona",             stadium: "Rams Park",        score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 3", date: "20/10", time: "16:00", team1: "paris-saint-germain",             team2: "barcelona",           stadium: "Parc des Princes",                  score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 4", date: "03/11", time: "17:00", team1: "barcelona",         team2: "aston-villa",             stadium: "Camp Nou",     score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 5", date: "24/11", time: "14:45", team1: "sabah",             team2: "barcelona",             stadium: "Bank Respublika Arena",                  score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 6", date: "08/12", time: "17:00", team1: "barcelona",         team2: "manchester-city",             stadium: "Camp Nou",                 score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 7", date: "20/01", time: "17:00", team1: "sporting-cp",             team2: "barcelona",                  stadium: "José Alvalade",                  score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 8", date: "27/01", time: "17:00", team1: "barcelona",               team2: "como",             stadium: "Camp Nou",         score: "x" },

  // ----------------  Troféu Joan Gamper ----------------
  { id: cryptoId(), comp: "amistoso", round: " Troféu Joan Gamper", date: "19/08", time: "", team1: "barcelona",             team2: "ah-ahly",       stadium: "Camp Nou",                  score: "2x1" },
];

// Carregar do localStorage se existir, senão usa o padrão
let games = JSON.parse(localStorage.getItem("blaugrana_games")) || defaultGames;

// Função auxiliar para salvar os dados no navegador
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
  "racing-santander": { name: "Racing Santander", abbr: "RAC", color: "#079046" },
  "sevilla":           { name: "Sevilla",           abbr: "SEV", color: "#D9012C" },
  "getafe":            { name: "Getafe",            abbr: "GET", color: "#005999" },
  "real-betis":        { name: "Real Betis",        abbr: "BET", color: "#00954C" },
  "real-madrid":       { name: "Real Madrid",       abbr: "RMA", color: "#4B4B4B" },
  "alaves":            { name: "Alavés",            abbr: "ALA", color: "#0057A8" },
  "atletico-de-madrid": { name: "Atlético de Madrid", abbr: "ATM", color: "#CB3524" },
  "villarreal":        { name: "Villarreal",        abbr: "VIL", color: "#FFE667" },
  "deportivo-a-coruna": { name: "Deportivo A Coruña", abbr: "DEP", color: "#0067B1" },
  "celta-vigo":        { name: "Celta de Vigo",     abbr: "CEL", color: "#8AC3EE" },
  "malaga":            { name: "Málaga",            abbr: "MAL", color: "#0072CE" },
  "real-sociedad":     { name: "Real Sociedad",     abbr: "RSO", color: "#0067B1" },
  "espanyol":          { name: "Espanyol",          abbr: "ESP", color: "#0A5EA8" },
  "osasuna":           { name: "Osasuna",           abbr: "OSA", color: "#D2001C" },
  "manchester-city":   { name: "Manchester City",   abbr: "MCI", color: "#6CABDD" },
  "paris-saint-germain": { name: "Paris Saint-Germain", abbr: "PSG", color: "#004170" },
  "aston-villa":       { name: "Aston Villa",       abbr: "AVL", color: "#95BFE5" },
  "sporting-cp":       { name: "Sporting CP",       abbr: "SCP", color: "#1B7A3D" },
  "feyenoord":         { name: "Feyenoord",         abbr: "FEY", color: "#EE1C25" },
  "galatasaray":       { name: "Galatasaray",       abbr: "GAL", color: "#A90432" },
  "como":              { name: "Como 1907",         abbr: "COM", color: "#0057A0" },
  "sabah":             { name: "Sabah FK",          abbr: "SAB", color: "#C9A227" },
  "al-ahly":           { name: "Al Ahly",           abbr: "AA",   color: "#9E5F2E" },
};

function slugify(str) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function getTeam(slug) {
  if (TEAMS[slug]) return TEAMS[slug];
  const name = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const abbr = name.replace(/[^A-Za-z ]/g, "").split(" ").map(w => w[0]).join("").slice(0, 3).toUpperCase() || "???";
  let hash = 0; for (const c of slug) hash = c.charCodeAt(0) + ((hash << 5) - hash);
  const hue = Math.abs(hash) % 360;
  return { name, abbr, color: `hsl(${hue} 55% 40%)` };
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

/* ======================= DATAS ======================= */
function parseDate(dstr) {
  const [d, m] = dstr.split("/").map(Number);
  const year = m >= 7 ? 2026 : 2027; 
  return new Date(year, m - 1, d);
}
function fmtLongDate(dstr) {
  const dt = parseDate(dstr);
  return dt.toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "short" }).replace(".", "");
}
function today() {
  const t = new Date();
  return new Date(t.getFullYear(), t.getMonth(), t.getDate());
}

/* ======================= FILTROS POR ABA ======================= */
function gamesForTab(tabId) {
  if (tabId === "todos") return games;
  const comp = COMPS.find(c => c.id === tabId);
  if (comp.match) return games.filter(g => comp.match.includes(g.comp));
  return games.filter(g => g.comp === tabId);
}

/* ======================= 1. DESTAQUE INTELIGENTE ======================= */
function getNextGame() {
  const pendentes = games
    .filter(g => !g.score || g.score === "x")
    .sort((a, b) => parseDate(a.date) - parseDate(b.date));
  return pendentes[0] || null;
}

function renderHero() {
  const box = document.getElementById("heroNext");
  const next = getNextGame();
  if (!next) { box.innerHTML = ""; box.classList.add("hidden"); return; }
  box.classList.remove("hidden");

  const t1 = getTeam(next.team1), t2 = getTeam(next.team2);
  const dt = parseDate(next.date);
  const dias = Math.round((dt - today()) / 86400000);
  const diasLabel = dias === 0 ? "É hoje!" : dias === 1 ? "Falta 1 dia" : dias > 1 ? `Faltam ${dias} dias` : "Em andamento";

  box.innerHTML = `
    <div class="ticket next-game rise-in rounded-2xl border border-navy-600/60 px-4 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
      <div class="flex items-center gap-2 shrink-0">
        <span class="w-2.5 h-2.5 rounded-full bg-gold pulse-dot"></span>
        <span class="text-[11px] font-bold tracking-[0.2em] text-gold uppercase">Próximo jogo · ${diasLabel}</span>
      </div>
      <div class="flex items-center gap-3 sm:gap-6 flex-1 justify-center w-full min-w-0">
        <div class="flex items-center gap-2 flex-1 min-w-0 justify-end">
          <span class="font-display text-xs sm:text-lg text-slate-200 truncate text-right">${t1.name}</span>
          <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-display font-bold text-xs sm:text-sm text-white shrink-0 shadow-inner" style="background:${t1.color}">${t1.abbr}</div>
        </div>
        <span class="font-display text-slate-500 text-sm shrink-0">vs</span>
        <div class="flex items-center gap-2 flex-1 min-w-0">
          <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-display font-bold text-xs sm:text-sm text-white shrink-0 shadow-inner" style="background:${t2.color}">${t2.abbr}</div>
          <span class="font-display text-xs sm:text-lg text-slate-200 truncate">${t2.name}</span>
        </div>
      </div>
      <div class="text-center sm:text-right shrink-0">
        <p class="font-mono text-xs text-slate-400">${fmtLongDate(next.date)} · ${next.time || "--:--"}</p>
        <p class="text-[11px] text-slate-500 mt-0.5">${next.stadium || "Estádio a definir"}</p>
      </div>
    </div>`;
}

/* ======================= 2. DASHBOARD DE ESTATÍSTICAS ======================= */
function computeStats(list) {
  const jogados = list.filter(g => g.score && g.score !== "x");
  let v = 0, e = 0, d = 0, gp = 0, gc = 0;

  jogados.forEach(g => {
    const [s1, s2] = g.score.split("x").map(Number);
    const barEmCasa = g.team1 === "barcelona";
    const golsBar = barEmCasa ? s1 : s2;
    const golsAdv  = barEmCasa ? s2 : s1;
    gp += golsBar; gc += golsAdv;
    if (golsBar > golsAdv) v++; else if (golsBar === golsAdv) e++; else d++;
  });

  const totalJogados = jogados.length;
  const aproveitamento = totalJogados ? Math.round(((v * 3 + e) / (totalJogados * 3)) * 100) : 0;
  return { v, e, d, gp, gc, aproveitamento, totalJogados };
}

function renderDashboard() {
  const list = gamesForTab(activeTab);
  const s = computeStats(list);
  const compLabel = COMPS.find(c => c.id === activeTab)?.label || "Geral";

  document.getElementById("dashboardTitle").textContent = `Desempenho · ${compLabel}`;
  document.getElementById("statGrid").innerHTML = `
    ${statCard("Vitórias", s.v, "text-emerald-400")}
    ${statCard("Empates", s.e, "text-slate-300")}
    ${statCard("Derrotas", s.d, "text-garnet-400")}
    ${statCard("Aproveitamento", s.aproveitamento + "%", "text-gold")}
    ${statCard("Gols Pró / Contra", `${s.gp} <span class="text-slate-500 text-sm">/</span> ${s.gc}`, "text-blaugrana")}
  `;
}
function statCard(label, value, colorClass) {
  return `
    <div class="stat-card rounded-xl px-3 sm:px-4 py-3.5 text-center">
      <p class="text-[10px] uppercase tracking-wider text-slate-500 mb-1.5">${label}</p>
      <p class="font-display text-xl sm:text-2xl font-semibold ${colorClass}">${value}</p>
    </div>`;
}

/* ======================= 3. PROGRESSO DA TEMPORADA ======================= */
function renderProgress() {
  const list = gamesForTab(activeTab);
  const total = list.length;
  const jogados = list.filter(g => g.score && g.score !== "x").length;
  const pct = total ? Math.round((jogados / total) * 100) : 0;

  document.getElementById("progressLabel").textContent = `${jogados} de ${total} jogos disputados`;
  document.getElementById("progressPct").textContent = `${pct}%`;
  document.getElementById("progressFill").style.width = `${pct}%`;
  document.getElementById("progressWrap").classList.toggle("hidden", total === 0);
}

/* ======================= RENDER: ABAS ======================= */
function renderTabs() {
  const bar = document.getElementById("tabBar");
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

/* ======================= RENDER: SUBFILTROS ======================= */
function renderSubFilters() {
  const bar = document.getElementById("subFilterBar");
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

/* ======================= RENDER: CARD (TICKET) ======================= */
function badge(slug) {
  const t = getTeam(slug);
  return `<div class="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-display font-bold text-[11px] sm:text-xs text-white shrink-0 shadow-inner" style="background:${t.color}">${t.abbr}</div>`;
}

function renderCard(g, isNext) {
  const played = g.score && g.score !== "x";
  const [s1, s2] = played ? g.score.split("x") : ["", ""];
  const t1 = getTeam(g.team1), t2 = getTeam(g.team2);
  const compLabel = COMPS.find(c => c.id === g.comp || (c.match && c.match.includes(g.comp)))?.label
                    ?? { copadelrey: "Copa del Rey", supercopa: "Supercopa da Espanha" }[g.comp]
                    ?? g.comp;

  return `
  <div class="ticket ${isNext ? "next-game" : ""} rise-in rounded-xl overflow-hidden flex border border-navy-600/60 group">
    <div class="w-20 sm:w-28 shrink-0 flex flex-col items-center justify-center py-4 bg-navy-950/40">
      <span class="font-mono text-[10px] text-slate-500 uppercase">${fmtLongDate(g.date).split(" ")[0]}</span>
      <span class="font-display text-xl sm:text-2xl text-white font-semibold leading-none mt-0.5">${g.date.split("/")[0]}</span>
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
          <span class="text-xs sm:text-sm font-medium text-slate-200 truncate text-right team-name-label">${t1.name}</span>
          ${badge(g.team1)}
        </div>
        <div class="shrink-0 px-1 sm:px-2">
          ${played
            ? `<div class="font-display text-sm sm:text-xl font-bold text-white bg-navy-950/60 rounded-lg px-2 sm:px-3 py-1 border border-navy-600">${s1} <span class="text-slate-500">x</span> ${s2}</div>`
            : `<div class="font-mono text-[10px] sm:text-xs text-slate-500 border border-dashed border-navy-600 rounded-lg px-2 py-1.5">${g.time || "--:--"}</div>`}
        </div>
        <div class="flex items-center gap-2 flex-1 min-w-0">
          ${badge(g.team2)}
          <span class="text-xs sm:text-sm font-medium text-slate-200 truncate team-name-label">${t2.name}</span>
        </div>
      </div>
      <p class="text-[10px] sm:text-[11px] text-slate-500 mt-3 flex items-center gap-1.5 truncate">
        <svg class="shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
        <span class="truncate">${g.stadium || "Estádio a definir"} ${g.time && played ? "• " + g.time : ""}</span>
      </p>
    </div>
  </div>`;
}

/* ======================= RENDER PRINCIPAL ======================= */
function render() {
  renderHero();
  renderDashboard();
  renderProgress();
  renderTabs();
  renderSubFilters();

  const nextGame = getNextGame();
  const list = gamesForTab(activeTab);

  const recentes = list.filter(g => g.score && g.score !== "x").sort((a, b) => parseDate(b.date) - parseDate(a.date));
  const proximos = list.filter(g => !g.score || g.score === "x").sort((a, b) => parseDate(a.date) - parseDate(b.date));

  const showRecentes = activeSub === "todos" || activeSub === "recentes";
  const showProximos = activeSub === "todos" || activeSub === "proximos";

  document.getElementById("section-recentes").classList.toggle("hidden", !showRecentes || recentes.length === 0);
  document.getElementById("section-proximos").classList.toggle("hidden", !showProximos || proximos.length === 0);

  document.getElementById("listRecentes").innerHTML = recentes.map(g => renderCard(g, false)).join("");
  document.getElementById("listProximos").innerHTML = proximos.map(g => renderCard(g, nextGame && g.id === nextGame.id)).join("");

  const totalVisible = (showRecentes ? recentes.length : 0) + (showProximos ? proximos.length : 0);
  document.getElementById("emptyState").classList.toggle("hidden", totalVisible !== 0);

  document.querySelectorAll(".del-btn").forEach(btn => {
    btn.onclick = () => {
      if (confirm("Remover este jogo do calendário?")) {
        games = games.filter(g => g.id !== btn.dataset.del);
        saveGames(); // Salva alteração no localStorage
        render();
      }
    };
  });

  document.querySelectorAll(".edit-btn").forEach(btn => {
    btn.onclick = () => openModalForEdit(btn.dataset.edit);
  });
}

/* ======================= MODAL ======================= */
const overlay = document.getElementById("modalOverlay");
let mandoSelecionado = "casa";

function openModal() {
  overlay.classList.remove("hidden");
  overlay.classList.add("flex");
  document.getElementById("formError").classList.add("hidden");
}
function closeModal() {
  overlay.classList.add("hidden");
  overlay.classList.remove("flex");
  document.getElementById("gameForm").reset();
  setMando("casa");
  editingId = null;
  document.getElementById("modalTitle").textContent = "Novo jogo";
  document.getElementById("submitLabel").textContent = "Salvar jogo";
}
function setMando(val) {
  mandoSelecionado = val;
  document.querySelectorAll(".mando-btn").forEach(b => {
    const active = b.dataset.mando === val;
    b.classList.toggle("border-garnet", active);
    b.classList.toggle("bg-garnet/20", active);
    b.classList.toggle("text-white", active);
  });
}
document.querySelectorAll(".mando-btn").forEach(b => b.onclick = () => setMando(b.dataset.mando));
setMando("casa");

function openModalForEdit(id) {
  const g = games.find(x => x.id === id);
  if (!g) return;
  editingId = id;

  const barEmCasa = g.team1 === "barcelona";
  const rivalSlug = barEmCasa ? g.team2 : g.team1;
  const rival = getTeam(rivalSlug).name;

  document.getElementById("fComp").value = g.comp;
  document.getElementById("fRound").value = g.round;
  const [d, m] = g.date.split("/");
  const year = parseDate(g.date).getFullYear();
  document.getElementById("fDate").value = `${year}-${m}-${d}`;
  document.getElementById("fTime").value = g.time || "";
  document.getElementById("fRival").value = rival;
  document.getElementById("fStadium").value = g.stadium || "";
  document.getElementById("fScore").value = g.score === "x" ? "" : g.score;
  setMando(barEmCasa ? "casa" : "fora");

  document.getElementById("modalTitle").textContent = "Editar jogo";
  document.getElementById("submitLabel").textContent = "Salvar alterações";
  openModal();
}

document.getElementById("btnAddGame").onclick = openModal;
document.getElementById("btnAddGameMobile").onclick = openModal;
document.getElementById("btnCloseModal").onclick = closeModal;
overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });

document.getElementById("gameForm").addEventListener("submit", e => {
  e.preventDefault();
  const errBox = document.getElementById("formError");
  const rival = document.getElementById("fRival").value.trim();
  const dateVal = document.getElementById("fDate").value;
  const round = document.getElementById("fRound").value.trim();

  if (!rival || !dateVal || !round) {
    errBox.textContent = "Preencha ao menos a fase/rodada, a data e o adversário.";
    errBox.classList.remove("hidden");
    return;
  }

  const [y, m, d] = dateVal.split("-");
  const dateFmt = `${d}/${m}`;
  const rivalSlug = slugify(rival);
  const scoreVal = document.getElementById("fScore").value.trim();
  if (!TEAMS[rivalSlug]) TEAMS[rivalSlug] = getTeam(rivalSlug);

  const gameData = {
    comp: document.getElementById("fComp").value,
    round: round,
    date: dateFmt,
    time: document.getElementById("fTime").value,
    team1: mandoSelecionado === "casa" ? "barcelona" : rivalSlug,
    team2: mandoSelecionado === "casa" ? rivalSlug : "barcelona",
    stadium: document.getElementById("fStadium").value.trim(),
    score: scoreVal === "" ? "x" : scoreVal,
  };

  if (editingId) {
    const idx = games.findIndex(g => g.id === editingId);
    if (idx !== -1) games[idx] = { ...games[idx], ...gameData };
  } else {
    games.push({ id: cryptoId(), ...gameData });
  }

  saveGames(); // Salva alteração no localStorage
  activeTab = ["copadelrey", "supercopa"].includes(gameData.comp) ? "copas" : gameData.comp;
  activeSub = "todos";
  closeModal();
  render();
});

/* ======================= HAMBURGER MENU ======================= */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const hamburgerIcon = document.getElementById('hamburgerIcon');

hamburgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('hidden');
  if (!isOpen) {
    hamburgerIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>';
  } else {
    hamburgerIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>';
  }
});

/* ======================= INIT ======================= */
render();