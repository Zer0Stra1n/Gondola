/**
 * This set-up will bundle everyting into a single file for deployments
 */

var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder('.', 'webroot/system.config.js');
builder.config({
    meta: {
        'rxjs/*': { build: false }
    }
});

// builder.bundle('webroot/boot.js - [webroot/**/*]', 'webroot/angular2.min.js',
//     {
//         normalize: true,
//         minify: true,
//         mangle: true,
//         globalDefs: { DEBUG: false },
//     }
// ).then(deps => {
//     console.log('Angular Build complete');
//     console.log(deps.modules);
// }).then(() => {
//     return 

builder.bundle('webroot/boot.js' /** - webroot/angular2.min.js'*/, 'webroot/boot.min.js',
    {
        normalize: true,
        minify: true,
        mangle: true,
        globalDefs: { DEBUG: false }
    })
    // })
    .then(app => {
        console.log('App Build complete');
        console.log(app.modules);
    }).catch(err => {
        console.log('Build error');
        console.log(err);
    });