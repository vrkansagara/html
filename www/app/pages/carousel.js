require(['main'], function() {
    require(['modules/Carousel'], function($, Carousel) {
        new Carousel($('.carousel'));
    });
});