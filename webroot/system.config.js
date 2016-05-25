
(function (global) {

    // map tells the System loader where to look for things
    var map = {
        '@angular': 'webroot/angular2.min.js',
        'text': 'node_modules/systemjs-plugin-text/text.js',
        'dependencies': 'webroot/dependencies.min.js',
        'boot': 'webroot/boot.min.js'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'rxjs': { defaultExtension: false },
        'webroot': { format: 'register', defaultJSExtensions: true, meta: { '*.html': { loader: 'text' }, '*.css': { loader: 'text' } } }
    };

    var bundles = {
        'boot': ['webroot/boot.js',
            'webroot/components/gondola.js',
            'webroot/components/archive_view/archive_view.js',
            'webroot/components/archive_view/add_card/add_card.js',
            'webroot/components/archive_view/add_card/add_card.css',
            'webroot/components/archive_view/add_card/add_card.html',
            'webroot/components/archive_view/archive_view.html',
            'webroot/components/footer/footer.js',
            'webroot/components/footer/footer.css',
            'webroot/components/footer/footer.html',
            'webroot/components/header/header.js',
            'webroot/components/header/header.css',
            'webroot/components/header/header.html',
            'webroot/components/gondola.html']
    }

    var config = {
        map: map,
        packages: packages
        , bundles: bundles
    }

    System.config(config);
})(this);
