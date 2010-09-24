var assert = require('assert');
var {Handlebars} = require('ringo/handlebars');

exports.testHandlebarsModuleImport = function () {
    assert.isNotNull(Handlebars);
    assert.isTrue(typeof Handlebars.compile === 'function');
};

if (require.main == module.id) {
    require('test').run(exports);
}
