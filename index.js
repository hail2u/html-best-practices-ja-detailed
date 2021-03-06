import { escapeCharacters } from "./lib/character-reference.js";
import fs from "fs/promises";
import marked from "marked";
import mustache from "mustache";
import { readJSONFile } from "./lib/json-file.js";

const readPractice = async (id) => {
	const md = await fs.readFile(`./src/practices/${id}.md`, "utf8");
	const [title, ...body] = md.split("\n");
	const practice = {
		body: body.join("\n").trim(),
		id: id,
		title: title.replace(/^# /, "")
	};
	return {
		...practice,
		renderedBody: marked(practice.body),
		renderedTitle: marked(practice.title)
			.trim()
			.replace(/^<p>(.*?)<\/p>$/, "$1")
	};
};

const extendSection = async (section) => ({
	...section,
	practices: await Promise.all(section.practices.map(readPractice))
});

const build = async (data, { extra = {}, dest, src }) => {
	const template = await fs.readFile(src, "utf8");
	const rendered = mustache.render(template, {
		...data,
		...extra
	});
	await fs.writeFile(dest, rendered);
};

const main = async () => {
	const data = await readJSONFile("./src/index.json");
	const sections = await Promise.all(data.sections.map(extendSection));
	await Promise.all(data.files.map(build.bind(null, {
		...data,
		sections: sections
	})));
};

mustache.escape = escapeCharacters;
main().catch((e) => {
	console.trace(e);
	process.exitCode = 1;
});
