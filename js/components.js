/* =============================================
   ROYAL-MED – Shared Header & Footer Injection
   ============================================= */

const WA_LINK = 'https://wa.me/message/TRGW52ISMJDTI1';

// Detect if we're inside a subfolder (e.g. /treatments/)
const ROOT = window.location.pathname.includes('/treatments/') ? '../' : '';

function getHeader(activePage) {
  return `
<header class="site-header">
  <div class="container">
    <div class="header-inner">
      <a href="${ROOT}index.html" class="logo">
        <img src="${ROOT}images/logo.jpg" alt="Royale-Med Clinic" class="logo-img">
      </a>

      <nav class="main-nav" role="navigation" aria-label="ניווט ראשי">
        <div class="nav-item">
          <a href="${ROOT}index.html" class="nav-link ${activePage==='home'?'active':''}">דף הבית</a>
        </div>
        <div class="nav-item">
          <a href="${ROOT}about.html" class="nav-link ${activePage==='about'?'active':''}">אודות</a>
        </div>
        <div class="nav-item">
          <a href="${ROOT}face-treatments.html" class="nav-link ${activePage==='face'?'active':''}">
            טיפולים לפנים
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </a>
          <div class="dropdown">
            <a href="${ROOT}treatments/morpheus8.html">Morpheus 8</a>
            <a href="${ROOT}treatments/bioregeneration.html">ביורגנרציה</a>
            <a href="${ROOT}treatments/peeling.html">פילינגים רפואיים</a>
            <a href="${ROOT}treatments/mesotherapy-face.html">מזותרפיה לפנים</a>
            <a href="${ROOT}treatments/pigmentation.html">טיפולי פיגמנטציה</a>
            <a href="${ROOT}treatments/acne.html">טיפול באקנה ופוסט אקנה</a>
          </div>
        </div>
        <div class="nav-item">
          <a href="${ROOT}hair-treatments.html" class="nav-link ${activePage==='hair'?'active':''}">
            טיפולי שיער
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </a>
          <div class="dropdown">
            <a href="${ROOT}treatments/mesotherapy-hair.html">מזותרפיה לשיער</a>
            <a href="${ROOT}treatments/exosomes.html">טיפולי אקסוזומים</a>
            <a href="${ROOT}treatments/hair-loss.html">טיפול בנשירה ודלילות</a>
            <a href="${ROOT}treatments/hair-rehab.html">שיקום שיער מותאם אישית</a>
          </div>
        </div>
        <div class="nav-item">
          <a href="${ROOT}body-treatments.html" class="nav-link ${activePage==='body'?'active':''}">
            טיפולי גוף
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </a>
          <div class="dropdown">
            <a href="${ROOT}treatments/ems.html">הצרת היקפים – EMS</a>
            <a href="${ROOT}treatments/skin-tightening.html">מיצוק עור הגוף</a>
            <a href="${ROOT}treatments/cellulite.html">טיפול בצלוליט</a>
            <a href="${ROOT}treatments/stretch-marks.html">טיפול בסימני מתיחה</a>
          </div>
        </div>
        <div class="nav-item">
          <a href="${ROOT}programs.html" class="nav-link ${activePage==='programs'?'active':''}">תוכניות משולבות</a>
        </div>
        <div class="nav-item">
          <a href="${ROOT}faq.html" class="nav-link ${activePage==='faq'?'active':''}">שאלות נפוצות</a>
        </div>
        <div class="nav-item">
          <a href="${ROOT}contact.html" class="nav-link ${activePage==='contact'?'active':''}">יצירת קשר</a>
        </div>
      </nav>

      <div class="header-actions">
        <a href="${WA_LINK}" target="_blank" rel="noopener" class="wa-nav-btn">
          <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          WhatsApp
        </a>
        <button class="hamburger" id="hamburger" aria-label="פתח תפריט">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </div>
</header>

<!-- Mobile Menu -->
<div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="תפריט נייד">
  <div class="mobile-nav-item">
    <a href="${ROOT}index.html">דף הבית</a>
  </div>
  <div class="mobile-nav-item">
    <a href="${ROOT}about.html">אודות</a>
  </div>
  <div class="mobile-nav-item" id="mob-face">
    <a href="${ROOT}face-treatments.html" style="justify-content:space-between">
      טיפולים לפנים
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
    </a>
    <div class="mobile-dropdown">
      <a href="${ROOT}treatments/morpheus8.html">Morpheus 8</a>
      <a href="${ROOT}treatments/bioregeneration.html">ביורגנרציה</a>
      <a href="${ROOT}treatments/peeling.html">פילינגים רפואיים</a>
      <a href="${ROOT}treatments/mesotherapy-face.html">מזותרפיה לפנים</a>
      <a href="${ROOT}treatments/pigmentation.html">טיפולי פיגמנטציה</a>
      <a href="${ROOT}treatments/acne.html">טיפול באקנה ופוסט אקנה</a>
    </div>
  </div>
  <div class="mobile-nav-item" id="mob-hair">
    <a href="${ROOT}hair-treatments.html" style="justify-content:space-between">
      טיפולי שיער
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
    </a>
    <div class="mobile-dropdown">
      <a href="${ROOT}treatments/mesotherapy-hair.html">מזותרפיה לשיער</a>
      <a href="${ROOT}treatments/exosomes.html">טיפולי אקסוזומים</a>
      <a href="${ROOT}treatments/hair-loss.html">טיפול בנשירה ודלילות</a>
      <a href="${ROOT}treatments/hair-rehab.html">שיקום שיער מותאם אישית</a>
    </div>
  </div>
  <div class="mobile-nav-item" id="mob-body">
    <a href="${ROOT}body-treatments.html" style="justify-content:space-between">
      טיפולי גוף
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
    </a>
    <div class="mobile-dropdown">
      <a href="${ROOT}treatments/ems.html">הצרת היקפים – EMS</a>
      <a href="${ROOT}treatments/skin-tightening.html">מיצוק עור הגוף</a>
      <a href="${ROOT}treatments/cellulite.html">טיפול בצלוליט</a>
      <a href="${ROOT}treatments/stretch-marks.html">טיפול בסימני מתיחה</a>
    </div>
  </div>
  <div class="mobile-nav-item">
    <a href="${ROOT}programs.html">תוכניות משולבות</a>
  </div>
  <div class="mobile-nav-item">
    <a href="${ROOT}faq.html">שאלות נפוצות</a>
  </div>
  <div class="mobile-nav-item">
    <a href="${ROOT}contact.html">יצירת קשר</a>
  </div>
  <div class="mobile-wa">
    <a href="${WA_LINK}" target="_blank" class="btn btn-wa" style="width:100%;justify-content:center;gap:8px">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      צרו קשר ב-WhatsApp
    </a>
  </div>
</div>`;
}

