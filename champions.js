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
  "man-utd":           { name: "Manchester United", abbr: "MUN", color: "#DA291C" },
  "stuttgart":         { name: "Stuttgart",         abbr: "VFB", color: "#E32219" },
  "lens":              { name: "Lens",              abbr: "LEN", color: "#FFD100" },
  "dortmund":          { name: "B. Dortmund",       abbr: "BVB", color: "#FDE100" },
  "liverpool":         { name: "Liverpool",         abbr: "LIV", color: "#C8102E" },
  "arsenal":           { name: "Arsenal",           abbr: "ARS", color: "#EF0107" },
  "aek":               { name: "AEK Athens",        abbr: "AEK", color: "#FFD200" },
  "roma":              { name: "Roma",              abbr: "ROM", color: "#8E1F2F" },
  "shakhtar":          { name: "Shakhtar",          abbr: "SHK", color: "#FF7900" },
  "fenerbahce":        { name: "Fenerbahçe",        abbr: "FEN", color: "#FFED00" },
  "psv":               { name: "PSV",               abbr: "PSV", color: "#ED1C24" },
  "brugge":            { name: "Club Brugge",       abbr: "CLB", color: "#0057A8" },
  "lille":             { name: "Lille",             abbr: "LIL", color: "#E2001A" },
  "slavia":            { name: "Slavia Praha",      abbr: "SLA", color: "#B90E12" },
  "inter":             { name: "Inter",             abbr: "INT", color: "#010E80" },
  "lask":              { name: "LASK",              abbr: "LAS", color: "#000000" },
  "napoli":            { name: "Napoli",            abbr: "NAP", color: "#12A0D7" },
  "viking":            { name: "Viking",            abbr: "VIK", color: "#001489" },
  "porto":             { name: "Porto",             abbr: "POR", color: "#00539F" },
  "leipzig":           { name: "Leipzig",           abbr: "RBL", color: "#DD0741" },
  "bratislava":        { name: "S. Bratislava",     abbr: "SLB", color: "#05308A" },
  "bodo":              { name: "Bodø/Glimt",        abbr: "BOD", color: "#FDB913" },
};

/* ======================= DADOS DA CLASSIFICAÇÃO (1ª jornada) ======================= */
const dadosClassificacao = [
  { pos:1,  slug:'paris-saint-germain', pj:1, vit:1, e:0, der:0, gm:6, gc:1 },
  { pos:2,  slug:'bayern',              pj:1, vit:1, e:0, der:0, gm:5, gc:0 },
  { pos:3,  slug:'barcelona',           pj:1, vit:1, e:0, der:0, gm:5, gc:1 },
  { pos:4,  slug:'man-utd',             pj:1, vit:1, e:0, der:0, gm:4, gc:0 },
  { pos:5,  slug:'como',                pj:1, vit:1, e:0, der:0, gm:4, gc:1 },
  { pos:6,  slug:'sporting-cp',         pj:1, vit:1, e:0, der:0, gm:3, gc:1 },
  { pos:6,  slug:'stuttgart',           pj:1, vit:1, e:0, der:0, gm:3, gc:1 },
  { pos:8,  slug:'manchester-city',     pj:1, vit:1, e:0, der:0, gm:2, gc:0 },

  { pos:9,  slug:'aston-villa',         pj:1, vit:1, e:0, der:0, gm:3, gc:2 },
  { pos:9,  slug:'lens',                pj:1, vit:1, e:0, der:0, gm:3, gc:2 },
  { pos:9,  slug:'real-betis',          pj:1, vit:1, e:0, der:0, gm:3, gc:2 },
  { pos:12, slug:'dortmund',            pj:1, vit:1, e:0, der:0, gm:3, gc:2 },
  { pos:13, slug:'liverpool',           pj:1, vit:1, e:0, der:0, gm:2, gc:1 },
  { pos:13, slug:'real-madrid',         pj:1, vit:1, e:0, der:0, gm:2, gc:1 },
  { pos:15, slug:'arsenal',             pj:1, vit:1, e:0, der:0, gm:1, gc:0 },
  { pos:16, slug:'aek',                 pj:1, vit:1, e:0, der:0, gm:1, gc:0 },

  { pos:17, slug:'roma',                pj:1, vit:0, e:1, der:0, gm:1, gc:1 },
  { pos:17, slug:'shakhtar',            pj:1, vit:0, e:1, der:0, gm:1, gc:1 },
  { pos:19, slug:'fenerbahce',          pj:1, vit:0, e:1, der:0, gm:1, gc:1 },
  { pos:19, slug:'psv',                 pj:1, vit:0, e:1, der:0, gm:1, gc:1 },
  { pos:21, slug:'villarreal',          pj:1, vit:0, e:0, der:1, gm:2, gc:3 },
  { pos:22, slug:'brugge',              pj:1, vit:0, e:0, der:1, gm:2, gc:3 },
  { pos:22, slug:'lille',               pj:1, vit:0, e:0, der:1, gm:2, gc:3 },
  { pos:22, slug:'slavia',              pj:1, vit:0, e:0, der:1, gm:2, gc:3 },

  { pos:25, slug:'atletico-de-madrid',  pj:1, vit:0, e:0, der:1, gm:1, gc:2 },
  { pos:25, slug:'inter',               pj:1, vit:0, e:0, der:1, gm:1, gc:2 },
  { pos:27, slug:'lask',                pj:1, vit:0, e:0, der:1, gm:0, gc:1 },
  { pos:27, slug:'napoli',              pj:1, vit:0, e:0, der:1, gm:0, gc:1 },
  { pos:29, slug:'galatasaray',         pj:1, vit:0, e:0, der:1, gm:1, gc:3 },
  { pos:29, slug:'viking',              pj:1, vit:0, e:0, der:1, gm:1, gc:3 },
  { pos:31, slug:'porto',               pj:1, vit:0, e:0, der:1, gm:0, gc:2 },
  { pos:32, slug:'leipzig',             pj:1, vit:0, e:0, der:1, gm:1, gc:4 },
  { pos:33, slug:'feyenoord',           pj:1, vit:0, e:0, der:1, gm:1, gc:5 },
  { pos:34, slug:'sabah',               pj:1, vit:0, e:0, der:1, gm:0, gc:4 },
  { pos:35, slug:'bratislava',          pj:1, vit:0, e:0, der:1, gm:1, gc:6 },
  { pos:36, slug:'bodo',                pj:1, vit:0, e:0, der:1, gm:0, gc:5 },
].map(t => ({ ...t, pts: t.vit*3 + t.e, sg: t.gm - t.gc }));

