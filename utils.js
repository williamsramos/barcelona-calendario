/* ===========================================================
   Utilitários Globais — Compartilhados entre páginas
   =========================================================== */

// ===== TOAST NOTIFICATIONS =====
function initToastContainer() {
  if (!document.getElementById('toastContainer')) {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
}

function showToast(message, type = 'success', duration = 3000) {
  initToastContainer();
  const container = document.getElementById('toastContainer');
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  
  container.appendChild(toast);
  
  if (duration > 0) {
    setTimeout(() => {
      toast.style.animation = 'slideInRight 0.3s ease reverse';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
}

// ===== TAILWIND CONFIG (Centralizado) =====
function initTailwindConfig() {
  if (!window.tailwindInitialized) {
    if (typeof tailwind !== 'undefined') {
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              navy: { 
                950: '#080D1A', 
                900: '#0B1220', 
                800: '#111C33', 
                700: '#16213B', 
                600: '#1D2C4D' 
              },
              garnet: { 
                DEFAULT: '#A50044', 
                600: '#8A0039', 
                400: '#C21756' 
              },
              blaugrana: { 
                DEFAULT: '#004D98', 
                600: '#003E7A' 
              },
              gold: { 
                DEFAULT: '#FFC72C', 
                600: '#E0AB16' 
              },
            },
            fontFamily: {
              display: ['Oswald', 'sans-serif'],
              body: ['Inter', 'sans-serif'],
              mono: ['JetBrains Mono', 'monospace'],
            },
          }
        }
      };
    }
    window.tailwindInitialized = true;
  }
}

// ===== ARMAZENAMENTO LOCAL =====
const LocalStorage = {
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
      return false;
    }
  },

  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      return defaultValue;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Erro ao remover dados:', error);
      return false;
    }
  },

  clear() {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Erro ao limpar dados:', error);
      return false;
    }
  }
};

// ===== DADOS DE CLASSIFICAÇÃO =====
const dadosClassificacaoInicial = [
  { pos: 1, slug: "barcelona", clube: "Barcelona", pts: 24, pj: 8, vit: 8, e: 0, der: 0, gm: 34, gc: 7, sg: 27, ultimas: ["V", "V", "V", "V", "V"] },
  { pos: 2, slug: "atletico-madrid", clube: "Atlético de Madrid", pts: 19, pj: 8, vit: 6, e: 1, der: 1, gm: 18, gc: 8, sg: 10, ultimas: ["E", "V", "D", "V", "V"] },
  { pos: 3, slug: "betis", clube: "Betis", pts: 19, pj: 8, vit: 6, e: 1, der: 1, gm: 14, gc: 9, sg: 5, ultimas: ["V", "D", "V", "V", "V"] },
  { pos: 4, slug: "real-madrid", clube: "Real Madrid", pts: 18, pj: 8, vit: 6, e: 0, der: 2, gm: 19, gc: 8, sg: 11, ultimas: ["V", "V", "D", "V", "V"] },
  { pos: 5, slug: "sevilla", clube: "Sevilla", pts: 14, pj: 8, vit: 4, e: 2, der: 2, gm: 13, gc: 12, sg: 1, ultimas: ["V", "D", "E", "V", "V"] },
  { pos: 6, slug: "real-sociedad", clube: "Real Sociedad", pts: 13, pj: 8, vit: 4, e: 1, der: 3, gm: 12, gc: 15, sg: -3, ultimas: ["D", "V", "E", "V", "D"] },
  { pos: 7, slug: "alaves", clube: "Alavés", pts: 11, pj: 8, vit: 3, e: 2, der: 3, gm: 12, gc: 8, sg: 4, ultimas: ["E", "V", "V", "D", "D"] },
  { pos: 8, slug: "la-coruna", clube: "Deportivo La Coruña", pts: 10, pj: 8, vit: 2, e: 4, der: 2, gm: 12, gc: 11, sg: 1, ultimas: ["E", "V", "V", "E", "D"] },
  { pos: 9, slug: "celta-de-vigo", clube: "Celta de Vigo", pts: 8, pj: 8, vit: 1, e: 5, der: 2, gm: 8, gc: 6, sg: 2, ultimas: ["D", "D", "E", "E", "E"] },
  { pos: 10, slug: "ath-bilbao", clube: "Athletic Bilbao", pts: 8, pj: 6, vit: 2, e: 2, der: 2, gm: 7, gc: 6, sg: 1, ultimas: ["D", "D", "V", "V", "E"] },
  { pos: 11, slug: "villarreal", clube: "Villarreal", pts: 8, pj: 8, vit: 2, e: 2, der: 4, gm: 13, gc: 13, sg: 0, ultimas: ["E", "D", "D", "D", "V"] },
  { pos: 12, slug: "espanyol", clube: "Espanyol", pts: 8, pj: 8, vit: 2, e: 2, der: 4, gm: 11, gc: 11, sg: 0, ultimas: ["D", "D", "E", "V", "D"] },
  { pos: 13, slug: "rayo-vallecano", clube: "Rayo Vallecano", pts: 8, pj: 7, vit: 2, e: 2, der: 3, gm: 11, gc: 16, sg: -5, ultimas: ["E", "D", "V", "D", "V"] },
  { pos: 14, slug: "getafe", clube: "Getafe", pts: 8, pj: 8, vit: 2, e: 2, der: 4, gm: 4, gc: 10, sg: -6, ultimas: ["V", "D", "E", "E", "D"] },
  { pos: 15, slug: "racing", clube: "Racing Santander", pts: 8, pj: 8, vit: 2, e: 2, der: 4, gm: 13, gc: 23, sg: -10, ultimas: ["D", "V", "D", "V", "D"] },
  { pos: 16, slug: "osasuna", clube: "Osasuna", pts: 8, pj: 8, vit: 2, e: 2, der: 4, gm: 8, gc: 18, sg: -10, ultimas: ["V", "V", "D", "D", "D"] },
  { pos: 17, slug: "levante", clube: "Levante", pts: 6, pj: 7, vit: 1, e: 3, der: 3, gm: 11, gc: 15, sg: -4, ultimas: ["D", "E", "V", "E", "D"] },
  { pos: 18, slug: "elche", clube: "Elche", pts: 6, pj: 8, vit: 1, e: 3, der: 4, gm: 11, gc: 17, sg: -6, ultimas: ["D", "D", "D", "E", "D"] },
  { pos: 19, slug: "valencia", clube: "Valencia", pts: 5, pj: 8, vit: 1, e: 2, der: 5, gm: 6, gc: 15, sg: -9, ultimas: ["D", "D", "D", "D", "V"] },
  { pos: 20, slug: "malaga", clube: "Málaga", pts: 4, pj: 8, vit: 0, e: 4, der: 4, gm: 4, gc: 13, sg: -9, ultimas: ["E", "D", "E", "E", "D"] }
];

