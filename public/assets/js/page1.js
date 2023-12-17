//Load common code that includes config, then load the app logic for this page.
// define([], function () {
//     requirejs(['app/main1']);
// });

require(["jquery", "text!sample.html", "text!sample.css"],
    function($, html, css) {
        //the html variable will be the text
        //of the some/module.html file
        //the css variable will be the text
        //of the some/module.css file.
    }
);