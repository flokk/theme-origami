/**
 * Module dependencies.
 */

var join = require("path").join;

/**
 * Expose the layout
 */

module.exports.layout = join(__dirname, "layout.jade");

/**
 * Favicon
 */

module.exports.favicon = join(__dirname, "assets", "images", "favicon.png");
