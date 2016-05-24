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
).then(function(output) {
  console.log('Angular Build complete');
  console.log(output.modules);
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});

builder.bundle('webroot/boot.js - webroot/dependencies.min.js', 'webroot/boot.min.js', 
    {
        normalize: true,
        minify: true,
        mangle: false,
        globalDefs: { DEBUG: false }
    })
.then(function(output) {
  console.log('App Build complete');
  console.log(output.modules);
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});