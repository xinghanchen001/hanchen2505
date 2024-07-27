module.exports = function (eleventyConfig) {
  const markdownIt = require('markdown-it');
  const md = new markdownIt({
    html: true,
  });

  const createCollectionsAndFilters = require('./_utils/index.js');

  eleventyConfig.addFilter('markdown', (content) => {
    if (typeof content === 'string') {
      return md.render(content);
    }
    return content;
  });

  eleventyConfig.addPassthroughCopy({ 'theme/assets': 'assets' });
  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy('password.html');

  createCollectionsAndFilters(eleventyConfig);

  return {
    dir: {
      input: 'cms',
      includes: '../theme',
      output: 'public',
    },
  };
};
