import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function(eleventyConfig) {
  // Configure Eleventy
	eleventyConfig.addPlugin(eleventyImageTransformPlugin);

};
