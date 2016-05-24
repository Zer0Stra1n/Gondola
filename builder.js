var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder('.', 'webroot/system.config.js');
builder.config({
    // paths: {
    //     '@angular':  'node_modules/@angular/'
    // },    
});

builder.bundle('webroot/boot.js - [webroot/**/*]', 'webroot/dependencies.min.js',
    {
        normalize: true,
        minify: true,
        mangle: true,
        globalDefs: { DEBUG: false }
    }
).then(deps => {
    console.log('Angular Build complete');
    console.log(deps.modules);
}).then(() => {
    return builder.bundle('webroot/boot.js - webroot/dependencies.min.js', 'webroot/boot.min.js',
        {
            normalize: true,
            minify: true,
            mangle: false,
            globalDefs: { DEBUG: false }
        })
}).then(app => {
    console.log('App Build complete');
    console.log(app.modules);
}).catch(err => {
    console.log('Build error');
    console.log(err);
});