var express = require('express'),
    path = require('path'),
    app = express(),
    routes = require('./routes'),
    webroot = path.resolve(__dirname, '../webroot'),
    node_modules = path.resolve(__dirname, '../node_modules'),
    port = process.env.PORT || 3000;

//Set up basic pass-through
app.use('/webroot', express.static(webroot));
app.use('/node_modules', express.static(node_modules));

//Routes    
app.route('/').get(routes.index);

//Set-up Listener
app.listen(port);