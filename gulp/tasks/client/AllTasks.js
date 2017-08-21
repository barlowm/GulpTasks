"use strict";

const $ = require("../../config.js");

$.gulp.task("setWatch", () => ($.args.watch = true));

$.gulp.task("build", ["NoBump", "pages", "fonts", "images", "data", "scripts", "styles", "unbundled_scripts"]);
$.gulp.task("devNL", ["setWatch", "build", "connect", "watch"]);
$.gulp.task("dev", ["lint", "devNL"]);
