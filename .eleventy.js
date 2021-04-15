module.exports = function (eleventyConfig) {
  // projects
  eleventyConfig.addCollection(
    "projects",
    require("./eleventy/collections/projects.js")
  );
  // projects categories
  eleventyConfig.addCollection(
    "projectsCategories",
    require("./eleventy/collections/projectsCategories.js")
  );

  // filters
  eleventyConfig.addFilter("date", require("./eleventy/filters/date.js"));
  eleventyConfig.addFilter("include", require("./eleventy/filters/include.js"));

  // copy files
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("./src/assets/img");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");

  // deep merge
  eleventyConfig.setDataDeepMerge(true);

  // watch targets
  eleventyConfig.addWatchTarget("./eleventy/collections/*.js");

  // override default config
  return {
    dir: {
      input: "./src/",
      output: "./dist/",
    },
  };
};
