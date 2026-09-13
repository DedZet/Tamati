import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createAstro, a as renderComponent, d as maybeRenderHead, f as renderHead, p as addAttribute, u as renderTemplate } from "./server_Cu3e08uR.mjs";
import { t as createComponent } from "./global_Ckd2dsnF.mjs";
import { t as renderScript } from "./script_Bb7cPczp.mjs";
import matter from "gray-matter";
//#region src/components/NewsCard.astro
createAstro("https://DedZet.github.io");
var $$NewsCard = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$NewsCard;
	const base = "/Tamati";
	const { slug, theme, preview, date, excerpt } = Astro2.props;
	new Date(date).toLocaleDateString("ru-RU", {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
	return renderTemplate`${maybeRenderHead($$result)}<div class="card"><a${addAttribute(`${base}/news/${slug}`, "href")} class="card-link"><div class="preview-wrapper"><img${addAttribute(`${base}/news/${preview}`, "src")}${addAttribute(theme, "alt")} class="preview-image" loading="lazy"></div><div class="card-content"><h3 class="card-title">${theme}</h3><p class="card-text clamp-3">${excerpt}</p></div></a></div>`;
}, "D:/Files/Dev/Web/Tamati/src/components/NewsCard.astro", void 0);
//#endregion
//#region src/pages/news.astro
var news_exports = /* @__PURE__ */ __exportAll({
	default: () => $$News,
	file: () => $$file,
	url: () => $$url
});
var $$News = createComponent(async ($$result, $$props, $$slots) => {
	const base = "/Tamati";
	const newsFiles = /* #__PURE__ */ Object.assign({
		"../data/news/1.md": () => import("./1_SlFgvJtB.mjs"),
		"../data/news/2.md": () => import("./2_BCfOP06p.mjs"),
		"../data/news/3.md": () => import("./3_Br-lKDCm.mjs"),
		"../data/news/4.md": () => import("./4_YubPwcw0.mjs"),
		"../data/news/5.md": () => import("./5_CDGWlUuR.mjs"),
		"../data/news/6.md": () => import("./6_DvWv1LV6.mjs")
	});
	const articles = [];
	for (const [path, load] of Object.entries(newsFiles)) {
		const raw = await load();
		const { data, content } = matter(raw);
		const slug = path.split("/").pop().replace(".md", "");
		articles.push({
			slug,
			data,
			content
		});
	}
	articles.sort((a, b) => parseInt(b.slug) - parseInt(a.slug));
	function getExcerpt(content, linesCount = 3) {
		const lines = content.split("\n").filter((line) => line.trim() !== "");
		let excerpt = lines.slice(0, linesCount).join(" ").trim();
		excerpt = excerpt.replace(/([#*_\[\]!>])/g, "").replace(/\s+/g, " ").trim();
		if (excerpt.length > 250) excerpt = excerpt.slice(0, 250) + "...";
		else if (lines.length > linesCount) excerpt += "...";
		return excerpt;
	}
	return renderTemplate`<html lang="ru"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Новости | Tamati</title>${renderHead($$result)}</head><body class="theme-blue"><!-- ─── Animated background ─── --><div class="bg-canvas" aria-hidden="true"><div class="orb"></div><div class="orb"></div><div class="orb"></div></div><!-- ─── Page ─── --><div class="page"><!-- ─── Header ─── --><header class="header"><a${addAttribute(`${base}`, "href")} class="logo"><span>Tamati</span></a><nav class="nav-buttons"><a${addAttribute(`${base}/news`, "href")} class="btn btn-primary"><span class="icon">📰</span> Новости</a><a${addAttribute(`${base}/projects`, "href")} class="btn"><span class="icon">🎮</span> Проекты</a><a${addAttribute(`${base}/engine`, "href")} class="btn"><span class="icon">⚙️</span> Voltage</a><a href="https://dedzet.github.io/TamatiRecords" class="btn"><span class="icon">🎵</span> Tamati Records</a></nav></header><!-- ─── Hero ─── --><section class="hero"><span class="pill hero-badge">Новости и обновления</span><h1>Новости</h1><p>Будьте в курсе последних событий и анонсов</p></section><!-- ─── Sort Controls ─── --><div class="sort-controls"><label for="sortBtn">Сортировка:</label><button id="sortBtn" class="sort-btn">Сначала новые</button></div><!-- ─── News Grid ─── --><div class="grid" id="newsGrid">${articles.map((article) => renderTemplate`<div class="grid-item"${addAttribute(parseInt(article.slug), "data-id")}>${renderComponent($$result, "NewsCard", $$NewsCard, {
		"slug": article.slug,
		"theme": article.data.theme,
		"preview": article.data.preview,
		"date": article.data.date,
		"excerpt": getExcerpt(article.content)
	})}</div>`)}</div><!-- ─── Footer ─── --><footer class="footer"><span>© 2023 Tamati</span><!--
        <div class="footer-links">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Контакты</a>
          <a href="#">Вакансии</a>
        </div>
        --></footer></div>${renderScript($$result, "D:/Files/Dev/Web/Tamati/src/pages/news.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "D:/Files/Dev/Web/Tamati/src/pages/news.astro", void 0);
var $$file = "D:/Files/Dev/Web/Tamati/src/pages/news.astro";
var $$url = "/Tamati/news";
//#endregion
//#region \0virtual:astro:page:src/pages/news@_@astro
var page = () => news_exports;
//#endregion
export { page };
