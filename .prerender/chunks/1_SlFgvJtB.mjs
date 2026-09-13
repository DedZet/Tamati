import { b as unescapeHTML, d as maybeRenderHead, u as renderTemplate } from "./server_Cu3e08uR.mjs";
import { t as createComponent } from "./global_Ckd2dsnF.mjs";
//#region src/data/news/1.md
var html = () => "<p>Всяям пливееет эта мойна первана статьямана</p>\n<p>Тут я будумана тестироватамана парсермана этавамана сайтамана ДОД?</p>\n<h1 id=\"вот-такая-главенька-глава-естьмана\">Вот такая главенька глава естьмана</h1>\n<p>Штобы так делать нада ставить решоточку как на терьменама</p>\n<h2 id=\"эта-решетка-двамана\">Эта решетка двамана</h2>\n<p>И так тоже можнамана делать тока два штуки сразумана</p>\n<p><strong>Толстееный сисястый</strong> шрифт такой мана звёздачки па бакавинам</p>\n<p><em>Италический карявый</em> щрифт манатама шишползуя прабелеми по боковонамана</p>\n<p>А тут есть\r\nЭта май рандой младший брат и брун\r\n[news1.png]</p>\n";
var frontmatter = {
	"theme": "Первая статья",
	"preview": "news1.png"
};
var file = "D:/Files/Dev/Web/Tamati/src/data/news/1.md";
var url = void 0;
function rawContent() {
	return "   \r\n                      \r\n                    \r\n   \r\n\r\nВсяям пливееет эта мойна первана статьямана\r\n\r\nТут я будумана тестироватамана парсермана этавамана сайтамана ДОД?\r\n\r\n# Вот такая главенька глава естьмана\r\n\r\nШтобы так делать нада ставить решоточку как на терьменама\r\n\r\n## Эта решетка двамана\r\n\r\nИ так тоже можнамана делать тока два штуки сразумана\r\n\r\n**Толстееный сисястый** шрифт такой мана звёздачки па бакавинам\r\n\r\n_Италический карявый_ щрифт манатама шишползуя прабелеми по боковонамана\r\n\r\nА тут есть\r\nЭта май рандой младший брат и брун\r\n[news1.png]\r\n";
}
async function compiledContent() {
	return await html();
}
function getHeadings() {
	return [{
		"depth": 1,
		"slug": "вот-такая-главенька-глава-естьмана",
		"text": "Вот такая главенька глава естьмана"
	}, {
		"depth": 2,
		"slug": "эта-решетка-двамана",
		"text": "Эта решетка двамана"
	}];
}
var Content = createComponent((result, _props, slots) => {
	const { layout, ...content } = frontmatter;
	content.file = file;
	content.url = void 0;
	return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
});
//#endregion
export { Content, Content as default, compiledContent, file, frontmatter, getHeadings, rawContent, url };
