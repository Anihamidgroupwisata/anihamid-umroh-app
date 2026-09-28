@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --bg: #f6f7fb;
  --card: #ffffff;
  --primary: #0c5b54;
  --primary-dark: #0d4c47;
  --primary-soft: #dff2ef;
  --accent: #efb648;
  --text: #1d2a33;
  --muted: #5f6f7c;
  --line: #e7ebf1;
  --success: #1b8e5a;
  --danger: #c84b4b;
  --shadow: 0 16px 45px rgba(20, 36, 51, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

img {
  max-width: 100%;
  display: block;
}

.app-shell {
  min-height: 100vh;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.main-header {
  min-height: 520px;
  background-size: cover;
  background-position: center;
  color: white;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 0;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-wrap strong {
  display: block;
  font-size: 1rem;
}

.brand-wrap small {
  display: block;
  opacity: 0.8;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.25);
  font-weight: 700;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
  opacity: 0.92;
}

.hero {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  align-items: center;
  gap: 32px;
  padding: 52px 0 64px;
}

.eyebrow,
.section-kicker {
  display: inline-flex;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  padding: 7px 12px;
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.hero-copy h1 {
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1.06;
  margin: 16px 0 12px;
}

.hero-copy p {
  max-width: 560px;
  font-size: 1.08rem;
  line-height: 1.75;
  opacity: 0.92;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 26px;
}

.primary-btn,
.secondary-btn,
.link-btn,
.login-box button {
  border: none;
  border-radius: 12px;
  padding: 0.92rem 1.4rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.primary-btn,
.login-box button {
  background: var(--accent);
  color: #1b1a18;
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.12);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.link-btn {
  background: var(--primary-soft);
  color: var(--primary-dark);
  padding: 0.7rem 1rem;
}

.primary-btn:hover,
.secondary-btn:hover,
.link-btn:hover,
.login-box button:hover {
  transform: translateY(-1px);
}

.mini-stats {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 0;
  margin: 28px 0 0;
}

.mini-stats li {
  min-width: 120px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  opacity: 0.95;
}

.mini-stats strong {
  font-size: 1.2rem;
}

.hero-card {
  background: rgba(15, 42, 53, 0.62);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 24px;
  padding: 26px;
  box-shadow: var(--shadow);
}

.card-badge {
  display: inline-flex;
  background: rgba(239, 182, 72, 0.2);
  color: #ffd87c;
  padding: 0.38rem 0.7rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
}

.hero-card h3 {
  margin: 18px 0 6px;
  font-size: 1.65rem;
}

.hero-card p {
  margin: 0;
  opacity: 0.8;
}

.price {
  font-size: 2rem;
  font-weight: 800;
  margin: 12px 0 18px;
}

.tiny-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tiny-list span {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  padding: 0.48rem 0.7rem;
  font-size: 0.75rem;
}

.section-block {
  padding: 96px 0 0;
}

.section-header {
  margin-bottom: 24px;
}

.section-header h2 {
  font-size: clamp(2rem, 3vw, 2.8rem);
  margin: 14px 0 0;
}

.package-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.package-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.package-card.selected {
  border-color: rgba(12, 91, 84, 0.45);
  transform: translateY(-2px);
}

.package-card img {
  height: 220px;
  width: 100%;
  object-fit: cover;
}

.card-body {
  padding: 20px 18px 22px;
}

.status-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.package-name {
  font-size: 0.9rem;
  color: var(--muted);
  font-weight: 600;
}

.tag {
  display: inline-flex;
  border-radius: 999px;
  background: var(--primary-soft);
  color: var(--primary-dark);
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.46rem 0.7rem;
}

.card-body h3 {
  margin: 18px 0 10px;
  font-size: 1.4rem;
}

.card-body p {
  min-height: 68px;
  color: var(--muted);
  line-height: 1.7;
}

.meta-row,
.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  margin-top: 14px;
}

.price-row strong {
  color: var(--text);
  font-size: 1.25rem;
}

.form-layout {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 32px;
  align-items: start;
}

.form-copy h2 {
  font-size: clamp(2rem, 3vw, 2.8rem);
  margin: 14px 0 18px;
}

.form-copy p {
  color: var(--muted);
  line-height: 1.75;
}

.info-list {
  display: grid;
  gap: 14px;
  margin-top: 24px;
}

.info-list div {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 16px;
  border-radius: 16px;
  background: var(--card);
  border: 1px solid var(--line);
}

.info-list strong {
  font-size: 0.9rem;
  color: var(--primary-dark);
}

.register-form {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 24px;
  box-shadow: var(--shadow);
}

.register-form h3 {
  margin-top: 0;
  margin-bottom: 18px;
  font-size: 1.5rem;
}

.register-form label,
.login-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  color: var(--text);
  font-weight: 600;
}

.register-form input,
.register-form select,
.register-form textarea,
.login-box input,
.login-box select,
.admin-panel select {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: #fff;
  padding: 0.9rem 0.95rem;
  color: var(--text);
}

.split-two {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.selected-summary {
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: var(--primary-soft);
  border-radius: 14px;
  padding: 14px 16px;
  margin-bottom: 10px;
  color: var(--primary-dark);
}

.message-box {
  background: rgba(27, 142, 90, 0.08);
  color: var(--success);
  border: 1px solid rgba(27, 142, 90, 0.2);
  border-radius: 12px;
  padding: 0.8rem 1rem;
  margin-bottom: 12px;
  font-weight: 600;
}

.full-width {
  width: 100%;
}

.about-block {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 28px;
  align-items: center;
}

.about-text h2 {
  font-size: clamp(2rem, 3vw, 2.8rem);
  margin: 14px 0 18px;
}

.about-text p,
.about-text li {
  color: var(--muted);
  line-height: 1.8;
}

.about-text ul {
  margin: 18px 0 0;
  padding-left: 18px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.gallery-grid img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: var(--shadow);
}

.admin-section {
  padding-bottom: 90px;
}

.two-col {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 16px;
}

.login-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 12px;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: var(--shadow);
}

.login-box input {
  min-width: 160px;
}

.admin-panel {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: var(--shadow);
  overflow: hidden;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
  border-bottom: 1px solid var(--line);
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: left;
  padding: 16px 18px;
  border-bottom: 1px solid var(--line);
  vertical-align: middle;
}

th {
  background: #f7f9fb;
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--muted);
}

.site-footer {
  background: #0e1d2a;
  color: white;
  padding: 28px 0 42px;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.footer-inner p {
  margin: 8px 0 0;
  opacity: 0.82;
}

.loading {
  display: grid;
  place-items: center;
  min-height: 100vh;
  font-size: 1.2rem;
  color: var(--primary-dark);
}

@media (max-width: 900px) {
  .hero,
  .form-layout,
  .about-block,
  .package-grid {
    grid-template-columns: 1fr;
  }

  .nav,
  .two-col,
  .footer-inner,
  .login-box {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    flex-wrap: wrap;
    gap: 12px;
  }

  .split-two {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .main-header {
    min-height: auto;
  }

  .hero {
    padding-top: 24px;
  }

  .cta-row {
    flex-direction: column;
    align-items: stretch;
  }

  .primary-btn,
  .secondary-btn,
  .link-btn {
    width: 100%;
    text-align: center;
  }
}
