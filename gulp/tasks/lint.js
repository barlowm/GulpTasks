"use strict";
const $ = require("../config.js");
const lintSrc = require("./lintSrc.js");
const lintGulp = require("./lintGulp.js");
const lintTests = require("./lintTests.js");

const lint = $.gulp.series("lintSrc", "lintGulp", "lintTests");
lint.description = "Performs lint check on all:\n    Test Modules\n    Source and\n    Gulp task files\n    generates a report for each type";

$.gulp.task("lint",lint);