//localStorage.clear()


// Aumente este valor SEMPRE que atualizar dadosClassificacaoInicial
const CLASSIFICACAO_VERSAO = "2026-10-14-r8";

let dadosClassificacao = (() => {
  const versaoSalva = LocalStorage.get('laliga_classificacao_versao');
  if (versaoSalva !== CLASSIFICACAO_VERSAO) {
    LocalStorage.set('laliga_classificacao_versao', CLASSIFICACAO_VERSAO);
    LocalStorage.remove('laliga_classificacao');
  }
  return LocalStorage.get('laliga_classificacao', dadosClassificacaoInicial);
})();

/* ======================= CORES E SIGLAS DOS TIMES ======================= */
const TIMES_CORES = {
  "barcelona":       { name: "Barcelona",       abbr: "BAR", color: "#A50044" },
  "real-madrid":     { name: "Real Madrid",     abbr: "RMA", color: "#4B4B4B" },
  "betis":           { name: "Betis",           abbr: "BET", color: "#00954C" },
  "atletico-madrid": { name: "Atlético Madrid", abbr: "ATM", color: "#CB3524" },
  "sevilla":         { name: "Sevilla",         abbr: "SEV", color: "#D9012C" },
  "alaves":          { name: "Alavés",          abbr: "ALA", color: "#0057A8" },
  "la-coruna":       { name: "La Coruña",       abbr: "COR", color: "#0067B1" },
  "espanyol":        { name: "Espanyol",        abbr: "ESP", color: "#0A5EA8" },
  "ath-bilbao":      { name: "Ath. Bilbao",     abbr: "ATH", color: "#EE2523" },
  "racing":          { name: "Racing",          abbr: "RAC", color: "#079046" },
  "rayo-vallecano":  { name: "Rayo Vallecano",  abbr: "RAY", color: "#E30613" },
  "real-sociedad":   { name: "Real Sociedad",   abbr: "RSO", color: "#0067B1" },
  "osasuna":         { name: "Osasuna",         abbr: "OSA", color: "#D2001C" },
  "villarreal":      { name: "Villarreal",      abbr: "VIL", color: "#FFE667" },
  "levante":         { name: "Levante",         abbr: "LEV", color: "#00206A" },
  "getafe":          { name: "Getafe",          abbr: "GET", color: "#005999" },
  "celta-de-vigo":   { name: "Celta de Vigo",   abbr: "CEL", color: "#8AC3EE" },
  "valencia":        { name: "Valencia",        abbr: "VAL", color: "#F49B00" },
  "malaga":          { name: "Málaga",          abbr: "MAL", color: "#0072CE" },
  "elche":           { name: "Elche",           abbr: "ELC", color: "#00753C" },
};

function gerarBadgeTime(slugTime) {
  const info = TIMES_CORES[slugTime] || { abbr: "FC", color: "#3B82F6" };

  // Define texto escuro para fundo muito claro (ex: Villarreal)
  const corTexto = info.color === "#FFE667" ? "#1E293B" : "#FFFFFF";

  return `
    <span class="badge-time" style="background-color: ${info.color}; color: ${corTexto};">
      ${info.abbr}
    </span>
  `;
}

