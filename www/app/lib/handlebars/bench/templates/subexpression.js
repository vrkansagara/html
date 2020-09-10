define(function (require, exports, module) {
module.exports = {
  helpers: {
    echo: function(value) {
      return 'foo ' + value;
    },
    header: function() {
      return 'Colors';
    }
  },
  handlebars: '{{echo (header)}}',
  eco: '<%= @echo(@header()) %>'
};

module.exports.context = module.exports.helpers;

});