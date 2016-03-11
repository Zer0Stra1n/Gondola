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
    //              'webroot/components/gondola.js',
    //              'webroot/components/gondola.html']
    // }
});