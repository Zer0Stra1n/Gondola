var routes = module.exports,
    path = require('path'),
    webroot = path.resolve(__dirname, '../webroot');

routes.index = (req, res) => {
    res.sendFile(webroot + '/index.html');
};