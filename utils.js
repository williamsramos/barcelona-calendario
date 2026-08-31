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

// 📊 Matriz com os dados atualizados da classificação da La Liga 2026/27
const dadosClassificacao = [
  { pos: 1, slug: "real-madrid", clube: "Real Madrid", pts: 9, pj: 3, vit: 3, e: 0, der: 0, gm: 10, gc: 2, sg: 8, ultimas: ['V', 'V', 'V'] },
  { pos: 2, slug: "atletico-madrid", clube: "Atlético Madrid", pts: 7, pj: 3, vit: 2, e: 1, der: 0, gm: 7, gc: 3, sg: 4, ultimas: ['V', 'E', 'V'] },
  { pos: 3, slug: "alaves", clube: "Alavés", pts: 7, pj: 3, vit: 2, e: 1, der: 0, gm: 5, gc: 1, sg: 4, ultimas: ['V', 'E', 'V'] },
  { pos: 4, slug: "barcelona", clube: "Barcelona", pts: 6, pj: 2, vit: 2, e: 0, der: 0, gm: 7, gc: 0, sg: 7, ultimas: ['V', 'V'] },
  { pos: 5, slug: "sevilla", clube: "Sevilla", pts: 6, pj: 3, vit: 2, e: 0, der: 1, gm: 6, gc: 5, sg: 1, ultimas: ['V', 'V', 'D'] },
  { pos: 6, slug: "betis", clube: "Betis", pts: 6, pj: 3, vit: 2, e: 0, der: 1, gm: 7, gc: 7, sg: 0, ultimas: ['V', 'V', 'D'] },
  { pos: 7, slug: "la-coruna", clube: "La Coruña", pts: 5, pj: 3, vit: 1, e: 2, der: 0, gm: 5, gc: 3, sg: 2, ultimas: ['E', 'E', 'V'] },
  { pos: 8, slug: "osasuna", clube: "Osasuna", pts: 4, pj: 2, vit: 1, e: 1, der: 0, gm: 2, gc: 1, sg: 1, ultimas: ['V', 'E'] },
  { pos: 9, slug: "levante", clube: "Levante", pts: 4, pj: 3, vit: 1, e: 1, der: 1, gm: 5, gc: 5, sg: 0, ultimas: ['D', 'E', 'V'] },
  { pos: 10, slug: "racing", clube: "Racing", pts: 4, pj: 3, vit: 1, e: 1, der: 1, gm: 5, gc: 3, sg: 2, ultimas: ['V', 'E', 'D'] },
  { pos: 11, slug: "espanyol", clube: "Espanyol", pts: 3, pj: 3, vit: 1, e: 0, der: 2, gm: 5, gc: 4, sg: 1, ultimas: ['V', 'D', 'D'] },
  { pos: 12, slug: "ath-bilbao", clube: "Ath. Bilbao", pts: 3, pj: 3, vit: 1, e: 0, der: 2, gm: 2, gc: 2, sg: 0, ultimas: ['D', 'D', 'V'] },
  { pos: 13, slug: "getafe", clube: "Getafe", pts: 3, pj: 2, vit: 1, e: 0, der: 1, gm: 1, gc: 3, sg: -2, ultimas: ['D', 'V'] },
  { pos: 14, slug: "real-sociedad", clube: "Real Sociedad", pts: 3, pj: 3, vit: 1, e: 0, der: 2, gm: 3, gc: 6, sg: -3, ultimas: ['D', 'D', 'V'] },
  { pos: 15, slug: "villarreal", clube: "Villarreal", pts: 2, pj: 3, vit: 0, e: 2, der: 1, gm: 4, gc: 5, sg: -1, ultimas: ['E', 'E', 'D'] },
  { pos: 16, slug: "rayo-vallecano", clube: "Rayo Vallecano", pts: 1, pj: 2, vit: 0, e: 1, der: 1, gm: 2, gc: 3, sg: -1, ultimas: ['D', 'E'] },
  { pos: 17, slug: "valencia", clube: "Valencia", pts: 1, pj: 3, vit: 0, e: 1, der: 2, gm: 1, gc: 4, sg: -3, ultimas: ['D', 'E', 'D'] },
  { pos: 18, slug: "celta-de-vigo", clube: "Celta de Vigo", pts: 1, pj: 3, vit: 0, e: 1, der: 2, gm: 1, gc: 4, sg: -3, ultimas: ['D', 'E', 'D'] },
  { pos: 19, slug: "elche", clube: "Elche", pts: 0, pj: 3, vit: 0, e: 0, der: 3, gm: 1, gc: 9, sg: -8, ultimas: ['D', 'D', 'D'] },
  { pos: 20, slug: "malaga", clube: "Málaga", pts: 1, pj: 3, vit: 0, e: 1, der: 2, gm: 1, gc: 7, sg: -6, ultimas: ['D', 'E', 'D'] }
];

function renderizarTabelaClassificacao() {
  const tbody = document.getElementById("tabela-corpo");
  if (!tbody) return;

  tbody.innerHTML = "";

  dadosClassificacao.forEach((item) => {
    const isBarcelona = item.slug === "barcelona";

    // Mapeamento correto das faixas de classificação solicitadas
    let posBadgeClass = "font-mono px-2 py-0.5 rounded text-xs font-bold ";
    let trClasses = "hover:bg-navy-800/50 transition-colors ";

    if (item.pos >= 1 && item.pos <= 5) {
      // Posições 1 a 5: Champions League
      posBadgeClass += "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
    } else if (item.pos === 6 || item.pos === 10) {
      // Posições 6 e 10: Liga Europa
      posBadgeClass += "bg-amber-500/20 text-amber-400 border border-amber-500/30";
    } else if (item.pos === 7) {
      // Posição 7: Conference League qualifying
      posBadgeClass += "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30";
    } else if (item.pos >= 18 && item.pos <= 20) {
      // Posições 18, 19 e 20: Rebaixamento
      posBadgeClass += "bg-rose-500/20 text-rose-400 border border-rose-500/30";
      trClasses += "bg-rose-950/20 ";
    } else {
      posBadgeClass += "text-slate-400 bg-navy-800/40";
    }

    // Destaque específico para o Barcelona
    if (isBarcelona) {
      trClasses = "bg-blaugrana/20 font-semibold text-white border-l-4 border-gold ";
    }

    // Cores para saldo de gols (SG)
    let sgClass = "font-mono ";
    if (item.sg > 0) sgClass += "text-emerald-400 font-medium";
    else if (item.sg < 0) sgClass += "text-rose-400 font-medium";
    else sgClass += "text-slate-400";

    const tr = document.createElement("tr");
    tr.className = trClasses.trim();

    tr.innerHTML = `
      <td class="py-3 px-4"><span class="${posBadgeClass}">${item.pos}º</span></td>
      <td class="py-3 px-4 flex items-center gap-2 font-medium text-slate-200">${item.clube}</td>
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
}

// Inicializar ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  initTailwindConfig();
  initToastContainer();
  renderizarTabelaClassificacao();
});

/* ======================= HAMBURGER MENU ======================= */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const hamburgerIcon = document.getElementById('hamburgerIcon');

if (hamburgerBtn && mobileMenu && hamburgerIcon) {
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('hidden');
    
    if (!isOpen) {
      // Transform into 'X'
      hamburgerIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>';
    } else {
      // Revert back to Hamburger
      hamburgerIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>';
    }
  });
}