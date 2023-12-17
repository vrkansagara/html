define(['jquery'], function ($) {

    /**
     * Old functionality support!
     *
     * Common function of ajax loader
     * Mostly used in bvb Grid
     */

    var showAjaxLoader = function (element) {
        var spinner = '<div id="spinner"></div>';
        $(element).append(spinner);
        $("#spinner").show();
    };

    var hideAjaxLoader = function (element) {
        $("#spinner").hide();
        $(element).remove("#spinner");
    };

    window.showAjaxLoader = showAjaxLoader;
    window.hideAjaxLoader = hideAjaxLoader;

    return {
        showAjaxLoader: showAjaxLoader,
        hideAjaxLoader: hideAjaxLoader
    };

});