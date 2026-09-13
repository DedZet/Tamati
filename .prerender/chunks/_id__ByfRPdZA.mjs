import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createAstro, b as unescapeHTML, f as renderHead, p as addAttribute, u as renderTemplate } from "./server_Cu3e08uR.mjs";
import { t as createComponent } from "./global_Ckd2dsnF.mjs";
import { t as renderScript } from "./script_Bb7cPczp.mjs";
import { t as _rolldown_dynamic_import_helper_default } from "./_rolldown_dynamic_import_helper_CDZweKFx.mjs";
import { t as projects_default } from "./projects_DNgORgbH.mjs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
//#region src/pages/projects/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://DedZet.github.io");
async function getStaticPaths() {
	return projects_default.projects.map((project) => ({
		params: { id: String(project.id) },
		props: { project }
	}));
}
var $$Id = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Id;
	const base = "/Tamati";
	const { project } = Astro2.props;
	const statusColors = {
		0: "#6a6a78",
		1: "#e63946",
		2: "#f08f10",
		3: "#25d070",
		4: "#f03f8f",
		5: "#40a0e4",
		6: "#9b5de5"
	};
	const statusLabels = {
		0: "Не начат",
		1: "Отменён",
		2: "В процессе",
		3: "Завершён",
		4: "Обновляется",
		5: "Заморожен",
		6: "Ожидает ремастера"
	};
	const engineLabels = {
		0: "Unreal Engine",
		1: "Unity",
		2: "Godot",
		3: "GameMaker",
		4: "Voltage"
	};
	const engineColors = {
		0: "#eeeeff",
		1: "#eeffff",
		2: "#50c5ff",
		3: "#50ffc5",
		4: "#ffd550"
	};
	const engineBadgeStyles = {
		0: {
			bg: "rgba(238, 238, 255, 0.12)",
			border: "rgba(238, 238, 255, 0.28)"
		},
		1: {
			bg: "rgba(238, 255, 255, 0.12)",
			border: "rgba(238, 255, 255, 0.28)"
		},
		2: {
			bg: "rgba(80, 197, 255, 0.15)",
			border: "rgba(80, 197, 255, 0.35)"
		},
		3: {
			bg: "rgba(80, 255, 197, 0.15)",
			border: "rgba(80, 255, 197, 0.35)"
		},
		4: {
			bg: "rgba(255, 213, 80, 0.15)",
			border: "rgba(255, 213, 80, 0.35)"
		}
	};
	const statusColor = statusColors[project.status] ?? "#6b6b7a";
	const statusLabel = statusLabels[project.status] ?? "Статус неизвестен";
	const engineColor = engineColors[project.engine] || "#6b6b7a";
	const engineLabel = engineLabels[project.engine] || "Engine";
	const engineBadge = engineBadgeStyles[project.engine] || {
		bg: "rgba(107, 107, 122, 0.15)",
		border: "rgba(107, 107, 122, 0.3)"
	};
	function hexToHsl(hex) {
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
					h = (g - b) / d % 6;
					break;
				case g:
					h = (b - r) / d + 2;
					break;
				default: h = (r - g) / d + 4;
			}
			h *= 60;
			if (h < 0) h += 360;
		}
		return {
			h,
			s: s * 100,
			l: l * 100
		};
	}
	function hslToHex(h, s, l) {
		const sN = s / 100;
		const lN = l / 100;
		const c = (1 - Math.abs(2 * lN - 1)) * sN;
		const x = c * (1 - Math.abs(h / 60 % 2 - 1));
		const m = lN - c / 2;
		let r = 0;
		let g = 0;
		let b = 0;
		if (h < 60) [r, g, b] = [
			c,
			x,
			0
		];
		else if (h < 120) [r, g, b] = [
			x,
			c,
			0
		];
		else if (h < 180) [r, g, b] = [
			0,
			c,
			x
		];
		else if (h < 240) [r, g, b] = [
			0,
			x,
			c
		];
		else if (h < 300) [r, g, b] = [
			x,
			0,
			c
		];
		else [r, g, b] = [
			c,
			0,
			x
		];
		const toHex = (v) => Math.round((v + m) * 255).toString(16).padStart(2, "0");
		return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
	}
	function clamp(v, min, max) {
		return Math.max(min, Math.min(max, v));
	}
	const { h: baseH, s: baseS, l: baseL } = hexToHsl(project.bgColor || "#14141a");
	const orb1 = hslToHex(baseH, clamp(baseS + 5, 15, 100), clamp(baseL + 35, 25, 88));
	const orb2 = hslToHex(baseH, clamp(baseS, 15, 100), clamp(baseL + 6, 18, 68));
	const orb3 = hslToHex(baseH, clamp(baseS + 15, 15, 100), clamp(baseL - 24, 6, 55));
	const previewDir = project.preview.substring(0, project.preview.lastIndexOf("/"));
	previewDir.substring(previewDir.lastIndexOf("/") + 1);
	const screenshots = (project.screenshots || []).map((s) => s.startsWith("/") || s.startsWith("http") ? s : `${previewDir}/${s}`);
	const hasDownload = Boolean(project.downloadLink);
	const hasScreenshots = screenshots.length > 0;
	const hasDate = Boolean(project.date);
	let articleHtml = null;
	let articleError = null;
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
	if (project.id) try {
		const raw = await _rolldown_dynamic_import_helper_default(/* #__PURE__ */ Object.assign({
			"../../data/projects/1.md": () => import("./1_D_oF-YIQ.mjs"),
			"../../data/projects/10.md": () => import("./10_DQHQxCAA.mjs"),
			"../../data/projects/11.md": () => import("./11_CPdl4F7j.mjs"),
			"../../data/projects/12.md": () => import("./12_Dykr8Wxk.mjs"),
			"../../data/projects/13.md": () => import("./13_DIg-RoyZ.mjs"),
			"../../data/projects/14.md": () => import("./14_CyMhey7P.mjs"),
			"../../data/projects/15.md": () => import("./15_CwDCUM37.mjs"),
			"../../data/projects/16.md": () => import("./16_Dc3MlSYB.mjs"),
			"../../data/projects/17.md": () => import("./17_DY-VGPcA.mjs"),
			"../../data/projects/18.md": () => import("./18_0qK-5ZUu.mjs"),
			"../../data/projects/19.md": () => import("./19_2x2FQ3W1.mjs"),
			"../../data/projects/2.md": () => import("./2_CjNK7xzP.mjs"),
			"../../data/projects/20.md": () => import("./20_C4qfyce9.mjs"),
			"../../data/projects/21.md": () => import("./21_BuZ1IjjT.mjs"),
			"../../data/projects/22.md": () => import("./22_DIyE09mr.mjs"),
			"../../data/projects/23.md": () => import("./23_KdlDKMuZ.mjs"),
			"../../data/projects/24.md": () => import("./24_BFia46ZY.mjs"),
			"../../data/projects/25.md": () => import("./25_DDibg5nv.mjs"),
			"../../data/projects/26.md": () => import("./26_-2_sOtIk.mjs"),
			"../../data/projects/27.md": () => import("./27_CZSEHIZL.mjs"),
			"../../data/projects/28.md": () => import("./28_CODkfHiQ.mjs"),
			"../../data/projects/29.md": () => import("./29_Dw1apLDv.mjs"),
			"../../data/projects/3.md": () => import("./3_BMIyg8zW.mjs"),
			"../../data/projects/30.md": () => import("./30_aU829KxC.mjs"),
			"../../data/projects/31.md": () => import("./31_BTl5pciJ.mjs"),
			"../../data/projects/32.md": () => import("./32_C830f6hu.mjs"),
			"../../data/projects/4.md": () => import("./4_CID7xtCC.mjs"),
			"../../data/projects/5.md": () => import("./5_CyGKk0-n.mjs"),
			"../../data/projects/6.md": () => import("./6_CsOYB28r.mjs"),
			"../../data/projects/7.md": () => import("./7_CjXQii6G.mjs"),
			"../../data/projects/8.md": () => import("./8_D2IbCzrQ.mjs"),
			"../../data/projects/9.md": () => import("./9_C2V5Ct0q.mjs")
		}), `../../data/projects/${project.id}.md?raw`, 5).then((m) => m.default);
		const { data, content } = matter(raw);
		let processedContent = content.replace(/\[([^\s\[\]]+\.(png|jpe?g|gif|webp|svg))\]/gi, (match, filename) => `![${filename}](${filename})`);
		processedContent = processedContent.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (match, target, alias) => renderWikiLink(target, alias));
		articleHtml = (await remark().use(remarkHtml, { sanitize: false }).process(processedContent)).toString();
	} catch (e) {
		articleError = `Не удалось загрузить статью для проекта ${project.id}: ${e.message}`;
		console.warn(`[id.astro] ${articleError}`);
	}
	return renderTemplate`<html lang="ru" data-astro-cid-5hz3dbe4><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${project.title} | Tamati</title>${renderHead($$result)}</head><body${addAttribute(`--orb-1:${orb1};--orb-2:${orb2};--orb-3:${orb3};`, "style")} data-astro-cid-5hz3dbe4><!-- ─── Animated background ─── --><div class="bg-canvas" aria-hidden="true" data-astro-cid-5hz3dbe4><div class="orb" data-astro-cid-5hz3dbe4></div><div class="orb" data-astro-cid-5hz3dbe4></div><div class="orb" data-astro-cid-5hz3dbe4></div></div><!-- ─── Page ─── --><div class="page" data-astro-cid-5hz3dbe4><!-- ─── Header ─── --><header class="header" data-astro-cid-5hz3dbe4><a${addAttribute(`${base}`, "href")} class="logo" data-astro-cid-5hz3dbe4><span data-astro-cid-5hz3dbe4>Tamati</span></a><nav class="nav-buttons" data-astro-cid-5hz3dbe4><a${addAttribute(`${base}/news`, "href")} class="btn" data-astro-cid-5hz3dbe4><span class="icon" data-astro-cid-5hz3dbe4>📰</span> Новости</a><a${addAttribute(`${base}/projects`, "href")} class="btn btn-primary" data-astro-cid-5hz3dbe4><span class="icon" data-astro-cid-5hz3dbe4>🎮</span> Проекты</a><a${addAttribute(`${base}/engine`, "href")} class="btn" data-astro-cid-5hz3dbe4><span class="icon" data-astro-cid-5hz3dbe4>⚙️</span> Voltage</a><a href="https://dedzet.github.io/TamatiRecords" class="btn" data-astro-cid-5hz3dbe4><span class="icon" data-astro-cid-5hz3dbe4>🎵</span> Tamati Records</a></nav></header><!-- ─── Hero игры ─── --><section class="game-hero" data-astro-cid-5hz3dbe4><div class="game-hero-info" data-astro-cid-5hz3dbe4><span class="pill"${addAttribute(`color:${engineColor}; background:${engineBadge.bg}; border-color:${engineBadge.border};`, "style")} data-astro-cid-5hz3dbe4>Сделано на ${engineLabel}</span><h1 class="game-title" data-astro-cid-5hz3dbe4>${project.title}</h1><p class="game-description" data-astro-cid-5hz3dbe4>${project.description}</p><div class="game-actions" data-astro-cid-5hz3dbe4>${hasDownload ? renderTemplate`<a${addAttribute(project.downloadLink, "href")} class="btn btn-primary" data-astro-cid-5hz3dbe4>Поддержать</a>` : renderTemplate`<button type="button" class="btn btn-disabled" disabled data-astro-cid-5hz3dbe4>Недоступно</button>`}${project.gameLink && renderTemplate`<a${addAttribute(project.gameLink, "href")} class="btn" target="_blank" rel="noopener noreferrer" data-astro-cid-5hz3dbe4>Страница в магазине</a>`}</div></div><div class="game-preview-wrapper" data-astro-cid-5hz3dbe4><div class="game-preview" data-astro-cid-5hz3dbe4><img${addAttribute(`${base}/${project.preview}`, "src")}${addAttribute(project.title, "alt")} loading="eager" data-astro-cid-5hz3dbe4></div><div class="info-card" data-astro-cid-5hz3dbe4>${hasDate && renderTemplate`<p class="info-row" data-astro-cid-5hz3dbe4>Дата релиза: ${project.date}</p>`}${project.genre && renderTemplate`<p class="info-row" data-astro-cid-5hz3dbe4>Жанры: ${project.genre}</p>`}${project.style && renderTemplate`<p class="info-row" data-astro-cid-5hz3dbe4>Стили: ${project.style}</p>`}</div><div class="info-status"${addAttribute(`background-color: ${statusColor};`, "style")} data-astro-cid-5hz3dbe4>${statusLabel}</div></div></section><!-- ─── Статья (markdown из src/data/projects/{id}.md) ─── -->${articleHtml && renderTemplate`<section class="section" data-astro-cid-5hz3dbe4><div class="article-content" data-astro-cid-5hz3dbe4>${unescapeHTML(articleHtml)}</div></section>`}<!-- ─── Диагностика статьи (видна только в dev-режиме) ─── -->${!articleHtml && articleError && false}<!-- ─── Скриншоты ─── -->${hasScreenshots && renderTemplate`<section class="section" data-astro-cid-5hz3dbe4><h2 class="section-heading" data-astro-cid-5hz3dbe4>Скриншоты</h2><div class="screenshots-grid" data-astro-cid-5hz3dbe4>${screenshots.map((src, i) => renderTemplate`<div class="screenshot-thumb"${addAttribute(`${base}/${src}`, "data-full")} data-astro-cid-5hz3dbe4><img${addAttribute(`${base}/${src}`, "src")}${addAttribute(`${project.title} - скриншот ${i + 1}`, "alt")} loading="lazy" data-astro-cid-5hz3dbe4></div>`)}</div></section>`}<!-- ─── Footer ─── --><footer class="footer" data-astro-cid-5hz3dbe4><span data-astro-cid-5hz3dbe4>© 2023 Tamati</span><!--
        <div class="footer-links">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Контакты</a>
          <a href="#">Вакансии</a>
        </div>
        --></footer></div><!-- ─── Лайтбокс ─── --><div class="lightbox-overlay" id="lightboxOverlay" data-astro-cid-5hz3dbe4><button class="lightbox-close" id="lightboxClose" aria-label="Закрыть" data-astro-cid-5hz3dbe4>×</button><button class="lightbox-nav lightbox-prev hidden" id="lightboxPrev" aria-label="Предыдущий скриншот" data-astro-cid-5hz3dbe4>‹</button><button class="lightbox-nav lightbox-next hidden" id="lightboxNext" aria-label="Следующий скриншот" data-astro-cid-5hz3dbe4>›</button><img id="lightboxImage" src="" alt="Скриншот крупным планом" data-astro-cid-5hz3dbe4></div><!-- ─── Скрипт лайтбокса ─── -->${renderScript($$result, "D:/Files/Dev/Web/Tamati/src/pages/projects/[id].astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "D:/Files/Dev/Web/Tamati/src/pages/projects/[id].astro", void 0);
var $$file = "D:/Files/Dev/Web/Tamati/src/pages/projects/[id].astro";
var $$url = "/Tamati/projects/[id]";
//#endregion
//#region \0virtual:astro:page:src/pages/projects/[id]@_@astro
var page = () => _id__exports;
//#endregion
export { page };
