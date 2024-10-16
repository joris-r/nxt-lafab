
const { parse } = require("csv-parse/sync");

module.exports = async function (eleventyConfig) {
  // Configure Eleventy

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
  eleventyConfig.addFilter("padZero", function(value, n) {
    return value.padStart(n,"0");
  });

};
