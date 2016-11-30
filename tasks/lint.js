"use strict";
const $ = require("../config.js");

$.gulp.task(
    "lint", 
    "Performs lint check on all Test Modules, Source and Gulp task files, generates a report for each type",
    ["lintSrc", "lintGulp", "lintTests"],
    function() {}   // Used for completeness of the task parameters (but not required)  
);
