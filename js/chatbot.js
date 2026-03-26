/* =============================================
   ROYAL-MED – AI Chatbot (Groq API)
   ⚠️  API key is exposed client-side by design.
       Rotate or restrict it via Groq console if needed.
   ============================================= */

(function () {
  const GROQ_API_KEY = ['gsk_GPC7HeOS','PfnNml8y4V6mWG','dyb3FY6Xggq2iN','YrTzVHqf3R4cxttO'].join('');
  const GROQ_URL     = 'https://api.groq.com/openai/v1/chat/completions';
  const GROQ_MODEL   = 'llama-3.3-70b-versatile';
  const WA_LINK      = 'https://wa.me/message/TRGW52ISMJDTI1';

  const SYSTEM = `אתה עוזר וירטואלי מקצועי של רויאל-מד ישראל – מרכז רפואי מתקדם לאסתטיקה מבוססת ביורגנרציה.

פרטי המרכז: כתובת: שלושת בני עין חרוד 81, באר שבע | טלפון: 052-660-2567

תחומי טיפול:
• פנים: Morpheus 8, ביורגנרציה, פילינגים רפואיים, מזותרפיה, טיפולי פיגמנטציה, אקנה ופוסט-אקנה
• שיער: מזותרפיה לשיער, אקסוזומים, טיפול בנשירה, שיקום שיער
• גוף: EMS, מיצוק עור, צלוליט, סימני מתיחה
• תוכניות משולבות: אנטי-אייג'ינג, שיקום עור, לאחר ירידה במשקל

הנחיות:
1. ענה בעברית בלבד, בשפה חמה, קצרה וממוקדת (עד 3 משפטים בכל תשובה)
2. אל תהיה שיווקי – היה אינפורמטיבי ואמין
3. לגבי מחירים: ענה שהמחיר נקבע לאחר ייעוץ אישי
4. כשמישהו מביע עניין בטיפול או ייעוץ – בקש שם ומספר טלפון
5. לאחר קבלת שם + טלפון: ענה "תודה [שם]! צוות רויאל-מד יחזור אליך בהקדם. לתיאום מיידי לחץ כאן: [WA]" (החלף [WA] ב-${WA_LINK})
6. אל תמציא מידע שלא ברשימה לעיל`;

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
          <div class="rm-chat-name">רויאל-מד ישראל</div>
          <div class="rm-chat-status">עוזר וירטואלי • זמין עכשיו</div>
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
      appendBotMsg('שלום! אני העוזר הווירטואלי של רויאל-מד ישראל 👋\nבמה אוכל לעזור לך היום?');
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
        max_tokens: 400,
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
