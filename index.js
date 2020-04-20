import { promises as fs } from "fs";
import marked from "marked";
import mustache from "mustache";

const characters = {
	'"': "&quot;",
	"&": "&amp;",
	"'": "&apos;",
	"<": "&lt;",
	">": "&gt;"
};
const charactersRe = /[<>"']|&(?!#?\w+;)/g;
const files = [
	{
		dest: "README.md",
		src: "readme.mustache"
	},
	{
		dest: "index.html",
		src: "index.mustache"
	}
];

const escape = (c) => characters[c];

const readPractice = async (id) => {
	const md = await fs.readFile(`practices/${id}.md`, "utf8");
	const [title, ...body] = md.split("\n");
	return {
		body: marked(body.join("\n").trim()),
		id: id,
		strBody: body.join("\n").trim(),
		strTitle: title.replace(/^# /, ""),
		title: marked(title)
			.trim()
			.replace(/^<h1 .*?>(.*?)<\/h1>$/, "$1")
	};
};

const extendSection = async (section) => ({
	...section,
	practices: await Promise.all(section.practices.map(readPractice)),
	strTitle: section.title
});

const main = async ({ dest, src }) => {
	const [template, json] = await Promise.all([
		fs.readFile(src, "utf8"),
		fs.readFile("index.json", "utf8")
	]);
	const data = JSON.parse(json);
	const sections = await Promise.all(data.sections.map(extendSection));
	const rendered = mustache.render(template, {
		...data,
		sections: sections
	});
	await fs.writeFile(dest, rendered);
};

mustache.escape = (text) => String(text).replace(charactersRe, escape);
Promise.all(files.map(main)).catch((e) => {
	console.trace(e);
	process.exitCode = 1;
});
