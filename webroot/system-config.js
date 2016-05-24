System.config({
    map: {
        'text': 'node_modules/systemjs-plugin-text/text.js'
        // 'boot': 'webroot/boot.min.js'
    },
    packages: {
        'webroot': {
            format: 'register',
            defaultExtension: 'js',
            meta: {
                '*.html': {
                    loader: 'text'
                },
                '*.css': {
                    loader: 'text'
                }
            }
        }
    }
    // bundles: {
    //     'boot': ['webroot/boot.js',
    //         'webroot/components/gondola.js',
    //         'webroot/components/header/header.js',
    //         'webroot/components/archive_view/archive_view.js',
    //         'webroot/components/footer/footer.js',
    //         'webroot/components/gondola.html',
    //         'webroot/components/archive_view/add_card/add_card.js',
    //         'webroot/components/header/header.css',
    //         'webroot/components/header/header.html',
    //         'webroot/components/archive_view/archive_view.html',
    //         'webroot/components/footer/footer.html',
    //         'webroot/components/footer/footer.css',
    //         'webroot/components/archive_view/add_card/add_card.css',
    //         'webroot/components/archive_view/add_card/add_card.html']
    // }
});