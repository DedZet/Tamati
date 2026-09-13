import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/projects/[id].html
var _id__exports = /* @__PURE__ */ __exportAll({ default: () => render });
function render({ slots: ___SLOTS___ }) {
	return `---
// src/pages/projects/[id].astro
import "../../styles/global.css";
import projectsData from "../../data/projects.json";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
const base = import.meta.env.BASE_URL;

export async function getStaticPaths() {
  return projectsData.projects.map((project) => ({
    params: { id: String(project.id) },
    props: { project },
  }));
}

const { project } = Astro.props as {
  project: {
    id: number;
    preview: string;
    title: string;
    engine: number;
    description: string;
    status: number;
    article?: string;
    bgColor?: string;
    screenshots?: string[];
    downloadLink?: string;
    gameLink?: string;
    date?: string;
    genre?: string;
    style?: string;
  };
};

// ── Справочники ──
const statusColors: Record<number, string> = {
  0: "#6a6a78",
  1: "#e63946",
  2: "#f08f10",
  3: "#25d070",
  4: "#f03f8f",
  5: "#40a0e4",
  6: "#9b5de5",
};

const statusLabels: Record<number, string> = {
  0: "Не начат",
  1: "Отменён",
  2: "В процессе",
  3: "Завершён",
  4: "Обновляется",
  5: "Заморожен",
  6: "Ожидает ремастера",
};

const engineLabels: Record<number, string> = {
  0: "Unreal Engine",
  1: "Unity",
  2: "Godot",
  3: "GameMaker",
  4: "Voltage",
};

const engineColors: Record<number, string> = {
  0: "#eeeeff",
  1: "#eeffff",
  2: "#50c5ff",
  3: "#50ffc5",
  4: "#ffd550",
};

// Фон и рамка pill-бейджа движка — та же палитра, что и текст,
// но приглушённая под тёмную тему (лёгкий цветной оттенок вместо заливки).
const engineBadgeStyles: Record<number, { bg: string; border: string }> = {
  0: { bg: "rgba(238, 238, 255, 0.12)", border: "rgba(238, 238, 255, 0.28)" }, // Unreal — белый
  1: { bg: "rgba(238, 255, 255, 0.12)", border: "rgba(238, 255, 255, 0.28)" }, // Unity — белый
  2: { bg: "rgba(80, 197, 255, 0.15)", border: "rgba(80, 197, 255, 0.35)" }, // Godot — голубой
  3: { bg: "rgba(80, 255, 197, 0.15)", border: "rgba(80, 255, 197, 0.35)" }, // GameMaker — бирюзово-зелёный
  4: { bg: "rgba(255, 213, 80, 0.15)", border: "rgba(255, 213, 80, 0.35)" }, // Voltage — жёлтый
};

const statusColor = statusColors[project.status] ?? "#6b6b7a";
const statusLabel = statusLabels[project.status] ?? "Статус неизвестен";
const engineColor = engineColors[project.engine] || "#6b6b7a";
const engineLabel = engineLabels[project.engine] || "Engine";
const engineBadge = engineBadgeStyles[project.engine] || {
  bg: "rgba(107, 107, 122, 0.15)",
  border: "rgba(107, 107, 122, 0.3)",
};

// ── Генерация палитры орбов ──
function hexToHsl(hex: string) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.substring(0, 2), 16) / 255;
  const g = parseInt(clean.substring(2, 4), 16) / 255;
  const b = parseInt(clean.substring(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  const d = max - min;
  if (d !== 0) {
    s = d / (1 - Math.abs(2 * l - 1));
    switch (max) {
      case r:
        h = ((g - b) / d) % 6;
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
        break;
    }
    h *= 60;
    if (h < 0) h += 360;
  }
  return { h, s: s * 100, l: l * 100 };
}

function hslToHex(h: number, s: number, l: number) {
  const sN = s / 100;
  const lN = l / 100;
  const c = (1 - Math.abs(2 * lN - 1)) * sN;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = lN - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const toHex = (v: number) =>
    Math.round((v + m) * 255)
      .toString(16)
      .padStart(2, "0");
  return \`#\${toHex(r)}\${toHex(g)}\${toHex(b)}\`;
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

const bgColor = project.bgColor || "#14141a";
const { h: baseH, s: baseS, l: baseL } = hexToHsl(bgColor);

const orb1 = hslToHex(
  baseH,
  clamp(baseS + 5, 15, 100),
  clamp(baseL + 35, 25, 88),
);
const orb2 = hslToHex(baseH, clamp(baseS, 15, 100), clamp(baseL + 6, 18, 68));
const orb3 = hslToHex(
  baseH,
  clamp(baseS + 15, 15, 100),
  clamp(baseL - 24, 6, 55),
);

// ── Папка проекта ──
const previewDir = project.preview.substring(
  0,
  project.preview.lastIndexOf("/"),
);
const projectFolder = previewDir.substring(previewDir.lastIndexOf("/") + 1);

// ── Скриншоты ──
const screenshots = (project.screenshots || []).map((s) =>
  s.startsWith("/") || s.startsWith("http") ? s : \`\${previewDir}/\${s}\`,
);

const hasDownload = Boolean(project.downloadLink);
const hasScreenshots = screenshots.length > 0;
const hasDate = Boolean(project.date);

// ── Статья проекта (markdown) ──
// Загружаем src/data/projects/{id}.md
let articleHtml: string | null = null;
let articleError: string | null = null;

// Wiki-ссылки Obsidian: [[адрес]] или [[адрес|подпись]]
// [[google.com]]        -> ссылка, показывается сам адрес
// [[google.com|google]] -> ссылка, показывается "google", ведёт на google.com
function renderWikiLink(rawTarget: string, rawAlias?: string) {
  const target = rawTarget.trim();
  const label = (rawAlias ?? target).trim();

  let href = target;
  const hasProtocol = /^[a-z][a-z0-9+.-]*:/i.test(href);
  const isInternal = href.startsWith("/") || href.startsWith("#");
  if (!hasProtocol && !isInternal) {
    href = \`https://\${href}\`;
  }

  return \`<a href="\${href}" class="md-highlight" target="_blank" rel="noopener noreferrer">\${label}</a>\`;
}

if (project.id) {
  try {
    const raw = await import(\`../../data/projects/\${project.id}.md?raw\`).then(
      (m) => m.default,
    );
    const { data, content } = matter(raw);

    // Обработка изображений Obsidian: [image.png] -> ![image](image.png)
    let processedContent = content.replace(
      /\\[([^\\s\\[\\]]+\\.(png|jpe?g|gif|webp|svg))\\]/gi,
      (match, filename) => \`![\${filename}](\${filename})\`,
    );

    // Wiki-ссылки Obsidian: [[адрес]] или [[адрес|подпись]] -> реальная ссылка <a>
    processedContent = processedContent.replace(
      /\\[\\[([^\\]|]+)(?:\\|([^\\]]+))?\\]\\]/g,
      (match, target, alias) => renderWikiLink(target, alias),
    );

    const result = await remark()
      .use(remarkHtml, { sanitize: false })
      .process(processedContent);
    articleHtml = result.toString();
  } catch (e) {
    articleError = \`Не удалось загрузить статью для проекта \${project.id}: \${e.message}\`;
    console.warn(\`[id.astro] \${articleError}\`);
  }
}
---

<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{project.title} | Tamati</title>
    <style>
      /* Стили, уникальные для страницы отдельного проекта.
         Reset/переменные/фон/шапка/кнопки/pill/футер — в global.css */

      /* Орбы фона для этой страницы красятся динамически под цвет проекта */
      .bg-canvas .orb:nth-child(1) {
        background: var(--orb-1);
      }
      .bg-canvas .orb:nth-child(2) {
        background: var(--orb-2);
      }
      .bg-canvas .orb:nth-child(3) {
        background: var(--orb-3);
      }
      /* ── Hero ── */
      .game-hero {
        display: grid;
        grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
        gap: 3rem;
        align-items: start;
        padding: 1.5rem 0 2rem;
      }

      .game-hero-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .game-hero-info .pill {
        margin-bottom: 1rem;
      }

      .game-title {
        font-size: clamp(2.2rem, 5vw, 3.6rem);
        font-weight: 800;
        line-height: 1.1;
        letter-spacing: -0.03em;
        background: linear-gradient(135deg, #fff 40%, var(--text-secondary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        max-width: 700px;
        margin-bottom: 1rem;
      }

      .game-description {
        font-size: clamp(1rem, 1.2vw, 1.15rem);
        color: var(--text-secondary);
        max-width: 560px;
        line-height: 1.8;
        margin-bottom: 1.75rem;
      }

      .game-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .game-preview {
        position: relative;
        border-radius: var(--radius);
        overflow: hidden;
        aspect-ratio: 600 / 500;
        background: var(--bg-secondary);
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        width: 100%;
      }

      .game-preview img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      /* ── Info card (дата / жанры / стили + статус) ── */
      .info-card {
        margin-top: 2rem;
        width: 100%;
        background: var(--bg-card);
        border-radius: var(--radius) var(--radius) 0 0;
        padding: 0.5rem 1.75rem;
        backdrop-filter: blur(4px);
      }

      .info-row {
        padding: 0.85rem 0;
        font-size: 1.05rem;
        font-weight: 500;
        letter-spacing: 0.02em;
        color: var(--text-primary);
      }

      .info-row:not(:last-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      }

      .info-status {
        width: 100%;
        padding: 1.1rem 1.5rem;
        text-align: center;
        color: #fff;
        font-size: 1.05rem;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        border-radius: 0 0 var(--radius) var(--radius);
      }

      .section {
        margin-top: 2.5rem;
      }

      /* ── Section heading (как на главной: "Наш офис" / "Дорожная карта") ── */
      .section-heading {
        font-size: clamp(1.6rem, 3vw, 2.4rem);
        font-weight: 700;
        letter-spacing: -0.02em;
        margin-bottom: 1.25rem;
        background: linear-gradient(135deg, #fff 50%, var(--text-secondary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .screenshots-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 1.25rem;
      }

      .screenshot-thumb {
        border-radius: var(--radius);
        overflow: hidden;
        aspect-ratio: 16 / 9;
        background: var(--bg-card);
        cursor: zoom-in;
        border: 1px solid rgba(255, 255, 255, 0.06);
        transition: var(--transition);
      }

      .screenshot-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.4s ease;
      }

      .screenshot-thumb:hover {
        transform: translateY(-4px);
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
      }

      .screenshot-thumb:hover img {
        transform: scale(1.05);
      }

      /* ── Article content (статья проекта, markdown) ── */
      .article-content {
        font-size: 1.25rem;
        line-height: 1.8;
        color: var(--text-secondary);
      }

      .article-content :global(:is(h1, h2, h3, h4, h5, h6)) {
        margin: 1.5rem 0 0.75rem;
        line-height: 1.3;
        color: var(--text-primary) !important;
      }

      .article-content :global(h1) {
        font-size: 2.2rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        padding-bottom: 0.5rem;
      }
      .article-content :global(h2) {
        font-size: clamp(1.6rem, 3vw, 2.4rem);
        font-weight: 700;
        letter-spacing: -0.02em;
        margin: 0 0 1.25rem;
      }
      .article-content :global(h3) {
        font-size: 1.4rem;
      }

      .article-content :global(p) {
        margin: 0 0 1.2rem;
        text-align: justify;
        color: var(--text-secondary);
        line-height: 1.8;
      }

      .article-content :global(strong) {
        color: var(--text-primary) !important;
        font-weight: 600;
      }

      .article-content :global(em) {
        color: var(--text-primary) !important;
        font-style: italic;
      }

      .article-content :global(img) {
        max-width: 100%;
        height: auto;
        border-radius: 12px;
        margin: 1.5rem 0;
        display: block;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
      }

      .article-content :global(a) {
        color: var(--text-primary);
        text-decoration: underline;
        text-decoration-color: #7cc5f06b;
        transition: var(--transition);
      }
      .article-content :global(a:hover) {
        text-decoration-color: var(--text-primary);
      }

      /* Wiki-ссылки [[...]] / [[...|подпись]] — реальная ссылка, белый выделенный текст */
      .article-content :global(.md-highlight) {
        color: #7cc5f0;
        font-weight: 600;
      }
      .article-content :global(.md-highlight:hover) {
        text-decoration-color: #7cc5f0;
      }

      .article-content :global(ul),
      .article-content :global(ol) {
        margin: 0 0 1.2rem 1.5rem;
        color: var(--text-secondary);
      }
      .article-content :global(li) {
        margin-bottom: 0.3rem;
      }

      .article-content :global(blockquote) {
        border-left: 4px solid var(--accent-2);
        padding-left: 1.5rem;
        margin: 0 0 1.2rem;
        color: var(--text-secondary);
        font-style: italic;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 0 8px 8px 0;
        padding: 0.8rem 1.5rem;
      }

      .article-content :global(code) {
        background: rgba(255, 255, 255, 0.06);
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
        font-size: 0.9rem;
        color: #d4d4e0;
      }

      .article-content :global(pre) {
        background: #1a1a24;
        padding: 1.2rem;
        border-radius: 12px;
        overflow-x: auto;
        margin: 0 0 1.2rem;
        border: 1px solid rgba(255, 255, 255, 0.05);
      }
      .article-content :global(pre) :global(code) {
        background: none;
        padding: 0;
        color: #e0e0f0;
      }

      /* ── Диагностика (видна только в dev-режиме) ── */
      .article-debug-warning {
        color: #f08f10;
        background: rgba(240, 143, 16, 0.1);
        border: 1px solid rgba(240, 143, 16, 0.3);
        border-radius: 8px;
        padding: 1rem 1.25rem;
        font-size: 0.95rem;
        line-height: 1.6;
        word-break: break-word;
      }

      /* ── Lightbox ── */
      .lightbox-overlay {
        position: fixed;
        inset: 0;
        background: rgba(5, 5, 8, 0.92);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.25s ease;
        padding: 3rem 1.5rem;
      }

      .lightbox-overlay.active {
        opacity: 1;
        visibility: visible;
      }

      .lightbox-overlay img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 12px;
        box-shadow: 0 20px 80px rgba(0, 0, 0, 0.7);
      }

      .lightbox-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.06);
        color: var(--text-primary);
        font-size: 1.4rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: var(--transition);
      }

      .lightbox-close:hover {
        background: rgba(255, 255, 255, 0.15);
      }

      .lightbox-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.15);
        background: rgba(255, 255, 255, 0.08);
        color: var(--text-primary);
        font-size: 2rem;
        line-height: 1;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: var(--transition);
        backdrop-filter: blur(4px);
        user-select: none;
      }

      .lightbox-nav:hover {
        background: rgba(255, 255, 255, 0.2);
      }

      .lightbox-nav.hidden {
        opacity: 0;
        pointer-events: none;
      }

      .lightbox-prev {
        left: 1.5rem;
      }
      .lightbox-next {
        right: 1.5rem;
      }

      /* ── Responsive ── */
      @media (max-width: 900px) {
        .game-hero {
          grid-template-columns: 1fr;
          align-items: center;
        }

        .game-preview-wrapper {
          order: -1;
          max-width: 480px;
          margin: 0 auto;
          width: 100%;
        }

        .game-hero-info {
          align-items: center;
          text-align: center;
        }

        .game-actions {
          justify-content: center;
        }

        .game-description {
          max-width: 100%;
        }
      }

      @media (max-width: 768px) {
        .lightbox-nav {
          width: 40px;
          height: 40px;
          font-size: 1.6rem;
        }
        .lightbox-prev {
          left: 0.5rem;
        }
        .lightbox-next {
          right: 0.5rem;
        }
        .article-content {
          font-size: 1.1rem;
        }
        .article-content :global(h1) {
          font-size: 1.8rem;
        }
        .article-content :global(h3) {
          font-size: 1.2rem;
        }
      }

      @media (max-width: 480px) {
        .article-content {
          font-size: 1rem;
        }
      }
    </style>
  </head>
  <body style={\`--orb-1:\${orb1};--orb-2:\${orb2};--orb-3:\${orb3};\`}>
    <!-- ─── Animated background ─── -->
    <div class="bg-canvas" aria-hidden="true">
      <div class="orb"></div>
      <div class="orb"></div>
      <div class="orb"></div>
    </div>

    <!-- ─── Page ─── -->
    <div class="page">
      <!-- ─── Header ─── -->
      <header class="header">
        <a href={\`\${base}\`} class="logo">
          <span>Tamati</span>
        </a>

        <nav class="nav-buttons">
          <a href={\`\${base}/news\`} class="btn">
            <span class="icon">📰</span> Новости
          </a>
          <a href={\`\${base}/projects\`} class="btn btn-primary">
            <span class="icon">🎮</span> Проекты
          </a>
          <a href={\`\${base}/engine\`} class="btn">
            <span class="icon">⚙️</span> Voltage
          </a>
          <a href="https://dedzet.github.io/TamatiRecords" class="btn">
            <span class="icon">🎵</span> Tamati Records
          </a>
        </nav>
      </header>

      <!-- ─── Hero игры ─── -->
      <section class="game-hero">
        <div class="game-hero-info">
          <span
            class="pill"
            style={\`color:\${engineColor}; background:\${engineBadge.bg}; border-color:\${engineBadge.border};\`}
          >
            Сделано на {engineLabel}
          </span>
          <h1 class="game-title">{project.title}</h1>
          <p class="game-description">{project.description}</p>

          <div class="game-actions">
            {
              hasDownload ? (
                <a href={project.downloadLink} class="btn btn-primary">
                  Поддержать
                </a>
              ) : (
                <button type="button" class="btn btn-disabled" disabled>
                  Недоступно
                </button>
              )
            }
            {
              project.gameLink && (
                <a
                  href={project.gameLink}
                  class="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Страница в магазине
                </a>
              )
            }
          </div>
        </div>

        <div class="game-preview-wrapper">
          <div class="game-preview">
            <img
              src={\`\${base}/\${project.preview}\`}
              alt={project.title}
              loading="eager"
            />
          </div>
          <div class="info-card">
            {hasDate && <p class="info-row">Дата релиза: {project.date}</p>}
            {project.genre && <p class="info-row">Жанры: {project.genre}</p>}
            {project.style && <p class="info-row">Стили: {project.style}</p>}
          </div>
          <div class="info-status" style={\`background-color: \${statusColor};\`}>
            {statusLabel}
          </div>
        </div>
      </section>

      <!-- ─── Статья (markdown из src/data/projects/{id}.md) ─── -->
      {
        articleHtml && (
          <section class="section">
            <div class="article-content" set:html={articleHtml} />
          </section>
        )
      }

      <!-- ─── Диагностика статьи (видна только в dev-режиме) ─── -->
      {
        !articleHtml && articleError && import.meta.env.DEV && (
          <section class="section">
            <p class="article-debug-warning">⚠️ {articleError}</p>
          </section>
        )
      }

      <!-- ─── Скриншоты ─── -->
      {
        hasScreenshots && (
          <section class="section">
            <h2 class="section-heading">Скриншоты</h2>
            <div class="screenshots-grid">
              {screenshots.map((src, i) => (
                <div class="screenshot-thumb" data-full={\`\${base}/\${src}\`}>
                  <img
                    src={\`\${base}/\${src}\`}
                    alt={\`\${project.title} - скриншот \${i + 1}\`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        )
      }

      <!-- ─── Footer ─── -->
      <footer class="footer">
        <span>© 2023 Tamati</span>
        <!--
        <div class="footer-links">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Контакты</a>
          <a href="#">Вакансии</a>
        </div>
        -->
      </footer>
    </div>

    <!-- ─── Лайтбокс ─── -->
    <div class="lightbox-overlay" id="lightboxOverlay">
      <button class="lightbox-close" id="lightboxClose" aria-label="Закрыть">
        ×
      </button>
      <button
        class="lightbox-nav lightbox-prev hidden"
        id="lightboxPrev"
        aria-label="Предыдущий скриншот">‹</button
      >
      <button
        class="lightbox-nav lightbox-next hidden"
        id="lightboxNext"
        aria-label="Следующий скриншот">›</button
      >
      <img id="lightboxImage" src="" alt="Скриншот крупным планом" />
    </div>

    <!-- ─── Скрипт лайтбокса ─── -->
    <script>
      document.addEventListener("DOMContentLoaded", () => {
        const overlay = document.getElementById("lightboxOverlay");
        const overlayImg = document.getElementById("lightboxImage");
        const closeBtn = document.getElementById("lightboxClose");
        const prevBtn = document.getElementById("lightboxPrev");
        const nextBtn = document.getElementById("lightboxNext");

        const thumbElements = document.querySelectorAll(".screenshot-thumb");
        const images = Array.from(thumbElements).map((el) => el.dataset.full);
        let currentIndex = 0;

        function updateLightbox(index) {
          if (!overlay || !overlayImg || images.length === 0) return;
          currentIndex = index;
          overlayImg.src = images[currentIndex];

          const hasPrev = currentIndex > 0;
          const hasNext = currentIndex < images.length - 1;
          prevBtn.classList.toggle("hidden", !hasPrev);
          nextBtn.classList.toggle("hidden", !hasNext);
        }

        function openLightbox(index) {
          if (!overlay) return;
          updateLightbox(index);
          overlay.classList.add("active");
          document.body.style.overflow = "hidden";
        }

        function closeLightbox() {
          if (!overlay) return;
          overlay.classList.remove("active");
          document.body.style.overflow = "";
        }

        thumbElements.forEach((thumb, idx) => {
          thumb.addEventListener("click", () => {
            openLightbox(idx);
          });
        });

        prevBtn?.addEventListener("click", (e) => {
          e.stopPropagation();
          if (currentIndex > 0) {
            openLightbox(currentIndex - 1);
          }
        });

        nextBtn?.addEventListener("click", (e) => {
          e.stopPropagation();
          if (currentIndex < images.length - 1) {
            openLightbox(currentIndex + 1);
          }
        });

        closeBtn?.addEventListener("click", closeLightbox);
        overlay?.addEventListener("click", (e) => {
          if (e.target === overlay) closeLightbox();
        });

        document.addEventListener("keydown", (e) => {
          if (!overlay || !overlay.classList.contains("active")) return;

          if (e.key === "Escape") {
            closeLightbox();
            return;
          }

          if (e.key === "ArrowLeft" && currentIndex > 0) {
            e.preventDefault();
            openLightbox(currentIndex - 1);
          } else if (
            e.key === "ArrowRight" &&
            currentIndex < images.length - 1
          ) {
            e.preventDefault();
            openLightbox(currentIndex + 1);
          }
        });
      });
    <\/script>
  </body>
</html>
`;
}
render["astro:html"] = true;
//#endregion
//#region \0virtual:astro:page:src/pages/projects/[id]@_@html
var page = () => _id__exports;
//#endregion
export { page };