/* ======================= FAIXAS DE CLASSIFICAÇÃO ======================= */
const GRUPOS = {
  1: { min:1,  max:8,  titulo:'DIRETAMENTE PARA OS OITAVOS' },
  2: { min:9,  max:24, titulo:'LUGARES DO PLAY-OFF A ELIMINAR' },
  3: { min:25, max:36, titulo:'LUGARES DE ELIMINAÇÃO' },
};

function getTeam(slug) {
  return TEAMS[slug] || { name: slug, abbr: slug.slice(0,3).toUpperCase(), color: '#334155' };
}

let filtroAtivo = 0;

/* ======================= RENDERIZAÇÃO DA TABELA ======================= */
function renderizarTabelaClassificacao() {
  const tbody = document.getElementById("tabela-corpo");
  if (!tbody) return;
  tbody.innerHTML = "";

  let grupoAtualTitulo = null;

  dadosClassificacao.forEach((item) => {
    const grupoNum = item.pos <= 8 ? 1 : (item.pos <= 24 ? 2 : 3);
    if (filtroAtivo !== 0 && grupoNum !== filtroAtivo) return;

    const isBarca = item.slug === 'barcelona';
    const teamData = getTeam(item.slug);

    // Cabeçalho de grupo
    if (GRUPOS[grupoNum].titulo !== grupoAtualTitulo) {
      grupoAtualTitulo = GRUPOS[grupoNum].titulo;
      const trGrupo = document.createElement('tr');
      trGrupo.innerHTML = `<td colspan="10" class="pt-4 pb-1 px-4 text-[11px] font-semibold tracking-wide text-slate-500 bg-navy-950/40">${grupoAtualTitulo}</td>`;
      tbody.appendChild(trGrupo);
    }

    let posBadgeClass = "font-mono px-2 py-0.5 rounded text-xs font-bold ";
    let trClasses = "hover:bg-navy-800/50 transition-colors ";

    if (item.pos >= 1 && item.pos <= 8) {
      posBadgeClass += "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
    } else if (item.pos >= 9 && item.pos <= 24) {
      posBadgeClass += "bg-amber-500/20 text-amber-400 border border-amber-500/30";
    } else if (item.pos >= 25 && item.pos <= 36) {
      posBadgeClass += "bg-rose-500/20 text-rose-400 border border-rose-500/30";
      trClasses += "bg-rose-950/20 ";
    } else {
      posBadgeClass += "text-slate-400 bg-navy-800/40";
    }

    if (isBarca) {
      trClasses = "bg-gradient-to-r from-blue-900/40 via-navy-800 to-red-900/30 font-bold text-white border-l-4 border-gold shadow-lg shadow-blue-900/40 transition-transform ";
      posBadgeClass = "bg-gold text-navy-950 font-black px-2 py-0.5 rounded text-xs border border-gold shadow";
    }

    let sgClass = "font-mono ";
    if (item.sg > 0) sgClass += isBarca ? "text-emerald-300 font-bold" : "text-emerald-400 font-medium";
    else if (item.sg < 0) sgClass += "text-rose-400 font-medium";
    else sgClass += "text-slate-400";

    const tr = document.createElement("tr");
    tr.className = trClasses.trim();

    tr.innerHTML = `
      <td class="py-2 px-3"><span class="${posBadgeClass}">${item.pos}º</span></td>
      <td class="py-2 px-3 flex items-center gap-2 font-medium text-slate-200">
        <span class="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black text-white shrink-0 shadow" style="background:${teamData.color}">${teamData.abbr}</span>
        <span class="${isBarca ? 'text-white font-black tracking-wide' : ''}">${teamData.name}</span>
        ${isBarca ? '<span class="ml-1 text-[9px] bg-gold/20 text-gold border border-gold/40 px-1.5 py-0.5 rounded font-extrabold uppercase tracking-wider">Barça</span>' : ''}
      </td>
      <td class="py-2 px-2 text-center ${isBarca ? 'text-white font-bold' : 'text-slate-300'}">${item.pj}</td>
      <td class="py-2 px-2 text-center ${isBarca ? 'text-white font-bold' : 'text-slate-300'}">${item.vit}</td>
      <td class="py-2 px-2 text-center ${isBarca ? 'text-white font-bold' : 'text-slate-300'}">${item.e}</td>
      <td class="py-2 px-2 text-center ${isBarca ? 'text-white font-bold' : 'text-slate-300'}">${item.der}</td>
      <td class="py-2 px-2 text-center ${isBarca ? 'text-white font-bold' : 'text-slate-300'}">${item.gm}</td>
      <td class="py-2 px-2 text-center ${isBarca ? 'text-white font-bold' : 'text-slate-300'}">${item.gc}</td>
      <td class="py-2 px-2 text-center ${sgClass}">${item.sg > 0 ? '+' + item.sg : item.sg}</td>
      <td class="py-2 px-2 text-center font-mono ${isBarca ? 'text-gold font-black text-base' : 'font-bold text-white'}">${item.pts}</td>
    `;

    tbody.appendChild(tr);
  });
}

