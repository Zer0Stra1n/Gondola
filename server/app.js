var path = require('path'),
//3rd-party libraries
    express = require('express'),
    app = express(),
//Custom routes
    routes = require('./routes'),
//Variables 
    webroot = path.resolve(__dirname, '../webroot'),
    node_modules = path.resolve(__dirname, '../node_modules'),
    port = process.env.PORT || 3000,
    env = process.env.NODE_ENV || 'local';

//Set up basic pass-through
app.use('/webroot', express.static(webroot, {
    'maxAge': 604800000
}));
app.use('/node_modules', express.static(node_modules));

//Routes
//using /x indicates a system route thus triggering a health check
app.use('/x/', routes.health);   
app.route('/').get(routes.index);

//Set-up Listener
app.listen(port);