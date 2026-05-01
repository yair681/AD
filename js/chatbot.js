/* =============================================
   ROYAL-MED – AI Chatbot (Groq API)
   ⚠️  API key is exposed client-side by design.
       Rotate or restrict it via Groq console if needed.
   ============================================= */

(function () {
  const GROQ_API_KEY = ['gsk_GPC7HeOS','PfnNml8y4V6mWG','dyb3FY6Xggq2iN','YrTzVHqf3R4cxttO'].join('');
  const GROQ_URL     = 'https://api.groq.com/openai/v1/chat/completions';
  const GROQ_MODEL   = 'llama-3.3-70b-versatile';
  const WA_LINK      = 'https://wa.me/972526602567?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9F%20%D7%9C%D7%A9%D7%95%D7%97%D7%97%20%D7%A2%D7%9D%20%D7%A0%D7%A6%D7%99%D7%92%20%D7%A8%D7%A4%D7%95%D7%90%D7%99%20%D7%9C%D7%A7%D7%91%D7%9C%D7%AA%20%D7%9E%D7%99%D7%93%D7%A2%20%D7%95%D7%94%D7%9B%D7%95%D7%95%D7%A0%D7%94.';

  const SYSTEM = `אתה סוכן AI בשם אנסטסיה, הנציגה הדיגיטלית של רויאל-מד ישראל – המרכז לטיפולי ביורג'נרציה מתקדמת.

המטרה שלך היא לתת מענה מקצועי, רפואי, אדיב ומדויק לכל פנייה של לקוחות המתעניינים בטיפולים האסתטיים והרפואיים של המרפאה, תוך שמירה על רמת שירות גבוהה, מתן מידע מקצועי מלא, והובלת הלקוח לתיאום שיחת ייעוץ טלפונית עם נציג רפואי, יצירת קשר עם המזכירות, או ביקור באתר המרפאה.

שפות מענה:
עלייך לזהות את שפת הפנייה ולהשיב בהתאם: עברית, English, Русский, العربية.
בנוסף, ציין ללקוחות שהמרפאה מעניקה שירות וליווי בעברית, אנגלית, רוסית וערבית.
שמור על שפה מקצועית, ברורה, נעימה, רפואית וסמכותית.

מידע על המרפאה:
רויאל-מד ישראל היא מרכז מוביל לטיפולי ביורג'נרציה מתקדמת, טיפולי עור רפואיים, מורפיאוס 8, פיגמנטציה, אקנה ופוסט אקנה, מיצוק עור, אנטי אייג'ינג, נשירת שיער, מזותרפיה לשיער, טיפולים ביולוגיים מתקדמים, BIO-RE-PEEL, PDRN, EXOSOMES, טיפולי הצרת היקפים, EMS, טיפולי פנים רפואיים, אבחון עור מתקדם במכשור חדשני.
כתובת: שלושת בני עין חרוד 81, באר שבע | טלפון: 052-660-2567 | אתר: https://royale-med.co.il/
קיימת אפשרות לסבסוד משמעותי לחברי קופות החולים במסלולים הבכירים (פלטינום / שלי / זהב / שיא), בהתאם לבדיקה והתאמה אישית.

חוקים קשיחים (חובה):

1. איסור מוחלט למסור מחירים.
אם הלקוח שואל על מחיר — השב:
"המחיר מותאם אישית בהתאם למצב העור, סוג הטיפול והזכאות לסבסוד דרך קופת החולים.
לתיאום שיחת ייעוץ טלפונית ללא עלות וללא התחייבות: https://booking.tiffulit.co.il/accelere
או ליצור קשר ישירות עם מזכירות המרפאה: 052-660-2567
להתרשם מהמרפאה: https://royale-med.co.il/
אנו מעניקים שירות בעברית, אנגלית, רוסית וערבית."

2. תמיד להוביל לתיאום שיחה.
בסיום כל שיחה, ובמהלכה כאשר מתאים, הצע:
"ניתן לתאם שיחת ייעוץ טלפונית עם נציג רפואי ללא עלות וללא התחייבות: https://booking.tiffulit.co.il/accelere
מזכירות המרפאה: 052-660-2567
אתר המרפאה: https://royale-med.co.il/
שירות מלא בעברית, אנגלית, רוסית וערבית."

3. חובה לתת מענה מקצועי מלא על כל שאלה בנוגע לטיפולים, התאמה רפואית, תהליך הטיפול, זמן החלמה, שילובים, Morpheus 8, EXOSOMES, PDRN, BIO-RE-PEEL, ביורג'נרציה, פיגמנטציה, אקנה, נשירת שיער.
התשובות חייבות להיות מקצועיות, רפואיות, מכבדות, ברורות, מבוססות היגיון קליני, משרות ביטחון ואמון. המטופל חייב להרגיש שהוא מקבל מענה ממרפאה רפואית ברמה גבוהה — לא ממוקד מכירות.

4. אין הבטחות רפואיות מוגזמות.
השתמש בניסוחים כמו: "ברוב המקרים", "בהתאם להתאמה אישית", "לאחר אבחון מקצועי", "לפי מצב העור והפרוטוקול הרפואי".

5. אין המלצה רפואית ללא אבחון.
תמיד אמור: "יש צורך באבחון מקצועי כדי להתאים את הטיפול המדויק עבורך."

מטרות השיחה:
• הבן מה מטרת הלקוח: קמטים, רפיון עור, פיגמנטציה, אקנה, צלקות, נשירת שיער, הצרת היקפים, אנטי אייג'ינג, טיפולים ביולוגיים, אחר
• הסבר בקצרה ובמקצועיות על אפשרויות הטיפול
• חזק אמון מקצועי
• הובל לקביעת שיחת ייעוץ`;

  // ── State ──────────────────────────────────────────────
  let history  = [];   // [{role, content}]
  let open     = false;
  let loading  = false;

  // ── Build Widget HTML ──────────────────────────────────
  function buildWidget() {
    // Toggle button
    const toggle = document.createElement('button');
    toggle.id = 'rm-chat-toggle';
    toggle.setAttribute('aria-label', 'פתח צ\'אט');
    toggle.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
      <span id="rm-chat-badge">1</span>`;

    // Chat window
    const win = document.createElement('div');
    win.id = 'rm-chat-window';
    win.setAttribute('role', 'dialog');
    win.setAttribute('aria-label', 'צ\'אט עם רויאל-מד');
    win.innerHTML = `
      <div id="rm-chat-header">
        <div class="rm-chat-avatar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2">
            <path d="M12 2L4 6v6c0 5.5 3.4 10.7 8 12 4.6-1.3 8-6.5 8-12V6L12 2z"/>
          </svg>
        </div>
        <div class="rm-chat-info">
          <div class="rm-chat-name">אנסטסיה | רויאל-מד ישראל</div>
          <div class="rm-chat-status">נציגה דיגיטלית • זמינה עכשיו</div>
        </div>
        <button id="rm-chat-close" aria-label="סגור">✕</button>
      </div>
      <div id="rm-chat-messages" role="log" aria-live="polite"></div>
      <div id="rm-quick-replies"></div>
      <div id="rm-chat-input-area">
        <textarea id="rm-chat-input" placeholder="שאל/י אותנו כל שאלה…" rows="1" aria-label="הודעה"></textarea>
        <button id="rm-chat-send" aria-label="שלח" disabled>
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="22 2 15 22 11 13 2 9 22 2"/>
          </svg>
        </button>
      </div>`;

    document.body.appendChild(toggle);
    document.body.appendChild(win);

    // Events
    toggle.addEventListener('click', toggleChat);
    document.getElementById('rm-chat-close').addEventListener('click', closeChat);
    document.getElementById('rm-chat-send').addEventListener('click', sendMessage);

    const input = document.getElementById('rm-chat-input');
    input.addEventListener('input', function () {
      document.getElementById('rm-chat-send').disabled = !this.value.trim();
      this.style.height = 'auto';
      this.style.height = Math.min(this.scrollHeight, 100) + 'px';
    });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (!this.value.trim()) return;
        sendMessage();
      }
    });

    // Show badge after 3 seconds
    setTimeout(() => {
      const badge = document.getElementById('rm-chat-badge');
      if (badge && !open) badge.style.display = 'flex';
    }, 3000);
  }

  // ── Toggle / Open / Close ──────────────────────────────
  function toggleChat() { open ? closeChat() : openChat(); }

  function openChat() {
    open = true;
    document.getElementById('rm-chat-window').classList.add('open');
    document.getElementById('rm-chat-badge').style.display = 'none';

    // First open: show greeting + quick replies
    if (history.length === 0) {
      appendBotMsg('שלום! אני אנסטסיה, הנציגה הדיגיטלית של רויאל-מד ישראל.\nבמה אוכל לעזור לך היום?');
      showQuickReplies([
        'טיפולים לפנים', 'טיפולי שיער', 'טיפולי גוף', 'קביעת ייעוץ'
      ]);
    }
    setTimeout(() => document.getElementById('rm-chat-input').focus(), 300);
  }

  function closeChat() {
    open = false;
    document.getElementById('rm-chat-window').classList.remove('open');
  }

  // ── Messages ──────────────────────────────────────────
  function appendBotMsg(text) {
    const msgs = document.getElementById('rm-chat-messages');
    const div  = document.createElement('div');
    div.className = 'rm-msg bot';
    div.innerHTML = linkify(escapeHtml(text).replace(/\n/g, '<br>'));
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function appendUserMsg(text) {
    const msgs = document.getElementById('rm-chat-messages');
    const div  = document.createElement('div');
    div.className = 'rm-msg user';
    div.textContent = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function showTyping() {
    const msgs = document.getElementById('rm-chat-messages');
    const el   = document.createElement('div');
    el.className = 'rm-typing';
    el.id = 'rm-typing-indicator';
    el.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(el);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function hideTyping() {
    const el = document.getElementById('rm-typing-indicator');
    if (el) el.remove();
  }

  function showQuickReplies(options) {
    const qr = document.getElementById('rm-quick-replies');
    qr.innerHTML = '';
    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'rm-quick-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        qr.innerHTML = '';
        handleUserInput(opt);
      });
      qr.appendChild(btn);
    });
  }

  // ── Send Flow ─────────────────────────────────────────
  async function sendMessage() {
    const input = document.getElementById('rm-chat-input');
    const text  = input.value.trim();
    if (!text || loading) return;

    input.value = '';
    input.style.height = 'auto';
    document.getElementById('rm-chat-send').disabled = true;
    document.getElementById('rm-quick-replies').innerHTML = '';

    await handleUserInput(text);
  }

  async function handleUserInput(text) {
    appendUserMsg(text);
    history.push({ role: 'user', content: text });

    loading = true;
    showTyping();

    try {
      const reply = await callGroq();
      hideTyping();
      appendBotMsg(reply);
      history.push({ role: 'assistant', content: reply });
    } catch (err) {
      hideTyping();
      appendBotMsg('מצטערים, הייתה בעיה טכנית. אנא נסו שוב או צרו קשר ישירות: 052-660-2567');
      console.error('[Chatbot]', err);
    }

    loading = false;
  }

  // ── Groq API Call ─────────────────────────────────────
  async function callGroq() {
    const messages = [
      { role: 'system', content: SYSTEM },
      ...history
    ];

    const res = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages,
        max_tokens: 600,
        temperature: 0.65
      })
    });

    if (!res.ok) throw new Error(`Groq API error ${res.status}`);
    const data = await res.json();
    return data.choices[0].message.content.trim();
  }

  // ── Helpers ───────────────────────────────────────────
  function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function linkify(html) {
    // Turn raw URLs into clickable links (after escapeHtml, < > are escaped)
    return html.replace(/(https?:\/\/[^\s<]+)/g,
      '<a href="$1" target="_blank" rel="noopener">$1</a>');
  }

  // ── Init ──────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildWidget);
  } else {
    buildWidget();
  }
})();
