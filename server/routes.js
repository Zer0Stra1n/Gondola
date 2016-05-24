var routes = module.exports,
    os = require('os'),
    path = require('path'),
    webroot = path.resolve(__dirname, '../webroot'),
    env = process.env.NODE_ENV || 'local';

routes.index = (req, res) => {
    res.sendFile(webroot + '/index.html');
};

routes.health = (req, res, next) => {
    switch (req.url) {
        case '/health':
            res.set({
                'Content-Type': 'text/plain',
                'Cache-Control': 'no-cache'
            });
            return res.status(200).send('1123uptest2004');
        case '/version':
            res.set({
                'Content-Type': 'text/plain',
                'Cache-Control': 'no-cache'
            });
            return res.status(200).send(process.env.npm_package_version);
        case '/config':
            return res.status(200).json({
                'hostname': os.hostname(),
                'version': process.env.npm_package_version,
                'env': env,
                'debug': ['placeholder'],
                'headers': ('placeholder debug' === true) ? req.headers : 'false'
            });
        default:
            return next();
    }
};