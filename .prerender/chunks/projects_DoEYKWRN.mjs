import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as createAstro, a as renderComponent, d as maybeRenderHead, f as renderHead, p as addAttribute, u as renderTemplate } from "./server_Cu3e08uR.mjs";
import { t as createComponent } from "./global_Ckd2dsnF.mjs";
import { t as renderScript } from "./script_Bb7cPczp.mjs";
import { t as projects_default } from "./projects_DNgORgbH.mjs";
//#region src/components/ProjectCard.astro
createAstro("https://DedZet.github.io");
var $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$ProjectCard;
	const base = "/Tamati";
	const { project } = Astro2.props;
	const statusColors = {
		0: "#6a6a78",
		1: "#e63946",
		2: "#f08f10",
		3: "#25d070",
		4: "#9b5de5",
		5: "#40a0e4"
	};
	const statusLabels = {
		0: "Не начат",
		1: "Отменён",
		2: "В процессе",
		3: "Завершён",
		4: "Обновляется",
		5: "Заморожен"
	};
	const engineColors = {
		0: "#eeeeff",
		1: "#eeffff",
		2: "#50c5ff",
		3: "#50ffc5",
		4: "#ffd550"
	};
	const engineLabels = {
		0: "Unreal Engine",
		1: "Unity",
		2: "Godot",
		3: "GameMaker",
		4: "Voltage"
	};
	const statusColor = statusColors[project.status] || "#6b6b7a";
	const statusLabel = statusLabels[project.status] || "Status";
	const engineColor = engineColors[project.engine] || "#6b6b7a";
	const engineLabel = engineLabels[project.engine] || "Engine";
	return renderTemplate`${maybeRenderHead($$result)}<div class="card" data-astro-cid-y2vllrex><a${addAttribute(`${base}/projects/${project.id}`, "href")} class="card-link" data-astro-cid-y2vllrex><!-- Превью --><div class="preview-wrapper" data-astro-cid-y2vllrex><img${addAttribute(`${base}/${project.preview}`, "src")}${addAttribute(project.title, "alt")} class="preview-image" loading="lazy" data-astro-cid-y2vllrex></div><!-- Контент карточки --><div class="card-content" data-astro-cid-y2vllrex><h3 class="card-title project-title" data-astro-cid-y2vllrex><span data-astro-cid-y2vllrex>${project.title}</span><span class="engine-badge"${addAttribute(`color: ${engineColor};`, "style")} data-astro-cid-y2vllrex>${engineLabel}</span></h3><p class="card-text description" data-astro-cid-y2vllrex>${project.description}</p><div class="status-badge"${addAttribute(`background-color: ${statusColor};`, "style")} data-astro-cid-y2vllrex>${statusLabel}</div></div></a></div>`;
}, "D:/Files/Dev/Web/Tamati/src/components/ProjectCard.astro", void 0);
//#endregion
//#region src/pages/projects.astro
var projects_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Projects,
	file: () => $$file,
	url: () => $$url
});
var $$Projects = createComponent(($$result, $$props, $$slots) => {
	const projects = projects_default.projects.sort((a, b) => b.id - a.id);
	const base = "/Tamati";
	return renderTemplate`<html lang="ru"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Проекты | Tamati</title>${renderHead($$result)}</head><body><!-- ─── Animated background ─── --><div class="bg-canvas" aria-hidden="true"><div class="orb"></div><div class="orb"></div><div class="orb"></div></div><!-- ─── Page ─── --><div class="page"><!-- ─── Header ─── --><header class="header"><a${addAttribute(`${base}`, "href")} class="logo"><span>Tamati</span></a><nav class="nav-buttons"><a${addAttribute(`${base}/news`, "href")} class="btn"><span class="icon">📰</span> Новости</a><a${addAttribute(`${base}/projects`, "href")} class="btn btn-primary"><span class="icon">🎮</span> Проекты</a><a${addAttribute(`${base}/engine`, "href")} class="btn"><span class="icon">⚙️</span> Voltage</a><a href="https://dedzet.github.io/TamatiRecords" class="btn"><span class="icon">🎵</span> Tamati Records</a></nav></header><!-- ─── Hero ─── --><section class="hero"><span class="pill hero-badge">Наши игровые проекты</span><h1>Наши проекты</h1><p>Каждый проект - это история, созданная с любовью и вниманием к деталям</p></section><!-- ─── Sort Controls ─── --><div class="sort-controls"><label for="sortBtn">Сортировка:</label><button id="sortBtn" class="sort-btn">Сначала новые</button></div><!-- ─── Projects Grid ─── --><div class="grid" id="projectsGrid">${projects.map((project) => renderTemplate`<div class="grid-item"${addAttribute(project.id, "data-id")}>${renderComponent($$result, "ProjectCard", $$ProjectCard, { "project": project })}</div>`)}</div><!-- ─── Footer ─── --><footer class="footer"><span>© 2023 Tamati</span><!--
        <div class="footer-links">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Контакты</a>
          <a href="#">Вакансии</a>
        </div>
        --></footer></div>${renderScript($$result, "D:/Files/Dev/Web/Tamati/src/pages/projects.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "D:/Files/Dev/Web/Tamati/src/pages/projects.astro", void 0);
var $$file = "D:/Files/Dev/Web/Tamati/src/pages/projects.astro";
var $$url = "/Tamati/projects";
//#endregion
//#region \0virtual:astro:page:src/pages/projects@_@astro
var page = () => projects_exports;
//#endregion
export { page };
