require([
    'jquery',
    'components/messages/spinner',
], function (
    $,
    ConfirmDialogBuilder,
) {
    'use strict';

    showAjaxLoader('#test');

    setTimeout(() => {
        $('#test').html("debug/index.js");
    }, "3000");

    setTimeout(() => {
        hideAjaxLoader('#test');
    }, "5000");


});