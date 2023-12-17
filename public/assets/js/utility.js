define([], function () {
    function loadCss(url) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    function info(){
        Object.keys(window).filter(x => typeof(window[x]) !== 'function' &&
            Object.entries(
                Object.getOwnPropertyDescriptor(window, x)).filter(e =>
                ['value', 'writable', 'enumerable', 'configurable'].includes(e[0]) && e[1]
            ).length === 4)
    }

    return {
        loadCss: loadCss,
        info: info
    }
});


