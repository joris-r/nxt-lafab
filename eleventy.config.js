import { parse } from 'csv-parse/sync';
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export const config = {
	// Directory configuration
	dir: {
		input: "content",          // default: "."
		includes: "../_includes",  // default: "_includes" (`input` relative)
		data: "../_data",          // default: "_data" (`input` relative)
		output: "_site"
	},

	// Pre-process *.md files with nunjucks (default: `liquid`)
	markdownTemplateEngine: "njk",

	// Pre-process *.html files with nunjucks (default: `liquid`)
	htmlTemplateEngine: "njk",

};

export default async function (eleventyConfig) {

	// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig
		.addPassthroughCopy({
			"./public/": "/"
		});
		
	// Add .csv file data type 
	eleventyConfig.addDataExtension("csv", (contents) => {
		const records = parse(contents, {
			columns: false,
			skip_empty_lines: true,
			trim: true
		});

		return records;
	});

	//
	eleventyConfig.addFilter("padZero", function (value, n) {
		return value.padStart(n, "0");
	});
	
	// Configure 11ty Image plugin
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// output image widths
		widths: [200, 400, 800, 1600]
	});

};



