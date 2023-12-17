({
    appDir: '../public',
    baseUrl: 'dist/assets/js',
    //If set to true, any files that were combined into a build bundle will be
    //removed from the output folder.
    removeCombined: true,

    generateSourceMaps: true,
    preserveLicenseComments: false,  // this is necessary for generateSourceMap to work

    findNestedDependencies: true,

    useStrict: true,
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