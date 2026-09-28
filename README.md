* {
  box-sizing: border-box;
}

:root {
  --bg: #050505;
  --panel: #101010;
  --panel-soft: #171717;
  --gold-1: #f7d972;
  --gold-2: #d89c1a;
  --gold-3: #8a5d00;
  --white: #ffffff;
  --muted: #d1d1d1;
  --red: #ff2b2b;
  --card-border: rgba(255, 194, 64, 0.35);
  --shadow: rgba(0, 0, 0, 0.35);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: var(--bg);
  color: var(--white);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

.page-shell {
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  padding: 16px 16px 80px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  padding: 12px 0;
}

.brand-wrap {
  display: flex;
  align-items: center;
}

.brand-logo {
  width: 220px;
  max-width: 100%;
  height: auto;
}

.brand-logo.big {
  width: 320px;
  margin: 0 auto 18px auto;
}

.topbar-actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.section-card {
  background: linear-gradient(180deg, rgba(21,21,21,0.96), rgba(12,12,12,0.96));
  border: 1px solid var(--card-border);
  border-radius: 22px;
  box-shadow: 0 20px 35px var(--shadow);
}

.public-page {
  display: grid;
  gap: 18px;
}

.hero {
  min-height: 420px;
  padding: 24px;
  display: flex;
  align-items: flex-end;
  background-size: cover;
  background-position: center;
  border-radius: 28px;
}

.hero-content {
  max-width: 760px;
}

.eyebrow {
  margin: 0 0 10px;
  color: var(--gold-1);
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.hero h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.hero-tagline {
  margin: 12px 0 24px;
  color: var(--white);
  font-size: 1.06rem;
}

.hero-actions,
.package-actions,
.form-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 14px;
  padding: 14px 22px;
  font-weight: 700;
  transition: 0.2s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button.primary {
  background: linear-gradient(180deg, var(--gold-1), var(--gold-2));
  color: #120d03;
}

.button.accent {
  background: linear-gradient(180deg, #f84d3b, #b22e21);
  color: var(--white);
}

.button.secondary,
.button.tertiary,
.button.ghost {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: var(--white);
}

.button.small {
  padding: 10px 14px;
  font-size: 0.85rem;
}

.bottom-nav {
  position: sticky;
  bottom: 0;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  background: rgba(15,15,15,0.96);
  border: 1px solid var(--card-border);
  border-radius: 18px;
  overflow: hidden;
  margin-top: 10px;
}

.bottom-nav a {
  padding: 14px 10px;
  text-align: center;
  color: var(--white);
  font-weight: 700;
}

.bottom-nav a.active {
  background: linear-gradient(180deg, rgba(247, 217, 114, 0.2), rgba(216,156,26,0.12));
  color: var(--gold-1);
}

.info-block,
.gallery-block,
.package-page-header,
.help-page .section-card,
.register-card,
.detail-grid,
.admin-panel,
.success-box {
  padding: 24px;
}

.about-grid,
.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.meta-box {
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  padding: 18px;
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 12px 0 0;
  display: grid;
  gap: 10px;
}

.check-list li::before {
  content: '✓';
  margin-right: 8px;
  color: var(--gold-1);
  font-weight: 700;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.gallery-grid img {
  border-radius: 18px;
  height: 220px;
  object-fit: cover;
}

.section-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 22px 0 14px;
}

.package-grid,
.package-list {
  display: grid;
  gap: 18px;
}

.package-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.package-card,
.package-detail-card,
.package-editor,
.agent-item {
  background: rgba(18,18,18,0.96);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  overflow: hidden;
}

.package-card img,
.package-detail-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.package-body,
.detail-copy {
  padding: 18px;
}

.package-body h3,
.detail-copy h2 {
  margin: 8px 0 12px;
}

.status-badge {
  display: inline-flex;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(247,217,114,0.12);
  border: 1px solid rgba(247,217,114,0.22);
  color: var(--gold-1);
  font-size: 0.75rem;
  font-weight: 700;
}

.content-page {
  display: grid;
  gap: 18px;
}

.package-detail-page {
  display: grid;
  grid-template-columns: 1.1fr 1.4fr;
  gap: 22px;
  padding: 18px;
}

.detail-brochure {
  border-radius: 18px;
  min-height: 360px;
  object-fit: cover;
}

.detail-main h1 {
  margin: 12px 0;
  font-size: clamp(2rem, 3vw, 3rem);
}

.detail-metrics {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin: 18px 0;
  color: var(--muted);
}

.form-page {
  padding-bottom: 50px;
}

.register-card {
  max-width: 960px;
  margin: 0 auto;
  padding: 28px;
}

.wizard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.step-indicator {
  display: flex;
  gap: 8px;
}

.step-indicator span {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.08);
  font-weight: 700;
}

.step-indicator span.active {
  background: linear-gradient(180deg, var(--gold-1), var(--gold-2));
  color: #120d03;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

label {
  display: grid;
  gap: 8px;
  color: var(--muted);
  font-weight: 700;
}

label span {
  color: var(--red);
}

input,
textarea,
select {
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.16);
  background: rgba(255,255,255,0.03);
  color: var(--white);
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.full-width {
  grid-column: 1 / -1;
}

.helper-note {
  color: var(--muted);
  margin: 0;
}

.agent-box,
.summary-card {
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  padding: 18px;
  background: rgba(255,255,255,0.015);
}

.agent-option-row {
  display: grid;
  gap: 12px;
  margin-top: 12px;
}

.agent-option-row label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
}

.agent-option-row input {
  width: auto;
}

.agent-auto-fill {
  background: rgba(247,217,114,0.08);
  border: 1px solid rgba(247,217,114,0.2);
  border-radius: 12px;
  padding: 14px 16px;
  color: var(--white);
}

.summary-card ul {
  display: grid;
  gap: 10px;
  padding-left: 20px;
}

.consent-box {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 18px;
}

.consent-box input {
  width: auto;
}

.success-box {
  background: linear-gradient(180deg, rgba(17, 26, 15, 0.96), rgba(11, 16, 10, 0.96));
  border: 1px solid rgba(110, 212, 157, 0.35);
}

.success-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 18px;
  margin: 14px 0 18px;
}

.auth-page {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.login-box {
  width: min(100%, 440px);
  padding: 28px 22px;
}

.auth-form {
  display: grid;
  gap: 16px;
}

.admin-shell {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  min-height: 100vh;
}

.admin-sidebar {
  padding: 22px 18px;
  background: rgba(14,14,14,0.98);
  border-right: 1px solid var(--card-border);
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.admin-brand {
  display: grid;
  gap: 10px;
  justify-items: center;
}

.admin-sidebar nav {
  display: grid;
  gap: 10px;
}

.admin-sidebar nav button {
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.02);
  color: var(--white);
  padding: 12px 14px;
  border-radius: 12px;
  text-align: left;
  font-weight: 700;
}

.admin-sidebar nav button.active {
  background: linear-gradient(180deg, rgba(247,217,114,0.14), rgba(216,156,26,0.12));
  border-color: rgba(247,217,114,0.4);
  color: var(--gold-1);
}

.logout {
  margin-top: auto;
}

.admin-main {
  padding: 22px;
}

.admin-panel {
  display: grid;
  gap: 20px;
}

.table-wrap {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 960px;
}

th,
td {
  padding: 12px 10px;
  text-align: left;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  vertical-align: top;
}

th {
  color: var(--gold-1);
}

.admin-form-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.package-editor,
.agent-item {
  padding: 18px;
}

.agent-list {
  display: grid;
  gap: 18px;
}

@media (max-width: 900px) {
  .package-grid,
  .gallery-grid,
  .about-grid,
  .detail-grid,
  .success-grid,
  .admin-form-grid,
  .package-detail-page,
  .form-grid {
    grid-template-columns: 1fr;
  }

  .admin-shell {
    grid-template-columns: 1fr;
  }

  .admin-sidebar {
    border-right: 0;
    border-bottom: 1px solid var(--card-border);
  }

  .brand-logo {
    width: 180px;
  }
}

@media (max-width: 560px) {
  .page-shell {
    padding-left: 12px;
    padding-right: 12px;
  }

  .topbar {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }

  .hero {
    min-height: 360px;
    padding: 18px;
  }

  .bottom-nav {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .button {
    width: 100%;
  }

  .hero-actions,
  .package-actions,
  .form-actions {
    flex-direction: column;
  }
}

