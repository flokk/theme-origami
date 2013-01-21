
/**
 * Module dependencies.
 */
var join = require("path").join;

/**
 * Expose the layout
 */
module.exports.layout = join(__dirname, "views", "layout.html.jade");

/**
 * Add asset paths
 */
module.exports.assets = function(pipeline) {
  pipeline.appendPath(join(__dirname, "stylesheets"));
  pipeline.appendPath(join(__dirname, "javascripts"));
  pipeline.appendPath(join(__dirname, "images"));
  pipeline.appendPath(join(__dirname, "views"));
  // Bootstrap
  pipeline.appendPath(join(__dirname, "components", "btknorr-bootstrap", "docs", "assets", "img"));
  pipeline.appendPath(join(__dirname, "components"));
};
