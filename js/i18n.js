/* =============================================
   ROYAL-MED – i18n Translation System
   Languages: he (Hebrew), en (English), ar (Arabic), ru (Russian)
   ============================================= */

const TRANSLATIONS = {
  he: {
    dir: 'rtl',
    lang: 'he',
    // NAV
    'nav.home': 'דף הבית',
    'nav.about': 'אודות',
    'nav.face': 'טיפולים לפנים',
    'nav.hair': 'טיפולי שיער',
    'nav.body': 'טיפולי גוף',
    'nav.programs': 'תוכניות משולבות',
    'nav.faq': 'שאלות נפוצות',
    'nav.contact': 'יצירת קשר',
    // FACE DROPDOWN
    'nav.face.bioregeneration': 'ביורגנרציה',
    'nav.face.peeling': 'פילינגים רפואיים',
    'nav.face.mesotherapy': 'מזותרפיה לפנים',
    'nav.face.pigmentation': 'טיפולי פיגמנטציה',
    'nav.face.acne': 'טיפול באקנה ופוסט אקנה',
    // HAIR DROPDOWN
    'nav.hair.mesotherapy': 'מזותרפיה לשיער',
    'nav.hair.exosomes': 'טיפולי אקסוזומים',
    'nav.hair.loss': 'טיפול בנשירה ודלילות',
    'nav.hair.rehab': 'שיקום שיער מותאם אישית',
    // BODY DROPDOWN
    'nav.body.ems': 'הצרת היקפים – EMS',
    'nav.body.tightening': 'מיצוק עור הגוף',
    'nav.body.cellulite': 'טיפול בצלוליט',
    'nav.body.stretch': 'טיפול בסימני מתיחה',
    // BUTTONS
    'btn.booking': 'תיאום תור טלפוני ללא עלות',
    'btn.contact': 'טופס יצירת קשר',
    'btn.whatsapp': 'WhatsApp',
    'btn.wa.float': 'פנה אלינו',
    'btn.consult': 'קביעת ייעוץ',
    'btn.details': 'לפרטי הפרוטוקול ←',
    'btn.more': 'למידע נוסף',
    // HERO
    'hero.tag': 'מרכז רפואי מוסמך',
    'hero.title.pre': 'מרכז רפואי מתקדם לאסתטיקה מבוססת',
    'hero.title.hl': 'ביורגנרציה',
    'hero.desc': 'רויאל-מד ישראל פועלת בהתאם לסטנדרטים רפואיים גבוהים, תוך שימוש בטכנולוגיות המתקדמות בעולם ופרוטוקולים טיפוליים מבוססי נתונים ואבחון מקצועי.',
    'hero.cta1': 'קביעת ייעוץ',
    'hero.cta2': 'למידע נוסף',
    // HMO ROLLER
    'hmo.headline': 'הבחירה הטבעית של קופות החולים לטיפולים אסתטיים',
    'hmo.title': 'מטפלים עם מטופלים מכל קופות החולים',
    // TRUST BAR
    'trust.1': 'סטנדרטים רפואיים גבוהים',
    'trust.2': 'טכנולוגיות מתקדמות',
    'trust.3': 'התאמה אישית לכל מטופל',
    'trust.4': 'אבחון מקצועי לפני טיפול',
    // CATEGORIES OVERVIEW
    'cat.tag': 'תחומי הטיפול שלנו',
    'cat.h2': 'מה אנחנו מציעים?',
    'cat.sub': 'מגוון טיפולים רפואיים מתקדמים בהתאמה אישית לצרכי כל מטופל',
    'cat.face.title': 'טיפולים אסתטיים לפנים',
    'cat.face.desc': 'Morpheus 8, ביורגנרציה, פילינגים רפואיים, מזותרפיה, פיגמנטציה ואקנה',
    'cat.face.count': '6 סוגי טיפול ←',
    'cat.hair.title': 'טיפולי שיער',
    'cat.hair.desc': 'מזותרפיה, אקסוזומים לקרקפת, טיפול בנשירה ותוכניות שיקום שיער',
    'cat.hair.count': '4 סוגי טיפול ←',
    'cat.body.title': 'טיפולי גוף',
    'cat.body.desc': 'הצרת היקפים EMS, מיצוק עור, טיפול בצלוליט וסימני מתיחה',
    'cat.body.count': '4 סוגי טיפול ←',
    // SECTION HEADERS
    'sec.face.tag': 'פנים',
    'sec.face.h2': 'טיפולים אסתטיים לפנים',
    'sec.hair.tag': 'שיער',
    'sec.hair.h2': 'טיפולי שיער',
    'sec.viewall': 'לכל הטיפולים ←',
    // TREATMENT CARD LABELS
    'card.cat.face': 'פנים',
    'card.cat.hair': 'שיער',
    'card.link': 'לפרטים נוספים',
    // TREATMENT CARDS
    'treat.morpheus8.desc': 'טכנולוגיית RF Microneedling מתקדמת המשלבת מחטים עדינות עם אנרגיית רדיו-פרקוונסי לשיפור מרקם ומתאר הפנים.',
    'treat.bioregeneration.title': 'ביורגנרציה',
    'treat.bioregeneration.desc': 'שימוש בחומרים ביולוגיים פעילים לחידוש פעילות תאי העור בצורה טבעית ומבוקרת לתוצאות עמוקות וארוכות טווח.',
    'treat.peeling.title': 'פילינגים רפואיים',
    'treat.peeling.desc': 'פילינג כימי מבוקר ברמה רפואית לחידוש שכבות העור העליונות, שיפור מרקם ואחידות הצבע.',
    'treat.mesohair.title': 'מזותרפיה לשיער',
    'treat.mesohair.desc': 'הזרקת קוקטייל חומרים פעילים לקרקפת לחיזוק זקיקי השיער ועידוד צמיחה מחודשת.',
    'treat.exosomes.title': 'טיפולי אקסוזומים לקרקפת',
    'treat.exosomes.desc': 'טכנולוגיה חדשנית המשתמשת בווזיקולות ביולוגיות לחידוש תאי הקרקפת ועידוד פעילות זקיקי השיער.',
    'treat.hairloss.title': 'טיפול בנשירה ודלילות',
    'treat.hairloss.desc': 'פרוטוקולים מבוססי אבחון לעצירת נשירת שיער, הסמכת השיער הקיים ועידוד צמיחה חדשה.',
    // ABOUT STRIP
    'about.tag': 'אודות המרכז',
    'about.h2': 'הגישה הרפואית שלנו',
    'about.sub': 'רויאל-מד ישראל הוקמה מתוך מטרה להוביל תחום חדש באסתטיקה הרפואית – המבוסס על תהליכי ביורגנרציה ולא על פתרונות זמניים.',
    'about.p1.title': 'דיוק רפואי',
    'about.p1.desc': 'כל טיפול מתבצע לפי פרוטוקולים רפואיים מוגדרים ומבוססי עדויות קליניות.',
    'about.p2.title': 'התאמה אישית',
    'about.p2.desc': 'כל מטופל עובר אבחון מקצועי, ועל בסיסו נבנית תוכנית טיפול ייחודית.',
    'about.p3.title': 'תוצאות ארוכות טווח',
    'about.p3.desc': 'הטיפולים מיועדים לשיפור הדרגתי ומבוקר עם תוצאות שנשמרות לאורך זמן.',
    'about.btn': 'קרא עוד אודות המרכז ←',
    // PROGRAMS
    'prog.tag': 'תוכניות מיוחדות',
    'prog.h2': 'תוכניות טיפול משולבות',
    'prog.sub': 'פרוטוקולים מקיפים המשלבים מספר טיפולים בתוכנית אחת מותאמת אישית',
    'prog.1.num': 'תוכנית 01',
    'prog.1.title': 'אנטי אייג\'ינג מלא',
    'prog.1.desc': 'תוכנית מקיפה לעיכוב תהליכי הזדקנות העור בשילוב טכנולוגיות מתקדמות.',
    'prog.2.num': 'תוכנית 02',
    'prog.2.title': 'שיקום עור',
    'prog.2.desc': 'פרוטוקול לשיקום עור פגוע, יבש, או לאחר טיפולים רפואיים.',
    'prog.3.num': 'תוכנית 03',
    'prog.3.title': 'לאחר ירידה במשקל',
    'prog.3.desc': 'תוכנית ייעודית לטיפול בעור ובגוף לאחר ירידה משמעותית במשקל.',
    'prog.4.num': 'תוכנית 04',
    'prog.4.title': 'התאמה לפי אבחון',
    'prog.4.desc': 'תוכנית מותאמת לחלוטין לפי תוצאות האבחון הרפואי האישי שלך.',
    // CTA BAND
    'cta.h2': 'מוכן להתחיל את תהליך הטיפול?',
    'cta.sub': 'צרו קשר לייעוץ ראשוני ואבחון מקצועי ללא עלות',
    'cta.btn': 'קביעת ייעוץ ב-WhatsApp',
    // REVIEWS
    'reviews.tag': 'ביקורות',
    'reviews.h2': 'מה אומרים המטופלים שלנו',
    'reviews.gnote': 'מבוסס על ביקורות אמיתיות',
    'review.1.text': '"קיבלתי שירות מקצועי ואישי ביותר. הצוות הסביר לי כל שלב בתהליך, ותוצאות הטיפול עלו על הציפיות שלי. מרגישה שינוי אמיתי בעור."',
    'review.1.name': 'מיכל ל.',
    'review.1.date': 'לפני 2 שבועות',
    'review.2.text': '"אחרי שניסיתי מקומות אחרים, כאן הרגשתי שמדברים איתי כמו עם מטופל ולא כמו עם לקוח. האבחון היה מפורט ותוכנית הטיפול הייתה מותאמת אישית."',
    'review.2.name': 'יוסי א.',
    'review.2.date': 'לפני חודש',
    'review.3.text': '"הגעתי לטיפולי שיער לאחר נשירה חזקה. לאחר הסדרה ראיתי שיפור משמעותי. המקצועיות והאנושיות של הצוות הפתיעו אותי לטובה."',
    'review.3.name': 'רחל ב.',
    'review.3.date': 'לפני 3 שבועות',
    // SIDEBAR
    'sidebar.consult.title': 'קביעת ייעוץ',
    'sidebar.consult.sub': 'דברו איתנו לפני שמחליטים',
    // FOOTER
    'footer.tagline': 'מרכז רפואי מתקדם המתמחה בטיפולים אסתטיים מבוססי ביורגנרציה. פועלים לפי סטנדרטים רפואיים גבוהים והתאמה אישית לכל מטופל.',
    'footer.face': 'טיפולים לפנים',
    'footer.hairbody': 'טיפולי שיער וגוף',
    'footer.quick': 'ניווט מהיר',
    'footer.links': 'קישורים',
    'footer.home': 'דף הבית',
    'footer.about': 'אודות המרכז',
    'footer.programs': 'תוכניות משולבות',
    'footer.faq': 'שאלות נפוצות',
    'footer.contact': 'יצירת קשר',
    'footer.privacy': 'מדיניות פרטיות',
    'footer.terms': 'תנאי שימוש',
    'footer.accessibility': 'נגישות',
    'footer.copy': '© 2025 רויאל-מד ישראל. כל הזכויות שמורות.',
    'footer.disclaimer': 'אתר זה מיועד למידע בלבד ואינו מהווה ייעוץ רפואי.',
    // LANG SWITCHER
    'lang.label': 'שפה',
    'lang.abbr': 'עב',
  },

  en: {
    dir: 'ltr',
    lang: 'en',
    // NAV
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.face': 'Facial Treatments',
    'nav.hair': 'Hair Treatments',
    'nav.body': 'Body Treatments',
    'nav.programs': 'Combined Programs',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.face.bioregeneration': 'Bioregeneration',
    'nav.face.peeling': 'Medical Peels',
    'nav.face.mesotherapy': 'Face Mesotherapy',
    'nav.face.pigmentation': 'Pigmentation Treatments',
    'nav.face.acne': 'Acne & Post-Acne',
    'nav.hair.mesotherapy': 'Hair Mesotherapy',
    'nav.hair.exosomes': 'Exosome Treatments',
    'nav.hair.loss': 'Hair Loss Treatment',
    'nav.hair.rehab': 'Hair Rehabilitation',
    'nav.body.ems': 'Body Slimming – EMS',
    'nav.body.tightening': 'Skin Tightening',
    'nav.body.cellulite': 'Cellulite Treatment',
    'nav.body.stretch': 'Stretch Marks Treatment',
    // BUTTONS
    'btn.booking': 'Book a Free Consultation',
    'btn.contact': 'Contact Form',
    'btn.whatsapp': 'WhatsApp',
    'btn.wa.float': 'Contact Us',
    'btn.consult': 'Book Consultation',
    'btn.details': 'View Protocol →',
    'btn.more': 'Learn More',
    // HERO
    'hero.tag': 'Certified Medical Center',
    'hero.title.pre': 'Advanced Medical Center for',
    'hero.title.hl': 'Bioregeneration-Based Aesthetics',
    'hero.desc': 'Royal-Med Israel operates according to high medical standards, using the world\'s most advanced technologies and data-driven treatment protocols with professional diagnosis.',
    'hero.cta1': 'Book Consultation',
    'hero.cta2': 'Learn More',
    // HMO ROLLER
    'hmo.headline': 'The natural choice for health fund patients seeking aesthetic treatments',
    'hmo.title': 'Treating patients from all health funds',
    // TRUST BAR
    'trust.1': 'High Medical Standards',
    'trust.2': 'Advanced Technologies',
    'trust.3': 'Personalized for Every Patient',
    'trust.4': 'Professional Diagnosis Before Treatment',
    // CATEGORIES OVERVIEW
    'cat.tag': 'Our Treatment Areas',
    'cat.h2': 'What Do We Offer?',
    'cat.sub': 'A variety of advanced medical treatments personalized for each patient\'s needs',
    'cat.face.title': 'Facial Aesthetic Treatments',
    'cat.face.desc': 'Morpheus 8, Bioregeneration, Medical Peels, Mesotherapy, Pigmentation & Acne',
    'cat.face.count': '6 treatment types →',
    'cat.hair.title': 'Hair Treatments',
    'cat.hair.desc': 'Mesotherapy, scalp exosomes, hair loss treatment and rehabilitation programs',
    'cat.hair.count': '4 treatment types →',
    'cat.body.title': 'Body Treatments',
    'cat.body.desc': 'EMS body slimming, skin tightening, cellulite and stretch marks treatment',
    'cat.body.count': '4 treatment types →',
    // SECTION HEADERS
    'sec.face.tag': 'Face',
    'sec.face.h2': 'Facial Aesthetic Treatments',
    'sec.hair.tag': 'Hair',
    'sec.hair.h2': 'Hair Treatments',
    'sec.viewall': 'All Treatments →',
    // TREATMENT CARD LABELS
    'card.cat.face': 'Face',
    'card.cat.hair': 'Hair',
    'card.link': 'More Details',
    // TREATMENT CARDS
    'treat.morpheus8.desc': 'Advanced RF Microneedling technology combining fine needles with radio-frequency energy to improve skin texture and facial contours.',
    'treat.bioregeneration.title': 'Bioregeneration',
    'treat.bioregeneration.desc': 'Using active biological substances to renew skin cell activity naturally and in a controlled manner for deep, long-lasting results.',
    'treat.peeling.title': 'Medical Peels',
    'treat.peeling.desc': 'Medically controlled chemical peel to renew upper skin layers, improve texture and color uniformity.',
    'treat.mesohair.title': 'Hair Mesotherapy',
    'treat.mesohair.desc': 'Injection of an active substance cocktail into the scalp to strengthen hair follicles and stimulate new growth.',
    'treat.exosomes.title': 'Scalp Exosome Treatments',
    'treat.exosomes.desc': 'Innovative technology using biological vesicles to renew scalp cells and stimulate hair follicle activity.',
    'treat.hairloss.title': 'Hair Loss Treatment',
    'treat.hairloss.desc': 'Diagnosis-based protocols to stop hair loss, strengthen existing hair and stimulate new growth.',
    // ABOUT STRIP
    'about.tag': 'About the Center',
    'about.h2': 'Our Medical Approach',
    'about.sub': 'Royal-Med Israel was founded with the goal of leading a new field in medical aesthetics – based on bioregeneration processes rather than temporary solutions.',
    'about.p1.title': 'Medical Precision',
    'about.p1.desc': 'Every treatment is performed according to defined medical protocols based on clinical evidence.',
    'about.p2.title': 'Personalized Care',
    'about.p2.desc': 'Every patient undergoes a professional diagnosis, and a unique treatment plan is built accordingly.',
    'about.p3.title': 'Long-Term Results',
    'about.p3.desc': 'Treatments are designed for gradual, controlled improvement with results that last over time.',
    'about.btn': 'Read More About the Center →',
    // PROGRAMS
    'prog.tag': 'Special Programs',
    'prog.h2': 'Combined Treatment Programs',
    'prog.sub': 'Comprehensive protocols combining multiple treatments into one personalized program',
    'prog.1.num': 'Program 01',
    'prog.1.title': 'Full Anti-Aging',
    'prog.1.desc': 'A comprehensive program to delay skin aging processes using advanced technologies.',
    'prog.2.num': 'Program 02',
    'prog.2.title': 'Skin Rehabilitation',
    'prog.2.desc': 'Protocol for rehabilitating damaged, dry, or post-medical-treatment skin.',
    'prog.3.num': 'Program 03',
    'prog.3.title': 'Post Weight Loss',
    'prog.3.desc': 'A dedicated program for skin and body treatment after significant weight loss.',
    'prog.4.num': 'Program 04',
    'prog.4.title': 'Custom Diagnosis Plan',
    'prog.4.desc': 'A plan fully customized according to your personal medical diagnosis results.',
    // CTA BAND
    'cta.h2': 'Ready to Begin Your Treatment Journey?',
    'cta.sub': 'Contact us for an initial consultation and professional diagnosis at no cost',
    'cta.btn': 'Book Consultation on WhatsApp',
    // REVIEWS
    'reviews.tag': 'Reviews',
    'reviews.h2': 'What Our Patients Say',
    'reviews.gnote': 'Based on real reviews',
    'review.1.text': '"I received the most professional and personal service. The staff explained every step, and the treatment results exceeded my expectations. I feel a real change in my skin."',
    'review.1.name': 'Michal L.',
    'review.1.date': '2 weeks ago',
    'review.2.text': '"After trying other places, here I felt they spoke to me as a patient, not a customer. The diagnosis was thorough and the treatment plan was truly personalized."',
    'review.2.name': 'Yossi A.',
    'review.2.date': '1 month ago',
    'review.3.text': '"I came for hair treatments after heavy hair loss. After the series I saw significant improvement. The professionalism and warmth of the staff surprised me positively."',
    'review.3.name': 'Rachel B.',
    'review.3.date': '3 weeks ago',
    // SIDEBAR
    'sidebar.consult.title': 'Book Consultation',
    'sidebar.consult.sub': 'Talk to us before you decide',
    // FOOTER
    'footer.tagline': 'Advanced medical center specializing in bioregeneration-based aesthetic treatments. Operating under high medical standards with personalized care.',
    'footer.face': 'Facial Treatments',
    'footer.hairbody': 'Hair & Body Treatments',
    'footer.quick': 'Quick Navigation',
    'footer.links': 'Links',
    'footer.home': 'Home',
    'footer.about': 'About the Center',
    'footer.programs': 'Combined Programs',
    'footer.faq': 'FAQ',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.accessibility': 'Accessibility',
    'footer.copy': '© 2025 Royal-Med Israel. All rights reserved.',
    'footer.disclaimer': 'This website is for informational purposes only and does not constitute medical advice.',
    'lang.label': 'Language',
    'lang.abbr': 'EN',
  },

  ar: {
    dir: 'rtl',
    lang: 'ar',
    // NAV
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.face': 'علاجات الوجه',
    'nav.hair': 'علاجات الشعر',
    'nav.body': 'علاجات الجسم',
    'nav.programs': 'البرامج المشتركة',
    'nav.faq': 'أسئلة شائعة',
    'nav.contact': 'اتصل بنا',
    'nav.face.bioregeneration': 'التجديد البيولوجي',
    'nav.face.peeling': 'التقشير الطبي',
    'nav.face.mesotherapy': 'ميزوثيرابي للوجه',
    'nav.face.pigmentation': 'علاج التصبغات',
    'nav.face.acne': 'علاج حب الشباب',
    'nav.hair.mesotherapy': 'ميزوثيرابي للشعر',
    'nav.hair.exosomes': 'علاج الإكسوسومات',
    'nav.hair.loss': 'علاج تساقط الشعر',
    'nav.hair.rehab': 'إعادة تأهيل الشعر',
    'nav.body.ems': 'نحت الجسم – EMS',
    'nav.body.tightening': 'شد الجلد',
    'nav.body.cellulite': 'علاج السيلوليت',
    'nav.body.stretch': 'علاج علامات التمدد',
    // BUTTONS
    'btn.booking': 'احجز استشارة مجانية',
    'btn.contact': 'نموذج الاتصال',
    'btn.whatsapp': 'واتساب',
    'btn.wa.float': 'تواصل معنا',
    'btn.consult': 'حجز استشارة',
    'btn.details': 'تفاصيل البروتوكول ←',
    'btn.more': 'معرفة المزيد',
    // HERO
    'hero.tag': 'مركز طبي معتمد',
    'hero.title.pre': 'مركز طبي متقدم للتجميل القائم على',
    'hero.title.hl': 'التجديد البيولوجي',
    'hero.desc': 'يعمل رويال-ميد إسرائيل وفق معايير طبية عالية، باستخدام أحدث التقنيات في العالم وبروتوكولات علاجية مبنية على البيانات والتشخيص المهني.',
    'hero.cta1': 'احجز استشارة',
    'hero.cta2': 'معرفة المزيد',
    // HMO ROLLER
    'hmo.headline': 'الخيار الطبيعي لمرضى صناديق الصحة للعلاجات التجميلية',
    'hmo.title': 'نعالج مرضى من جميع صناديق الصحة',
    // TRUST BAR
    'trust.1': 'معايير طبية عالية',
    'trust.2': 'تقنيات متطورة',
    'trust.3': 'تخصيص لكل مريض',
    'trust.4': 'تشخيص احترافي قبل العلاج',
    // CATEGORIES OVERVIEW
    'cat.tag': 'مجالات العلاج لدينا',
    'cat.h2': 'ماذا نقدم؟',
    'cat.sub': 'مجموعة متنوعة من العلاجات الطبية المتقدمة المخصصة لاحتياجات كل مريض',
    'cat.face.title': 'علاجات الوجه التجميلية',
    'cat.face.desc': 'Morpheus 8، التجديد البيولوجي، التقشير الطبي، الميزوثيرابي، التصبغات وحب الشباب',
    'cat.face.count': '6 أنواع علاج ←',
    'cat.hair.title': 'علاجات الشعر',
    'cat.hair.desc': 'الميزوثيرابي، إكسوسومات فروة الرأس، علاج تساقط الشعر وبرامج إعادة التأهيل',
    'cat.hair.count': '4 أنواع علاج ←',
    'cat.body.title': 'علاجات الجسم',
    'cat.body.desc': 'نحت الجسم EMS، شد الجلد، علاج السيلوليت وعلامات التمدد',
    'cat.body.count': '4 أنواع علاج ←',
    // SECTION HEADERS
    'sec.face.tag': 'وجه',
    'sec.face.h2': 'علاجات الوجه التجميلية',
    'sec.hair.tag': 'شعر',
    'sec.hair.h2': 'علاجات الشعر',
    'sec.viewall': 'جميع العلاجات ←',
    // TREATMENT CARD LABELS
    'card.cat.face': 'وجه',
    'card.cat.hair': 'شعر',
    'card.link': 'مزيد من التفاصيل',
    // TREATMENT CARDS
    'treat.morpheus8.desc': 'تقنية RF Microneedling المتقدمة التي تجمع بين الإبر الدقيقة وطاقة الراديو تردد لتحسين ملمس الجلد وملامح الوجه.',
    'treat.bioregeneration.title': 'التجديد البيولوجي',
    'treat.bioregeneration.desc': 'استخدام مواد بيولوجية نشطة لتجديد نشاط خلايا الجلد بشكل طبيعي ومنضبط لنتائج عميقة وطويلة الأمد.',
    'treat.peeling.title': 'التقشير الطبي',
    'treat.peeling.desc': 'تقشير كيميائي طبي منضبط لتجديد الطبقات العلوية للجلد وتحسين الملمس وتوحيد اللون.',
    'treat.mesohair.title': 'ميزوثيرابي للشعر',
    'treat.mesohair.desc': 'حقن كوكتيل من المواد الفعالة في فروة الرأس لتقوية بصيلات الشعر وتحفيز النمو الجديد.',
    'treat.exosomes.title': 'علاج الإكسوسومات لفروة الرأس',
    'treat.exosomes.desc': 'تقنية مبتكرة تستخدم الحويصلات البيولوجية لتجديد خلايا فروة الرأس وتحفيز نشاط بصيلات الشعر.',
    'treat.hairloss.title': 'علاج تساقط الشعر',
    'treat.hairloss.desc': 'بروتوكولات تشخيصية لإيقاف تساقط الشعر وتقوية الشعر الموجود وتحفيز النمو الجديد.',
    // ABOUT STRIP
    'about.tag': 'عن المركز',
    'about.h2': 'نهجنا الطبي',
    'about.sub': 'تأسس رويال-ميد إسرائيل بهدف قيادة مجال جديد في التجميل الطبي – يقوم على عمليات التجديد البيولوجي لا على الحلول المؤقتة.',
    'about.p1.title': 'الدقة الطبية',
    'about.p1.desc': 'كل علاج يُجرى وفق بروتوكولات طبية محددة مبنية على الأدلة السريرية.',
    'about.p2.title': 'التخصيص الشخصي',
    'about.p2.desc': 'يخضع كل مريض لتشخيص مهني، وعلى أساسه تُبنى خطة علاج فريدة.',
    'about.p3.title': 'نتائج طويلة الأمد',
    'about.p3.desc': 'العلاجات مصممة لتحسين تدريجي ومنضبط مع نتائج تدوم طويلاً.',
    'about.btn': 'اقرأ المزيد عن المركز ←',
    // PROGRAMS
    'prog.tag': 'برامج مميزة',
    'prog.h2': 'برامج العلاج المشتركة',
    'prog.sub': 'بروتوكولات شاملة تجمع بين علاجات متعددة في برنامج واحد مخصص',
    'prog.1.num': 'البرنامج 01',
    'prog.1.title': 'مكافحة الشيخوخة الكاملة',
    'prog.1.desc': 'برنامج شامل لتأخير عمليات شيخوخة الجلد باستخدام التقنيات المتقدمة.',
    'prog.2.num': 'البرنامج 02',
    'prog.2.title': 'إعادة تأهيل الجلد',
    'prog.2.desc': 'بروتوكول لإعادة تأهيل الجلد التالف أو الجاف أو بعد العلاجات الطبية.',
    'prog.3.num': 'البرنامج 03',
    'prog.3.title': 'بعد فقدان الوزن',
    'prog.3.desc': 'برنامج مخصص لعلاج الجلد والجسم بعد فقدان الوزن الكبير.',
    'prog.4.num': 'البرنامج 04',
    'prog.4.title': 'تخصيص حسب التشخيص',
    'prog.4.desc': 'برنامج مخصص بالكامل وفق نتائج تشخيصك الطبي الشخصي.',
    // CTA BAND
    'cta.h2': 'هل أنت مستعد لبدء رحلة العلاج؟',
    'cta.sub': 'تواصل معنا للحصول على استشارة أولية وتشخيص مهني مجاناً',
    'cta.btn': 'احجز استشارة على واتساب',
    // REVIEWS
    'reviews.tag': 'آراء المرضى',
    'reviews.h2': 'ماذا يقول مرضانا',
    'reviews.gnote': 'بناءً على تقييمات حقيقية',
    'review.1.text': '"حصلت على خدمة مهنية وشخصية للغاية. شرح لي الفريق كل خطوة، ونتائج العلاج فاقت توقعاتي. أشعر بتغيير حقيقي في بشرتي."',
    'review.1.name': 'ميكال ل.',
    'review.1.date': 'منذ أسبوعين',
    'review.2.text': '"بعد تجربة أماكن أخرى، شعرت هنا أنهم يتحدثون معي كمريض وليس كعميل. كان التشخيص مفصلاً وخطة العلاج مخصصة حقاً."',
    'review.2.name': 'يوسي أ.',
    'review.2.date': 'منذ شهر',
    'review.3.text': '"جئت لعلاجات الشعر بعد تساقط شديد. بعد السلسلة رأيت تحسناً ملحوظاً. أذهلني احترافية الفريق وإنسانيتهم."',
    'review.3.name': 'راشيل ب.',
    'review.3.date': 'منذ 3 أسابيع',
    // SIDEBAR
    'sidebar.consult.title': 'حجز استشارة',
    'sidebar.consult.sub': 'تحدث معنا قبل أن تقرر',
    // FOOTER
    'footer.tagline': 'مركز طبي متقدم متخصص في علاجات التجميل القائمة على التجديد البيولوجي.',
    'footer.face': 'علاجات الوجه',
    'footer.hairbody': 'علاجات الشعر والجسم',
    'footer.quick': 'تنقل سريع',
    'footer.links': 'روابط',
    'footer.home': 'الرئيسية',
    'footer.about': 'عن المركز',
    'footer.programs': 'البرامج المشتركة',
    'footer.faq': 'أسئلة شائعة',
    'footer.contact': 'اتصل بنا',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الاستخدام',
    'footer.accessibility': 'إمكانية الوصول',
    'footer.copy': '© 2025 رويال-ميد إسرائيل. جميع الحقوق محفوظة.',
    'footer.disclaimer': 'هذا الموقع للأغراض المعلوماتية فقط ولا يشكل نصيحة طبية.',
    'lang.label': 'اللغة',
    'lang.abbr': 'عر',
  },

  ru: {
    dir: 'ltr',
    lang: 'ru',
    // NAV
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.face': 'Процедуры для лица',
    'nav.hair': 'Процедуры для волос',
    'nav.body': 'Процедуры для тела',
    'nav.programs': 'Комплексные программы',
    'nav.faq': 'Вопросы и ответы',
    'nav.contact': 'Контакты',
    'nav.face.bioregeneration': 'Биорегенерация',
    'nav.face.peeling': 'Медицинский пилинг',
    'nav.face.mesotherapy': 'Мезотерапия лица',
    'nav.face.pigmentation': 'Лечение пигментации',
    'nav.face.acne': 'Лечение акне',
    'nav.hair.mesotherapy': 'Мезотерапия волос',
    'nav.hair.exosomes': 'Экзосомная терапия',
    'nav.hair.loss': 'Лечение выпадения волос',
    'nav.hair.rehab': 'Реабилитация волос',
    'nav.body.ems': 'Коррекция фигуры – EMS',
    'nav.body.tightening': 'Подтяжка кожи тела',
    'nav.body.cellulite': 'Лечение целлюлита',
    'nav.body.stretch': 'Лечение растяжек',
    // BUTTONS
    'btn.booking': 'Записаться на консультацию',
    'btn.contact': 'Форма обратной связи',
    'btn.whatsapp': 'WhatsApp',
    'btn.wa.float': 'Связаться с нами',
    'btn.consult': 'Записаться',
    'btn.details': 'Подробнее о протоколе →',
    'btn.more': 'Узнать больше',
    // HERO
    'hero.tag': 'Сертифицированный медицинский центр',
    'hero.title.pre': 'Передовой медицинский центр эстетики на основе',
    'hero.title.hl': 'Биорегенерации',
    'hero.desc': 'Royal-Med Israel работает по высоким медицинским стандартам, используя передовые мировые технологии и протоколы лечения на основе данных и профессиональной диагностики.',
    'hero.cta1': 'Записаться на консультацию',
    'hero.cta2': 'Узнать больше',
    // HMO ROLLER
    'hmo.headline': 'Естественный выбор пациентов больничных касс для эстетических процедур',
    'hmo.title': 'Работаем с пациентами всех больничных касс',
    // TRUST BAR
    'trust.1': 'Высокие медицинские стандарты',
    'trust.2': 'Передовые технологии',
    'trust.3': 'Индивидуальный подход',
    'trust.4': 'Профессиональная диагностика перед процедурой',
    // CATEGORIES OVERVIEW
    'cat.tag': 'Наши направления',
    'cat.h2': 'Что мы предлагаем?',
    'cat.sub': 'Широкий спектр передовых медицинских процедур с индивидуальным подходом к каждому пациенту',
    'cat.face.title': 'Эстетические процедуры для лица',
    'cat.face.desc': 'Morpheus 8, биорегенерация, медицинский пилинг, мезотерапия, пигментация и акне',
    'cat.face.count': '6 видов процедур →',
    'cat.hair.title': 'Процедуры для волос',
    'cat.hair.desc': 'Мезотерапия, экзосомы для кожи головы, лечение выпадения и реабилитационные программы',
    'cat.hair.count': '4 вида процедур →',
    'cat.body.title': 'Процедуры для тела',
    'cat.body.desc': 'Коррекция фигуры EMS, подтяжка кожи, лечение целлюлита и растяжек',
    'cat.body.count': '4 вида процедур →',
    // SECTION HEADERS
    'sec.face.tag': 'Лицо',
    'sec.face.h2': 'Эстетические процедуры для лица',
    'sec.hair.tag': 'Волосы',
    'sec.hair.h2': 'Процедуры для волос',
    'sec.viewall': 'Все процедуры →',
    // TREATMENT CARD LABELS
    'card.cat.face': 'Лицо',
    'card.cat.hair': 'Волосы',
    'card.link': 'Подробнее',
    // TREATMENT CARDS
    'treat.morpheus8.desc': 'Передовая технология RF-микронидлинга, сочетающая тонкие иглы с радиочастотной энергией для улучшения текстуры кожи и контуров лица.',
    'treat.bioregeneration.title': 'Биорегенерация',
    'treat.bioregeneration.desc': 'Использование активных биологических веществ для естественного и контролируемого обновления клеток кожи с глубокими и долгосрочными результатами.',
    'treat.peeling.title': 'Медицинский пилинг',
    'treat.peeling.desc': 'Контролируемый химический пилинг медицинского уровня для обновления верхних слоёв кожи, улучшения текстуры и выравнивания тона.',
    'treat.mesohair.title': 'Мезотерапия волос',
    'treat.mesohair.desc': 'Инъекции коктейля активных веществ в кожу головы для укрепления волосяных фолликулов и стимуляции роста волос.',
    'treat.exosomes.title': 'Экзосомная терапия кожи головы',
    'treat.exosomes.desc': 'Инновационная технология с использованием биологических везикул для обновления клеток кожи головы и активации волосяных фолликулов.',
    'treat.hairloss.title': 'Лечение выпадения волос',
    'treat.hairloss.desc': 'Диагностические протоколы для остановки выпадения волос, укрепления существующих волос и стимуляции нового роста.',
    // ABOUT STRIP
    'about.tag': 'О центре',
    'about.h2': 'Наш медицинский подход',
    'about.sub': 'Royal-Med Israel был основан с целью продвижения нового направления в медицинской эстетике – основанного на процессах биорегенерации, а не на временных решениях.',
    'about.p1.title': 'Медицинская точность',
    'about.p1.desc': 'Каждая процедура выполняется по чётко определённым медицинским протоколам, основанным на клинических данных.',
    'about.p2.title': 'Индивидуальный подход',
    'about.p2.desc': 'Каждый пациент проходит профессиональную диагностику, на основе которой составляется уникальный план лечения.',
    'about.p3.title': 'Долгосрочные результаты',
    'about.p3.desc': 'Процедуры направлены на постепенное и контролируемое улучшение с результатами, сохраняющимися в течение длительного времени.',
    'about.btn': 'Читать подробнее о центре →',
    // PROGRAMS
    'prog.tag': 'Специальные программы',
    'prog.h2': 'Комплексные программы лечения',
    'prog.sub': 'Комплексные протоколы, объединяющие несколько процедур в одну персонализированную программу',
    'prog.1.num': 'Программа 01',
    'prog.1.title': 'Полный антивозрастной комплекс',
    'prog.1.desc': 'Комплексная программа для замедления процессов старения кожи с применением передовых технологий.',
    'prog.2.num': 'Программа 02',
    'prog.2.title': 'Реабилитация кожи',
    'prog.2.desc': 'Протокол для восстановления повреждённой, сухой кожи или после медицинских процедур.',
    'prog.3.num': 'Программа 03',
    'prog.3.title': 'После похудения',
    'prog.3.desc': 'Специализированная программа для лечения кожи и тела после значительной потери веса.',
    'prog.4.num': 'Программа 04',
    'prog.4.title': 'Индивидуальный план',
    'prog.4.desc': 'Программа, полностью составленная по результатам вашей личной медицинской диагностики.',
    // CTA BAND
    'cta.h2': 'Готовы начать путь к преображению?',
    'cta.sub': 'Свяжитесь с нами для первичной консультации и профессиональной диагностики бесплатно',
    'cta.btn': 'Записаться в WhatsApp',
    // REVIEWS
    'reviews.tag': 'Отзывы',
    'reviews.h2': 'Что говорят наши пациенты',
    'reviews.gnote': 'Основано на реальных отзывах',
    'review.1.text': '"Я получила максимально профессиональный и личный сервис. Персонал объяснил каждый шаг, и результаты лечения превзошли мои ожидания. Я чувствую реальное изменение в коже."',
    'review.1.name': 'Михаль Л.',
    'review.1.date': '2 недели назад',
    'review.2.text': '"После других мест здесь я почувствовал, что со мной говорят как с пациентом, а не клиентом. Диагностика была подробной, а план лечения по-настоящему индивидуальным."',
    'review.2.name': 'Йоси А.',
    'review.2.date': '1 месяц назад',
    'review.3.text': '"Я пришла на лечение волос после сильного выпадения. После курса увидела значительное улучшение. Профессионализм и человечность персонала приятно удивили."',
    'review.3.name': 'Рахель Б.',
    'review.3.date': '3 недели назад',
    // SIDEBAR
    'sidebar.consult.title': 'Записаться на консультацию',
    'sidebar.consult.sub': 'Свяжитесь с нами перед принятием решения',
    // FOOTER
    'footer.tagline': 'Передовой медицинский центр, специализирующийся на эстетических процедурах на основе биорегенерации.',
    'footer.face': 'Процедуры для лица',
    'footer.hairbody': 'Волосы и тело',
    'footer.quick': 'Быстрая навигация',
    'footer.links': 'Ссылки',
    'footer.home': 'Главная',
    'footer.about': 'О центре',
    'footer.programs': 'Комплексные программы',
    'footer.faq': 'Вопросы и ответы',
    'footer.contact': 'Контакты',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    'footer.accessibility': 'Доступность',
    'footer.copy': '© 2025 Royal-Med Israel. Все права защищены.',
    'footer.disclaimer': 'Сайт предназначен только для информационных целей и не является медицинской консультацией.',
    'lang.label': 'Язык',
    'lang.abbr': 'РУ',
  }
};

// ── Core i18n engine ──────────────────────────────────────────────────────────
const I18N = {
  current: localStorage.getItem('rm-lang') || 'he',

  get(key) {
    return TRANSLATIONS[this.current]?.[key] || TRANSLATIONS['he'][key] || key;
  },

  setLang(lang) {
    if (!TRANSLATIONS[lang]) return;
    this.current = lang;
    localStorage.setItem('rm-lang', lang);
    this.apply();
  },

  apply() {
    const t = TRANSLATIONS[this.current];
    // Direction
    document.documentElement.lang = t.lang;
    document.documentElement.dir  = t.dir;

    // Translate all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = t[key] || TRANSLATIONS['he'][key];
      if (val) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // Mark active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.current);
    });
  }
};

// When loaded dynamically (injected by components.js), DOMContentLoaded has
// already fired — run directly. Components have already been injected.
(function initI18N() {
  I18N.apply();

  // Attach click handlers to language buttons (nav + mobile)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      I18N.setLang(btn.dataset.lang);
      // Close mobile menu after language change
      const mobileMenu = document.getElementById('mobileMenu');
      const hamburger  = document.getElementById('hamburger');
      if (mobileMenu) mobileMenu.classList.remove('open');
      if (hamburger)  hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();
