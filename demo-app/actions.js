var {Response} = require('ringo/handlebars/response');
var {Handlebars} = require('ringo/handlebars');

exports.index = function (req) {
    var data = {
        title: 'Ringo on Handlebars', name: 'Alan', hometown: 'Somewhere, TX',
        kids: [
            {name: 'Jimmy', age: '12'}, {name: 'Sally', age: '4'}
        ]
    };
    var helpers = {
        partials: {
            body: Handlebars.compile(getResource(
                    module.resolve('templates/index.html')).content)
        }
    };
    return Response.handlebars(
            module.resolve('templates/page.html'), data, helpers);
};
