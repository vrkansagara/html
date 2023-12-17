({
    catchError: {
        define: true
    },
    appDir: '../public/assets/js',
    baseUrl: '.',

    //If set to true, any files that were combined into a build bundle will be
    //removed from the output folder.
    removeCombined: true,

    allowSourceOverwrites: true,
    keepBuildDir: true,

    //Introduced in 2.1.2 and considered experimental.
    //If the minifier specified in the "optimize" option supports generating
    //source maps for the minified code, then generate them. The source maps
    //generated only translate minified JS to non-minified JS, it does not do
    //anything magical for translating minified JS to transpiled source code.
    //Currently only optimize: "uglify2" is supported when running in node or
    //rhino, and if running in rhino, "closure" with a closure compiler jar
    //build after r1592 (20111114 release).
    //The source files will show up in a browser developer tool that supports
    //source maps as ".js.src" files.
    generateSourceMaps: true,
    preserveLicenseComments: false,  // this is necessary for generateSourceMap to work

    findNestedDependencies: true,

    //Allow "use strict"; be included in the RequireJS files.
    //Default is false because there are not many browsers that can properly
    //process and give errors on code for ES5 strict mode,
    //and there is a lot of legacy code that will not work in strict mode.
    useStrict: true,

    //Wrap any build bundle in a start and end text specified by wrap.
    //Use this to encapsulate the module code so that define/require are
    //not globals. The end text can expose some globals from your file,
    //making it easy to create stand-alone libraries that do not mandate
    //the end user use requirejs.
    wrap: {
        start: "(function() {",
        end: "}());"
    },

    //Sets the logging level. It is a number. If you want "silent" running,
    //set logLevel to 4. From the logger.js file:
    //TRACE: 0,
    //INFO: 1,
    //WARN: 2,
    //ERROR: 3,
    //SILENT: 4
    //Default is 0.
    logLevel: 1,

    // optimize: 'uglify2', // uglify
    optimize: "none",
    // optimize: "none", // disable standard uglifyjs optimisations
    fileExclusionRegExp: /^(config|build|rbuild|rinfo)\.(js|sh|php|md)|node_modules$/,

    optimizeCSS: true,
    mainConfigFile: '../public/assets/js/rconfig.js',
    dir: "../public/dist/assets/js",
    modules: [
        //First set up the common build layer.
        {
            //module names are relative to baseUrl
            "name": "app",
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            "include": [
                "vendor/MochiKit/MochiKit",
                "Controllers/Base",
                "Models/Base"
            ]
        },
        //Now set up a build layer for each main layer, but exclude
        //the common one. "exclude" will exclude nested
        //the nested, built dependencies from "common". Any
        //"exclude" that includes built modules should be
        //listed before the build layer that wants to exclude it.
        //The "page1" and "page2" modules are **not** the targets of
        //the optimization, because shim config is in play, and
        //shimmed dependencies need to maintain their load order.
        //In this example, common.js will hold jquery, so backbone
        //needs to be delayed from loading until common.js finishes.
        //That loading sequence is controlled in page1.html.
    ]
})