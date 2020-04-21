import { escapeCharacters } from "./lib/character-reference.js";
import { promises as fs } from "fs";
import marked from "marked";
import mustache from "mustache";
import { readJSONFile } from "./lib/json-file.js";

const readPractice = async (id) => {
	const md = await fs.readFile(`practices/${id}.md`, "utf8");
	const [title, ...body] = md.split("\n");
	const strBody = body.join("\n").trim();
	const strTitle = title.replace(/^# /, "");
	return {
		body: marked(strBody),
		id: id,
		strBody: strBody,
		strTitle: strTitle,
		title: marked(strTitle)
			.trim()
			.replace(/^<p>(.*?)<\/p>$/, "$1")
	};
};

const extendSection = async (section) => ({
	...section,
	practices: await Promise.all(section.practices.map(readPractice)),
	strTitle: section.title
});

const render = async (data, { extra = {}, dest, src }) => {
	const template = await fs.readFile(src, "utf8");
	const rendered = mustache.render(template, {
		...data,
		...extra
	});
	await fs.writeFile(dest, rendered);
};

const main = async () => {
	const data = await readJSONFile("index.json");
	const sections = await Promise.all(data.sections.map(extendSection));
	await Promise.all(data.files.map(render.bind(null, {
		...data,
		sections: sections
	})));
};

mustache.escape = escapeCharacters;
main().catch((e) => {
	console.trace(e);
	process.exitCode = 1;
});
