System.register(['angular2/platform/browser', './components/body'], function(exports_1) {
    var browser_1, body_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (body_1_1) {
                body_1 = body_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(body_1.AppComponent);
        }
    }
});
