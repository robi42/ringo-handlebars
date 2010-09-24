var {Response} = require('ringo/handlebars/response');

exports.index = function (req) {
    var data = {
        name: 'Alan', hometown: 'Somewhere, TX', kids: [
            {name: 'Jimmy', age: '12'}, {name: 'Sally', age: '4'}
        ]
    };
    return Response.handlebars(module.resolve('templates/index.html'), data);
};
