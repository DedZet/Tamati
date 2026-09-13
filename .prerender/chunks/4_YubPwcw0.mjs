import { b as unescapeHTML, d as maybeRenderHead, u as renderTemplate } from "./server_Cu3e08uR.mjs";
import { t as createComponent } from "./global_Ckd2dsnF.mjs";
//#region src/data/news/4.md
var html = () => "<p>Ничего нового, брат.</p>\n<p>Всё по-старому.</p>\n<p>Всё потихоньку.</p>\n";
var frontmatter = {
	"theme": "Что нового в Voltage",
	"preview": "news4.png"
};
var file = "D:/Files/Dev/Web/Tamati/src/data/news/4.md";
var url = void 0;
function rawContent() {
	return "   \r\n                             \r\n                    \r\n   \r\n\r\nНичего нового, брат.\r\n\r\nВсё по-старому.\r\n\r\nВсё потихоньку.\r\n";
}
async function compiledContent() {
	return await html();
}
function getHeadings() {
	return [];
}
var Content = createComponent((result, _props, slots) => {
	const { layout, ...content } = frontmatter;
	content.file = file;
	content.url = void 0;
	return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
});
//#endregion
export { Content, Content as default, compiledContent, file, frontmatter, getHeadings, rawContent, url };
