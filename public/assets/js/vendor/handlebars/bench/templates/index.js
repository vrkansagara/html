define(function (require, exports, module) {var __filename = module.uri, __dirname = __filename.substring(0, __filename.lastIndexOf('/');
var fs = require('fs');

var templates = fs.readdirSync(__dirname);
templates.forEach(function(template) {
  if (template === 'index.js' || !/(.*)\.js$/.test(template)) {
    return;
  }
  module.exports[RegExp.$1] = require('./' + RegExp.$1);
});

});