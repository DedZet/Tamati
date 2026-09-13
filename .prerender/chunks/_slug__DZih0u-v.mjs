import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/[slug].html
var _slug__exports = /* @__PURE__ */ __exportAll({ default: () => render });
function render({ slots: ___SLOTS___ }) {
	return `---
import "../../styles/global.css";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
const base = import.meta.env.BASE_URL;

// ─── Генерация статических путей ───
export async function getStaticPaths() {
  const files = import.meta.glob("../../data/news/*.md", { as: "raw" });
  const paths = [];
  for (const [filePath] of Object.entries(files)) {
    const slug = filePath.split("/").pop().replace(".md", "");
    paths.push({ params: { slug } });
  }
  return paths;
}

// ─── Компонент страницы ───
const { slug } = Astro.params;

const rawContent = (await import(\`../../data/news/\${slug}.md?raw\`)).default;
const { data, content } = matter(rawContent);

// Обработка изображений Obsidian: [image.png] -> ![image](image.png)
let processedContent = content.replace(
  /\\[([^\\s\\[\\]]+\\.(png|jpe?g|gif|webp|svg))\\]/gi,
  (match, filename) => \`![\${filename}](\${filename})\`,
);

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

processedContent = processedContent.replace(
  /\\[\\[([^\\]|]+)(?:\\|([^\\]]+))?\\]\\]/g,
  (match, target, alias) => renderWikiLink(target, alias),
);

// Рендерим Markdown в HTML
const htmlContent = await remark()
  .use(remarkHtml, { sanitize: false })
  .process(processedContent)
  .then((result) => result.toString());

// const formattedDate = new Date(data.date).toLocaleDateString("ru-RU", {
//   day: "numeric",
//   month: "long",
//   year: "numeric",
// });

const pageTitle = data.theme || "Новость";

// Проверяем наличие превью
const previewImage = data.preview ? \`/news/\${data.preview}\` : null;
---

<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{pageTitle} | Tamati</title>
    <style>
      /* Стили, уникальные для страницы отдельной новости.
         Reset/переменные/фон/шапка/кнопки/футер — в global.css */

      .back-link {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--text-secondary);
        text-decoration: none;
        font-size: 0.9rem;
        transition: var(--transition);
      }
      .back-link:hover {
        color: var(--text-primary);
        transform: translateX(-4px);
      }

      .hero .meta {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;
        font-size: 0.95rem;
        color: var(--text-secondary);
        margin-top: 0.25rem;
      }

      /* ── Preview image ── */
      .preview-image {
        width: 50%;
        max-width: 60%;
        height: auto;
        border-radius: 12px;
        margin: 1.5rem 0;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
        display: block;
      }

      /* ── Article content (без фона, без ограничений по ширине) ── */
      .article-content {
        font-size: 1.25rem; /* Крупный текст */
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
        font-style: italic;
        color: var(--text-primary) !important;
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
        text-decoration-color: rgba(255, 255, 255, 0.25);
        transition: var(--transition);
      }
      .article-content :global(a:hover) {
        text-decoration-color: var(--text-primary);
      }

      /* Wiki-ссылки [[...]] / [[...|подпись]] — реальная ссылка, белый выделенный текст */
      .article-content :global(.md-highlight) {
        color: var(--text-primary) !important;
        font-weight: 600;
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

      /* ── Responsive ── */
      @media (max-width: 768px) {
        .hero {
          text-align: center;
        }
        .hero .meta {
          justify-content: center;
        }
        .back-link {
          justify-content: center;
        }
        .article-content {
          font-size: 1.1rem; /* немного меньше на мобильных, но всё равно крупно */
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
  <body class="theme-blue">
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
          <a href={\`\${base}/news\`} class="btn btn-primary">
            <span class="icon">📰</span> Новости
          </a>
          <a href={\`\${base}/projects\`} class="btn">
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

      <!-- ─── Hero ─── -->
      <section class="hero">
        <a href={\`\${base}/news\`} class="back-link"> </a>
        <h1>{pageTitle}</h1>
        <div class="meta"></div>
      </section>

      <!-- ─── Preview image (если есть) ─── -->
      {
        previewImage && (
          <img
            src={\`\${base}/\${previewImage}\`}
            alt={pageTitle}
            class="preview-image"
            loading="lazy"
          />
        )
      }

      <!-- ─── Статья (без фона, без ограничений ширины) ─── -->
      <div class="article-content" set:html={htmlContent} />

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
  </body>
</html>
`;
}
render["astro:html"] = true;
//#endregion
//#region \0virtual:astro:page:src/pages/[slug]@_@html
var page = () => _slug__exports;
//#endregion
export { page };
