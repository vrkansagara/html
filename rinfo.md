// Reference : - https://requirejs.readthedocs.io/en/1.0.1/


require.defined('mock_service') = it has been specified it has not yet been resolved.
require.specified('mock_service') = once it resolved then return true.


~~~js
if (require.specified('mock_service')) {
    require( [ 'mock_service' ], function (mock) {
         mock.init(real_service);
    });
}
~~~

~~~js
//Load common code that includes config, then load the app logic for this page.
requirejs(['./common'], function (common) {
    requirejs(['app/main1']);
});
~~~



    define – the function is used to define a module. Each module is defined with a unique module ID which will be used by RequireJS runtime functionality. The define function is a global function and you don’t need to use it with the requirejs namespace.
    require – the function is used to load required dependencies. It is a global function and you don’t need to use it with the requirejs namespace.
    config – the function is used to configure the requirejs runtime functionality. 

The data-main Attribute



## To optimize, run:
~~~js
node tools/r.js -o tools/rbuild.js
node tools/r.js -o tools/rbuild.js optimize=none
~~~



## Module
A module is a single JavaScript file, that is a collection of related functions or classes or both. In case of a more complicated code a module may also contain only one class definition or only one function. Module should be a reusable piece of code, that you will want to use in many software projects.

How to ‘create’ a module?
~~~js
    define('great_module', function() {
    
        // My module code goes here...
        function myFunction() {
            return 5;
        }
    
        // 'Export' any things you want other developers (or you) should use.
        return {'myFunction': myFunction};
    });
~~~

## package
A package is a group of modules (usually somewhat related).

# Configuration Options

Following are the configuration options which can be set while loading the first application module −

    baseUrl − It is a route path for all modules which are loaded through RequireJS. The baseUrl is indicated by a string starting with "slash (/)", containing a protocol and ending with ".js" extension. If there is no baseUrl specified, then RequireJS uses the data-main attribute path as baseUrl.

    paths − It specifies the path mappings for modules which are relative to the baseUrl. It automatically adds the .js extension to a path when mapping the module name.

    shim − It provides the usage of non AMD libraries with RequireJS by configuring their dependencies and exporting their global values.

    map − For the given module, an application uses same module of different versions for different objectives by sharing their ids to make use of same code for different conditions.

    config − It provides the configuration to a module by using the config option and this can be done by using the special dependency "module" and calling its module.config() function.

    urlArgs − The query string arguments are used to fetch all resources that are loaded by using RequireJS. It is used for cache busting when there is improper configuration of browser or server.

    waitSeconds − It specifies the number of seconds to wait before throwing up on script loading. The default is "7" seconds and "0" disables the timeout.

    packages − It provides the CommonJS packages for configuring the loading modules.

    context − It provides the name for context loading which allows the loading of different modules in a page.

    deps − It is an array of dependencies that is required when Require is specified as config object before loading the RequireJS.

    callback − It executes a function after loading the dependencies and is required when Require is specified as config object before loading RequireJS.

    xhtml − It is used to create the script elements by using the document.createElementNS() method when this option is set to true.

    scriptType − It defines the value for script type attribute used in the document. Default type is "text/javascript".

    skipDataMain − It skips the data-main attribute scanning while loading the module, if this option is set to true.


### When should I use require() and when to use define()?

ref:- https://stackoverflow.com/questions/9507606/when-should-i-use-require-and-when-to-use-define
https://requirejs.org/docs/api.html#jsfiles

With define you register a module in require.js that you can then depend on in other module definitions or require statements. With require you "just" load/use a module or javascript file that can be loaded by require.js. For examples have a look at the documentation
My rule of thumb:

    Define: If you want to declare a module other parts of your application will depend on.

    Require: If you just want to load and use stuff.
