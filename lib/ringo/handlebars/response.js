/**
 * @fileOverview Provides Handlebars Ringo response helper.
 */

var {Response} = require('ringo/webapp/response');
var {Handlebars} = require('ringo/handlebars');
var fs = require('fs');

export('Response');

/**
 * A response object rendered from a Handlebars template.
 * @param {String} templatePath the template path
 * @param {Object} data the template context object
 */
Response.handlebars = function (templatePath, data) {
    var source = fs.read(templatePath);
    return new Response(Handlebars.compile(source)(data));
};