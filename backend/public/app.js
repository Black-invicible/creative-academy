* {
  box-sizing: border-box;
}

:root {
  --bg: #f5f1e8;
  --panel: #ffffff;
  --panel-soft: #faf6ef;
  --text: #1d1b1a;
  --muted: #5b5957;
  --line: #e5ddd1;
  --accent: #c45c4a;
  --dark: #111111;
  --success: #255b3e;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: 'Libre Baskerville', serif;
  background: var(--bg);
  color: var(--text);
}

body {
  min-height: 100vh;
}

button,
input,
textarea,
select {
  font: inherit;
}

.app-shell {
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
}

.sidebar {
  background: var(--dark);
  color: #fff;
  padding: 30px 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}

.brand {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  letter-spacing: 0.1em;
}

.nav-button {
  width: 100%;
  margin-bottom: 12px;
  padding: 14px 16px;
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  font-family: 'Space Mono', monospace;
}

.nav-button.active {
  background: var(--accent);
  border-color: transparent;
}

.workspace {
  padding: 30px 28px 60px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.eyebrow {
  margin: 0 0 8px;
  font-family: 'Space Mono', monospace;
  color: var(--accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.7rem;
}

.topbar h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
}

.topbar-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.primary-btn,
.secondary-btn {
  border: none;
  border-radius: 10px;
  padding: 12px 18px;
  cursor: pointer;
  font-family: 'Space Mono', monospace;
  transition: 0.2s ease;
}

.primary-btn {
  background: var(--dark);
  color: white;
}

.primary-btn:hover {
  background: var(--accent);
}

.secondary-btn {
  background: #fff;
  color: var(--dark);
  border: 1px solid var(--line);
}

.secondary-btn:hover {
  background: var(--panel-soft);
}

.story-form,
.editor-panel,
.saved-stories {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.04);
}

.story-form {
  margin-bottom: 20px;
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
  margin-bottom: 18px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: 'Space Mono', monospace;
  font-size: 0.76rem;
  letter-spacing: 0.04em;
  color: var(--muted);
}

input,
textarea,
select {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 12px 14px;
  background: white;
  color: var(--text);
}

textarea {
  resize: vertical;
  min-height: 96px;
}

.editor-panel {
  margin-bottom: 20px;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
}

.toolbar button {
  padding: 10px 12px;
  border: 1px solid var(--line);
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
}

.toolbar button.warn {
  background: #fff4f2;
  border-color: #f0c9c1;
  color: var(--accent);
}

.story-editor {
  min-height: 500px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 24px;
  line-height: 1.8;
  font-size: 1.08rem;
  outline: none;
}

.story-editor h2 {
  margin-top: 0;
}

.story-insights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin: 0 0 20px;
}

.stat-box {
  background: var(--panel-soft);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.stat-box span {
  color: var(--muted);
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
}

.saved-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.saved-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.story-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.story-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 16px;
}

.story-card h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 1.3rem;
}

.story-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.story-meta span {
  font-family: 'Space Mono', monospace;
  font-size: 0.68rem;
  background: #f7f2ea;
  border-radius: 999px;
  padding: 6px 8px;
  color: var(--muted);
}

.story-card p {
  margin: 0;
  line-height: 1.6;
  color: var(--muted);
}

.story-card button {
  margin-top: 14px;
  border: none;
  background: var(--dark);
  color: #fff;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
}

@media (max-width: 860px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    padding: 18px 14px;
  }

  .brand {
    margin-bottom: 18px;
  }

  .sidebar nav {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .nav-button {
    width: auto;
    flex: 1 1 120px;
  }
}

@media (max-width: 560px) {
  .workspace {
    padding: 20px 18px 40px;
  }

  .topbar-actions {
    width: 100%;
  }

  .primary-btn,
  .secondary-btn {
    flex: 1 1 100%;
  }

  .toolbar {
    gap: 8px;
  }

  .toolbar button {
    flex: 1 1 calc(50% - 8px);
  }
}
