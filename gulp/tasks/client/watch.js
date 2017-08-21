"use strict";

const $ = require("../../config.js");


$.gulp.task("watch", function() {
	$.gulp.watch($.config.src + "/*.html",      ["pages"]);
	$.gulp.watch($.config.src + "/styles/**/*", ["styles"]);
	$.gulp.watch($.config.src + "/fonts/*",     ["fonts"]);
	$.gulp.watch($.config.src + "/images/*",    ["images"]);
});
