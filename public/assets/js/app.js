define(function (require) {
    var utility = require('./utility');
    utility.loadCss("assets/css/main.css")

    // Load any app-specific modules
    // with a relative require call,
    // like:

    var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');

    var $ = require('vendor/MochiKit/MochiKit');
    require(['modules/MyMath'], function(MyMath){

        console.log("MyMath sume is ",MyMath.add(1, 2));

    });
    print(messages.getHello());

    require(['Models/User', 'Router'], function(User, Router){
        var users = [
            // new User('Barney'),
        ];
        localStorage.users = JSON.stringify(users);

        Router.startRouting();
    });

    var requireConfig = requirejs.s.contexts._.config;
    console.log("theme.js config = ", requireConfig);

    var spinner = require('components/messages/spinner');
    spinner.showAjaxLoader('#container');
});
