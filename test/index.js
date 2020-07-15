const loaderUtils = require('loader-utils');
const Parser = require('./src/parser.js');

module.exports = function mdLoader(source) {
  if (this.cacheable) {
    this.cacheable();
  }
  const options = loaderUtils.getOptions(this);
  return new Parser(options).parse(source);
};
