/* ===========================================================
   Simulador de Partidas — Lógica Separada
   Salva simulações em localStorage
   =========================================================== */

function cryptoId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

let games = [
  // LA LIGA · 1º TURNO
  { id: cryptoId(), comp: "laliga", round: "RODADA 4ª", date: "06/09", time: "11:15", team1: "valencia", team2: "barcelona", stadium: "Mestalla", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 5ª", date: "13/09", time: "16:00", team1: "levante", team2: "barcelona", stadium: "Ciudad de Valencia", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 6ª", date: "16/09", time: "16:00", team1: "barcelona", team2: "racing-santander", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 7ª", date: "20/09", time: "16:00", team1: "sevilla", team2: "barcelona", stadium: "Ramón Sánchez Pizjuán", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 8ª", date: "11/10", time: "16:00", team1: "barcelona", team2: "getafe", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 9ª", date: "18/10", time: "16:00", team1: "real-betis", team2: "barcelona", stadium: "Benito Villamarín", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 10ª · El Clásico", date: "25/10", time: "16:00", team1: "barcelona", team2: "real-madrid", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 11ª", date: "01/11", time: "14:00", team1: "barcelona", team2: "alaves", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 12ª", date: "08/11", time: "14:00", team1: "atletico-de-madrid", team2: "barcelona", stadium: "Cívitas Metropolitano", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 13ª", date: "22/11", time: "14:00", team1: "barcelona", team2: "villarreal", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 14ª", date: "29/11", time: "14:00", team1: "deportivo-a-coruna", team2: "barcelona", stadium: "Riazor", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 15ª", date: "06/12", time: "14:00", team1: "barcelona", team2: "celta-vigo", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 16ª", date: "13/12", time: "14:00", team1: "malaga", team2: "barcelona", stadium: "La Rosaleda", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 17ª", date: "20/12", time: "14:00", team1: "barcelona", team2: "real-sociedad", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 18ª", date: "03/01", time: "14:00", team1: "espanyol", team2: "barcelona", stadium: "RCDE Stadium", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 19ª", date: "10/01", time: "14:00", team1: "osasuna", team2: "barcelona", stadium: "El Sadar", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 20ª", date: "17/01", time: "14:00", team1: "barcelona", team2: "elche", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 21ª", date: "24/01", time: "14:00", team1: "alaves", team2: "barcelona", stadium: "Mendizorroza", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 22ª", date: "31/01", time: "14:00", team1: "barcelona", team2: "valencia", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 23ª", date: "07/02", time: "14:00", team1: "barcelona", team2: "atletico-de-madrid", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 24ª", date: "14/02", time: "14:00", team1: "villarreal", team2: "barcelona", stadium: "Estadio de la Cerámica", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 25ª", date: "21/02", time: "14:00", team1: "barcelona", team2: "levante", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 26ª", date: "28/02", time: "14:00", team1: "athletic-club", team2: "barcelona", stadium: "San Mamés", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 27ª", date: "07/03", time: "14:00", team1: "barcelona", team2: "real-betis", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 28ª", date: "14/03", time: "14:00", team1: "barcelona", team2: "deportivo-a-coruna", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 29ª", date: "21/03", time: "14:00", team1: "rayo-vallecano", team2: "barcelona", stadium: "Vallecas", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 30ª", date: "04/04", time: "14:00", team1: "barcelona", team2: "sevilla", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 31ª", date: "11/04", time: "14:00", team1: "racing-santander", team2: "barcelona", stadium: "El Sardinero", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 32ª", date: "18/04", time: "14:00", team1: "barcelona", team2: "espanyol", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 33ª", date: "21/04", time: "14:00", team1: "celta-vigo", team2: "barcelona", stadium: "Balaídos", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 34ª", date: "02/05", time: "14:00", team1: "barcelona", team2: "osasuna", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 35ª · El Clásico", date: "09/05", time: "14:00", team1: "real-madrid", team2: "barcelona", stadium: "Santiago Bernabéu", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 36ª", date: "16/05", time: "14:00", team1: "real-sociedad", team2: "barcelona", stadium: "Anoeta", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 37ª", date: "23/05", time: "14:00", team1: "barcelona", team2: "malaga", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "laliga", round: "RODADA 38ª", date: "30/05", time: "14:00", team1: "getafe", team2: "barcelona", stadium: "Coliseum Alfonso Pérez", score: "x" },

  // CHAMPIONS LEAGUE
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 1", date: "09/09", time: "13:45", team1: "barcelona", team2: "feyenoord", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 2", date: "13/10", time: "16:00", team1: "galatasaray", team2: "barcelona", stadium: "Rams Park", score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 3", date: "20/10", time: "16:00", team1: "paris-saint-germain", team2: "barcelona", stadium: "Parc des Princes", score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 4", date: "03/11", time: "17:00", team1: "barcelona", team2: "aston-villa", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 5", date: "24/11", time: "14:45", team1: "sabah", team2: "barcelona", stadium: "Bank Respublika Arena", score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 6", date: "08/12", time: "17:00", team1: "barcelona", team2: "manchester-city", stadium: "Camp Nou", score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 7", date: "20/01", time: "17:00", team1: "sporting-cp", team2: "barcelona", stadium: "José Alvalade", score: "x" },
  { id: cryptoId(), comp: "champions", round: "Fase de Liga · Jornada 8", date: "27/01", time: "17:00", team1: "como", team2: "barcelona", stadium: "Camp Nou", score: "x" },
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
    card.className = "match-card";
    card.innerHTML = `
      <!-- Topo: Rodada e Local -->
      <div class="match-header">
        <span class="bg-navy-950 px-2 py-0.5 rounded border border-navy-700 text-gold font-semibold uppercase text-[10px]">${game.round}</span>
        <span>${game.date} • ${game.stadium}</span>
      </div>

      <!-- Corpo: Time Casa x Placar x Time Visitante -->
      <div class="match-body">
        <!-- Time Mandante -->
        <div class="match-team home">
          <span class="team-name">${formatTeamName(game.team1)}</span>
          <span class="bg-navy-950 text-gold text-xs px-2 py-1 rounded-full border border-navy-700 font-bold">${game.team1.substring(0,3).toUpperCase()}</span>
        </div>

        <!-- Placar -->
        <div class="match-score">
          <input type="number" min="0" max="99" data-game="${game.id}" data-field="score1" value="${score1}" placeholder="-" aria-label="Gols ${formatTeamName(game.team1)}" class="score-input">
          <span class="text-slate-400 font-bold">×</span>
          <input type="number" min="0" max="99" data-game="${game.id}" data-field="score2" value="${score2}" placeholder="-" aria-label="Gols ${formatTeamName(game.team2)}" class="score-input">
        </div>

        <!-- Time Visitante -->
        <div class="match-team away">
          <span class="bg-navy-950 text-slate-300 text-xs px-2 py-1 rounded-full border border-navy-700 font-bold">${game.team2.substring(0,3).toUpperCase()}</span>
          <span class="team-name">${formatTeamName(game.team2)}</span>
        </div>
      </div>
    `;

    // Event listeners para atualizar os placares
    card.querySelectorAll('input').forEach(input => {
      input.addEventListener('change', (e) => {
        const gameId = e.target.dataset.game;
        const field = e.target.dataset.field;
        const targetGame = games.find(g => g.id === gameId);
        
        if (targetGame) {
          const currentParts = targetGame.score.includes('x') ? targetGame.score.split('x') : ['x', 'x'];
          let s1 = currentParts[0];
          let s2 = currentParts[1];

          if (field === 'score1') {
            s1 = e.target.value !== '' ? e.target.value : 'x';
          } else {
            s2 = e.target.value !== '' ? e.target.value : 'x';
          }

          targetGame.score = `${s1}x${s2}`;
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