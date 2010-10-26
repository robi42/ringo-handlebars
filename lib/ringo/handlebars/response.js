/**
 * @fileOverview Provides Handlebars Ringo response helper.
 */

var {Response} = require('ringo/webapp/response');
var {Handlebars} = require('ringo/handlebars');

export('Response');

/**
 * A response object rendered from a Handlebars template.
 * @param {String} templatePath the template path
 * @param {Object} data the template context object
 * @param {Object} helpers optional helper functions
 */
Response.handlebars = function (templatePath, data, helpers) {
    var source = getResource(templatePath).content;
    return new Response(Handlebars.compile(source)(data, helpers));
};
