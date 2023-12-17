/**
 This is only used for the ajax call
 @note If you need to change please contact [CORE SUPPORT TEAM]
 @example :
 $('.button').on('click', function() {
   doAjax({url: `your_url`, `data`: `your_data`,'successCallbackFunction',`your success callback function`});
 });
 */

function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
};

function doAjax(params) {
    const defaults = {
        requestType: "GET",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: 'text',
        cache: false,
    };

    const {
        url,
        requestType,
        contentType,
        dataType,
        data,
        beforeSendCallbackFunction,
        successCallbackFunction,
        completeCallbackFunction,
        errorCallBackFunction
    } = {...defaults, ...params};

    // @todo remove ssrf token if url is external
    delete $.ajaxSettings.headers["X-CSRF-TOKEN"];
    // @todo set default json dataType so all internal api can call directlry
    // dataType: 'text/plain',



    $.ajax({
        url,
        crossDomain: true,
        type: requestType,
        contentType,
        dataType,
        data,
        beforeSend: function (jqXHR, settings) {
            console.log("beforeSend",settings);
            if (typeof beforeSendCallbackFunction === "function") {
                beforeSendCallbackFunction();
            }
        },
        success: function (data, textStatus, jqXHR) {
            console.log("success",textStatus);
            if (typeof successCallbackFunction === "function") {
                successCallbackFunction(data);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("error",textStatus);
            if (typeof errorCallBackFunction === "function") {
                errorCallBackFunction(errorThrown);
            }

        },
        complete: function (jqXHR, textStatus) {
            console.log("complete",textStatus);
            if (typeof completeCallbackFunction === "function") {
                completeCallbackFunction();
            }
        }
    });
}