/* ======================= FILTROS DE FAIXA ======================= */
document.querySelectorAll('.filtro-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    filtroAtivo = parseInt(btn.dataset.filter, 10);
    document.querySelectorAll('.filtro-btn').forEach(b => b.className = 'filtro-btn shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-slate-200 text-navy-950 text-xs sm:text-sm font-medium');
    btn.className = 'filtro-btn shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-navy-900 text-white text-xs sm:text-sm font-medium border border-gold/40';
    renderizarTabelaClassificacao();
  });
});

/* ======================= MENU HAMBÚRGUER (mobile) ======================= */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const mobileMenu = document.getElementById('mobileMenu');

// Paths SVG: hambúrguer (3 linhas) e X (fechar)
const ICON_HAMBURGUER = "M4 6h16M4 12h16M4 18h16";
const ICON_FECHAR = "M6 18L18 6M6 6l12 12";

if (hamburgerBtn && mobileMenu && hamburgerIcon) {
  const path = hamburgerIcon.querySelector('path');

  hamburgerBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');

    if (isOpen) {
      // Fechar menu -> volta ícone de hambúrguer
      mobileMenu.classList.add('hidden');
      if (path) path.setAttribute('d', ICON_HAMBURGUER);
      hamburgerBtn.setAttribute('aria-label', 'Abrir menu');
    } else {
      // Abrir menu -> troca para ícone de X
      mobileMenu.classList.remove('hidden');
      if (path) path.setAttribute('d', ICON_FECHAR);
      hamburgerBtn.setAttribute('aria-label', 'Fechar menu');
    }
  });

  // Fecha o menu ao clicar em qualquer link (melhora a navegação mobile)
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      if (path) path.setAttribute('d', ICON_HAMBURGUER);
      hamburgerBtn.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

/* ======================= LEGENDA DOS CLUBES ======================= */
function renderizarLegendaTimes() {
  const container = document.getElementById('legenda-times');
  if (!container) return;
  container.innerHTML = '';

  // Apenas os clubes que estão na classificação, ordenados por nome
  const slugsNaTabela = [...new Set(dadosClassificacao.map(item => item.slug))];
  const times = slugsNaTabela
    .map(slug => ({ slug, ...getTeam(slug) }))
    .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));

  times.forEach(time => {
    const div = document.createElement('div');
    div.className = 'flex items-center gap-2';
    div.innerHTML = `
      <span class="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black text-white shrink-0 shadow" style="background:${time.color}">${time.abbr}</span>
      <span class="truncate">${time.name}</span>
    `;
    container.appendChild(div);
  });
}

/* ======================= INICIALIZAÇÃO ======================= */
renderizarTabelaClassificacao();
renderizarLegendaTimes();