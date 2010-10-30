var {Response} = require('ringo/handlebars/response');
var {Handlebars} = require('ringo/handlebars');

exports.index = function (req) {
    var data = {
        name: 'Alan', hometown: 'Somewhere, TX',
        kids: [
            {name: 'Jimmy', age: '12'}, {name: 'Sally', age: '4'}
        ],
        msgs: {
            page: {title: 'Ringo on Handlebars'}
        }
    };
    var helpers = {
        i18n: function (msg) msg,
        partials: {
            body: Handlebars.compile(getResource(
                    module.resolve('templates/index.html')).content)
        }
    };
    return Response.handlebars(
            module.resolve('templates/page.html'), data, helpers);
};
