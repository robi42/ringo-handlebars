var {Response} = require('ringo/handlebars/response');
var fs = require('fs');

exports.index = function (req) {
    var data = {
        title: 'Ringo on Handlebars', name: 'Alan', hometown: 'Somewhere, TX',
        kids: [
            {name: 'Jimmy', age: '12'}, {name: 'Sally', age: '4'}
        ]
    };
    var helpers = {
        partials: {body: fs.read(module.resolve('templates/index.html'))}
    };
    return Response.handlebars(
            module.resolve('templates/page.html'), data, helpers);
};
