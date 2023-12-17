// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'app',
    urlArgs: 'ver=' +  (new Date()).getTime(),
    waitSeconds: 0,
    paths: {
        core: 'assets/js/core',
        app: '../app',
        utility:     'utility',
        MochiKit:     'lib/MochiKit/MochiKit',
        print:     'lib/print',
        mustache:     'lib/mustache',
        jquery:     'lib/jquery.min',
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        "@popperjs": 'lib/popper',
        bootstrap: 'lib/bootstrap.min'
    },
    shim: {
        bootstrap: {
            deps: ['@popper','jquery']
        },

        handlebars: {
            exports: 'Handlebars'
        },
        'jquery.pluginA.js': ['jquery'],
        'jquery.pluginB.js': ['jquery']
    }
});

window.buzzer= {
    colors: {
        'blue': '#467fcf',
    }
};

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['./app/app']);

// requirejs.config({
//     baseUrl: '.',
// });