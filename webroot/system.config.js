
(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'rxjs':                       'node_modules/rxjs',
        '@angular':                   'node_modules/@angular',
        'text':                       'node_modules/systemjs-plugin-text/text.js'
        // ,'boot': 'webroot/boot.min.js'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'rxjs':    { defaultExtension: 'js' },
        'webroot': { format: 'register', defaultExtension: 'js', meta: {'*.html': { loader: 'text'}, '*.css': { loader: 'text'}}}
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        '@angular/upgrade'
    ];

    // var bundles = {
    //     'boot': ['webroot/boot.js',
    //         'webroot/components/gondola.js',
    //         'webroot/components/archive_view/archive_view.js',
    //         'webroot/components/archive_view/add_card/add_card.js',
    //         'webroot/components/archive_view/add_card/add_card.css',
    //         'webroot/components/archive_view/add_card/add_card.html',
    //         'webroot/components/archive_view/archive_view.html',
    //         'webroot/components/footer/footer.js',
    //         'webroot/components/footer/footer.css',
    //         'webroot/components/footer/footer.html',
    //         'webroot/components/header/header.js',
    //         'webroot/components/header/header.css',
    //         'webroot/components/header/header.html',
    //         'webroot/components/gondola.html']
    // }

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
        // ,bundles: bundles
    }

    System.config(config);
})(this);
