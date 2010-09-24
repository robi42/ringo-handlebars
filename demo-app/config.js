exports.urls = [
    ['/', require('actions')],
];

exports.middleware = [
    require('ringo/middleware/gzip').middleware,
    require('ringo/middleware/etag').middleware,
    require('ringo/middleware/static').middleware(module.resolve('public')),
    require('ringo/middleware/responselog').middleware,
    require('ringo/middleware/error').middleware,
    require('ringo/middleware/notfound').middleware,
];

exports.app = require('ringo/webapp').handleRequest;

exports.charset = 'UTF-8';
exports.contentType = 'text/html';
