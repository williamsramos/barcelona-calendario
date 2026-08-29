/* ===========================================================
   Simulador de Partidas — Lógica Separada
   Salva simulações em localStorage
   =========================================================== */

function cryptoId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

let games = [
  // LA LIGA · 1º TURNO
  { id: cryptoId(), comp: "laliga", round: "Rodada 3ª", date: "31/08", time: "16:30", team1: "barcelona", team2: "rayo-vallecano", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 4ª", date: "06/09", time: "11:15", team1: "valencia", team2: "barcelona", stadium: "Mestalla", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 5ª", date: "13/09", time: "16:00", team1: "levante", team2: "barcelona", stadium: "Ciudad de Valencia", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 6ª", date: "16/09", time: "16:00", team1: "barcelona", team2: "racing-santander", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 7ª", date: "20/09", time: "16:00", team1: "sevilla", team2: "barcelona", stadium: "Ramón Sánchez Pizjuán", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 8ª", date: "11/10", time: "16:00", team1: "barcelona", team2: "getafe", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 9ª", date: "18/10", time: "16:00", team1: "real-betis", team2: "barcelona", stadium: "Benito Villamarín", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 10ª · El Clásico", date: "25/10", time: "16:00", team1: "barcelona", team2: "real-madrid", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 11ª", date: "01/11", time: "14:00", team1: "barcelona", team2: "alaves", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 12ª ", date: "08/11", time: "14:00", team1: "atletico-de-madrid", team2: "barcelona", stadium: "Cívitas Metropolitano", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 13ª",                    date: "22/11", time: "14:00", team1: "barcelona",             team2: "villarreal",          stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 14ª",                    date: "29/11", time: "14:00", team1: "deportivo-a-coruna",    team2: "barcelona",           stadium: "Riazor",                    score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 15ª",                    date: "06/12", time: "14:00", team1: "barcelona",             team2: "celta-vigo",          stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 16ª",                    date: "13/12", time: "14:00", team1: "malaga",                team2: "barcelona",           stadium: "La Rosaleda",               score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 17ª",                    date: "20/12", time: "14:00", team1: "barcelona",             team2: "real-sociedad",       stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 18ª ",                    date: "03/01", time: "14:00", team1: "espanyol",              team2: "barcelona",           stadium: "RCDE Stadium",              score: "x" },
  { id: cryptoId(), comp: "laliga", round: "Rodada 19ª",                    date: "10/01", time: "14:00", team1: "osasuna",               team2: "barcelona",           stadium: "El Sadar",                  score: "x" },
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

  // CHAMPIONS LEAGUE
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 1", date: "09/09", time: "13:45", team1: "barcelona",             team2: "feyenoord",       stadium: "Camp Nou",                  score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 2", date: "13/10", time: "16:00", team1: "galatasaray", team2: "barcelona",             stadium: "Rams Park",        score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 3", date: "20/10", time: "16:00", team1: "paris-saint-germain",             team2: "barcelona",           stadium: "Parc des Princes",                  score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 4", date: "03/11", time: "17:00", team1: "barcelona",         team2: "aston-villa",             stadium: "Camp Nou",     score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 5", date: "24/11", time: "14:45", team1: "sabah",             team2: "barcelona",             stadium: "Bank Respublika Arena",                  score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 6", date: "08/12", time: "17:00", team1: "barcelona",         team2: "manchester-city",             stadium: "Camp Nou",                 score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 7", date: "20/01", time: "17:00", team1: "sporting-cp",             team2: "barcelona",                  stadium: "José Alvalade",                  score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 8", date: "27/01", time: "17:00", team1: "barcelona",               team2: "como",             stadium: "Camp Nou",         score: "x" },
];

