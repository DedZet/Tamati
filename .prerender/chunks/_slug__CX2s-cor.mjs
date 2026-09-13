import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createAstro, b as unescapeHTML, f as renderHead, p as addAttribute, u as renderTemplate } from "./server_Cu3e08uR.mjs";
import { t as createComponent } from "./global_Ckd2dsnF.mjs";
import { t as _rolldown_dynamic_import_helper_default } from "./_rolldown_dynamic_import_helper_CDZweKFx.mjs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
//#region src/pages/news/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://DedZet.github.io");
async function getStaticPaths() {
	const files = /* #__PURE__ */ Object.assign({
		"../../data/news/1.md": () => import("./1_SlFgvJtB.mjs"),
		"../../data/news/2.md": () => import("./2_BCfOP06p.mjs"),
		"../../data/news/3.md": () => import("./3_Br-lKDCm.mjs"),
		"../../data/news/4.md": () => import("./4_YubPwcw0.mjs"),
		"../../data/news/5.md": () => import("./5_CDGWlUuR.mjs"),
		"../../data/news/6.md": () => import("./6_DvWv1LV6.mjs")
	});
	const paths = [];
	for (const [filePath] of Object.entries(files)) {
		const slug = filePath.split("/").pop().replace(".md", "");
		paths.push({ params: { slug } });
	}
	return paths;
}
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Slug;
	const base = "/Tamati";
	const { slug } = Astro2.params;
	const rawContent = (await _rolldown_dynamic_import_helper_default(/* #__PURE__ */ Object.assign({
		"../../data/news/1.md": () => import("./1_DLJNbAZ8.mjs"),
		"../../data/news/2.md": () => import("./2_B3UIhxWH.mjs"),
		"../../data/news/3.md": () => import("./3_C8oBLoKq.mjs"),
		"../../data/news/4.md": () => import("./4_BlcY-3nb.mjs"),
		"../../data/news/5.md": () => import("./5_B4p72Oev.mjs"),
		"../../data/news/6.md": () => import("./6__L3Gvd19.mjs")
	}), `../../data/news/${slug}.md?raw`, 5)).default;
	const { data, content } = matter(rawContent);
	let processedContent = content.replace(/\[([^\s\[\]]+\.(png|jpe?g|gif|webp|svg))\]/gi, (match, filename) => `![${filename}](${filename})`);
	function renderWikiLink(rawTarget, rawAlias) {
		const target = rawTarget.trim();
		const label = (rawAlias ?? target).trim();
		let href;
		let isExternal = false;
		if (target.startsWith("#")) href = target;
		else if (target.startsWith("/")) href = `${base}${target}`;
		else {
			href = /^[a-z][a-z0-9+.-]*:/i.test(target) ? target : `https://${target}`;
			isExternal = true;
		}
		return `<a href="${href}" class="md-highlight"${isExternal ? " target=\"_blank\" rel=\"noopener noreferrer\"" : ""}>${label}</a>`;
	}
	processedContent = processedContent.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (match, target, alias) => renderWikiLink(target, alias));
	const htmlContent = await remark().use(remarkHtml, { sanitize: false }).process(processedContent).then((result) => result.toString());
	const pageTitle = data.theme || "Новость";
	const previewImage = data.preview ? `/news/${data.preview}` : null;
	return renderTemplate`<html lang="ru" data-astro-cid-hqq7p32a><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${pageTitle} | Tamati</title>${renderHead($$result)}</head><body class="theme-blue" data-astro-cid-hqq7p32a><!-- ─── Animated background ─── --><div class="bg-canvas" aria-hidden="true" data-astro-cid-hqq7p32a><div class="orb" data-astro-cid-hqq7p32a></div><div class="orb" data-astro-cid-hqq7p32a></div><div class="orb" data-astro-cid-hqq7p32a></div></div><!-- ─── Page ─── --><div class="page" data-astro-cid-hqq7p32a><!-- ─── Header ─── --><header class="header" data-astro-cid-hqq7p32a><a${addAttribute(`${base}`, "href")} class="logo" data-astro-cid-hqq7p32a><span data-astro-cid-hqq7p32a>Tamati</span></a><nav class="nav-buttons" data-astro-cid-hqq7p32a><a${addAttribute(`${base}/news`, "href")} class="btn btn-primary" data-astro-cid-hqq7p32a><span class="icon" data-astro-cid-hqq7p32a>📰</span> Новости</a><a${addAttribute(`${base}/projects`, "href")} class="btn" data-astro-cid-hqq7p32a><span class="icon" data-astro-cid-hqq7p32a>🎮</span> Проекты</a><a${addAttribute(`${base}/engine`, "href")} class="btn" data-astro-cid-hqq7p32a><span class="icon" data-astro-cid-hqq7p32a>⚙️</span> Voltage</a><a href="https://dedzet.github.io/TamatiRecords" class="btn" data-astro-cid-hqq7p32a><span class="icon" data-astro-cid-hqq7p32a>🎵</span> Tamati Records</a></nav></header><!-- ─── Hero ─── --><section class="hero" data-astro-cid-hqq7p32a><a${addAttribute(`${base}/news`, "href")} class="back-link" data-astro-cid-hqq7p32a> </a><h1 data-astro-cid-hqq7p32a>${pageTitle}</h1><div class="meta" data-astro-cid-hqq7p32a></div></section><!-- ─── Preview image (если есть) ─── -->${previewImage && renderTemplate`<img${addAttribute(`${base}/${previewImage}`, "src")}${addAttribute(pageTitle, "alt")} class="preview-image" loading="lazy" data-astro-cid-hqq7p32a>`}<!-- ─── Статья (без фона, без ограничений ширины) ─── --><div class="article-content" data-astro-cid-hqq7p32a>${unescapeHTML(htmlContent)}</div><!-- ─── Footer ─── --><footer class="footer" data-astro-cid-hqq7p32a><span data-astro-cid-hqq7p32a>© 2023 Tamati</span><!--
        <div class="footer-links">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Контакты</a>
          <a href="#">Вакансии</a>
        </div>
        --></footer></div></body></html>`;
}, "D:/Files/Dev/Web/Tamati/src/pages/news/[slug].astro", void 0);
var $$file = "D:/Files/Dev/Web/Tamati/src/pages/news/[slug].astro";
var $$url = "/Tamati/news/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/news/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
