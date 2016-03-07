var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder('.', 'system-config.js');
builder.config({
    // paths: {
    //     'angular2':  'node_modules/angular2'
    // },
    meta: {
       'angular2/*' : {build: false}
    }      
});


builder.bundle('webroot/boot.js - [angular2]', 'webroot/boot.min.js', 
    {
        normalize: true,
        minify: false,
        mangle: false,
        globalDefs: { DEBUG: false }
    })
.then(function(output) {
  console.log('Build complete');
  console.log(output.modules);
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});