function formatTeamName(slug) {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function loadSimulation() {
  const saved = LocalStorage.get('simulador_games', games);
  games = saved;
  renderGames('all');
}

function saveSimulation() {
  const success = LocalStorage.set('simulador_games', games);
  if (success) {
    showToast('✓ Simulação salva com sucesso!', 'success');
  } else {
    showToast('✕ Erro ao salvar simulação', 'error');
  }
}

function renderGames(filter = 'all') {
  const container = document.getElementById('simuladorList');
  if (!container) return;
  
  container.innerHTML = '';
  const filtered = filter === 'all' ? games : games.filter(g => g.comp === filter);

  if (filtered.length === 0) {
    container.innerHTML = '<p class="text-center text-slate-400 py-8">Nenhum jogo encontrado.</p>';
    return;
  }

  filtered.forEach(game => {
    let score1 = '';
    let score2 = '';
    if (game.score && game.score.includes('x')) {
      const parts = game.score.split('x');
      score1 = parts[0] !== 'x' ? parts[0] : '';
      score2 = parts[1] !== 'x' ? parts[1] : '';
    }

    const card = document.createElement('div');
    card.className = "bg-navy-900 border border-navy-700 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-gold/50 transition";
    card.innerHTML = `
      <div class="w-full sm:w-1/5">
        <span class="text-[10px] uppercase font-mono text-gold bg-navy-950 px-2 py-1 rounded border border-navy-700">${game.round}</span>
        <p class="text-xs text-slate-400 mt-1">${game.date} • ${game.stadium}</p>
      </div>
      <div class="flex items-center justify-end gap-2 w-full sm:w-1/3">
        <span class="font-display text-sm font-semibold text-white text-right flex-1">${formatTeamName(game.team1)}</span>
        <div class="w-8 h-8 rounded-full bg-navy-800 text-xs font-bold flex items-center justify-center text-gold border border-navy-700 shrink-0">${game.team1.substring(0,3).toUpperCase()}</div>
      </div>
      <div class="flex items-center gap-2">
        <input type="number" min="0" max="99" data-game="${game.id}" data-field="score1" value="${score1}" placeholder="-" aria-label="Gols Barcelona" class="w-12 h-12 bg-navy-950 border border-navy-700 text-center font-display text-lg text-gold font-bold rounded-lg focus:outline-none focus:border-gold transition">
        <span class="text-slate-500 font-bold">×</span>
        <input type="number" min="0" max="99" data-game="${game.id}" data-field="score2" value="${score2}" placeholder="-" aria-label="Gols Adversário" class="w-12 h-12 bg-navy-950 border border-navy-700 text-center font-display text-lg text-slate-300 font-bold rounded-lg focus:outline-none focus:border-gold transition">
      </div>
      <div class="flex items-center justify-start gap-2 w-full sm:w-1/3">
        <div class="w-8 h-8 rounded-full bg-navy-800 text-xs font-bold flex items-center justify-center text-slate-300 border border-navy-700 shrink-0">${game.team2.substring(0,3).toUpperCase()}</div>
        <span class="font-display text-sm font-semibold text-white flex-1">${formatTeamName(game.team2)}</span>
      </div>
    `;

    // Event listeners para atualizar scores
    card.querySelectorAll('input').forEach(input => {
      input.addEventListener('change', (e) => {
        const gameId = e.target.dataset.game;
        const field = e.target.dataset.field;
        const game = games.find(g => g.id === gameId);
        
        if (game) {
          if (field === 'score1') {
            const s2 = game.score.includes('x') ? game.score.split('x')[1] : '0';
            game.score = e.target.value + 'x' + s2;
          } else {
            const s1 = game.score.includes('x') ? game.score.split('x')[0] : '0';
            game.score = s1 + 'x' + e.target.value;
          }
        }
      });
    });

    container.appendChild(card);
  });
}

function filterGames() {
  const val = document.getElementById('filterComp')?.value || 'all';
  renderGames(val);
}

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  loadSimulation();
  
  // Listener para o filtro
  const filterSelect = document.getElementById('filterComp');
  if (filterSelect) {
    filterSelect.addEventListener('change', filterGames);
  }

  // Listener para salvar
  const saveBtn = document.getElementById('btnSaveSimulation');
  if (saveBtn) {
    saveBtn.addEventListener('click', saveSimulation);
  }
});