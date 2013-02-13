var domready = require("domready")
  , cls = require("classes");

domready(function () {
  cls(document.body).remove("hidden");
});