function ordenarClassificacao() {
  dadosClassificacao.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.sg !== a.sg) return b.sg - a.sg;
    return b.gm - a.gm;
  });

  dadosClassificacao.forEach((item, index) => {
    item.pos = index + 1;
  });
}

function renderizarTabelaClassificacao() {
  const tbody = document.getElementById("tabela-corpo");
  if (!tbody) return;

  ordenarClassificacao();
  tbody.innerHTML = "";

  dadosClassificacao.forEach((item) => {
    const isBarcelona = item.slug === "barcelona";

    let posBadgeClass = "font-mono px-2 py-0.5 rounded text-xs font-bold ";
    let trClasses = "hover:bg-navy-800/50 transition-colors ";

    if (item.pos >= 1 && item.pos <= 5) {
      posBadgeClass += "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
    } else if (item.pos === 6) {
      posBadgeClass += "bg-amber-500/20 text-amber-400 border border-amber-500/30";
    } else if (item.pos === 7) {
      posBadgeClass += "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30";
    } else if (item.pos >= 18 && item.pos <= 20) {
      posBadgeClass += "bg-rose-500/20 text-rose-400 border border-rose-500/30";
      trClasses += "bg-rose-950/20 ";
    } else {
      posBadgeClass += "text-slate-400 bg-navy-800/40";
    }

    if (isBarcelona) {
      trClasses = "bg-blaugrana/20 font-semibold text-white border-l-4 border-gold ";
    }

    let sgClass = "font-mono ";
    if (item.sg > 0) sgClass += "text-emerald-400 font-medium";
    else if (item.sg < 0) sgClass += "text-rose-400 font-medium";
    else sgClass += "text-slate-400";

    const tr = document.createElement("tr");
    tr.className = trClasses.trim();

    tr.innerHTML = `
      <td class="py-3 px-4"><span class="${posBadgeClass}">${item.pos}º</span></td>
      <td class="py-3 px-4 flex items-center gap-2 font-medium text-slate-200">
        ${gerarBadgeTime(item.slug)}
        <span>${item.clube}</span>
      </td>
      <td class="py-3 px-3 text-center font-mono ${isBarcelona ? 'text-gold font-bold text-base' : 'font-bold text-white'}">${item.pts}</td>
      <td class="py-3 px-3 text-center text-slate-300">${item.pj}</td>
      <td class="py-3 px-3 text-center text-slate-300">${item.vit}</td>
      <td class="py-3 px-3 text-center text-slate-300">${item.e}</td>
      <td class="py-3 px-3 text-center text-slate-300">${item.der}</td>
      <td class="py-3 px-3 text-center text-slate-300">${item.gm}</td>
      <td class="py-3 px-3 text-center text-slate-300">${item.gc}</td>
      <td class="py-3 px-3 text-center ${sgClass}">${item.sg > 0 ? '+' + item.sg : item.sg}</td>
    `;

    tbody.appendChild(tr);
  });

  LocalStorage.set('laliga_classificacao', dadosClassificacao);
}

/* ======================= LEGENDA DOS CLUBES ======================= */
function renderizarLegendaTimes() {
  const container = document.getElementById('legenda-times');
  if (!container) return;

  const times = dadosClassificacao
    .map(item => ({ slug: item.slug, ...(TIMES_CORES[item.slug] || { name: item.clube, abbr: "FC", color: "#3B82F6" }) }))
    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

  container.innerHTML = times.map(time => {
    const corTexto = time.color === "#FFE667" ? "#1E293B" : "#FFFFFF";
    return `
      <div class="flex items-center gap-2">
        <span class="badge-time" style="background-color:${time.color}; color:${corTexto};">${time.abbr}</span>
        <span class="truncate text-sm text-slate-300">${time.name}</span>
      </div>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  initTailwindConfig();
  initToastContainer();
  renderizarTabelaClassificacao();
  renderizarLegendaTimes();
});

/* ======================= HAMBURGER MENU ======================= */
/* ===========================================================
   UTILS.JS — Funções Globais e Menu Hambúrguer
   =========================================================== */

function initHamburgerMenu() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (!hamburgerBtn || !mobileMenu) return;

  // Clona o botão para remover listeners de clique acumulados ou duplicados
  const newBtn = hamburgerBtn.cloneNode(true);
  hamburgerBtn.parentNode.replaceChild(newBtn, hamburgerBtn);

  newBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Alterna a classe hidden
    const estaEscondido = mobileMenu.classList.toggle('hidden');

    // Opção A: Alterna visibilidade se houver elementos de ícone separados
    const iconBars = document.getElementById('iconBars');
    const iconClose = document.getElementById('iconClose');
    if (iconBars && iconClose) {
      iconBars.classList.toggle('hidden', !estaEscondido);
      iconClose.classList.toggle('hidden', estaEscondido);
    }

    // Opção B: Altera a path interna se houver um SVG único (#hamburgerIcon)
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    if (hamburgerIcon) {
      if (!estaEscondido) {
        hamburgerIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>';
      } else {
        hamburgerIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>';
      }
    }
  });
}

// Inicializa automaticamente quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHamburgerMenu);
} else {
  initHamburgerMenu();
}