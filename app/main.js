define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');

    // var $ = require('jquery');
    var $ = require('MochiKit/MochiKit');

    print(messages.getHello());
});