function getFooter() {
  return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">
          <div class="footer-logo-icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 6v6c0 5.5 3.4 10.7 8 12 4.6-1.3 8-6.5 8-12V6L12 2z"/>
            </svg>
          </div>
          <span class="footer-logo-name">רויאל-מד ישראל</span>
        </div>
        <p class="footer-tagline">מרכז רפואי מתקדם המתמחה בטיפולים אסתטיים מבוססי ביורגנרציה. פועלים לפי סטנדרטים רפואיים גבוהים והתאמה אישית לכל מטופל.</p>
        <div class="social-links">
          <a href="https://www.facebook.com/share/1BbbT3xFPT/" target="_blank" rel="noopener" class="social-link" aria-label="פייסבוק">
            <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/royale.tech.israel?igsh=MWtuOTN3a2ZrNXZ1eQ==" target="_blank" rel="noopener" class="social-link" aria-label="אינסטגרם">
            <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="${WA_LINK}" class="social-link" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>
      </div>

      <div>
        <h3 class="footer-col-title">טיפולים לפנים</h3>
        <div class="footer-links">
          <a href="${ROOT}treatments/morpheus8.html">Morpheus 8</a>
          <a href="${ROOT}treatments/bioregeneration.html">ביורגנרציה</a>
          <a href="${ROOT}treatments/peeling.html">פילינגים רפואיים</a>
          <a href="${ROOT}treatments/mesotherapy-face.html">מזותרפיה לפנים</a>
          <a href="${ROOT}treatments/pigmentation.html">טיפולי פיגמנטציה</a>
          <a href="${ROOT}treatments/acne.html">טיפול באקנה</a>
        </div>
      </div>

      <div>
        <h3 class="footer-col-title">טיפולי שיער וגוף</h3>
        <div class="footer-links">
          <a href="${ROOT}treatments/mesotherapy-hair.html">מזותרפיה לשיער</a>
          <a href="${ROOT}treatments/exosomes.html">טיפולי אקסוזומים</a>
          <a href="${ROOT}treatments/hair-loss.html">טיפול בנשירה</a>
          <a href="${ROOT}treatments/ems.html">הצרת היקפים EMS</a>
          <a href="${ROOT}treatments/cellulite.html">טיפול בצלוליט</a>
          <a href="${ROOT}treatments/stretch-marks.html">סימני מתיחה</a>
        </div>
      </div>

      <div>
        <h3 class="footer-col-title">ניווט מהיר</h3>
        <div class="footer-links">
          <a href="${ROOT}index.html">דף הבית</a>
          <a href="${ROOT}about.html">אודות המרכז</a>
          <a href="${ROOT}programs.html">תוכניות משולבות</a>
          <a href="${ROOT}faq.html">שאלות נפוצות</a>
          <a href="${ROOT}contact.html">יצירת קשר</a>
        </div>
        <div style="margin-top:24px">
          <h3 class="footer-col-title">קישורים</h3>
          <div class="footer-links">
            <a href="${ROOT}privacy.html">מדיניות פרטיות</a>
            <a href="${ROOT}terms.html">תנאי שימוש</a>
            <a href="${ROOT}accessibility-statement.html">נגישות</a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 רויאל-מד ישראל. כל הזכויות שמורות.</p>
      <p>אתר זה מיועד למידע בלבד ואינו מהווה ייעוץ רפואי.</p>
    </div>
  </div>
</footer>

<!-- Floating WhatsApp -->
<a href="${WA_LINK}" target="_blank" rel="noopener" class="wa-float" aria-label="פנה אלינו ב-WhatsApp">
  <div style="position:relative">
    <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    <div class="wa-pulse"></div>
  </div>
  <span>פנה אלינו</span>
</a>`;
}

// Inject components
document.addEventListener('DOMContentLoaded', () => {
  const activePage = document.body.dataset.page || '';

  const headerEl = document.getElementById('site-header-placeholder');
  if (headerEl) headerEl.innerHTML = getHeader(activePage);

  const footerEl = document.getElementById('site-footer-placeholder');
  if (footerEl) footerEl.innerHTML = getFooter();

  // Mobile menu toggle
  setTimeout(() => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
      });
    }

    // Mobile sub-dropdowns
    ['mob-face','mob-hair','mob-body'].forEach(id => {
      const item = document.getElementById(id);
      if (!item) return;
      const toggle = item.querySelector('a');
      const dropdown = item.querySelector('.mobile-dropdown');
      if (toggle && dropdown) {
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          dropdown.classList.toggle('open');
        });
      }
    });
  }, 50);

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-answer').style.maxHeight = '0';
      });
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
});
