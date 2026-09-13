import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { f as renderHead, p as addAttribute, u as renderTemplate } from "./server_Cu3e08uR.mjs";
import { t as createComponent } from "./global_Ckd2dsnF.mjs";
import { t as renderScript } from "./script_Bb7cPczp.mjs";
//#region src/data/roadmap.json
var roadmap_default = [{
	"year": "2026",
	"textJan": "Greedy Christmas 2 \n(1.0.1a PATCH)",
	"bgJan": "2026/jan.png",
	"siteJan": "uberdedzet.itch.io/greedychristmas2/devlog/1133359/patch-101a",
	"textFeb": " ",
	"bgFeb": "2026/none.png",
	"siteFeb": "",
	"textMar": "Greedy Christmas 2 \n(1.0.2a PATCH)",
	"bgMar": "2026/mar.png",
	"siteMar": "uberdedzet.itch.io/greedychristmas2/devlog/1483018/patch-102a",
	"textApr": " ",
	"bgApr": "2026/none.png",
	"siteApr": "",
	"textMay": "Greedy Christmas 2 \n(1.0.3a PATCH)",
	"bgMay": "2026/may.png",
	"siteMay": "uberdedzet.itch.io/greedychristmas2/devlog/1522336/patch-103a",
	"textJun": " ",
	"bgJun": "2026/none.png",
	"siteJun": "",
	"textJul": " ",
	"bgJul": "2026/none.png",
	"siteJul": "",
	"textAug": "Defuser (Compiler)",
	"bgAug": "2026/aug.png",
	"siteAug": "github.com/DedZet/C4lang",
	"textSep": "Этот ублюдский сайт (Tamati)",
	"bgSep": "2026/sep.png",
	"siteSep": "",
	"textOct": "Greedy Christmas 2 \n(1.1.0a MINOR)",
	"bgOct": "2026/oct.png",
	"siteOct": "/projects/22",
	"textNov": "Dog Days",
	"bgNov": "2026/nov.png",
	"siteNov": "/projects/30",
	"textDec": "Screensaver",
	"bgDec": "2026/dec.png",
	"siteDec": "/news/6"
}, {
	"year": "2027",
	"textJan": "-",
	"bgJan": "-",
	"siteJan": "-",
	"textFeb": "-",
	"bgFeb": "-",
	"siteFeb": "-",
	"textMar": "-",
	"bgMar": "-",
	"siteMar": "-",
	"textApr": "-",
	"bgApr": "-",
	"siteApr": "-",
	"textMay": "Unwanted",
	"bgMay": "2027/may.png",
	"siteMay": "news/4",
	"textJun": "-",
	"bgJun": "-",
	"siteJun": "-",
	"textJul": "-",
	"bgJul": "-",
	"siteJul": "-",
	"textAug": "-",
	"bgAug": "-",
	"siteAug": "-",
	"textSep": "-",
	"bgSep": "-",
	"siteSep": "-",
	"textOct": "-",
	"bgOct": "-",
	"siteOct": "-",
	"textNov": "-",
	"bgNov": "-",
	"siteNov": "-",
	"textDec": "-",
	"bgDec": "-",
	"siteDec": "-"
}];
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const base = "/Tamati";
	function resolveRoadmapLink(raw) {
		const target = raw.trim();
		if (target.startsWith("/")) return `${base}${target}`;
		return /^[a-z][a-z0-9+.-]*:/i.test(target) ? target : `https://${target}`;
	}
	const officeImages = Array.from({ length: 8 }, (_, i) => ({
		src: `/office/scr${i + 1}.png`,
		alt: `Офис ${i + 1}`
	}));
	const monthKeys = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	];
	const monthLabels = [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь"
	];
	const yearData = {
		"2026": roadmap_default.find((item) => item.year === "2026"),
		"2027": roadmap_default.find((item) => item.year === "2027")
	};
	const roadmapRows = Object.entries(yearData).filter(([, data]) => data).map(([year, data]) => {
		return {
			year,
			cells: monthKeys.map((key, i) => {
				const rawText = data[`text${key}`];
				const rawBg = data[`bg${key}`];
				const rawSite = data[`site${key}`];
				const text = rawText && rawText !== "-" ? rawText : "";
				return {
					label: monthLabels[i],
					text,
					bg: text && rawBg ? `/roadmap/${rawBg}` : "",
					site: text && rawSite ? resolveRoadmapLink(rawSite) : ""
				};
			})
		};
	});
	return renderTemplate`<html lang="ru" data-astro-cid-lcdefpme><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Home | Tamati</title>${renderHead($$result)}</head><body data-astro-cid-lcdefpme><div class="bg-canvas" aria-hidden="true" data-astro-cid-lcdefpme><div class="orb" data-astro-cid-lcdefpme></div><div class="orb" data-astro-cid-lcdefpme></div><div class="orb" data-astro-cid-lcdefpme></div></div><div class="page" data-astro-cid-lcdefpme><!-- ─── Header ─── --><header class="header" data-astro-cid-lcdefpme><a${addAttribute(`${base}`, "href")} class="logo" data-astro-cid-lcdefpme><span data-astro-cid-lcdefpme>Tamati</span></a><nav class="nav-buttons" data-astro-cid-lcdefpme><a${addAttribute(`${base}/news`, "href")} class="btn" data-astro-cid-lcdefpme><span class="icon" data-astro-cid-lcdefpme>📰</span> Новости</a><a${addAttribute(`${base}/projects`, "href")} class="btn" data-astro-cid-lcdefpme><span class="icon" data-astro-cid-lcdefpme>🎮</span> Проекты</a><a${addAttribute(`${base}/engine`, "href")} class="btn" data-astro-cid-lcdefpme><span class="icon" data-astro-cid-lcdefpme>⚙️</span> Voltage</a><a href="https://dedzet.github.io/TamatiRecords" class="btn" data-astro-cid-lcdefpme><span class="icon" data-astro-cid-lcdefpme>🎵</span> Tamati Records</a></nav></header><!-- ─── Hero ─── --><section class="hero" data-astro-cid-lcdefpme><span class="pill hero-badge" data-astro-cid-lcdefpme>Студия независимых разработчиков</span><h1 data-astro-cid-lcdefpme>Tamati</h1><p data-astro-cid-lcdefpme>Разрабатываем инновационные игровые проекты</p><div class="hero-actions" data-astro-cid-lcdefpme><a${addAttribute(`${base}/projects`, "href")} class="btn btn-primary" data-astro-cid-lcdefpme>Наши проекты</a><a${addAttribute(`${base}/engine`, "href")} class="btn btn-outline" data-astro-cid-lcdefpme>Узнать больше</a></div><!-- ─── Stats ─── --><div class="stats" data-astro-cid-lcdefpme><div class="stat-item" data-astro-cid-lcdefpme><span class="number" data-astro-cid-lcdefpme>5</span><span class="label" data-astro-cid-lcdefpme>Лет в разработке</span></div><div class="stat-item" data-astro-cid-lcdefpme><span class="number" data-astro-cid-lcdefpme>8</span><span class="label" data-astro-cid-lcdefpme>Выпущенных игр</span></div><div class="stat-item" data-astro-cid-lcdefpme><span class="number" data-astro-cid-lcdefpme>4.8 ★</span><span class="label" data-astro-cid-lcdefpme>Средний рейтинг</span></div><div class="stat-item" data-astro-cid-lcdefpme><span class="number" data-astro-cid-lcdefpme>2 млн</span><span class="label" data-astro-cid-lcdefpme>Игроков по всему миру</span></div></div><!-- ─── Feature teaser ─── --><div class="feature-grid" data-astro-cid-lcdefpme><div class="feature-card" data-astro-cid-lcdefpme><span class="emoji" data-astro-cid-lcdefpme>🧪</span><h3 data-astro-cid-lcdefpme>Собственный движок</h3><p data-astro-cid-lcdefpme>Технологии следующего поколения для уникального геймплея</p></div><div class="feature-card" data-astro-cid-lcdefpme><span class="emoji" data-astro-cid-lcdefpme>🎨</span><h3 data-astro-cid-lcdefpme>Уникальный стиль</h3><p data-astro-cid-lcdefpme>Визуальный язык, который не спутаешь ни с чем</p></div><div class="feature-card" data-astro-cid-lcdefpme><span class="emoji" data-astro-cid-lcdefpme>🎵</span><h3 data-astro-cid-lcdefpme>Tamati Records</h3><p data-astro-cid-lcdefpme>Наша дочерняя компания по дистрибуции музыки</p></div><div class="feature-card" data-astro-cid-lcdefpme><span class="emoji" data-astro-cid-lcdefpme>🌍</span><h3 data-astro-cid-lcdefpme>Сообщество</h3><p data-astro-cid-lcdefpme>Тысячи фанатов, которые вдохновляют нас каждый день</p></div></div></section><!-- ─── Office Section ─── --><section class="office-section" data-astro-cid-lcdefpme><h2 class="section-heading" data-astro-cid-lcdefpme>Наш офис</h2><div class="office-grid" data-astro-cid-lcdefpme>${officeImages.map((img, idx) => renderTemplate`<div class="office-thumb"${addAttribute(`${base}/${img.src}`, "data-full")} data-astro-cid-lcdefpme><img${addAttribute(`${base}/${img.src}`, "src")} loading="lazy"${addAttribute(img.alt, "alt")} data-astro-cid-lcdefpme></div>`)}</div></section><!-- ─── Roadmap Section ─── --><section class="roadmap-section" data-astro-cid-lcdefpme><h2 class="section-heading" data-astro-cid-lcdefpme>Дорожная карта проектов</h2>${roadmapRows.map(({ year, cells }) => renderTemplate`<div class="roadmap-year-block" data-astro-cid-lcdefpme><h3 class="roadmap-year-title" data-astro-cid-lcdefpme>${year}</h3><div class="roadmap-track" data-astro-cid-lcdefpme>${cells.map((cell) => !cell.text ? renderTemplate`<div class="roadmap-card empty" data-astro-cid-lcdefpme><span class="roadmap-card-month" data-astro-cid-lcdefpme>${cell.label}</span></div>` : cell.site ? renderTemplate`<a${addAttribute(cell.site, "href")} class="roadmap-card"${addAttribute(cell.bg ? `background-image:url('${base}/${cell.bg}')` : "", "style")} data-astro-cid-lcdefpme><span class="roadmap-card-overlay" data-astro-cid-lcdefpme></span><span class="roadmap-card-content" data-astro-cid-lcdefpme><span class="roadmap-card-month" data-astro-cid-lcdefpme>${cell.label}</span><span class="roadmap-card-text" data-astro-cid-lcdefpme>${cell.text}</span></span></a>` : renderTemplate`<div class="roadmap-card"${addAttribute(cell.bg ? `background-image:url('${base}/${cell.bg}')` : "", "style")} data-astro-cid-lcdefpme><span class="roadmap-card-overlay" data-astro-cid-lcdefpme></span><span class="roadmap-card-content" data-astro-cid-lcdefpme><span class="roadmap-card-month" data-astro-cid-lcdefpme>${cell.label}</span><span class="roadmap-card-text" data-astro-cid-lcdefpme>${cell.text}</span></span></div>`)}</div></div>`)}</section><!-- ─── Footer ─── --><footer class="footer" data-astro-cid-lcdefpme><span data-astro-cid-lcdefpme>© 2023 Tamati</span><!--
        <div class="footer-links">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Контакты</a>
          <a href="#">Вакансии</a>
        </div>
        --></footer></div><!-- ─── Lightbox ─── --><div class="lightbox-overlay" id="lightboxOverlay" data-astro-cid-lcdefpme><button class="lightbox-close" id="lightboxClose" aria-label="Закрыть" data-astro-cid-lcdefpme>×</button><button class="lightbox-nav lightbox-prev hidden" id="lightboxPrev" aria-label="Предыдущий скриншот" data-astro-cid-lcdefpme>‹</button><button class="lightbox-nav lightbox-next hidden" id="lightboxNext" aria-label="Следующий скриншот" data-astro-cid-lcdefpme>›</button><img id="lightboxImage" src="" alt="Скриншот крупным планом" data-astro-cid-lcdefpme></div><!-- ─── Roadmap horizontal scroll ─── -->${renderScript($$result, "D:/Files/Dev/Web/Tamati/src/pages/index.astro?astro&type=script&index=0&lang.ts")}<!-- ─── Lightbox Script ─── -->${renderScript($$result, "D:/Files/Dev/Web/Tamati/src/pages/index.astro?astro&type=script&index=1&lang.ts")}</body></html>`;
}, "D:/Files/Dev/Web/Tamati/src/pages/index.astro", void 0);
var $$file = "D:/Files/Dev/Web/Tamati/src/pages/index.astro";
var $$url = "/Tamati";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
