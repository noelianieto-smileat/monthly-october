/* ============================================================
   SMILEAT · MONTHLY ADVERTISING PERFORMANCE REPORT
   Renderizado: lee el contenido de data.js
   ============================================================ */

document.getElementById('titulo').textContent = "Monthly Advertising Performance Report";
document.getElementById('subtitulo').textContent = MES + " · " + COMPARATIVA;

// ---- MIMO ----
const MIMO_BLOQUES = [
  { key: 'mantener',   label: 'Mantener',   color: 'var(--green)' },
  { key: 'incorporar', label: 'Incorporar', color: 'var(--blue)' },
  { key: 'mejorar',    label: 'Mejorar',    color: 'var(--orange)' },
  { key: 'omitir',     label: 'Omitir',     color: 'var(--purple)' },
];
document.getElementById('mimo-sub').textContent = MIMO_SUB;
document.getElementById('mimo-grid').innerHTML = MIMO_BLOQUES.map(({ key, label, color }) => {
  const items = MIMO[key] || [];
  const body = items.length
    ? `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`
    : `<p class="empty">Sin elementos todavía.</p>`;
  return `<div class="mimo-card" style="--c:${color}"><h3>${label}</h3>${body}</div>`;
}).join('');

// ---- KPIs ----
function renderKpis(containerId, kpis){
  const el = document.getElementById(containerId);
  const n = kpis.length;
  // columnas equilibradas para que no queden tarjetas sueltas
  el.style.setProperty('--cols', n <= 5 ? n : (n % 3 === 0 ? 3 : 4));
  el.innerHTML = kpis.map(k => `
    <div class="kpi">
      <div class="kpi-val">${k.val}</div>
      <div class="kpi-lab">${k.lab}</div>
      ${k.delta ? `<div class="kpi-delta ${k.cls || 'neutral'}">${k.delta}</div>` : ''}
    </div>`).join('');
}

function renderConclusiones(containerId, conclusiones){
  const el = document.getElementById(containerId);
  if (conclusiones && conclusiones.length){
    el.innerHTML = `
      <h3>Conclusiones</h3>
      <ul>${conclusiones.map(c => `<li><strong>${c.titulo}:</strong> ${c.texto}</li>`).join('')}</ul>`;
  } else {
    el.style.display = 'none';
  }
}

document.getElementById('meta-sub').textContent = META_SUB;
document.getElementById('google-sub').textContent = GOOGLE_SUB;
document.getElementById('meta-ecommerce-label').textContent = 'E-commerce (campaña BOFU)';
document.getElementById('meta-marca-label').textContent = 'Marca y alcance (todas las campañas)';
document.getElementById('meta-nota').textContent = META_NOTA;
document.getElementById('google-nota').textContent = GOOGLE_NOTA;

renderKpis('meta-kpis-ecommerce', META_KPIS_ECOMMERCE);
renderKpis('meta-kpis-marca', META_KPIS_MARCA);
renderKpis('google-kpis', GOOGLE_KPIS);
renderConclusiones('meta-conclusiones', META_CONCLUSIONES);
renderConclusiones('google-conclusiones', GOOGLE_CONCLUSIONES);
