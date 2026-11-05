/* Sagi — directory logic. Needs globals `i18n` (data/i18n.js) and `venues` (data/venues.js). */
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const loc = (v, lang) => (v && typeof v === 'object' ? v[lang] || v.en : v);

const state = { lang: 'en', category: 'all', vibe: 'all', query: '' };
const ICON_STAR = '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z"/></svg>';
const ICON_PIN = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';

/* Old versions saved added/deleted venues in the browser; clear that so the real list shows. */
try { localStorage.removeItem('sagi-venues'); } catch (e) { /* ignore */ }

const grid = $('listingsGrid');
const overlays = ['venueModal'].map($);
const setOpen = (el, on) => el.classList.toggle('active', on);

function updateLanguageText() {
  const t = i18n[state.lang];
  const count = (type) => venues.filter((v) => v.type === type).length;
  document.documentElement.lang = state.lang;
  $('headerTitle').textContent = t.title;
  $('headerSubtitle').textContent = t.subtitle;
  $('venueCountBadge').textContent = `Ulaanbaatar · ${venues.length} venues`;
  $('searchInput').placeholder = t.searchPlaceholder;
  $('btnAll').textContent = t.allPlaces;
  $('btnCafes').textContent = `${t.cafes} (${count('Cafe')})`;
  $('btnRests').textContent = `${t.restaurants} (${count('Restaurant')})`;
  $('btnAllVibes').textContent = t.allVibes;
  $('btnStudy').textContent = t.studying;
  $('btnFamily').textContent = t.family;
  $('btnChill').textContent = t.chill;
  $('seatingVibeLabel').textContent = t.seatingTitle;
  $('lblLang').textContent = t.lblLang;
  $('lblCategory').textContent = t.lblCategory;
  $('lblVibe').textContent = t.lblVibe;
  $('menuDone').textContent = t.showResults;
  $('menuToggle').setAttribute('aria-label', t.menuTitle);
}

function openVenue(v) {
  $('modalTypeVibe').textContent = `${v.type} • ${v.vibe.toUpperCase()} VIBE`;
  $('modalTitle').textContent = v.name;
  $('modalAddress').textContent = `${i18n[state.lang].lblAddress || 'Address'}: ${loc(v.address, state.lang)}`;
  $('modalMapsLink').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.mapsQuery)}`;
  $('modalVibeDesc').textContent = loc(v.tableVibe, state.lang);
  setOpen($('venueModal'), true);
}

function renderVenues() {
  const { lang, category, vibe, query } = state;
  const list = venues.filter((v) => {
    if (category !== 'all' && v.type !== category) return false;
    if (vibe !== 'all' && v.vibe !== vibe) return false;
    return [v.name, loc(v.desc, lang), loc(v.address, lang), ...v.tags].some((s) => s.toLowerCase().includes(query));
  });
  if (!list.length) {
    grid.innerHTML = `<div class="no-results">${esc(i18n[lang].noResults)}</div>`;
    return;
  }
  grid.innerHTML = '';
  list.forEach((v, i) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.style.setProperty('--i', i);
    card.innerHTML = `
      <div>
        <div class="card__top">
          <span class="eyebrow">${esc(v.type)} • ${esc(v.vibe.toUpperCase())}</span>
          <span class="card__rating">${ICON_STAR}${esc(v.rating)}</span>
        </div>
        <h3 class="card__title">${esc(v.name)}</h3>
        <p class="card__desc">${esc(loc(v.desc, lang))}</p>
      </div>
      <div>
        <div class="card__addr">${ICON_PIN}<span>${esc(loc(v.address, lang))}</span></div>
        <div class="card__tags">${v.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      </div>`;
    card.addEventListener('click', () => openVenue(v));
    card.addEventListener('keydown', (e) => {
      if (e.target === card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openVenue(v); }
    });
    grid.appendChild(card);
  });
}

/* Filters */
function bindFilters(groupId, attr, key) {
  const btns = document.querySelectorAll(`#${groupId} button`);
  btns.forEach((btn) => btn.addEventListener('click', () => {
    btns.forEach((b) => b.classList.toggle('active', b === btn));
    state[key] = btn.dataset[attr];
    renderVenues();
  }));
}
bindFilters('categoryFilters', 'filter', 'category');
bindFilters('vibeFilters', 'vibe', 'vibe');
$('searchInput').addEventListener('input', (e) => { state.query = e.target.value.toLowerCase().trim(); renderVenues(); });
$('langSelect').addEventListener('change', (e) => { state.lang = e.target.value; updateLanguageText(); renderVenues(); });

/* Menu (top-left) */
const menuOpen = (on) => {
  $('menuPanel').classList.toggle('active', on);
  $('menuScrim').classList.toggle('active', on);
  $('menuPanel').setAttribute('aria-hidden', String(!on));
  $('menuToggle').setAttribute('aria-expanded', String(on));
  if (on) $('menuClose').focus(); else if (document.activeElement && $('menuPanel').contains(document.activeElement)) $('menuToggle').focus();
};
$('menuToggle').addEventListener('click', () => menuOpen(!$('menuPanel').classList.contains('active')));
['menuClose', 'menuDone', 'menuScrim'].forEach((id) => $(id).addEventListener('click', () => menuOpen(false)));

/* Modals */
[['modalClose', 'venueModal']]
  .forEach(([btn, m]) => $(btn).addEventListener('click', () => setOpen($(m), false)));
overlays.forEach((m) => m.addEventListener('click', (e) => { if (e.target === m) setOpen(m, false); }));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { overlays.forEach((m) => setOpen(m, false)); menuOpen(false); }
});

updateLanguageText();
renderVenues();
