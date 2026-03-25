/* =============================================
   ROYAL-MED – סרגל נגישות
   תואם תקן IS 5568 ו-WCAG 2.1 AA
   ============================================= */

(function () {
  'use strict';

  const STORAGE_KEY = 'royal_med_acc';
  const ROOT = window.location.pathname.includes('/treatments/') ? '../' : '';

  // ── הזרקת HTML ──
  function injectHTML() {
    // Skip to content
    const skip = document.createElement('a');
    skip.href = '#main-content';
    skip.className = 'skip-to-content';
    skip.textContent = 'דלג לתוכן הראשי';
    document.body.prepend(skip);

    // Reading guide overlay
    const guide = document.createElement('div');
    guide.id = 'acc-reading-guide';
    document.body.appendChild(guide);

    // Toggle button
    const toggle = document.createElement('button');
    toggle.id = 'acc-toggle';
    toggle.setAttribute('aria-label', 'פתח סרגל נגישות');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'acc-panel');
    toggle.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a2 2 0 110 4 2 2 0 010-4zm8 7h-5v13h-2v-6h-2v6H9V9H4V7h16v2z"/>
      </svg>
      נגישות`;
    document.body.appendChild(toggle);

    // Panel
    const panel = document.createElement('div');
    panel.id = 'acc-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'סרגל נגישות');
    panel.setAttribute('aria-modal', 'false');
    panel.innerHTML = `
      <div class="acc-header">
        <h2>כלי נגישות</h2>
        <button class="acc-close" id="acc-close" aria-label="סגור סרגל נגישות">✕</button>
      </div>
      <div class="acc-body">

        <div class="acc-section-title">גודל טקסט</div>
        <div class="acc-font-row">
          <button class="acc-font-btn" id="acc-font-down" aria-label="הקטן טקסט">A−</button>
          <span class="acc-font-label" id="acc-font-label">גודל רגיל</span>
          <button class="acc-font-btn" id="acc-font-up" aria-label="הגדל טקסט">A+</button>
        </div>

        <hr class="acc-divider">
        <div class="acc-section-title">צבע ותצוגה</div>
        <div class="acc-btn-row">
          <button class="acc-btn" data-action="high-contrast" aria-pressed="false">
            <span class="acc-icon">◑</span>ניגודיות גבוהה
          </button>
          <button class="acc-btn" data-action="inverted" aria-pressed="false">
            <span class="acc-icon">☀</span>ניגודיות הפוכה
          </button>
          <button class="acc-btn" data-action="grayscale" aria-pressed="false">
            <span class="acc-icon">🔲</span>גווני אפור
          </button>
          <button class="acc-btn" data-action="highlight-links" aria-pressed="false">
            <span class="acc-icon">🔗</span>הדגשת קישורים
          </button>
        </div>

        <hr class="acc-divider">
        <div class="acc-section-title">קריאה ונוחות</div>
        <div class="acc-btn-row">
          <button class="acc-btn" data-action="readable-font" aria-pressed="false">
            <span class="acc-icon">Aa</span>פונט קריא
          </button>
          <button class="acc-btn" data-action="stop-animations" aria-pressed="false">
            <span class="acc-icon">⏸</span>עצור אנימציות
          </button>
          <button class="acc-btn" data-action="reading-guide-on" aria-pressed="false">
            <span class="acc-icon">📖</span>מדריך קריאה
          </button>
          <button class="acc-btn" data-action="focus-visible" aria-pressed="false">
            <span class="acc-icon">🔍</span>הדגשת פוקוס
          </button>
        </div>

        <button class="acc-reset" id="acc-reset" aria-label="אפס כל הגדרות נגישות">↺ אפס הכל</button>
        <a href="${ROOT}accessibility-statement.html" class="acc-statement">הצהרת נגישות</a>
      </div>`;
    document.body.appendChild(panel);
  }

  // ── מצב שמור ──
  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  }

  function saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }

  // ── פונט ──
  const FONT_STEPS = ['קטן מאוד', 'קטן', 'גודל רגיל', 'גדול', 'גדול מאוד'];
  const ZOOM_LEVELS = [0.8, 0.9, 1, 1.15, 1.3];
  let fontLevel = 2; // default = index 2 = 100%

  function applyFontSize(level) {
    fontLevel = Math.max(0, Math.min(4, level));
    document.documentElement.style.zoom = ZOOM_LEVELS[fontLevel];
    const label = document.getElementById('acc-font-label');
    if (label) label.textContent = FONT_STEPS[fontLevel];
  }

  // ── toggle classes ──
  const TOGGLEABLE = [
    'high-contrast',
    'inverted',
    'grayscale',
    'highlight-links',
    'readable-font',
    'stop-animations',
    'reading-guide-on',
    'focus-visible',
  ];

  function applyAll(state) {
    TOGGLEABLE.forEach(key => {
      document.body.classList.toggle('acc-' + key, !!state[key]);
      const btn = document.querySelector(`[data-action="${key}"]`);
      if (btn) {
        btn.classList.toggle('active', !!state[key]);
        btn.setAttribute('aria-pressed', String(!!state[key]));
      }
    });
    if (typeof state.font === 'number') applyFontSize(state.font);
  }

  // ── reading guide ──
  function initReadingGuide() {
    const guide = document.getElementById('acc-reading-guide');
    if (!guide) return;

    function updateGuide(y) {
      guide.style.top = (y - 20) + 'px';
    }

    document.addEventListener('mousemove', (e) => {
      if (document.body.classList.contains('acc-reading-guide-on')) {
        updateGuide(e.clientY);
      }
    });

    // כשמפעילים — מייד ממקם במרכז המסך
    const observer = new MutationObserver(() => {
      if (document.body.classList.contains('acc-reading-guide-on')) {
        updateGuide(window.innerHeight / 2);
      }
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }

  // ── init ──
  function init() {
    injectHTML();
    initReadingGuide();

    const state = loadState();

    // Restore font level
    if (typeof state.font === 'number') fontLevel = state.font;

    applyAll(state);

    // Add main content id to first main section if missing
    const main = document.querySelector('section, main');
    if (main && !main.id) main.id = 'main-content';

    // Toggle panel open/close
    const toggle = document.getElementById('acc-toggle');
    const panel = document.getElementById('acc-panel');
    const closeBtn = document.getElementById('acc-close');

    toggle.addEventListener('click', () => {
      const isOpen = panel.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        closeBtn.focus();
      }
    });

    closeBtn.addEventListener('click', () => {
      panel.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && panel.classList.contains('open')) {
        panel.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });

    // Feature buttons
    document.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;

        // ניגודיות: מבטלת אחת את השנייה
        if (action === 'high-contrast' && state.inverted) {
          state.inverted = false;
        }
        if (action === 'inverted' && state['high-contrast']) {
          state['high-contrast'] = false;
        }

        state[action] = !state[action];
        applyAll(state);
        saveState(state);
      });
    });

    // Font buttons
    document.getElementById('acc-font-up').addEventListener('click', () => {
      fontLevel = Math.min(4, fontLevel + 1);
      applyFontSize(fontLevel);
      state.font = fontLevel;
      saveState(state);
    });

    document.getElementById('acc-font-down').addEventListener('click', () => {
      fontLevel = Math.max(0, fontLevel - 1);
      applyFontSize(fontLevel);
      state.font = fontLevel;
      saveState(state);
    });

    // Reset
    document.getElementById('acc-reset').addEventListener('click', () => {
      TOGGLEABLE.forEach(k => { state[k] = false; });
      state.font = 2;
      applyAll(state);
      applyFontSize(2);
      document.documentElement.style.zoom = 1;
      saveState(state);
    });
  }

  // Run after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
