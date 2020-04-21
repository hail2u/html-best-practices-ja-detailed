import { escapeCharacters } from "./lib/character-reference.js";
import { promises as fs } from "fs";
import marked from "marked";
import mustache from "mustache";
import { readJSONFile } from "./lib/json-file.js";

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

const main = async ({ dest, src }) => {
	const [template, data] = await Promise.all([
		fs.readFile(src, "utf8"),
		readJSONFile("index.json")
	]);
	const sections = await Promise.all(data.sections.map(extendSection));
	const rendered = mustache.render(template, {
		...data,
		sections: sections
	});
	await fs.writeFile(dest, rendered);
};

mustache.escape = escapeCharacters;
Promise.all(files.map(main)).catch((e) => {
	console.trace(e);
	process.exitCode = 1;
});
