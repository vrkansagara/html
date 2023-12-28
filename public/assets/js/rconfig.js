// For any third party dependencies, like jQuery, place them in the lib folder.
// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
// var inDevelopment = false, version = 1;
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '../assets/js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    // urlArgs: 'version=' + (new Date()).getTime(),
    // urlArgs: 'pversion=2',
    // urlArgs: 'version=' + (inDevelopment ? new Date().getTime() : version),
    // urlArgs: 'bust=' + new Date().getTime();
    waitSeconds: 0,
    paths: {
        // Folder must follow prefix = @
        text: 'vendor/text',
        jquery: 'vendor/jquery.min',
        utility: 'utility',
        // the left side is the module ID, the right side is the path to the jQuery file, relative to baseUrl. Also,
        // the path should NOT include the '.js' file extension. This example is using jQuery 1.9.0 located at js/lib/jquery-1.9.0.js,
        // relative to the HTML page.
        "@popperjs": 'lib/popper',
        bootstrap: 'lib/bootstrap.min',

        '@MochiKit': 'vendor/MochiKit/',
        MochiKit: 'vendor/MochiKit/MochiKit',
    },
    shim: {
        bootstrap: {
            deps: ['@popper', 'jquery']
        },
        handlebars: {
            exports: 'Handlebars'
        },
        'jquery.pluginA.js': ['jquery'],
        'jquery.pluginB.js': ['jquery'],
        'MochiKit': {
            deps: [
                "vendor/MochiKit/Base",
                "@MochiKit/Iter",
                "@MochiKit/Selector",
                "@MochiKit/Logging",
                "@MochiKit/DateTime",
                "@MochiKit/Format",
                "@MochiKit/Async",
                "@MochiKit/DOM",
                "@MochiKit/Style",
                "@MochiKit/LoggingPane",
                "@MochiKit/Color",
                "@MochiKit/Signal",
                "@MochiKit/Position",
                "@MochiKit/Visual",
                "@MochiKit/DragAndDrop",
                "@MochiKit/Sortable"
            ],
            exports: 'MochiKit'
        },
        '@MochiKit/Iter': {
            deps: [
                "@MochiKit/Base"
            ],
            exports: 'MochiKit'
        },
        '@MochiKit/Selector': {
            deps: [
                "@MochiKit/Base",
                "@MochiKit/DOM",
                "@MochiKit/Iter",
            ],
            exports: 'MochiKit'
        },
        '@MochiKit/Logging': {
            deps: [
                "@MochiKit/Base",
            ],
            exports: 'MochiKit'
        },
        '@MochiKit/DateTime': {
            deps: [
                "@MochiKit/Base",
            ],
            exports: 'MochiKit'
        },
        '@MochiKit/Format': {
            deps: [
                "@MochiKit/Base",
            ],
            exports: 'MochiKit'
        },
        '@MochiKit/Async': {
            deps: [
                "@MochiKit/Base",
            ],
            exports: 'MochiKit'
        },
        '@MochiKit/DOM': {
            deps: [
                "@MochiKit/Base",
            ],
            exports: 'MochiKit'
        },
        '@MochiKit/Style': {
            deps: [
                "@MochiKit/Base",
                "@MochiKit/DOM",
            ],
            exports: 'MochiKit'
        },
        '@MochiKit/LoggingPane': {
            deps: [
                "@MochiKit/Base",
                "@MochiKit/Logging",
            ],
            exports: 'MochiKit'
        },
        '@MochiKit/Color': {
            deps: [
                "@MochiKit/Base",
                "@MochiKit/DOM",
                "@MochiKit/Style",
            ],
            exports: 'MochiKit'
        },
        '@MochiKit/Signal': {
            deps: [
                "@MochiKit/Base",
                "@MochiKit/DOM",
                "@MochiKit/Style",
            ],
            exports: 'MochiKit'
        },
        '@MochiKit/Position': {
            deps: [
                "@MochiKit/Base",
                "@MochiKit/DOM",
                "@MochiKit/Style",
            ],
            exports: 'MochiKit'
        },
        '@MochiKit/Visual': {
            deps: [
                "@MochiKit/Base",
                "@MochiKit/DOM",
                "@MochiKit/Style",
                "@MochiKit/Color",
                "@MochiKit/Position",
            ],
            exports: 'MochiKit'
        },
        '@MochiKit/DragAndDrop': {
            deps: [
                "@MochiKit/Base",
                "@MochiKit/Iter",
                "@MochiKit/DOM",
                "@MochiKit/Signal",
                "@MochiKit/Visual",
                "@MochiKit/Position",
            ],
            exports: 'MochiKit'
        },
        '@MochiKit/Sortable': {
            deps: [
                "@MochiKit/Base",
                "@MochiKit/Iter",
                "@MochiKit/DOM",
                "@MochiKit/Position",
                "@MochiKit/DragAndDrop",
            ],
            exports: 'MochiKit'
        },
    }
});

window.buzzer = {
    colors: {
        'blue': '#467fcf',
    }
};

// // Start loading the main app file. Put all of
// // your application logic in there.
// requirejs(['app']);

// requirejs.config({
//     baseUrl: '.',
// });